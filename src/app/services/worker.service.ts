import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Worker {
  name: string,
  id:number,
  role:string,
  salary:number
}


@Injectable({
  providedIn: 'root'
})


export class WorkerService {
  getWorkers() {
  
    return this.httpService.get<Worker[]>('/assets/workers.json');
  }

  constructor( private httpService: HttpClient) { 
    
  }  

}

