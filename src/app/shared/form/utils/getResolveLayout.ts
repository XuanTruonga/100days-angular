import { ILayoutForm, ILayoutKey } from '../../../types/form.ant.types';
import { LAYOUT_FORM_COLUMNS } from '../contants';

export function resolveLayout(
  layout?: ILayoutForm,
  layoutKey?: ILayoutKey,
): ILayoutForm {
  if (layout) {
    return layout;
  }

  if (layoutKey) {
    return LAYOUT_FORM_COLUMNS[layoutKey];
  }

  return LAYOUT_FORM_COLUMNS.LAYOUT_FORM_COLUMN_1;
}
