import {HostListener,Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ScreenService{
    private resizeSource = new Subject<null>();
    resize$ = this.resizeSource.asObservable();

    largeBreakingpoint = 800;
    screenWidth = 1000;
    screenHeight = 800;

    constructor() {
        try
        {
            this.screenHeight = window.innerHeight;
            this.screenWidth = window.innerWidth;
            window.addEventListener('resize',(event) => this.onResize(event));
        }
        catch(e)
        {

        }
    }

    isLarge():boolean{
        return this.screenWidth >= this.largeBreakingpoint;
    }

    onResize($event) : void{
        this.screenHeight=window.innerHeight;
        this.screenWidth=window.innerWidth;
        this.resizeSource.next();
    }
}