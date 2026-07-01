import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideNzIcons } from 'ng-zorro-antd/icon';

import {
  DeleteOutline,
  SaveOutline,
  PlusOutline,
  EditOutline,
  SearchOutline,
  CloseOutline,
  EyeOutline,
  PlusCircleOutline,
  SendOutline,
} from '@ant-design/icons-angular/icons';

import { routes } from './app.routes';
import {} from '@angular/platform-browser';
import { provideNzI18n, vi_VN } from 'ng-zorro-antd/i18n';
import { NzModalService } from 'ng-zorro-antd/modal';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideNzI18n(vi_VN),
    NzModalService,
    provideNzIcons([
      DeleteOutline,
      SaveOutline,
      PlusOutline,
      EditOutline,
      SearchOutline,
      CloseOutline,
      EyeOutline,
      PlusCircleOutline,
      SendOutline,
    ]),
  ],
};
