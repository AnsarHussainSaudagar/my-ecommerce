import { AbstractControl } from '@angular/forms';

export function validateCity(control: AbstractControl) {
  const indianCities = ['mumbai', 'kalyan', 'thane', 'bhandup', 'vikhroli'];
  const value = control.value;
  if (indianCities.includes(value)) {
    return null;
  } else {
    return {
      invalidCity: true,
    };
  }
}
