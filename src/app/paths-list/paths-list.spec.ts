import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathsList } from './paths-list';

describe('PathsList', () => {
  let component: PathsList;
  let fixture: ComponentFixture<PathsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
