import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {MasterUrlService} from "./master-url.service";

@Injectable()
export class CodigoService {

  url:string;
  modelo:string = 'Codigo';

  constructor(private _http:Http,
              private _masterURL:MasterUrlService) {
    this.url = this._masterURL.getUrl();
  }

  get(){
    return this._http.get(this.url+this.modelo)
  }

  getCodigo(parametro){
    return this._http.get(this.url+this.modelo+'?codigo='+parametro)
  }

  getOne(id){
    return this._http.get(this.url+this.modelo+id);
  }

  create(parametros){
    console.log('llega a crear con estos parametros'+parametros)
    return this._http.post(this.url+this.modelo,parametros);
  }

  update(parametros,id){

    return this._http.put(this.url+this.modelo+'/'+id,parametros);
  }

  delete(id){
    return this._http.delete(this.url+this.modelo+'/'+id);
  }

}
