import {Injectable} from '@angular/core';
import {injectArgs} from "@angular/core/src/di/injector";

@Injectable({
    providedIn:"root"
})

export class localStorageService {

    constructor(){ }

    public setLocalStorage(cle,valeur){
        localStorage.setItem(cle,JSON.stringify(valeur));
    }

    public getLocalStorage(valeur){
        return JSON.parse(localStorage.getItem(valeur));
    }

    public delLocalStorage(cle){
        localStorage.removeItem(cle)
    }
}