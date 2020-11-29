import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {IMountain} from './mountain.model';

const apiUrl = environment.apiUrl;

@Injectable()
export class MountainService {
  constructor(private http: HttpClient) { }

  loadMountainsList(): Observable<IMountain[]> {
    return this.http.get<IMountain[]>(`${apiUrl}/mountains`);
  }
}
