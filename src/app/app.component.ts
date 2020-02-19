import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import BOOKS from '../../static/books.json';
import * as BookActions from './store/book/book-actions';
import { selectAllBooks } from './store/book/book-selectors';

import { Book, SortDir } from './types/book.js';
import { Observable } from 'rxjs';
import { BookEntity } from './store/book/book.entity.js';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    optionsForm: FormGroup;

    books$: Observable<BookEntity[]>;

    numPagesFilter: number = 0;

    // Providing a custom comparator for our filterpipe
    bookPageFilter = (book: Book) => {return this.numPagesFilter <= book.pages};

    showPreview: boolean;
    previewImg: string;

    constructor(
        private store: Store<any>,
        private renderer: Renderer2
    ) {

        // Ideally could use a meta-reducer to hydrate the Store
        this.store.dispatch(BookActions.loadBooks({
            books: BOOKS as Book[]
        }));

        // selectors gives us the updated state automatically as a stream (if triggered)
        this.books$ = this.store.select(selectAllBooks);

    }

    ngOnInit() {
        this.optionsForm = new FormGroup({
            sort: new FormControl(),
            numPageFilter: new FormControl(0)
        });
    }

    submitOptions(form: FormGroup) {
        // TODO Debounce click handler
        this.store.dispatch(BookActions.sortBooks({
            sort: form.get('sort').value,
            direction: SortDir.ASC
        }));

        this.numPagesFilter = form.get('numPageFilter').value;
    }

    // NOTE would probably make the image overalay a separate component
    showImgPreview(book: Book) {
        this.showPreview = true;
        this.previewImg = book.cover.large;
        this.renderer.addClass(document.body, 'pop-open');
    }

    closePreview() {
        this.showPreview = false;
        this.previewImg = null;
        this.renderer.removeClass(document.body, 'pop-open');
    }

    title = 'book-shelf';
}
