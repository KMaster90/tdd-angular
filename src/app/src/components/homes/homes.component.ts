import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {DataService} from "../../services/data.service";
import {DialogService} from "../../services/dialog.service";
import {BookComponent} from "../book/book.component";

export interface IHome {
  title: string;
  image: string;
  location: string;
  price: string;
}
export class Home implements IHome {
  title= '';
  image= '';
  location= '';
  price= '';
}

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  homes$: Observable<IHome[]>|undefined

  constructor(
    private dataService:DataService,
    private dialogService:DialogService,
  ) {
  }

  ngOnInit(): void {
    this.homes$ = this.dataService.getHomes$();
  }

  openDialog({title, image, location, price}:IHome){
    this.dialogService.open(BookComponent, {
      width:'px',
      data: {
        title,
        image,
        location,
        price
      }
    });
  }

}
