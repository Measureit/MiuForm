import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ModelLoaderService  {

  constructor(
    protected http: HttpClient
  ) {
  }

  public getModelFromJson<T>(jsonPath: string): Observable<T> {
    var result = this.http.get<T>(jsonPath);
    result.subscribe(x => {
      console.log(x);
    } );
    return result;
  }
}