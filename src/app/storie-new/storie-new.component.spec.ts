import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorieNewComponent } from './storie-new.component';

describe('StorieNewComponent', () => {
  let component: StorieNewComponent;
  let fixture: ComponentFixture<StorieNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorieNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorieNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
