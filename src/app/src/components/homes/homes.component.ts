import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {DataService} from "../../services/data.service";

export interface IHome {
  title: string;
  image: string;
  location: string;
}
export class Home {
  title= '';
  image= '';
  location= '';
}

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  homes$: Observable<IHome[]>|undefined

  constructor(public dataService:DataService) {
  }

  ngOnInit(): void {
    this.homes$ = this.dataService.getHomes$();


  }

}
