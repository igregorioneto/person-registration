import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class ListPersonService {
    private url = environment.url;
  
    constructor(private readonly http: HttpClient) { }
  
    getAllProfessions(): Observable<any[]> {
      return this.http.get<any[]>(`${this.url}/persons`);
    }
  }