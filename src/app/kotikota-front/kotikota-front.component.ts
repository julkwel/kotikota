import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-kotikota-front',
    templateUrl: './kotikota-front.component.html',
    styleUrls: ['./kotikota-front.component.css']
})
export class KotikotaFrontComponent implements OnInit {

    constructor() {
    }

    texte: any = [
        {
            title: 'Hanangana ekipa',
            desc: 'Hanangana ekipa hanao kotikota',
            icon: 'fa fa-group fa-3x light-blue-text',
            color: 'info',
            button: 'Hanangana'
        },
        {
            title: 'Mila vonjy',
            desc: 'Mila vonjy fa tena tapaka',
            icon: 'fa fa-money fa-3x yellow-text',
            color: 'warning',
            button: 'Hanangana'
        },
        {
            title: 'Misy marary',
            desc: 'Mila vonjy fa misy marary / fahoriana',
            icon: 'fa fa-heart-o fa-3x red-text',
            color: 'danger',
            button: 'Hanome'
        }
    ];

    ngOnInit() {}

}
