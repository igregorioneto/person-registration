import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class CreatePersonService {
    private url = environment.url;
  
    constructor(private readonly http: HttpClient) { }
  
    createProfession(person: any): Observable<any> {
      return this.http.post<any>(`${this.url}/persons`, person);
    }
  }