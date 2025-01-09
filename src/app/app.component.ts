import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonBasicComponent } from './button-basic/button-basic.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonBasicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learn-angular-2';
}
