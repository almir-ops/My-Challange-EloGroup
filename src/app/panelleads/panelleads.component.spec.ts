import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelleadsComponent } from './panelleads.component';

describe('PanelleadsComponent', () => {
  let component: PanelleadsComponent;
  let fixture: ComponentFixture<PanelleadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelleadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelleadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
