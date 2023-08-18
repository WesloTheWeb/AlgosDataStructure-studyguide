## TODO: Look at solution for this validation logic and in JavaScript.
## Key thing here is validation logic and modular code and functions.

'''
Write a function that returns true if and only if the input is a valid string representation of a number.

Your validator should support the following:

- signed values: -5 is valid
- decimal values: 0.5 is valid
- exponential notation: 5e3 is valid
- reject leading and trailing zeros: 055 and 0.50 is not valid
- 0 by itself as a base or exponent is valid

EXAMPLE(S)
print(isNumber("1") == true)
print(isNumber("") == false)
print(isNumber("-") == false)
print(isNumber("nope") == false)
print(isNumber("1234e5") == true)
print(isNumber("5.") == false)
print(isNumber("5-") == false)
print(isNumber("5e") == false)
print(isNumber("e3") == false)
print(isNumber("5.3e4") == true)
print(isNumber("5e4.3") == true )
print(isNumber("5e-4") == true)
print(isNumber("-5e-4") == true)
print(isNumber("5e4e4") == false)
print(isNumber("-5.5") == true)
print(isNumber("-005") == false)
print(isNumber("5E4") == false)

print(isNumber("0e1") == true)
print(isNumber("1e0") == true)
print(isNumber("0e0) == true)
print(isNumber("0e01") == false)
print(isNumber(".5") == false)



Brainstorm:
 - container of invalid characters, can take advantage of includes() method
    - set of valid characters
 - check that there are max one of 'e' and '.', and two of '-'
 - check for zeros at back of decimal or front of (if not decimal), and that there is something to the right of decimal
 - an integer/decimal before, and an integer after the 'e'(but not a leading 0)
 - create helper methods to check if sections are valid decimal, integer
 - check that there is no negative sign after decimal, negative should only come at the begeinning, or immediately after an 'e'
 - check that it's not empty string, that there's at least one digit char
 - create a for(char in string) to separate chars in string and each char(number,sign,etc) you can check with logical statement to verify if its a number
 - split string on e or ., then validate the resulting strings 
    - validate that there are max one of 'e' and '.' by checking the length of the resulting array 


FUNCTION SIGNATURE
function isNumber(str) {
def isNumber(string: str) -> bool:
'''

def isNumber(input):
    validChars = {'e', '-', '.'}
    for char in input:
        if not char.isdigit() and char not in validChars:
            return False

    if 'e' in input:
        splitStr = input.split('e')
        if len(splitStr) != 2:
            return False
        for string in splitStr:
            if not isDecimal(string) and not isInteger(string):
                return False
    else:
        return isDecimal(input)
        
    return True
# 5.
def isDecimal(input):
    if not input:
        return False
    if isInteger(input):
        return True
    if '-' in input[1:]:
        return False
    splitStr = input.split('.')
    if len(splitStr) != 2:
        return False
    if not splitStr[0]:
        return False
    if not splitStr[-1]:
        return False
    if splitStr[-1][-1] == '0':
        return False
    return True

import re
def isInteger(input):
    if not input:
        return False
    if '.' in input:
        return False
    if '-' in input[1:]:
        return False
    if input[0] == '-':
        if len(input) == 1:
            return False
        if input[1] == '0':
            return False
    if input[0] == '0' and input != '0':
        return False
    return True

# def isValidNumber(input):
#    for char in input:
#       if  char.isdigit():
#           
#       if  char.isdecimal():

#       return True

# print(isNumber("1") == True)
# print(isNumber("") == False)
# print(isNumber("-") == False)
# print(isNumber("nope") == False)
# print(isNumber("1234e5") == True)
# print(isNumber("5.") == False) #
# print(isNumber("5-") == False)
# print(isNumber("5e") == False)
# print(isNumber("e3") == False)
print(isNumber("5.3e4") == True) #
print(isNumber("5e4.3") == True ) #
# print(isNumber("5e-4") == True)
# print(isNumber("-5e-4") == True)
# print(isNumber("5e4e4") == False)
# print(isNumber("-5.5") == True)
# print(isNumber("-005") == False) #
# print(isNumber("5E4") == False)
# print(isNumber("0e1") == True)
# print(isNumber("1e0") == True)
# print(isNumber("0e0") == True)
# print(isNumber("0e01") == False)
# print(isNumber(".5") == False) #



# <INT>          <- 0..9+ with no leading 0s
# <DECIMALS>     <- 0..9+ with no trailing 0s
# <FLOAT>        <- <INT> | <INT>.<DECIMALS> | -<INT> | -<INT>.<DECIMALS>
# <VALID_NUMBER> <- <FLOAT> | <FLOAT>e<INT>


def reverseString(string: str) -> str:
  return string[::-1]

def isDigits(string: str) -> bool:
  if not string:
    return False
  if string[0] == '-':
    string = string[1:]
  if string == '0':
    return True
  return string[0] != '0' and string.isdigit()

def isNumberWithoutExponent(string: str) -> bool:
  if string[1:].find('-') != -1:
    return False
  if string == '-':
    return False

  parts = string.split('.')
  if len(parts) > 2:
    return False
  if not isDigits(parts[0]):
    return False
  if len(parts) > 1 and not isDigits(reverseString(parts[1])):
    return False

  return True

def isNumber(string: str) -> bool:
  parts = string.split('e')

  if len(parts) > 2:
    return False
  if not isNumberWithoutExponent(parts[0]):
    return False
  if len(parts) > 1 and not isDigits(parts[1]):
    return False

  return True


# // reverse the string
# function reverse(str) {
#   return str.split('').reverse().join('');
# }

# // true iff integer with no leading 0s
# function isDigits(str) {
#   if (str == null) return false;
#   if (str[0] === '-') str = str.substr(1);
#   if (str === '0') return true;
#   return str[0] !== '0' && /^[0-9]+$/.test(str);
# }

# // true iff float with no leading / trailing 0s
# function isNumberWithoutExponent(str) {
#   if (str.substr(1).indexOf('-') !== -1) return false;
#   if (str === '-') return false;
  
#   const parts = str.split('.');
#   if (parts.length > 2) return false;
#   if (!isDigits(parts[0])) return false;
#   if (parts.length > 1 && !isDigits(reverse(parts[1]))) return false;
  
#   return true;
# }

# // true iff valid number with or without exponent
# function isNumber(str) {
#   const parts = str.split('e');
  
#   if (parts.length > 2) return false;
#   if (!isNumberWithoutExponent(parts[0])) return false;
#   if (parts.length > 1 && !isDigits(parts[1])) return false;
  
#   return true;
# }