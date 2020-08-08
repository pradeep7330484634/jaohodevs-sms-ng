import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Firebase services */
// import { AngularFireModule } from "@angular/fire";
// import { AngularFireAuthModule } from "@angular/fire/auth";
// import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PagesComponent } from './modules/pages/pages.component';
import { MessageInvokerService } from './services/message-invoker.service';
import { FirebaseAuthService } from './services/firebase-auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    MessageInvokerService,
    FirebaseAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
