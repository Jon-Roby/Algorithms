# counter = 1
# while counter <= 5:
#     print "Hello World"
#     counter = counter + 1

# counter = 1
# while counter <= 5 and not False:
#     print "Hello World"
#     counter = counter + 1

# for item in [1,3,6,2,5]:
#     print(item)

# for item in range(5):
#     print(item**2)

# wordlist = ['cat', 'dog', 'rabbit']
# letterlist = []
# for word in wordlist:
#     for letter in word:
#         letterlist.append(letter)
# print(letterlist)

# sqlist = []
# for x in range(1, 11):
#     sqlist.append(x * x)
#
# print sqlist

# sqlist = [x * x for x in range(1, 11)]
# print sqlist

# sqlist = [x * x for x in range(1, 11) if x*x > 25]
# print sqlist

list1 = [ch.upper() for ch in 'comprehension' if ch not in 'aeiou']

print list1
