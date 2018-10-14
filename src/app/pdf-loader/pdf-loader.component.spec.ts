import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfLoaderComponent } from './pdf-loader.component';

describe('PdfLoaderComponent', () => {
  let component: PdfLoaderComponent;
  let fixture: ComponentFixture<PdfLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
