import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiUrlService } from './api-url.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient,private api:ApiUrlService) {}

  //baseUrl = 'http://localhost:8080/api/';

  post(url: string, body: any): Observable<any> {
    return this.httpClient.post(`${this.api.API_URI}${url}`,body);
  }

  get(url: string): Observable<any> {
    return this.httpClient.get(`${this.api.API_URI}${url}`);
  }

    postElementWithParams(url: string, data: any,params:any): Observable<any> {
    return this.httpClient.post(`${this.api.API_URI}${url}`, data,params);
   }

      getElementParams(url:string,params:any): Observable<any>{

    return this.httpClient.get(`${this.api.API_URI}${url}`,params);
  }

    putElement(url: string, data: any): Observable<any> {
    return this.httpClient.put(`${this.api.API_URI}${url}`, data);
   }

   
  deleteElement(url: string): Observable<any> {
    return this.httpClient.delete(`${this.api.API_URI}${url}`);
  }

}
