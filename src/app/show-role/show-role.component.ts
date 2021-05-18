import { Component, OnInit } from '@angular/core';
import { RoleService, Role } from '../services/role.service';
import { WorkerService, Worker } from '../services/worker.service';


@Component({
  selector: 'app-show-role',
  templateUrl: './show-role.component.html',
  styleUrls: ['./show-role.component.css']
})
export class ShowRoleComponent implements OnInit {
  roles:Role[]=[];
  salaryAvg:Array<[string,number]>=[];
  workers: Worker[] = [];
  constructor(private serviceRoles: RoleService,private serviceWorkers: WorkerService) { 
    this.serviceRoles.getRoles()
  .subscribe((roles) => {this.roles = roles; this.serviceWorkers.getWorkers()
    .subscribe((workers) => {this.workers = workers;  this.doSalaryAvg(roles)});
    });

  


  }

 doSalaryAvg=((data:any)=>{
   let avg=0;
   let count=0;
   let AllSalary=0;
   data.forEach((r:Role) => {

     let workersInRole=this.workers.filter( w=>  w.role==r.name);
      workersInRole.forEach(s => 
        {
           AllSalary+= s.salary;
           count++;
        });
        avg=AllSalary/count;

        this.salaryAvg.push([r.name,avg]);
        avg=0;
        AllSalary=0;
        count=0;

   });
});
  
  ngOnInit(): void {
  }

}
