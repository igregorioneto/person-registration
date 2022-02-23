import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class ViewPersonService {
    private url = environment.url;
  
    constructor(private readonly http: HttpClient) { }
  
    getAllProfessions(id: any): Observable<any> {
      return this.http.get<any>(`${this.url}/persons/${id}`);
    }
  }