import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesComponent } from './homes.component';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';
import * as homesJson from '../../../../assets/homes.json';

import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {spyOnClass} from "jasmine-es6-spies/dist";

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;

  let dataService: jasmine.SpyObj<DataService>;
  let httpClient: HttpClient;
  let spy = jasmine.createSpy('spy');

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [HomesComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: DataService, useFactory: () => spyOnClass(DataService) }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    dataService.getHomes$.and.returnValue(of(Array.from(homesJson)));
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => expect(fixture).toBeTruthy());
  it('render exist', ()=>expect(fixture.nativeElement.querySelector('[data-test="home"]')).toBeTruthy());

  it('should show homes', ()  => expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3));

  it('should show home info', () => {
        const home = fixture.nativeElement.querySelector('[data-test="home"]');

        expect(home.querySelector('[data-test="image"]')).toBeTruthy();
        expect(home.querySelector('[data-test="title"]').innerText).toEqual('Home 1');
        expect(home.querySelector('[data-test="location"]').innerText).toEqual('new york');
      });
});
