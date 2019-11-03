# Selection sort
# finding the minimum value, and moving it to the beginning of the list. 
# Then, ignoring the first position, which is now sorted, 
# iterate through the list again to find the next minimum value and move it to index 1.
# by Andras E.	Nov 3, 2019


def swap_pos_i_with_last( i , arra2):
	arra2[i], arra2[ len(arra2)-1 ] = arra2[ len(arra2)-1 ], arra2[i]
	return arra2
#-------------------------------------------- end of swap_pos_i_with_last()


def find_minimum( arra2 ):
	
	remember_i = 0

	if len(arra2) == 0:
		return False
	
	min2 = arra2[0]
	
	for i in range( 0 , len(arra2) , 1):
	
		if min2 > arra2[i]:
			min2 = arra2[i] 
			remember_i = i

	return [remember_i , min2]
#------------------------------------------- end of find_minimum()


def selectionSort( arra ):

	counter = 0
	swap_times = 0

	sorted_list = []

	for i in range( 0 , len( arra ) , 1):

		counter += 1

		minList = find_minimum( arra )
		sorted_list.append(	minList[1] )
		print(arra , "min:" , minList[1] , sorted_list )

		if minList[0] == (len(arra) - 1):
			arra.pop()
		else:
			arra = swap_pos_i_with_last( minList[0] , arra )
			arra.pop()
			swap_times += 1

		print(arra , "min:" , minList[1] , sorted_list ,"\n","*"*10 )

	print( "comparisons counter:" , counter , "		swap times:" , swap_times)
	return sorted_list
#------------------------------------------ end of selectionSort()


arra = [3, 2, 1 ,0 ,100 , -1, -10 , 7, 8 ]
from_sorting = selectionSort(arra)
print(from_sorting)

