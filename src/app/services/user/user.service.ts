import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

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

    getUsers(pageIndex: number, pageSize: number): Observable<any>{
        const params = new HttpParams()
      .set('page', pageIndex.toString())
      .set('size', pageSize.toString());

    return this.api.getElementParams('user/list', { params });
  }

      getUserById(id:number): Observable<any>{

    return this.api.get('user/' +id);
  }

       getUserPermissions(id:number): Observable<any>{

    return this.api.get('user/permissions/' +id);
  }

  

}
