import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  baseUrl = 'http://localhost:8080/api/';

  post(url: string, body: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}${url}`,body);
  }

  get(url: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}${url}`);
  }

    postElementWithParams(url: string, data: any,params:any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}${url}`, data,params);
   }

      getElementParams(url:string,params:any): Observable<any>{

    return this.httpClient.get(`${this.baseUrl}${url}`,params);
  }

    putElement(url: string, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}${url}`, data);
   }

   
  deleteElement(url: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}${url}`);
  }

}
