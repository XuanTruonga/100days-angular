export const DEFAULT_GUTTER = 16
export const VALIDATION_ERROR_KEYS = {
  REQUIRED: 'required',
  EMAIL: 'email',
  PHONE: 'phone',

  MIN_LENGTH: 'minlength',
  MAX_LENGTH: 'maxlength',

  INTEGER: 'integer',
  NUMBER: 'number',

  POSITIVE_INTEGER: 'positiveInteger',
  POSITIVE_NUMBER: 'positiveNumber',
} as const;

/**
 * Ant Design Grid breakpoints (24 columns system)
 *
 * xs  < 576px   → Mobile
 * sm ≥ 576px    → Mobile lớn / Tablet nhỏ
 * md ≥ 768px    → Tablet
 * lg ≥ 992px    → Laptop nhỏ
 * xl ≥ 1200px   → Desktop
 *
 * @param layout Layout custom (override Ant Design Grid default)
 */

export const LAYOUT_FORM_COLUMNS = {
  LAYOUT_FORM_COLUMN_1: {
    xs: 24,
    sm: 24,
    md: 24,
    lg: undefined,
    xl: undefined,
    span: undefined,
  },
  LAYOUT_FORM_COLUMN_2: {
    xs: 24,
    sm: 24,
    md: 12,
    lg: undefined,
    xl: undefined,
    span: undefined,
  },
  LAYOUT_FORM_COLUMN_3: {
    xs: 24,
    sm: 12,
    md: 8,
    lg: undefined,
    xl: undefined,
    span: undefined,
  },
  LAYOUT_FORM_COLUMN_4: {
    xs: 24,
    sm: 12,
    md: 6,
    lg: undefined,
    xl: undefined,
    span: undefined,
  },
  LAYOUT_FORM_COLUMN_5: {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6,
    xl: 4.8,
    span: undefined,
  },
  LAYOUT_FORM_COLUMN_6: {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6,
    xl: 4,
    span: undefined,
  },
} as const;
