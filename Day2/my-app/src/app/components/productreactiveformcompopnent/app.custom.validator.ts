import { AbstractControl, ValidatorFn } from '@angular/forms';

// custom validator class must contain static metyhod
export class MyCustomValidator {
  // if the method is validated
  // then it will return null
  // else it will retun JSON object for
  // invalidation
  // AbstractControl --> represents HTML UI element
  // on which the validations are applied
  static checkEven(ctrl: AbstractControl) : any {
     const val: number  = parseInt(ctrl.value);
     if (val % 2 === 0) {
        return null;
     } else {
       return {noteven:true}
     }
  }
}

export class UniqueIdValidator {
    static hasUnique(ids: number[]): ValidatorFn {
        return (ctrl: AbstractControl): { [key: string]: boolean } | null => {
            const val: number = parseInt(ctrl.value);
            if (ids.includes(val)) {
                return { notunique: true };
            } else {
                return null;
            }
        }
    }
}

export class FirstCharacterUpperCaseFieldValidator {
    static checkUpperCase(cntrl: AbstractControl): any {
        const char = cntrl.value.charAt(0);
        if (char === char.toLocaleUpperCase()) {
            return null;
        } else if (char === char.toLocaleLowerCase()) {
            return { notuppercase: true };
        }
    }
}