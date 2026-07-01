import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { ZButtonComponent } from '../../z-button/app-z-button.component';

@Component({
  selector: 'app-modal-layout',
  standalone: true,
  imports: [CommonModule, ZButtonComponent],
  templateUrl: './app-modal-layout.component.html',
  styleUrls: ['./app-modal-layout.component.scss'],
})
export class AppModalLayoutComponent {
  @Input() title = '';
  @Input() okText = 'Lưu';
  @Input() cancelText = 'Hủy';
  @Input() loading = false;
  @Input() disabled = false;
  @Input() footerTemplate?: TemplateRef<unknown>;

  @Output() cancel = new EventEmitter<void>();
  @Output() ok = new EventEmitter<void>();
}
