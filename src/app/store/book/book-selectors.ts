
import { createFeatureSelector, createSelector} from '@ngrx/store';

import { BookEntityCollectionState, bookEntityAdapter } from './book.entity';

export const selectBookEntityState = createFeatureSelector<BookEntityCollectionState>('books');

export const {selectAll: selectAllBooks, selectIds } = bookEntityAdapter.getSelectors(
   selectBookEntityState
);
