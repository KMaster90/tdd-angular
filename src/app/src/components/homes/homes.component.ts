import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {DataService} from "../../services/data.service";

export interface Home {
  title: string;
  image: string;
  location: string;
}

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  homes$: Observable<Home[]>

  constructor(private dataService:DataService) {
    this.homes$ = this.dataService.getHomes$();
  }

  ngOnInit(): void {


  }

}
