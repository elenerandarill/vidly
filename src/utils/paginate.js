import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;     // 1str od indexu 0, 2str od indeksu 4, itd...
    // potrzebne beda dwie metody z 'lodash':
    // _.slice(array: items, start: 0, stop:4)
    // _.take(array: items, number: 4)
    // zeby uzyc tych metod trzeba liste przeksztalcic na lodash wraper -> _.(items)
    // value() na koncu zamienia wynik w normlna liste
    return _(items).slice(startIndex).take(pageSize).value();
}