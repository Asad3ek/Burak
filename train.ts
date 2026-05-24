console.log("TypeScript Train has started")
//============M=====================I========================T================TASK=========M====
interface SquareResult {
    number: number;
    square: number;
}

let numbContain: SquareResult[] = []
function getSquareNumbers(NumberList = [1, 2, 3, 4]) {
    for (let numb of NumberList) {
        const obj: SquareResult = {
            number: numb,
            square: numb ** 2
        }
        numbContain.push(obj)
    }
    return numbContain

}


const SquaredList = getSquareNumbers();
console.log("SquaredList: ", SquaredList);

/**
TASK M

Array ichidagi har bir raqam uchun raqamning o'zi va uning kvadratidan
tashkil topgan object hosil qilib qaytarsin.

Masalan: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, ...] 
**/

