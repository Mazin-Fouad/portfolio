import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormShapeComponent } from './contact-form-shape.component';

describe('ContactFormShapeComponent', () => {
  let component: ContactFormShapeComponent;
  let fixture: ComponentFixture<ContactFormShapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormShapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
