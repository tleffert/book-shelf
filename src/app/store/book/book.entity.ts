
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Book, SortDir } from 'src/app/types/book';

export type BookSorts = 'pages' | 'releaseDateObj' | 'author';

export interface BookEntity extends Book {
    releaseDateObj: Date;
}

export interface BookEntityCollectionState extends EntityState<BookEntity> {
    sortDir: keyof typeof SortDir
}

export const bookEntityAdapter = createEntityAdapter<BookEntity>({
    // NOTE Assuming author+title gives us a unique combination to use for IDs
   selectId: (book: BookEntity) => `${book.author}-${book.title}`
});

export const bookEntityCollectioninitialState: BookEntityCollectionState = bookEntityAdapter.getInitialState({
    sortDir: null,
    releaseDateObj: null
});
