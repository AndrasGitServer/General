# By Andras E. Nov 3, 2019. with help from Michael Choi Coding Dojo's founder.

def bubbleSort(arra):

	count = 0
	swaps = 0

	if len(arra) == 0:
		return "The array is empty."

	if len(arra) == 1:
		return "The array has 1 element."

	for k in range(0, len(arra)-1, 1):
		
		for i in range(0, len(arra) - 1 - k, 1):
			
			print("index", i, "	value", arra[i])

			count += 1
			
			if arra[i] > arra[i+1]:
				arra[i], arra[i+1] = arra[i+1], arra[i]
				print("swapped", arra[i], arra[i+1])
				swaps += 1

	print( "values compared times:" , count , "	swapped times:" , swaps)
	return arra

# ------------------------------------------------


arra = [8, 1, 5, 3, 2, 0]
# arra = [8,7,6,5,4,3]
# arra = [ 1,2,3,4,5,6]

print( arra )

from_function_value = bubbleSort(arra)

print(from_function_value)
