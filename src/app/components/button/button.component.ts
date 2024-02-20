import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent {
  @Input() label = 'Default!!';
  @Input() class = '';
  @Input() kind: 'primary' | 'secondary' = 'primary';
}
