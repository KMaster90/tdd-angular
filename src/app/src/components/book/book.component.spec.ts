import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookComponent} from './book.component';
import * as homesJson from "../../../../assets/homes.json";

import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IHome} from "../homes/homes.component";
import {El, querySelector, Selector} from "../../../../test";

const MockProviders = [{provide: MAT_DIALOG_DATA, useValue: Array.from(homesJson)[0]}];

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let dialogData: IHome;
  const el:El = (selectorName:string) => querySelector(selectorName,fixture.nativeElement);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent],
      providers:[...MockProviders]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    dialogData = TestBed.inject(MAT_DIALOG_DATA); // fakeData injected in Dialog Component
    fixture.detectChanges();
  });
// BDD
  it('should create', () => expect(component).toBeTruthy());

// TODO -  should show title (Book Home 1)
  it('should show title', () => expect(el('title')).toBeTruthy());
  it('should show correct title', () => expect(el('title')?.textContent).toContain('Book Home 1'));
// TODO -  should show price ($ 100 per night)
  it('should show price', () => expect(el('price')).toBeTruthy());
  it('should show price', () => expect(el('price')?.textContent).toContain('$ 100 per night'));
// TODO -  should show check in date field (Check in)
  it('should show check in date field', () => expect(el('check_in_date')).toBeTruthy());
// TODO -  should show check out date field (Check out)
  it('should show check out date field', () => expect(el('check_out_date')).toBeTruthy());
// TODO -  should show total (Total $ 300)
  it('should show total', () => expect(el('total')).toBeTruthy());
// TODO -  should book home after clicking the Book button (Book Now)
  it('should book home after clicking the Book button', () => expect(el('book_button')).toBeTruthy());

  // TDD - Unit
  it('ts ', () => expect(component.num()).toEqual(1));


});
