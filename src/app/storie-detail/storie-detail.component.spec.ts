import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorieDetailComponent } from './storie-detail.component';

describe('StorieDetailComponent', () => {
  let component: StorieDetailComponent;
  let fixture: ComponentFixture<StorieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
