import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {BookComponent} from './book.component';

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IHome} from "../homes/homes.component";
import {El, querySelector} from "../../../../test";
import {FormsModule} from "@angular/forms";
import {DataService} from "../../services/data.service";
import {spyOnClass} from "jasmine-es6-spies/dist";
import {of} from "rxjs";
import * as homesJson from '../../../../assets/homes.json';
import {MatSnackBar} from "@angular/material/snack-bar";

const MockProviders = [
  {provide: MAT_DIALOG_DATA, useValue: Array.from(homesJson)[0]},
  {provide: DataService, useFactory: ()=>spyOnClass(DataService)},
  {provide: MatDialogRef, useFactory: ()=>spyOnClass(MatDialogRef)},
  {provide: MatSnackBar, useFactory: ()=>spyOnClass(MatSnackBar)},
];

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData: IHome;
  let dataService: jasmine.SpyObj<DataService>;
  let matDialogRef: jasmine.SpyObj<MatDialogRef<BookComponent>>;
  let notificationService: jasmine.SpyObj<MatSnackBar>;
  const el: El = (selectorName: string) => querySelector(selectorName, fixture.nativeElement);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [FormsModule],
      providers: [...MockProviders]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    dialogData = TestBed.inject(MAT_DIALOG_DATA); // fakeData injected in Dialog Component
    fixture.detectChanges();
  });
// BDD
  it('should create', () => expect(component).toBeTruthy());

// should show title (Book Home 1)
  it('should show title', () => expect(el('title')).toBeTruthy());
  it('should show correct title', () => expect(el('title')?.textContent).toContain('Book Home 1'));
// should show price ($ 100 per night)
  it('should show price', () => expect(el('price')).toBeTruthy());
  it('should show correct price', () => expect(el('price')?.textContent).toContain('$100 per night'));
// should show check in date field (Check in)
  it('should show check in date field', () => expect(el('check_in_date')).toBeTruthy());
// should show check out date field (Check out)
  it('should show check out date field', () => expect(el('check_out_date')).toBeTruthy());
// should show total (Total $ 300)
  it('should show total', () => expect(el('total')).toBeTruthy());
  it('should show correct total', () => {
    // user filled all fields
    userInsertedAllFields();
    // assert that the total shows 3*100 = 300
    expect(el('total')?.textContent).toContain('Total $300');
  });
// should book home after clicking the Book button (Book Now)
  it('should book home after clicking the Book button', () => {
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    dataService.bookHome$.and.returnValue(of(null));
    // user filled all fields
    userInsertedAllFields();
    // click the Book button
    el('book_btn button')?.click();
    // assert that the data service was used to book the home
    expect(dataService.bookHome$).toHaveBeenCalled()
  });

// TODO -  should close the dialog and show notification after clicking the Book button (Book Now)
  it('should close the dialog and show notification after clicking the Book button', waitForAsync(() => {
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    matDialogRef = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<BookComponent>>;
    notificationService = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    dataService.bookHome$.and.returnValue(of(null));
    // user filled all fields
    userInsertedAllFields();
    // click the Book button
    el('book_btn button')?.click();
    // assert that the dialog will close and show notification
    expect(matDialogRef.close).toHaveBeenCalled();
    expect(notificationService.open).toHaveBeenCalled();
  }));

  // Unit
  it('ts ', () => expect(component.num()).toEqual(1));

  const userInsertedAllFields = () => {
    // users enters check in date: 12/20/19
    const checkIn = el('check_in_date input') as HTMLInputElement;
    checkIn.value = '12/20/19';
    checkIn.dispatchEvent(new Event('input'));
    // users enters check out date: 12/23/19
    const checkOut = el('check_out_date input') as HTMLInputElement;
    checkOut.value = '12/23/19';
    checkOut.dispatchEvent(new Event('input'));

    fixture.detectChanges()
  };

});
