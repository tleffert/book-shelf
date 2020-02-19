import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bookEntityCollectionReducer } from './book-reducer';
import { BookEffects } from './book-effects';

@NgModule({
   imports: [
       CommonModule,
       StoreModule.forFeature('books', bookEntityCollectionReducer),
       EffectsModule.forFeature([BookEffects])
   ],
   providers: []
})
export class BookStoreModule{}
