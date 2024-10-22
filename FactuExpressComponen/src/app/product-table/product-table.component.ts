import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CopCurrencyPipe } from '../cop-currency.pipe';

interface Product {
  code_reference: string;
  name: string;
  quantity: number;
  discount: number;
  discount_rate: number;
  price: number;
  tax_rate: string;
}

interface Invoice {
  reference_code: string;
  payment_method_code: number;
  customer_identification: string;
  items: Product[];
}

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CopCurrencyPipe],
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  productForm: FormGroup;
  invoice: Invoice;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      code_reference: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      discount: [0, [Validators.required, Validators.min(0)]],
      discount_rate: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      price: [0, [Validators.required, Validators.min(0)]],
      tax_rate: ['19.00', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });

    this.invoice = {
      reference_code: 'F124324',
      payment_method_code: 2,
      customer_identification: '1002135238',
      items: []
    };
  }

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      this.invoice.items.push(newProduct);
      console.log(JSON.stringify(this.invoice, null, 2));
      this.productForm.reset({
        quantity: 1,
        discount: 0,
        discount_rate: 0,
        price: 0,
        tax_rate: '19.00'
      });
    }
  }

  get code_reference() { return this.productForm.get('code_reference'); }
  get name() { return this.productForm.get('name'); }
  get quantity() { return this.productForm.get('quantity'); }
  get discount() { return this.productForm.get('discount'); }
  get discount_rate() { return this.productForm.get('discount_rate'); }
  get price() { return this.productForm.get('price'); }
  get tax_rate() { return this.productForm.get('tax_rate'); }
}
