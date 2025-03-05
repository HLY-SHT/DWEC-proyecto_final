import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPeleasPeleadorComponent } from './listado-peleas-peleador.component';

describe('ListadoPeleasPeleadorComponent', () => {
  let component: ListadoPeleasPeleadorComponent;
  let fixture: ComponentFixture<ListadoPeleasPeleadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoPeleasPeleadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPeleasPeleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
