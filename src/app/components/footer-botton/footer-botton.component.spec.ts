import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBottonComponent } from './footer-botton.component';

describe('FooterBottonComponent', () => {
  let component: FooterBottonComponent;
  let fixture: ComponentFixture<FooterBottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBottonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
