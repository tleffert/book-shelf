import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { RootStoreModule } from './store/store.module'
import { CommonModule } from '@angular/common';

import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookPreviewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RootStoreModule,
    ReactiveFormsModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
