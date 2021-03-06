import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgComponent } from './img.component';

describe('TitleComponent', () => {
  let component: ImgComponent;
  let fixture: ComponentFixture<ImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
