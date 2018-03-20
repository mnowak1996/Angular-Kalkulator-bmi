import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiczComponent } from './licz.component';

describe('LiczComponent', () => {
  let component: LiczComponent;
  let fixture: ComponentFixture<LiczComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiczComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiczComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
