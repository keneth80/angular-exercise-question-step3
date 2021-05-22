import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedWriteComponent } from './feed-write.component';

describe('FeedWriteComponent', () => {
  let component: FeedWriteComponent;
  let fixture: ComponentFixture<FeedWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedWriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
