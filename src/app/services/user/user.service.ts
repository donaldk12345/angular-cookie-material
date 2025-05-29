import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api:ApiService) { }


  
  addUser(data: any): Observable<any> {
    return this.api.post('user/add',data);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.api.post(`user/edit/${id}`,data);
  }

}
