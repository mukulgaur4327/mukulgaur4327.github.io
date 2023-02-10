import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralLinkingComponent } from './collateral-linking.component';

describe('CollateralLinkingComponent', () => {
  let component: CollateralLinkingComponent;
  let fixture: ComponentFixture<CollateralLinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollateralLinkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollateralLinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
