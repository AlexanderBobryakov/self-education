import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {

  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    if (['test@mail.ru'].includes(control.value)) {
      return {restrictedEmail: true};
    }
    return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'test2@mail.ru') {
          resolve({uniqEmail: true})
        } else {
          resolve(null)
        }
      }, 3000)
    });
  }
}
