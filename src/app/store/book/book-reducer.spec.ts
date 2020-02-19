import { bookEntityCollectionReducer, reducer } from './book-reducer';
import BOOKS from '../../../../static/books.json';
import { BookEntity } from './book.entity';
import * as BookActions from './book-actions';
import { Book, SortDir } from '../../types/book';

describe('Book Reducer', () => {
    let loadedState;

    let sortedByPages = [
      'Cody Lindley-JavaScript Enlightenment',
      'Douglas Crockford-JavaScript: The Good Parts',
      'Addy Osmani-Learning JavaScript Design Patterns',
      'Eric Elliott-Programming JavaScript Applications',
      'Nicolas Bevacqua-Practical Modern JavaScript',
      'David Flanagan-JavaScript: The Definitive Guide'
    ];

    let sortedByAuthor = [
      'Addy Osmani-Learning JavaScript Design Patterns',
      'Cody Lindley-JavaScript Enlightenment',
      'David Flanagan-JavaScript: The Definitive Guide',
      'Douglas Crockford-JavaScript: The Good Parts',
      'Eric Elliott-Programming JavaScript Applications',
      'Nicolas Bevacqua-Practical Modern JavaScript'
    ];

    let sortedByRelease = [
      'David Flanagan-JavaScript: The Definitive Guide',
      'Douglas Crockford-JavaScript: The Good Parts',
      'Addy Osmani-Learning JavaScript Design Patterns',
      'Cody Lindley-JavaScript Enlightenment',
      'Eric Elliott-Programming JavaScript Applications',
      'Nicolas Bevacqua-Practical Modern JavaScript'
    ];

    // Need to hydrate the state before each test as to not pollute tests
    beforeEach(() => {
        loadedState = reducer(undefined, BookActions.loadBooksSuccess({
            books: transformData(BOOKS)
        }));
    })

    it('should sort by pages ascending', () => {
        let actionedState = reducer(loadedState, BookActions.sortBooks({
            sort: 'pages',
            direction: SortDir.ASC
        }));

        expect(actionedState.ids).toEqual(sortedByPages);
    });

    it('should sort by author ascending', () => {
        let actionedState = reducer(loadedState, BookActions.sortBooks({
            sort: 'author',
            direction: SortDir.ASC
        }));

        expect(actionedState.ids).toEqual(sortedByAuthor);
    });

    it('should sort by release ascending', () => {
        let actionedState = reducer(loadedState, BookActions.sortBooks({
            sort: 'releaseDateObj',
            direction: SortDir.ASC
        }));

        expect(actionedState.ids).toEqual(sortedByRelease);
    });


});

// Helper function to get our transformed data that would be done
// in an effect
export function transformData(books: Book[]): BookEntity[] {
    return books.map(book => {
            let splitDateString = book.releaseDate.split('/');
            let releaseDate = new Date();

            releaseDate.setFullYear(
                parseInt(splitDateString[1]), parseInt(splitDateString[0])
            );

        return {...book, releaseDateObj: releaseDate} as BookEntity
    });
}
