import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteoeoComponent } from './testeoeo.component';

describe('TesteoeoComponent', () => {
  let component: TesteoeoComponent;
  let fixture: ComponentFixture<TesteoeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteoeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteoeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
