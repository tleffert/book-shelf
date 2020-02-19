# Frontend assignment: "javascript books"

## Description

1. Change the structure of the HTML file `static/index.html` and write corresponding CSS rules in order to reproduce the look presented in mockups (see: `screenshots/`. Note: screenshots present a Polish version of the website. You should keep English names. (sorting types translation: by author name, by number of pages, by date))


2. Add following behaviors to the page
    1. Selecting a sorting option should change the order of elements. The order should correspond to the description of the selected option. The order can be either ascending or descending. Sorting types: by author name, by number of pages, by date.
    2. Imputing the filter condition should filter out books that don't satisfy the condition. Filter types: by number of pages
    3. Sorting and filtering may be applied together at the same time.

3. Put your notes into the `notes.md` file (e.g. which browsers are 100% supported, what assumptions and simplifications have you made, etc.)

4. Write unit tests for sorting and filtering. Other tests, like e2e are welcome too, but not mandatory.

## Technologies Stack

Angular, RxJs and NgRx is preferable. Use reactive and functional programming style effectively to improve the software quality, e.g., extendability.

## Notes

* You can completely change the project structure and existing code, add a building / testing step, etc.

* The repo contains the `/books.json` file that contains data hard-coded in HTML. You can use that file.

* Layout mapping doesn't have to be "pixel-perfect".

* We're particularly interested in three things: quality of the code (html/css/js), final _look-and-feel_ and how you use the functional and reactive programming practices effectively.

* `Lato` font were used.

## Launching

node.js version 8+ is required.

```bash
$ npm install
$ npm start
```

The console will display a message with the port of the server.

## Submitting the solution

* Pack all files of the developed software into an archive file and send via Google Drive Shared Link to masato.asahara@dotdata.com and vitalii.shevchuk@dotdata.com
