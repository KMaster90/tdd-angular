import {Injectable, Optional} from '@angular/core';
import {of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Home} from "../components/homes/homes.component";
import * as homes from "../../../assets/homes.json";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Optional() private httpClient: HttpClient) {
  }

  getHomes$() {
    return this.httpClient.get<Home[]>('/assets/homes.json');
    // return of([
    //   {
    //     "title": "Home 1",
    //     "image": "assets/listing.jpg",
    //     "location": "new york"
    //   },
    //   {
    //     "title": "Home 2",
    //     "image": "assets/listing.jpg",
    //     "location": "boston"
    //   },
    //   {
    //     "title": "Home 3",
    //     "image": "assets/listing.jpg",
    //     "location": "chicago"
    //   }
    // ]);
  }
}
