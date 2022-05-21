# custom exceptions
class Error(Exception):
    pass
class InvalidOperator(Error):
    pass

# error catching block
while True:
    try:
        number_1 = int(input('Enter first number: '))
    except ValueError:
        print('Integer expected!')
    else:
        break
    
while True:
    try:
        operator = input('Enter operator "/", "*", "%", "+", "-": ')
        if operator not in ['/', '+', '-', '*', '%']:
            raise InvalidOperator
    except InvalidOperator:
        print('Invalid operator!')
    else:
        break
    
while True:
    try:
        number_2= int(input('Enter second number: '))
    except ValueError:
        print('Integer expected!')
    else:
        break
    
if operator == "+":
    print(f"{number_1 + number_2}")
elif operator == "-":
    print(f"{number_1, number_2}")
elif operator == "*":
    print(f"{number_1*number_2}")
elif operator == "/":
    try:
        number_1 / number_2
    except ZeroDivisionError:
        print("Division by zero is impossible!")
    else:
        print(f"{number_1/number_2}")
elif operator == "%":
    print(f"{number_1 % number_2}")


