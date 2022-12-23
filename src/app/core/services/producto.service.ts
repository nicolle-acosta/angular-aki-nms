import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Respuesta } from '../models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private http:HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Respuesta>(`${environment.api_url}/atencioncliente/v1/productos/listarproductos/bodega/4`)
    .pipe(
      map(/* 
        mensaje=>mensaje['mensaje'], */
        productos => productos['productos']),
      catchError(this.handleError)
    )
  }

  private handleError(err:any){
    let errorMessage: string;
    errorMessage= `${err.error}`;
    return throwError(errorMessage);
  }




}
