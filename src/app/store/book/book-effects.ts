import { Injectable } from '@angular/core';

import { Actions, Effect, ofType} from '@ngrx/effects';
import { concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as BookActions from './book-actions';
import { BookEntity } from './book.entity';

@Injectable()
export class BookEffects {
    constructor(
        private actionStream$: Actions,
    ) {}

    @Effect()
    transformBookData$ = this.actionStream$.pipe(
        ofType(BookActions.loadBooks),
        concatMap(({books}) => {
            try {
                // Need to transform the string releaseDate into a JS date
                // 'Preparing' the data
                let transformedData: BookEntity[] = books.map(book => {
                        let splitDateString = book.releaseDate.split('/');
                        let releaseDate = new Date();

                        releaseDate.setFullYear(
                            parseInt(splitDateString[1]), parseInt(splitDateString[0])
                        );

                    return {...book, releaseDateObj: releaseDate} as BookEntity
                });
                // Data is good to go, return our creation
                return of(BookActions.loadBooksSuccess({
                    books: transformedData
                }));
            } catch(err) {
                // Something failed, and still need to emit an action so lets
                // pass the error on
                return of(BookActions.loadBooksError({
                    err: err
                }));
            }

        })
    )

}
