import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import urlAPi from "../../helpers/api_url";
import {Clients} from "../interfaces/clients";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Clients[]> {
    return this.http.get<Clients[]>(urlAPi+'clients')
  }
}
