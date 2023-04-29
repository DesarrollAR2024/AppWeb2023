import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosycondicinonesComponent } from './terminosycondicinones.component';

describe('TerminosycondicinonesComponent', () => {
  let component: TerminosycondicinonesComponent;
  let fixture: ComponentFixture<TerminosycondicinonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminosycondicinonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminosycondicinonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
