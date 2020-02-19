import { createReducer, on, Action } from '@ngrx/store';

import { BookEntityCollectionState, bookEntityCollectioninitialState, bookEntityAdapter, BookEntity } from './book.entity';
import * as BookActions from './book-actions';
import { SortDir } from 'src/app/types/book';

export function bookEntityCollectionReducer(state: BookEntityCollectionState | undefined, action: Action) {
   return reducer(state, action);
}

export const reducer = createReducer(
   bookEntityCollectioninitialState,

   on(
       BookActions.loadBooksSuccess,
       (state, {books}) => {
           // Will overwite if existing data
           // Assumption being 'books' is all data we need from initial load
           return bookEntityAdapter.addAll(books, state);
       }
   ),

   on(
       BookActions.sortBooks,
       (state, {sort, direction}) => {

           // Mapping our entities and ids together for convienence
          let booIdMap = Array<{book: BookEntity, id: string}>();

          state.ids.forEach(id => {
             booIdMap.push({book: state.entities[id], id: id});
          });

          let sortedIds = booIdMap.sort((a, b) => {
              if(a.book[sort] < b.book[sort]) {
                  return direction === SortDir.ASC ? -1 : 1
              } else if(a.book[sort] > b.book[sort]) {
                  return direction === SortDir.ASC? 1 : -1
              }
              return 0;
          }).map(ob => ob.id);

            // Since we can use NgRx to store the order of the ids we just
            // need to update the order of ids rather then the sorted list of entities
            // which our 'selectAll' selector depends the ids array we get from entities
           return {...state, ids: [...sortedIds], sortDir: direction};
       }
   )
);
