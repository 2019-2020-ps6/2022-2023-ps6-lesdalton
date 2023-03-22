import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-horizontal-gauge',
  templateUrl: './horizontal-gauge.component.html',
  styleUrls: ['./horizontal-gauge.component.scss']
})
export class HorizontalGaugeComponent {
  constructor(private elementRef: ElementRef) {}
  value = 0;
  updateValue() {
    if (this.value < 0) {
      this.value = 0;
    } else if (this.value > 100) {
      this.value = 100;
    }
  }

  changeFontSize() {
    const textElements: NodeListOf<HTMLElement> = this.elementRef.nativeElement.querySelectorAll('.text');
    textElements.forEach((element: HTMLElement) => {
      element.style.fontSize = this.value + 'px';
    });
  }



}
