import PouchDB from 'pouchdb';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { DbModel } from '../models';
import { ConsoleLoggerService, Logger } from './console.logger.service';


export class Repository<T extends DbModel> {

  private readonly dbName: string;
  private readonly db: PouchDB.Database<T>;
  private readonly logger: Logger;

  constructor(
    logger: Logger,
    dbName: string
  ) {
    this.dbName = dbName;
    this.logger = logger;
    this.db = new PouchDB(dbName);
  }

  getById(id: string): Observable<T> {
    this.logger.debug(`getById with ${id} on ${this.dbName}`);
    return from(this.db.get(id));
  }

  get(withNoActive?: boolean): Observable<T[]> {
    this.logger.debug(`get with ${withNoActive} on ${this.dbName}`);
    return new Observable<Array<T>>((obs) => {
      const docs = this.db
        .find({
          selector: withNoActive === true ? {} : { isActive: true },
        })
        .then((docs) => {
          obs.next(docs.docs.map((x) => x));
          obs.complete();
        })
        .catch((err) => {
          obs.error(err);
        });
    });
  }

  changeActive(id: string, isActive: boolean = false): Observable<string | undefined> {
    this.logger.debug(`changeActive with ${id}, ${isActive} on ${this.dbName}`);
    const checkpoint = from(this.db.get<T>(id))
      .pipe(
        mergeMap(checkpoint => {
          checkpoint.isActive = isActive;
          return this.db.put(checkpoint);
        }),
        map(x => x.ok ? x.rev : undefined)
      );
    return checkpoint;
  }

  update(item: T) : Observable<string | undefined> {
    this.logger.debug(`update with ${item._id} on ${this.dbName}`);
    return from(this.db.put(item))
      .pipe(map(x => x.ok ? x.rev : undefined))
  }
}
