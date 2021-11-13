import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'th[resizable]',
  templateUrl: './resizable.component.html',
  styleUrls: ['./resizable.component.scss']
})
export class ResizableComponent{

  constructor() { }

  @HostBinding('style.width.px')
  width: number | null = null;

  onResize(width: any) {
    this.width = width;
  }

}
