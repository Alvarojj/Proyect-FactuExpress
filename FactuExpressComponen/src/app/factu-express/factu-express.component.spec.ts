import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactuExpressComponent } from './factu-express.component';

describe('FactuExpressComponent', () => {
  let component: FactuExpressComponent;
  let fixture: ComponentFixture<FactuExpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactuExpressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactuExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
