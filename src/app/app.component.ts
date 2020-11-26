import { Component } from '@angular/core';

interface Dot {
    active: boolean
    trail: boolean
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    dots: Dot[] = [
        { active: false, trail: false },
        { active: false, trail: false },
        { active: false, trail: false },
        { active: false, trail: false }
    ]

    dot_selection_handler(index) {
        for(let dot of this.dots) {
            if(dot.trail){
                dot.trail = false;
            }
            if(dot.active){
                dot.active = false;
                dot.trail = true;
            }
        }
        this.dots[index].trail = false;
        this.dots[index].active = true;
    }
}
