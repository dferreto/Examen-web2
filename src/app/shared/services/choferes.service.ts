import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Chofer } from '../models/chofer';

@Injectable({
  providedIn: 'root'
})
export class ChoferesService {
  

  constructor(private http: HttpClient) {}

  getAll(): Observable<Chofer[]> {
    return this.http
      .get<Chofer[]>('http://localhost:3000/chofer')
      .pipe(catchError(this.handlerError));
  }

  getById(cedula: string): Observable<Chofer[]> {
    return this.http
      .get<Chofer[]>('http://localhost:3000/chofer/' + cedula)
      .pipe(catchError(this.handlerError));
  }

  guardar(chofer: Chofer): Observable<Chofer> {
    return this.http
      .post<Chofer>('http://localhost:3000/chofer', chofer)
      .pipe(catchError(this.handlerError));
  }

  handlerError(error: HttpErrorResponse) {
    let mensaje = 'Error desconocido, reporte al adminstrador.';

    if (error?.error) {
      mensaje = error?.error?.mensaje;
    }

    return throwError(() => new Error(mensaje));
  }
}
