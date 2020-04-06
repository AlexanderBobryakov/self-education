import {Component, OnInit} from "@angular/core";
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  appState: 'off';

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(
        'test3@mail.ru',
        [Validators.email, Validators.required, MyValidators.restrictedEmails],
        [MyValidators.uniqEmail]
        ),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([]),
    });
  }

  // метод по отправке формы
  submit() {
    console.log(this.form);
    // очистка формы
    this.form.reset()
  }

  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск',
    };
    const city = cityMap[this.form.get('address').get('country').value];
    // усановим значение в форму
    // this.form.patchValue({
    //   address: {
    //     city: city
    //   }
    // });
    this.form.get('address').get('city').setValue(city);
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }

  getSkillsControls() {
    return (this.form.get('skills') as FormArray).controls;
  }

  handleChange() {
    console.log(this.appState)
  }
}
