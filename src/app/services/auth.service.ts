import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import urlAPi from "../../helpers/api_url";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
