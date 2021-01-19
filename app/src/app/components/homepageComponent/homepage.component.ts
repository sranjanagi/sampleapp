/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-homepage',
    templateUrl: './homepage.template.html'
})

export class homepageComponent extends NBaseComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
console.log(2+'2');
console.log(2-2);
    }
}
