import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import urlAPi from "../../helpers/api_url"

import {Paiements} from "../interfaces/paiements";

@Injectable({
  providedIn: 'root'
})
export class PaiementsService {

  constructor(private http: HttpClient) { }

  getAllPaiements(): Observable<Paiements[]> {
    return this.http.get<Paiements[]>(urlAPi+'paiements')
  }

  getAllPaiementsByClient(idclient: string): Observable<Paiements[]> {
    return this.http.get<Paiements[]>(urlAPi+'paiements/'+idclient)
  }

  savePaiements(data:Paiements): Observable<Paiements>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(data);
    return this.http.post<Paiements>(urlAPi+'paiements',body,{headers})
  }

  supPaiements(idclient: string): Observable<any> {
    return this.http.delete(urlAPi+'paiements/'+idclient)
  }

  updatePaiements(idclient: string,data:Paiements): Observable<Paiements> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(data);
    return this.http.put<Paiements>(urlAPi+'paiements/'+idclient,body,{headers})
  }
}
