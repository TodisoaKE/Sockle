import { Component, OnInit } from '@angular/core';
import { SharedButtonComponent } from '../../../../shared/components/shared-button/shared-button.component';
import { ButtonModule } from 'primeng/button';
import { interval, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IAllButton, IButton } from '../../models/button.model';
import { LoadingButtons, OutlinedButtons, RaisedButoons, RoundedButtons, TextButtons } from '../../constant/button.contant';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    ButtonModule,
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  loading: boolean = false;

  AllButtonProperty: IAllButton[] = [
    {
      title: 'Loading',
      buttonProperty: LoadingButtons
    },
    {
      title: 'Raised',
      buttonProperty: RaisedButoons
    },
    {
      title: 'Rounded',
      buttonProperty: RoundedButtons
    },
    {
      title: 'Text',
      buttonProperty: TextButtons
    },
    {
      title: 'Outlined',
      buttonProperty: OutlinedButtons
    }
  ]

  onClick(event: Event){
    console.log(event);
  }
}
