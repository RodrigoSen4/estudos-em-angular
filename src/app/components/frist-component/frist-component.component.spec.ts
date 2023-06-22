import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FristComponentComponent } from './frist-component.component';

describe('FristComponentComponent', () => {
  let component: FristComponentComponent;
  let fixture: ComponentFixture<FristComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FristComponentComponent]
    });
    fixture = TestBed.createComponent(FristComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
