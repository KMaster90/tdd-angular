import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Home} from "../components/homes/homes.component";
import {of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  getHomes$() {
    return this.httpClient.get<Home[]>('assets/homes.json');
  }

  bookHome$(checkIn:string,checkOut:string,total:string){
    console.log('called')
    return this.httpClient.post<any>('https://run.mocky.io/v3/910846ae-634e-4e95-9743-3df906a4b518',{checkIn,checkOut,total});
  }
}
