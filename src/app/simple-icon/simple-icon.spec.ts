import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleIcon } from './simple-icon';

describe('SimpleIcon', () => {
  let component: SimpleIcon;
  let fixture: ComponentFixture<SimpleIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
