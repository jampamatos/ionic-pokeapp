// File: src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
