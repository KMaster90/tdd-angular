import {inject, TestBed, waitForAsync} from '@angular/core/testing';
import { DataService } from './data.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";
import * as homesJson from "../../../assets/homes.json";

describe('DataServiceService', () => {
  let service: DataService;
  let httpClient: HttpClient;
  let spy = jasmine.createSpy('spy');
let real:any
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);

    // Spy on and mock HttpClient
    httpClient = TestBed.inject(HttpClient);

    spyOn(httpClient, 'get').and.returnValue(of(Array.from(homesJson)));
    // // Use our service to get homes
    service.getHomes$().subscribe(spy);
  });

  it('should be created', () => expect(service).toBeTruthy());
  it('Verify that the service returned mocked data', () => expect(spy).toHaveBeenCalledWith(Array.from(homesJson)));
  it('Verify that the service called the proper HTTP endpoint', () => expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json'));
  // imports: [HttpClientModule], per verificare chiamate reali
  // it('Real', waitForAsync(() => service.getHomes$().subscribe(res=>expect(res).toEqual(Array.from(homesJson)))));

});
