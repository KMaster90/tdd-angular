import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({declarations: [ HeaderComponent ]}).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // <!-- Nav -->
  it('should create', () => expect(component).toBeTruthy());
  it('should show logo', () => expect(fixture.nativeElement.querySelector('[data-test="logo"]')).toBeTruthy());
  it('should show search', () => expect(fixture.nativeElement.querySelector('[data-test="search"]')).toBeTruthy());
  it('should show menu', () => expect(fixture.nativeElement.querySelector('[data-test="menu"]')).toBeTruthy());
  // <!-- Filters -->
  it('should show home-type', () => expect(fixture.nativeElement.querySelector('[data-test="home-type"]')).toBeTruthy());
  it('should show dates', () => expect(fixture.nativeElement.querySelector('[data-test="dates"]')).toBeTruthy());
  it('should show guests', () => expect(fixture.nativeElement.querySelector('[data-test="guests"]')).toBeTruthy());
  it('should show price', () => expect(fixture.nativeElement.querySelector('[data-test="price"]')).toBeTruthy());
  it('should show rooms', () => expect(fixture.nativeElement.querySelector('[data-test="rooms"]')).toBeTruthy());
  it('should show amenities', () => expect(fixture.nativeElement.querySelector('[data-test="amenities"]')).toBeTruthy());
});
