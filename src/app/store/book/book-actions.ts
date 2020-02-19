import { createAction, props} from '@ngrx/store';
import { Book, SortDir } from '../../types/book';
import { BookEntity } from './book.entity';

const BOOK_ACTION_KEY = '[Book]';

export const loadBooks = createAction(
    `${BOOK_ACTION_KEY} LOAD_BOOKS`,
    props<{books: Book[]}>()
);

export const loadBooksSuccess = createAction(
    `${BOOK_ACTION_KEY} LOAD_BOOKS_SUCCESS`,
    props<{books: BookEntity[]}>()
);

export const loadBooksError = createAction(
    `${BOOK_ACTION_KEY} LOAD_BOOKS_SUCCESS`,
    props<{err: Error}>()
);

export const sortBooks = createAction(
    `${BOOK_ACTION_KEY} SORT`,
    props<{sort: keyof BookEntity, direction: keyof typeof SortDir}>()
);
