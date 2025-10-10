import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subscription',
  template: `
    <div>
      <h2>Test Component</h2>
      <p>Test ID: {{ testId }}</p>
      <p>User: {{ user }}</p>
      <P>Permission: {{ permission }}</P>
    </div>
  `,
})
export default class TestComponent {
  @Input() testId!: string;
  @Input() user!: string;
  @Input() permission!: string;
}
