import { Injectable, Type, inject } from '@angular/core';
import { ThemeType } from '@ant-design/icons-angular';
import {
  NzModalRef,
  NzModalService,
} from 'ng-zorro-antd/modal';

interface OpenOptions {
  title: string;
  content: Type<unknown>;
  width?: number;
}

interface ConfirmOptions {
  type?: ConfirmType;
  name?: string;
  title?: string;
  content?: string;
  okText?: string;
  cancelText?: string;
  danger?: boolean;
}

type ConfirmType = 'delete' | 'lock' | 'unlock' | 'approve' | 'reject';

interface ConfirmConfig {
  title: string;
  okText: string;
  danger: boolean;
  icon: {
    type: ThemeType;
    name: string;
  };
}

const CONFIRM_CONFIG: Record<
  ConfirmType,
  Required<Pick<ConfirmOptions, 'title' | 'okText' | 'danger'>> & {
    icon: string;
  }
> = {
  delete: {
    title: 'Xác nhận xóa',
    okText: 'Xóa',
    danger: true,
    icon: 'delete',
  },
  lock: {
    title: 'Khóa người dùng',
    okText: 'Khóa',
    danger: true,
    icon: 'lock',
  },
  unlock: {
    title: 'Mở khóa người dùng',
    okText: 'Mở khóa',
    danger: false,
    icon: 'unlock',
  },
  approve: {
    title: 'Duyệt yêu cầu',
    okText: 'Duyệt',
    danger: false,
    icon: 'check-circle',
  },
  reject: {
    title: 'Từ chối yêu cầu',
    okText: 'Từ chối',
    danger: true,
    icon: 'close-circle',
  },
};

@Injectable({ providedIn: 'root' })
export class DialogService {
  private modal = inject(NzModalService);

  open(options: OpenOptions): NzModalRef {
    return this.modal.create({
      nzTitle: options.title,
      nzContent: options.content,
      nzWidth: options.width ?? 800,
      nzClosable: true,
      nzMaskClosable: false,
      nzFooter: null,
      nzClassName: 'app-modal',
    });
  }

  confirm(options: ConfirmOptions = {}) {
    const type = options.type ?? 'delete';

    const config = CONFIRM_CONFIG[type];

    const nameText = options.name ? ` "${options.name}"` : '';

    return this.modal.confirm({
      nzTitle: config.title,
      nzContent: `Bạn có chắc chắn muốn ${config.okText.toLowerCase()}${nameText} không?`,
      nzOkText: config.okText,
      nzCancelText: 'Hủy',
      nzOkDanger: config.danger,
      nzIconType: config.icon,
      nzFooter: null,
    });
  }
}
