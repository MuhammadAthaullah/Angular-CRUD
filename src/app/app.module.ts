import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { EntryFormComponent } from './entryform/entry-form/entry-form.component';
import { AppeeeComponent } from './appeee/appeee.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EntryFormComponent,
    AppeeeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
