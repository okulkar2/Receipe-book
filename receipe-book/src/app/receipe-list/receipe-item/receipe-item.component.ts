import { Component, Input } from '@angular/core'
import { Receipe } from '../receipe.model'

@Component({
    selector: 'app-receipe-item',
    templateUrl: './receipe-item.component.html'
})

export class ReceipeItemComponent {
    @Input()element: Receipe;
    @Input()id: number;

    constructor() {}

}
