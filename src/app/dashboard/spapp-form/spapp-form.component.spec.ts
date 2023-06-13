import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPAppFormComponent } from './spapp-form.component';

describe('SPAppFormComponent', () => {
  let component: SPAppFormComponent;
  let fixture: ComponentFixture<SPAppFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPAppFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
