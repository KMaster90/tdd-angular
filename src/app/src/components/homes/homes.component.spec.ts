import {async, ComponentFixture, TestBed, TestBedStatic, TestModuleMetadata, waitForAsync} from '@angular/core/testing';

import { HomesComponent } from './homes.component';
import { DataService } from '../../services/data.service';
import * as homesJson from '../../../../assets/homes.json';

import {HttpClientTestingModule} from "@angular/common/http/testing";
import {spyOnClass} from "jasmine-es6-spies/dist";
import {DialogService} from "../../services/dialog.service";
import {El, querySelector, Selector} from "../../../../test";
import {HttpClientModule} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {lastValueFrom, of} from "rxjs";

const isUnitTest = false;

const moduleDefMock: TestModuleMetadata = {
  imports: [HttpClientTestingModule],
  providers: [
    { provide: DataService, useFactory: () => spyOnClass(DataService) },
    { provide: DialogService, useFactory: () => spyOnClass(DialogService) },
  ]};
const moduleDefReal: TestModuleMetadata = {
  imports: [HttpClientModule,MatDialogModule],
  providers: [
    {provide: MAT_DIALOG_DATA, useValue:  Array.from(homesJson)[0]},
    DataService,
    { provide: DialogService, useFactory: () => spyOnClass(DialogService) },
  ]};

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;

  let dataService: jasmine.SpyObj<DataService>;
  let dialogService: jasmine.SpyObj<DialogService>;
  const el = (selectorName:string) => querySelector(selectorName,fixture.nativeElement);

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [HomesComponent],
      ...(isUnitTest?moduleDefMock:moduleDefReal)
    })
      .compileComponents();
  });

  beforeEach(() => {
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    isUnitTest && dataService.getHomes$.and.returnValue(of(Array.from(homesJson)));

  });
  beforeEach(() => {
    dialogService = TestBed.inject(DialogService) as jasmine.SpyObj<DialogService>;
  });
  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  }));
  beforeEach(() => fixture.detectChanges())

  it('should be created', () => expect(fixture).toBeTruthy());
  it('render exist', ()=> expect(fixture.nativeElement.querySelector('[data-test="home"]')).toBeTruthy());

  it('should show homes', ()=>expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3));

  it('should show home info', () => {
        const home = el('home')!;
        const homeEl:El = (selectorName:string) => querySelector(selectorName,home)
        expect(homeEl('image')).toBeTruthy();
        expect(homeEl('title')?.innerText).toEqual('Home 1');
        expect(homeEl('location')?.innerText).toEqual('new york');
      });
  it('should show Book button', () => {
        const home = el('home')!;
        const homeEl:El = (selectorName:string) => querySelector(selectorName,home)

        expect(homeEl('book-btn')).toBeTruthy();
      });
  it('should use dialog service to open a dialog when clicking on Book button', () => {
    // grab the button to click
        const bookBtn = el('home button') as HTMLButtonElement;
    // click the button
        bookBtn.click();
    // assert that the dialog service was used to open a dialog
        expect(dialogService.open).toHaveBeenCalled();
      });
});
