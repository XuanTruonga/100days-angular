import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';

type ZButtonType =
  | 'green'
  | 'green_outline'
  | 'cancel'
  | 'cancel_outline'
  | 'dark_blue'
  | 'dark_blue_outline'
  | 'blue'
  | 'blue_light'
  | 'blue_light_outline'
  | 'danger';

type ZButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

@Component({
  selector: 'app-z-button',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzToolTipModule, NzIconModule],
  templateUrl: './app-z-button.component.html',
  styleUrls: ['./app-z-button.component.scss'],
})
export class ZButtonComponent {
  @Input() label = '';
  @Input() tooltip = '';
  @Input() className = '';
  @Input() icon?: string;
  @Input() iconPosition: 'start' | 'end' = 'start';
  @Input() htmlType: 'button' | 'submit' | 'reset' = 'button';
  @Input() loading = false;
  @Input() disabled = false;
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';

  @Input() type: ZButtonType = 'blue_light';
  @Input() size: ZButtonSize = 'sm';

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  private readonly typeMap: Record<ZButtonType, string> = {
    green: 'btn-green',
    green_outline: 'btn-green-outline',
    cancel: 'btn-cancel',
    cancel_outline: 'btn-cancel-outline',
    dark_blue: 'btn-dark-blue',
    dark_blue_outline: 'btn-dark-blue-outline',
    blue: 'btn-blue',
    blue_light: 'btn-blue-light',
    blue_light_outline: 'btn-blue-light-outline',
    danger: 'btn-danger',
  };

  private readonly sizeMap: Record<ZButtonSize, string> = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl',
    '2xl': 'btn-2xl',
  };

  get buttonClass(): string {
    return [
      'custom-button',
      this.typeMap[this.type],
      this.sizeMap[this.size],
      this.className,
    ]
      .filter(Boolean)
      .join(' ');
  }

  onClick(event: MouseEvent): void {
    this.buttonClick.emit(event);
  }
}
