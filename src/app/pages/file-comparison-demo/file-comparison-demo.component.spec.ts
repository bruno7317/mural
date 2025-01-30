import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileComparisonDemoComponent } from './file-comparison-demo.component';

describe('FileComparisonDemoComponent', () => {
  let component: FileComparisonDemoComponent;
  let fixture: ComponentFixture<FileComparisonDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileComparisonDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileComparisonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
