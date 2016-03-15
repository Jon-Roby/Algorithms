# Print
print(2 + 3 * 4)

# List
[1, 3, True, 6.5]

# List Operations
list1 = ["zero", "one", "two", "three"]
list2 = ["four", "five", "six"]

list1[2] # indexing
list1 + list2 # concatenation
[2] * 5 # repetition
"five" in list2 # membership
len(list2) # length
print(list1[0:2]) # slice - first number is the index, and second is the number of elements

# List Methods
list1.append("four")
list1.insert(1, "hello")
list2.pop()
list2.pop(1)
list1.sort()
list1.reverse()
del list1[2]
list1.index("one")
list1.count("zero")
list1.remove("one")

# Range with list function
print( list(range(10)) )
print( list(range(5, 10) ))
print( list(range(5, 10, 2)))

# Strings are immutable

# Tuples are similar to lists, but are immutable

# Sets are an unordered collection of immutable Python data objects
# They don't allow duplicates
# membership ... in
# length ... len
# | ... inclusion
# & ... common
# - ... returns a new set with all items from first set not in second
# <= ... whether all elements of the first set are in the second

# Dictionary

capitals = {'Iowa': 'DesMoines', 'Wisconsin':'Madison'}
for k in capitals:
    print(capitals[k])
