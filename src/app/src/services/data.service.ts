import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Home} from "../components/homes/homes.component";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  getHomes$() {
    return this.httpClient.get<Home[]>('assets/homes.json');
  }
}
