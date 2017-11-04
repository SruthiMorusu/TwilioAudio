import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwilioapiComponent } from './twilioapi.component';

describe('TwilioapiComponent', () => {
  let component: TwilioapiComponent;
  let fixture: ComponentFixture<TwilioapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwilioapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwilioapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
