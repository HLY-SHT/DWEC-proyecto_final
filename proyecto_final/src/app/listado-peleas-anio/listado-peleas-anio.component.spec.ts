import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPeleasAnioComponent } from './listado-peleas-anio.component';

describe('ListadoPeleasAnioComponent', () => {
  let component: ListadoPeleasAnioComponent;
  let fixture: ComponentFixture<ListadoPeleasAnioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoPeleasAnioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPeleasAnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
