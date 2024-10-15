import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FactuExpressComponent } from "./factu-express/factu-express.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FactuExpressComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FactuExpressComponen';
}
