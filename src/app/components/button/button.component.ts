import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonText!: string
  @Output() addClick = new EventEmitter()

  onAddClick() {
    this.addClick.emit()
  }
}
