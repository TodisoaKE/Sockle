import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-shared-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.scss'
})
export class SharedButtonComponent {
  
}
