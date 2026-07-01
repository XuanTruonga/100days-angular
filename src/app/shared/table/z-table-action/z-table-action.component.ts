import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

export type TableActionType =
  | 'edit'
  | 'view'
  | 'send'
  | 'delete'
  | 'add';

interface TableActionConfig {
  icon: string;
  title: string;
  colorClass: string;
}

const TABLE_ACTION_CONFIG: Record<TableActionType, TableActionConfig> = {
  edit: {
    icon: 'edit',
    title: 'Chỉnh sửa',
    colorClass: 'action-edit',
  },
  view: {
    icon: 'eye',
    title: 'Chi tiết',
    colorClass: 'action-view',
  },
  add: {
    icon: 'plus-circle',
    title: 'Thêm mới',
    colorClass: 'action-add',
  },
  send: {
    icon: 'send',
    title: 'Gửi',
    colorClass: 'action-send',
  },
  delete: {
    icon: 'delete',
    title: 'Xóa',
    colorClass: 'action-delete',
  },
};

@Component({
  selector: 'app-z-table-action',
  standalone: true,
  imports: [CommonModule, NzIconModule, NzToolTipModule],
  templateUrl: './z-table-action.component.html',
  styleUrls: ['./z-table-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZTableActionComponent {
  @Input({ required: true }) type!: TableActionType;

  @Input() tooltip?: string;

  @Input() className = '';

  @Input() disabled = false;

  @Output() actionClick = new EventEmitter<MouseEvent>();

  get action(): TableActionConfig {
    return TABLE_ACTION_CONFIG[this.type];
  }

  get tooltipTitle(): string {
    return this.tooltip ?? this.action.title;
  }

  onClick(event: MouseEvent): void {
    event.stopPropagation();

    if (this.disabled) {
      return;
    }

    this.actionClick.emit(event);
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.actionClick.emit(event as unknown as MouseEvent);
    }
  }
}
