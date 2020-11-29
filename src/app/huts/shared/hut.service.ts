import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IHut} from './hut.model';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable()
export class HutService {

  constructor(private http: HttpClient) { }

  loadHutList(mountainId: string): Observable<IHut[]> {
    return this.http.get<IHut[]>(`${apiUrl}/${mountainId}/huts`);
  }

  getHutById(hutId: string): Observable<IHut> {
    return this.http.get<IHut>(`${apiUrl}/huts/${hutId}`);
  }
}
