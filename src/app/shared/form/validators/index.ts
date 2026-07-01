import { ValidatorFn, Validators } from '@angular/forms';

import { decimalValidator } from './number.validator';
import { integerValidator } from './integer.validator';
import { vietnamPhoneValidator } from './phone.validator';
import { positiveDecimalValidator } from './positive.number.validator';
import { positiveIntegerValidator } from './positive.integer.validator';

export class ValidatorsEx extends Validators {
  static vietnamPhone(): ValidatorFn {
    return vietnamPhoneValidator();
  }

  static integer(): ValidatorFn {
    return integerValidator();
  }

  static positiveInteger(min = 0): ValidatorFn {
    return positiveIntegerValidator(min);
  }

  static decimal(): ValidatorFn {
    return decimalValidator();
  }

  static positiveDecimal(min = 0): ValidatorFn {
    return positiveDecimalValidator(min);
  }
}
