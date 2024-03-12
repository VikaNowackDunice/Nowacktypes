// Матрци вида
// n - рядов, m - элементов в ряду
// например для n = 2, m = 3
// matrix = [
//  [1, 'abs', 2],
//  [0, 2, 'cdb'],
// ]


const getRandomString = (i:number):string => (Math.random() + i).toString(36).substring(7);

const generateMatrix = (n:number, m:number):(number | string)[][] => {
    const matrix:(number | string)[][] = [];
    for (let i = 0; i < n; i += 1) {
        matrix[i] = [];
        for (let j = 0; j < m; j += 1) {
            if (Math.random() > 0.5) {
                matrix[i][j] = getRandomString(i);
            } else {
                matrix[i][j] = i + j;
            }
        }
    }
    return matrix;
}

const matrix= generateMatrix(2, 3);

const flat = <T>(matrix:(T[][])) :T[] => {
    return matrix.reduce((acc, row)=> {
        acc.push(...row);
        return acc;
    }, [] as T[] );
}
 
const list = flat(matrix);

const splitByType = (list:(number | string)[]) => {
    const result = {
        strings: [] as string[],
        numbers: [] as number[],
    }
    list.forEach((item:(number | string))=> {
        // это нужно переделать
        const isNaN = Number.isNaN((item as number) / 2);
        if (isNaN) result.strings.push(item as string);
        else result.numbers.push(item as number);
    });

    return result;
}

const splited = splitByType(list);

console.log(splited);