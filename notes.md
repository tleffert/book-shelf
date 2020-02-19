-- Supported Browsers Chrome, Firefox, Others try at own risk

1. Assumes that books.json contains all the data we need, so there no extra hooks to
    include more data, as the hydration mechanism is only on startup.

2. Used NgRx Entites to simplify managing state of the Books.
    a. Used a combination of <auth-title> for providing ids to each entity, ideally this would be
        an ISBN

3. Used ngx-filterpipe in place of creating my own, filtering only happens
    on the results of the selector, so does not effect the store.

4. Used Bootstrap for some styles and mainly for Grid/Flex systems
