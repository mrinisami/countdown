export interface Operations {
    divide: string;
    multiply: string;
    addition: string;
    substraction: string;
    parenthesis: string;
}

export const operations: Operations = {
    divide: String.fromCharCode(247),
    multiply: '\u00D7',
    addition: String.fromCharCode(43),
    substraction: '\u2212',
    parenthesis: '()'
}