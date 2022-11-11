import PouchDB from 'pouchdb';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { DbModel } from '../models';


export class Repository<T extends DbModel> {

  private readonly db: PouchDB.Database<T>;

  constructor(
    dbName: string
  ) {
    this.db = new PouchDB(dbName);
  }

  get(withNoActive?: boolean): Observable<T[]> {
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

  changeActive(id: string, isActive: boolean = false): Observable<boolean> {
    const checkpoint = from(this.db.get<T>(id))
      .pipe(
        mergeMap(checkpoint => {
          checkpoint.isActive = isActive;
          return this.db.put(checkpoint);
        }),
        map(i => true)
      );
    return checkpoint;
  }

  update(item: T) : Observable<boolean> {
    return from(this.db.put(item))
      .pipe(map(x => x.ok))
  }
}
