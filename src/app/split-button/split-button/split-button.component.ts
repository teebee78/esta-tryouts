import { Component, EnvironmentInjector } from '@angular/core';

@Component({
  selector: 'app-split-button',
  templateUrl: './split-button.component.html',
  styleUrls: ['./split-button.component.scss']
})
export class SplitButtonComponent {


  public onPrimaryAction(event: Event) {
    event.stopPropagation();
    console.log('>>>>> on Primary Action', event);
  }

}
