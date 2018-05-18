import { Component } from '@angular/core';

@Component({
  selector: 'single-line-blur',
  templateUrl: 'single-line-blur.component.html'
})
export class SingleLineBlurComponent {
  changeOnBlur(value) {
    alert(`Change on Blur: ${value}`);
  }
}
