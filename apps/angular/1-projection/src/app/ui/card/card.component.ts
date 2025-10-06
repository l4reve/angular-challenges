import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  input,
  output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div
      class="flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4"
      [class]="customClass()">
      <ng-content select="[card-image]"></ng-content>

      <section>
        @for (item of list(); track item.id) {
          <ng-container
            [ngTemplateOutlet]="itemTemplate"
            [ngTemplateOutletContext]="{ $implicit: item }"></ng-container>
        }
      </section>
      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="addClick.emit()">
        Add
      </button>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class CardComponent {
  @ContentChild('itemTemplate') itemTemplate!: TemplateRef<any>;
  readonly list = input<any[]>([]);
  readonly customClass = input('');
  readonly addClick = output<void>();
}
