import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPeleasEventoComponent } from './listado-peleas-evento.component';

describe('ListadoPeleasEventoComponent', () => {
  let component: ListadoPeleasEventoComponent;
  let fixture: ComponentFixture<ListadoPeleasEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoPeleasEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPeleasEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
