import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Role {
  name: string,
  id:number
}


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpService: HttpClient) { }

  getRoles() {

    return this.httpService.get<Role[]>('/assets/role.json');
  }
}
