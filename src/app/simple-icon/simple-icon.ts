import { Component, input } from '@angular/core';

@Component({
  selector: 'app-simple-icon',
  imports: [],
  templateUrl: './simple-icon.html',
  styles: ``,
})
export class SimpleIcon {
  icon = input.required<string>();
}
