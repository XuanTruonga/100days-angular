import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { getControlErrorMessage } from '../../utils/getErrorMessage';

@Component({
  selector: 'app-z-text-area',
  standalone: true,
  templateUrl: './z-text-area.component.html',
  styleUrls: ['./z-text-area.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzInputModule],
})
export class ZTextAreaComponent {
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() placeholder: string = '';
  @Input() autoFocus: boolean = false;
  @Input() className: string = '';
  @Input() rows: number = 4;
  @Input({ required: true }) control!: FormControl<string>;

  @ViewChild('textAreaRef') textAreaRef!: ElementRef<HTMLTextAreaElement>;

  constructor() {
    afterNextRender(() => {
      if (this.autoFocus) {
        this.textAreaRef?.nativeElement.focus();
      }
    });
  }

  get errorMessage(): string {
    return getControlErrorMessage(this.control, this.label);
  }
}
