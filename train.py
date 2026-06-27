# ============M=================I=================T================TASK=========Y====

def findIntersection(arr1, arr2):
    foundIntersection = set(arr1) & set(arr2)

    return foundIntersection


print("RESULT: ", findIntersection([2, 3, 4, 6, 5], [1, 7, 4, 6, 5]))


# TASK Y

# Ikkala arrayda ham ishtirok etgan bir xil qiymatlarni qaytarsin.

# Masalan: findIntersection([1, 2, 3], [3, 2, 0]) return [2, 3]


# ============M=================I=================T================TASK=========X====

# def countOccurrences(obj, key):
#     count = 0

#     for k, v in obj.items():
#         if k == key:
#             count += 1
#         if isinstance(v, dict):
#             count += countOccurrences(v, key)

#     return count


# result = countOccurrences({"model": "A", "s": {"model": "B"}}, "model")
# print("RETURN:", result)


# TASK X

# Object tarkibida (nested bo'lsa ham) berilgan kalit necha marta takrorlanganini sanang.

# Masalan: countOccurrences({model: "A", s: {model: "B"}}, "model") return 2


# ============M=================I=================T================TASK=========W====

# def chunkArray(array, size):
#     result = []

#     for i in range(0, len(array), size):
#         chunk = array[i:i + size]
#         result.append(chunk)

#     return result


# finalResult = chunkArray([1, 2, 3, 4, 5, 6, 7], 2)
# print(finalResult)


# TASK W

# Arrayni berilgan uzunlikda bo'laklarga ajratib qaytarsin.

# Masalan: chunkArray([1, 2, 3, 4, 5], 2) return [[1, 2], [3, 4], [5]]


# ============M=================I=================T================TASK=========V====
# def countChars(string):
#     counter = 0
#     resultObj = {}
#     for ele in string:
#         if(ele in resultObj):
#             resultObj[ele] += 1
#         else:
#             resultObj[ele] = 1

#     return resultObj

# result = countChars("Republic of Uzbekistan")
# print("RETURN:", result)


# Stringdagi har bir harf necha marta takrorlanganini object sifatida qaytarsin.

# Masalan: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}


# ============M=================I=================T================TASK=========S====

# def mergeSortedArrays_1(arr1, arr2):
#     return arr1 + arr2


# result1 = mergeSortedArrays_1([0, 3, 4], [4, 6])
# print("RETURN_1: ", result1)


# def mergeSortedArrays(a, b):
#     contain = []
#     for num in a:
#         contain.append(num)

#     for num2 in b:
#         contain.append(num2)

#     return sorted(contain)


# result2 = mergeSortedArrays([0, 9, 5], [12, 4, 7])
# print("RETURN_2: ", result2)

# TASK T

# Ikkita arrayni qabul qilib, ularni birlashtirib tartiblangan holda qaytarsin.

# Masalan: mergeSortedArrays([0, 3, 4], [4, 6]) return [0, 3, 4, 4, 6]


# Bitta tushib qolgan raqam uchun:
# def missingNumber1(numbs):
#     for number in range(len(numbs) + 1):
#         if number not in numbs:
#             return number


# result1 = missingNumber1([3, 0, 1])
# print("RETURN_1:", result1)


# # Ummumiy tushib qolgan raqamlar uchun:
# def missingNumber(numbs):
#     missing_numb = []
#     min_num = 0
#     max_num = 9
#     for number in range(min_num, max_num + 1):
#         if number not in numbs:
#             missing_numb.append(number)

#     return missing_numb


# result2 = missingNumber([1, 3, 5, 7, 9])
# print("RETURN_2:", result2)

# TASK S

# Array ichidagi tushib qolgan sonni topib qaytarsin.

# Masalan: missingNumber([3, 0, 1]) return 2


# ============M=================I=================T================TASK=========R====


# def calculate(string="3+4"):
#     calculated = int(string[0]) + int(string[2])

#     return calculated


# result1 = calculate()
# print("RETURN:", result1)


# # Ikki xonali sonlar uchun:
# def calculate(string="34+43"):
#     calculated = int(string[0:2]) + int(string[3:5])

#     return calculated


# result2 = calculate()
# print("RETURN_2:", result2)
# TASK R

# "1 + 2" ko'rinishidagi stringni hisoblab number qaytarsin.

# Masalan: calculate("1 + 3") return 4


# ============M=================I=================T================TASK=========Q====


# def hasProperty(obj, prop):
#     return prop in obj


# result1 = hasProperty({"name": "BMW"}, "name")
# print("RESULT_1:", result1)

# result2 = hasProperty({"name": "BMW"}, "age")
# print("RESULT_2:", result2)


# Objectda berilgan string propertysi borligini tekshirsin.

# Masalan: hasProperty({name: "BMW"}, "name") return true


# ============M=================I=================T================TASK=========P====


# def objectToArray(objects={"a": 10, "b": 20}):
#     nestedContain = []
#     object = []
#     for key, value in objects.items():
#         object = [key, value]

#         nestedContain.append(object)

#     return nestedContain


# result = objectToArray()
# print("RETURN:", result)

# TASK P

# Objectni nested array sifatida convert qilib qaytarsin.

# Masalan: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]]


# ============M=================I=================T================TASK=========O====


# def calculateSumOfNumbers(string=[10, "10", True, 35]):
#     NumberResult = 0
#     for element in string:
#         if isinstance(element, (int, float)) and not isinstance(element, bool):
#             NumberResult += element

#     return NumberResult


# result = calculateSumOfNumbers()
# print("result: ", result)


# TASK O

# Array ichidagi har xil qiymatlardan faqat sonlar yig'indisini hisoblab qaytarsin.

# Masalan: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45


# ============M=================I=================T================TASK=========N====


# def palindromCheck(palinWords):
#     for word in palinWords:
#         if (palinWords == palinWords[::-1]):
#             print("palinWords", palinWords)
#             return True
#     else:
#         return False


# result = palindromCheck("DAD")
# print("result: ", result)


# TASK N

# Stringni palindrom ekanligini aniqlab true yoki false qaytarsin.

# Masalan: palindromCheck("dad") return true


# ============M=================I=================T================TASK=========M====

# numbContain = []

# def getSquareNumbers(numberList=[11, 22, 33, 44, 55]):
#     for number in numberList:
#         obj = {
#             "number": number,
#             "square": number ** 2
#         }
#         numbContain.append(obj)

#     return numbContain


# SquaredListPY = getSquareNumbers()
# print("SquaredList_PY: ", SquaredListPY)

# ============M===================I================T================TASK=========L====

# print("=====$$$============= BIRINCHI USUL ==============$$$=====")

# def reverseSentence1(sentence):
#     words = sentence.split(" ")
#     reversed_words = []

#     for word in words:
#         reversed_words.append(word[::-1])

#     return " ".join(reversed_words)


# FinalResult1 = reverseSentence1("I have been to Italy two times!")
# print("FinalResult1: ", FinalResult1)

# print("=====$$$========== IKKINCHI USUL ==============$$$=====")


# def reverse_sentence(sentence):
#     return " ".join([word[::-1] for word in sentence.split()])


# FinalResult2 = reverseSentence1("I have been to Italy two times!")
# print("FinalResult2: ", FinalResult2)

# TASK L

# So'zlarni ketma-ketligini buzmasdan har bir so'zni alohida teskarisiga o'girib beradigan function tuzing.

# Masalan: reverseSentence("we like coding!") return "ew ekil !gnidoc"
