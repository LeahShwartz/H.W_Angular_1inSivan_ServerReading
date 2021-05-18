import { Component, OnInit } from '@angular/core';
import { WorkerService, Worker } from '../services/worker.service';

@Component({
  selector: 'app-show-workers',
  templateUrl: './show-workers.component.html',
  styleUrls: ['./show-workers.component.css']
})
export class ShowWorkersComponent implements OnInit {

  workers: Worker[] = [];

  constructor(private serviceWorkers: WorkerService) {
    this.serviceWorkers.getWorkers()
    .subscribe((workers) => this.workers = workers);

  }
  ngOnInit(): void {
  }

}
