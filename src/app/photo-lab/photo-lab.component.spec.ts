import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoLabComponent } from './photo-lab.component';

describe('PhotoLabComponent', () => {
  let component: PhotoLabComponent;
  let fixture: ComponentFixture<PhotoLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoLabComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
