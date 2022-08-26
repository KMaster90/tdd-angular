import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IHome} from "../homes/homes.component";
import {DataService} from "../../services/data.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  checkIn = '';
  checkOut = '';

  num() {
    return 1;
  }

  constructor(
    public dialogRef: MatDialogRef<BookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IHome,
    private dataService: DataService,
    private matSnackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    // console.log('this.data',this.data);
  }

  calculateTotal(checkIn: string, checkOut: string) {
    // console.log({checkIn, checkOut});
    // Find the difference between the dates which will give the number of nights
    const daysDiff = (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 3600 * 24);
    // Multiply the number of nights by the price per night to get the total price
    // console.log(daysDiff);
    return daysDiff * +this.data.price;
  }

  bookHome$() {
    this.dataService.bookHome$(this.checkIn, this.checkOut, this.calculateTotal(this.checkIn, this.checkOut)).subscribe(x => {
      console.log('Book', x);
      this.dialogRef.close();
      this.matSnackBar.open('Home booked successfully', '', {duration: 2000});
    });
  }
}
