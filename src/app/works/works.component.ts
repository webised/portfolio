import { Component, OnInit } from '@angular/core';
import { WorksService } from '../services/works.service';
import { Work } from '../models/work.model';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.sass']
})
export class WorksComponent implements OnInit {

  works: any;
  datas: any;
  age_filtered_items: Array<any>;
  name_filtered_items: Array<any>;
  workSubscription: Subscription;

  constructor( private worksService: WorksService) { }

  ngOnInit() {
    this.worksService.getWorks().subscribe(data => {
      this.works = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Work;
      });
    });

  }

}
