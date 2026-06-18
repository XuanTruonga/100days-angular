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

type ZInputType = 'text' | 'password' | 'email' | 'number';
@Component({
  selector: 'app-z-input',
  standalone: true,
  templateUrl: './z-input.component.html',
  styleUrls: ['./z-input.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzInputModule],
})
export class ZInputComponent {
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() placeholder: string = '';
  @Input() type: ZInputType = 'text';
  @Input() autoFocus: boolean = false;
  @Input() className: string = '';
  @Input({ required: true }) control!: FormControl<string>;
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

  constructor() {
    afterNextRender(() => {
      if (this.autoFocus) {
        this.inputRef?.nativeElement.focus();
      }
    });
  }

  get errorMessage(): string {
    return getControlErrorMessage(this.control, this.label);
  }
}
