# ============M=================I=================T================TASK=========M====
numbContain = []


def getSquareNumbers(numberList=[11, 22, 33, 44, 55]):
    for number in numberList:
        obj = {
            "number": number,
            "square": number ** 2
        }
        numbContain.append(obj)

    return numbContain


SquaredListPY = getSquareNumbers()
print("SquaredList_PY: ", SquaredListPY)

# ============M===================I================T================TASK=========L====
'''
print("=====$$$============= BIRINCHI USUL ==============$$$=====")

def reverseSentence1(sentence):
    words = sentence.split(" ")
    reversed_words = []

    for word in words:
        reversed_words.append(word[::-1])

    return " ".join(reversed_words)


FinalResult1 = reverseSentence1("I have been to Italy two times!")
print("FinalResult1: ", FinalResult1)

print("=====$$$========== IKKINCHI USUL ==============$$$=====")


def reverse_sentence(sentence):
    return " ".join([word[::-1] for word in sentence.split()])


FinalResult2 = reverseSentence1("I have been to Italy two times!")
print("FinalResult2: ", FinalResult2)

# TASK L

# So'zlarni ketma-ketligini buzmasdan har bir so'zni alohida teskarisiga o'girib beradigan function tuzing.

# Masalan: reverseSentence("we like coding!") return "ew ekil !gnidoc"

'''
