export interface Cover {
    large: string;
    small: string;
}

export interface Book {
    title: string;
    author: string;
    releaseDate: string;
    pages: number;
    link: string;
    cover: Cover;
}

export enum SortDir {
    ASC = 'ASC',
    DESC = 'DESC'
}
