import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

export interface ZTableColumn<T> {
  title: string;
  key: keyof T;
  width?: string;
}

@Component({
  selector: 'app-z-table',
  standalone: true,
  imports: [CommonModule, NzTableModule],
  templateUrl: './app-z-table.component.html',
})
export class ZTableComponent<T extends Record<string, any>> {
  @Input() data: readonly T[] = [];
  @Input() columns: ZTableColumn<T>[] = [];
  @Input() rowKey: keyof T = 'id';

  @Input() showSizeChanger = true;
  @Input() pageSize = 10;
  @Input() showSelection = true;

  @Output() selectedChange = new EventEmitter<T[]>();

  checked = false;
  indeterminate = false;

  currentPageData: readonly T[] = [];
  checkedIds = new Set<T[keyof T]>();

  trackByRow = (_: number, row: T): string | number => {
    return this.getRowId(row);
  };

  getRowId(row: T): T[keyof T] {
    return row[this.rowKey];
  }

  onCurrentPageDataChange(data: readonly T[]): void {
    this.currentPageData = data;
    this.refreshCheckedStatus();
  }

  onItemChecked(row: T, checked: boolean): void {
    this.updateCheckedSet(this.getRowId(row), checked);
    this.refreshCheckedStatus();
    this.emitSelected();
  }

  onAllChecked(checked: boolean): void {
    this.currentPageData.forEach((row) => {
      this.updateCheckedSet(this.getRowId(row), checked);
    });

    this.refreshCheckedStatus();
    this.emitSelected();
  }

  updateCheckedSet(id: T[keyof T], checked: boolean): void {
    if (checked) {
      this.checkedIds.add(id);
    } else {
      this.checkedIds.delete(id);
    }
  }

  refreshCheckedStatus(): void {
    this.checked =
      this.currentPageData.length > 0 &&
      this.currentPageData.every((row) =>
        this.checkedIds.has(this.getRowId(row)),
      );

    this.indeterminate =
      this.currentPageData.some((row) =>
        this.checkedIds.has(this.getRowId(row)),
      ) && !this.checked;
  }

  emitSelected(): void {
    const selectedRows = this.data.filter((row) =>
      this.checkedIds.has(this.getRowId(row)),
    );

    this.selectedChange.emit(selectedRows);
  }
}
