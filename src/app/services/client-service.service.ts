import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientModel } from '../model/Client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }

  AddClient(data: ClientModel) : Observable<any>{
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/AddClient', data, {
      headers: headers,
    });
  }


}
