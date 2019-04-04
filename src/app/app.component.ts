import { Component } from '@angular/core';
import { ResizableModule } from 'angular-resizable-element';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public style: object = {};
   width=300 ;
  height=150;
    validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
 

    console.log(event.rectangle.height)

    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`,
    };
    this.width= event.rectangle.width;
    this.height= event.rectangle.height;
    console.log(this.height)
  }
  

}
