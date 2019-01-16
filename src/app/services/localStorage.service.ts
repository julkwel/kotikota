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

    getLocalstorage(cle) {
        return JSON.parse(localStorage.getItem(cle));
    }

    public delLocalStorage(cle){
        localStorage.removeItem(cle)
    }
}