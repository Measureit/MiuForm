import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
// import * as PouchDB from 'pouchdb';
import PouchDB from 'pouchdb';
// import PouchDB from 'node_modules/pouchdb';
import { from, Observable, of } from 'rxjs';
import { concatMap,  map, mergeMap } from 'rxjs/operators';
import { Checkpoint } from '../models';
@Injectable({
  providedIn: 'root',
})
export class CheckpointsService  {
  private readonly db: PouchDB.Database<Checkpoint>;
  constructor(
    http: HttpClient
  ) {
    this.db = new PouchDB('checkpoints');
  }

  reloadCheckpointsFromConfiguration() : Observable<boolean> { 
    return of(true);
    // return from(this.db.info())
    //   .pipe(
    //     concatMap(
    //       (result) => {
    //       if (result.doc_count === 0) {
    //           return this.http
    //           .get<Array<Checkpoint>>(
    //             './assets/checkpoints/checkpoints.zlotow.json'
    //           )
    //           .pipe(
    //             mergeMap(docs => this.db.bulkDocs(docs)), 
    //             //map(res => from(res)), 
    //             map(x => true)
    //           );
    //       }
    //       else
    //       {
    //         return of(true);
    //       }
    //     }));
  }

  browseCheckpoints(): Observable<Array<Checkpoint>> {
    return new Observable<Array<Checkpoint>>((obs) => {
      const docs = this.db
        .allDocs<Checkpoint>({ include_docs: true })
        .then((docs) => {
          obs.next(docs.rows.map((x) => x.doc));
          obs.complete();
        })
        .catch((err) => {
          obs.error(err);
        });
    });
  }

  achieved(id: string): Observable<boolean> {
    const checkpoint = from(this.db.get<Checkpoint>(id))
    .pipe(
      mergeMap(checkpoint => {
        checkpoint.achieved = true;
        checkpoint.achievedDate = new Date(Date.now());
        return this.db.put(checkpoint);
      }),
      map(i => true)
    );
    return checkpoint;
    
    
  }

  // remove(item: Checkpoint) {
  //   return this.db.remove(item.id);
  // }

  update(item: Checkpoint) {
    return this.db.put(item);
  }
}
