import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPesoComponent } from './historico-peso.component';

describe('HistoricoPesoComponent', () => {
  let component: HistoricoPesoComponent;
  let fixture: ComponentFixture<HistoricoPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricoPesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricoPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
