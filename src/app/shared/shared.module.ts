import { NgModule, LOCALE_ID, APP_INITIALIZER } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
// import { RoleDirective } from "./directives/role.directive";
// import { TranslateService } from "./services/translate.service";
// import { TranslatePipe } from "./pipes/translate.pipe";

@NgModule({
  // declarations: [RoleDirective, TranslatePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AngularMaterialModule,
    NgxBootstrapModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AngularMaterialModule,
    NgxBootstrapModule
    // RoleDirective,
    // TranslatePipe
  ],
  providers: [
    // TranslateService
  ]
})
export class SharedModule {
}
