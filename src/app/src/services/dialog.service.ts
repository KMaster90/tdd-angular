import { Injectable } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/overlay";
import {IHome} from "../components/homes/homes.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog:MatDialog) { }

  open(component:ComponentType<any>, info:MatDialogConfig<IHome>){
    const dialogRef = this.dialog.open(component, info);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
