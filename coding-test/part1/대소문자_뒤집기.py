str = input()

res = ''

for char in str:
    if char.isupper():
        res += char.lower()
    elif char.islower():
        res += char.upper()
print(res)