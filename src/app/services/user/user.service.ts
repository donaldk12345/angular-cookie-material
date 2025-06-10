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
    return this.api.putElement('user/'+id,data);
  }

  updateUserPassword(id:number, data:any):Observable<any> {
    return this.api.putElement('user/password/update/'+id,data);
  }

    updateMePassword(data:any):Observable<any> {
    return this.api.post('user/password/update',data);
  }

  getUsersFilter(params:any): Observable<any>{

    return this.api.getElementParams('user/list',params);
  }

    getUsers(): Observable<any>{

    return this.api.get('user/list');
  }

      getUserById(id:number): Observable<any>{

    return this.api.get('user/' +id);
  }

       getUserPermissions(id:number): Observable<any>{

    return this.api.get('user/permissions/' +id);
  }

  

}
