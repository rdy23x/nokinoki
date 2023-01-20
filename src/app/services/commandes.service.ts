import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import urlAPi from "../../helpers/api_url";
import {Commandes, FilterCommandes} from "../interfaces/commandes";

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  constructor(private http: HttpClient) { }

  getAllCommandes(): Observable<Commandes[]> {
    return this.http.get<Commandes[]>(urlAPi+'commandes')
  }

  getAllCommandesByClient(idclient: string): Observable<Commandes[]> {
    return this.http.get<Commandes[]>(urlAPi+'commandes/'+idclient)
  }

  getAllCommandesByClientBy(filter:FilterCommandes): Observable<Commandes[]> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(filter);
    return this.http.post<Commandes[]>(urlAPi+'commandes',body,{headers})
  }

  saveCommandes(data:Commandes): Observable<Commandes>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(data);
    return this.http.post<Commandes>(urlAPi+'commandes',body,{headers})
  }

  supCommandes(idclient: string): Observable<any> {
    return this.http.delete(urlAPi+'commandes/'+idclient)
  }

  updateCommandes(idclient: string,data:Commandes): Observable<Commandes> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(data);
    return this.http.put<Commandes>(urlAPi+'commandes/'+idclient,body,{headers})
  }
}
