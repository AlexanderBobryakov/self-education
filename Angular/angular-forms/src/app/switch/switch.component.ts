import {Component, forwardRef, Input, OnInit, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
};

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor {

  state = 'off';
  private onChange = (value: any) => {};

  setState(state: string) {
    this.state = state;

    this.onChange(this.state)
  }

  /*Implements*/
  // принимает функцию которая следит за изменениями
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // //-//-// для моб устройств
  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  // принимает значения от ngModel и записывает куда-нибудь
  writeValue(state: string): void {
    this.state = state
  }
}
