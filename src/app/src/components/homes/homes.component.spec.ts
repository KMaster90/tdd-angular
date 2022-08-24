import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesComponent } from './homes.component';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';
import { spyOnClass } from 'jasmine-es6-spies';
import * as homes from '../../../../assets/homes.json';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService: DataService;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [HomesComponent],
      providers: [DataService]
    })
      .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;


  });

  beforeEach(async () => {

    dataService = fixture.debugElement.injector.get(DataService);

    dataService.getHomes$()

    fixture.detectChanges();

  });

  it('should show homes', () => {
fixture.whenStable()
  .then(() => expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3));

  });

  it('should show home info', () => {
    fixture.whenStable()
      .then(() => {
        const home = fixture.nativeElement.querySelector('[data-test="home"]');

        expect(home.querySelector('[data-test="image"]')).toBeTruthy();
        expect(home.querySelector('[data-test="title"]').innerText).toEqual('Home 1');
        expect(home.querySelector('[data-test="location"]').innerText).toEqual('new york');
      });
  });
});
