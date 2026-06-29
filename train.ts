console.log("TypeScript Train has started")
// ==============M==================I==================T=================TASK============Z========

function sumEvens(arr: number[]) {
    let countedEvens = 0
    for (const num of arr) {
        if (num % 2 === 0) {
            countedEvens = num + countedEvens
        }

    }
    return countedEvens
}

const result = sumEvens([4, 2, 3, 1, 5])
console.log("RESULT: ", result)


// TASK Z

// Array tarkibidagi juft sonlar yig'indisini hisoblab qaytarsin.

// Masalan: sumEvens([1, 2, 3]) return 2



// ==============M==================I==================T=================TASK============Y========

// function findIntersection(arr1: number[], arr2: number[]) {
//     const foundIntersection = arr1.filter(
//         (numb: number) => new Set(arr2).has(numb)
//     )
//     return foundIntersection
// }

// const result = findIntersection([2, 3, 4, 5], [3, 6, 4])
// console.log("RESULT:", result)








// ==============M==================I==================T=================TASK============X========


// function countOccurrences(obj: any, key: string):number { 
//     let count = 0
//     for (const k in obj) {
//         if (k === key) {
//             count++
//         }
//         if (typeof obj[k] === "object") {
//             count += countOccurrences(obj[k], key) 
//         }
//     }
//     return count

// }


// const result = countOccurrences({model: "A", s: {model: "B"}}, "model")
// console.log("result:", result)


// TASK X

// Object tarkibida (nested bo'lsa ham) berilgan kalit necha marta takrorlanganini sanang.

// Masalan: countOccurrences({model: "A", s: {model: "B"}}, "model") return 2








//============M=====================I========================T================TASK=========P====
// interface objectType {
//     key: any;
//     value: number;
// }


// const nestedContain: objectType[] = [];

// function objectToArray(objects = { a: 10, b: 20 }) {
//     for (const [key, value] of Object.entries(objects)) {
//         nestedContain.push(key, value);

//     }

// }

// const result = objectToArray()
// console.log("result:", result)


// TASK P

// Objectni nested array sifatida convert qilib qaytarsin.

// Masalan: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]]


//============M=====================I========================T================TASK=========M====

/**
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
 */

/**
TASK M

Array ichidagi har bir raqam uchun raqamning o'zi va uning kvadratidan
tashkil topgan object hosil qilib qaytarsin.

Masalan: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, ...] 
**/

