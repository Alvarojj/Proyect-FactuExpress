import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductTableComponent } from '../product-table/product-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, ProductTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
