import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductTableComponent } from '../product-table/product-table.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, ProductTableComponent, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
