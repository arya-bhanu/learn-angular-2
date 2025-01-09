import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StylingComponent } from "./styling/styling.component";
import { OtherComponent } from "./other/other.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StylingComponent, OtherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learn-angular-2';
}
