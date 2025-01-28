import { Component, OnInit } from '@angular/core';
import { SharedButtonComponent } from '../../../../shared/components/shared-button/shared-button.component';
import { ButtonModule } from 'primeng/button';
import { interval, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    // SharedButtonComponent,
    ButtonModule,
    AsyncPipe
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  loading: boolean = false;

  onClick(event: Event){
    console.log(event);
  }
}
