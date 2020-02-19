import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { BookStoreModule } from './book/book-store.module';

@NgModule({
   imports: [
       CommonModule,
       BookStoreModule,
       StoreModule.forRoot({}, {}),
       EffectsModule.forRoot([]),
       StoreDevtoolsModule.instrument({
           maxAge: 25
       })
   ],
})
export class RootStoreModule{}
