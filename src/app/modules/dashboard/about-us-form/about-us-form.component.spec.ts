import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsFormComponent } from './about-us-form.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

describe('AboutUsFormComponent', () => {
  let component: AboutUsFormComponent;
  let fixture: ComponentFixture<AboutUsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsFormComponent, SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
