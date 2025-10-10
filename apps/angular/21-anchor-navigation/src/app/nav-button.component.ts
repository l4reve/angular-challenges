/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav-button',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="routerLink">
      <ng-content></ng-content>
    </a>
  `,
})
export class NavButtonComponent {
  @Input() routerLink?: string;
}
