/*    2020 June 2 Tuesday

Bubble sort (Sinking sort) is a sorting algorithm.
        
"Bubbles" (moves) the highest number to the end of the list.

Repeatedly steps through the list until the list is sorted,
compares adjacent elements and swaps them if they are in the wrong order.

Iterations through the list = length_of_the_list - 1
That is why the 1st for loop iterates until i < length_of_the_list

*/



// 1. Example (2 for loops)(nested loops):  unsorted numbers
// the length of the array is 5 (elements of the array)
// meaning that the total iterations when sorted will be 5 - 1 = 4 times through the list.

console.log('\n\n** 1. Example *******\n');

const array_unsorted = [ 5 , 1 , 4 , 2 , 100 , 98 , 0 ];



for( i = 0 ; i < array_unsorted.length ; i++ ){

    console.log( 'Iterations through the list = elements correctly at the end of the list = i =' , i , '\n');

    for( j = 0 ; j < array_unsorted.length - 1 - i ; j++ ){

        console.log( 'Index of the list j =' , j );

        if( array_unsorted[ j ] > array_unsorted[ j + 1 ] ) {
            
            let tmp = array_unsorted[ j ];
            array_unsorted[ j ] = array_unsorted[ j + 1 ];
            array_unsorted[ j + 1 ] = tmp;

            console.log( 'Swapped' , array_unsorted , '\n' );
        }
    }
}


console.log( 'Sorted list' , array_unsorted );


//////////////////////////////////////////////////////////////////////


// 2. Example (while loop & for loop)

console.log('\n\n** 2. Example *******\n');

const array_unsorted2 = [ 5 , 1 , 4 , 2 , 3 , 100 , 98 , 99 , 0 ];



let swapping = true;

while( swapping ){

    swapping = false;

    for( j = 0 ; j < array_unsorted2.length - 1 ; j++ ){

        console.log( 'Index of the list j =' , j );

        if( array_unsorted2[ j ] > array_unsorted2[ j + 1 ] ) {
            
            let tmp = array_unsorted2[ j ];
            array_unsorted2[ j ] = array_unsorted2[ j + 1 ];
            array_unsorted2[ j + 1 ] = tmp;

            swapping = true;
            
            console.log( swapping );

            console.log( 'Swapped' , array_unsorted2 , '\n' );
        
        } 
    }
}


console.log( 'Sorted list' , array_unsorted2 );


//////////////////////////////////////////////////////////////////////

// 3. (not ready) (not complete) Example with 1 for loop & an iteration counter

// console.log('\n** 3. Example **');

// const array_unsorted2 = [ 5 , 1 , 4 , 2 , 3 , 100 , 98 , 99 , 0 ];

// let iterations = 0;



// for( j = 0 ; j < array_unsorted2.length - 1 - iterations ; j++ ){

//     console.log( 'iterations =' , iterations , 'Index of the list j =' , j );

//     if( array_unsorted2[ j ] > array_unsorted2[ j + 1 ] ) {
        
//         let tmp = array_unsorted2[ j ];
//         array_unsorted2[ j ] = array_unsorted2[ j + 1 ];
//         array_unsorted2[ j + 1 ] = tmp;

//         console.log( 'Swapped' , array_unsorted2 );
//     }

   
//     if( j === array_unsorted2.length - 2 - iterations){
//         iterations++;
//         j = 0;
//         console.log('if statement j=', j );
//     }

// }


// console.log( 'Sorted list' , array_unsorted2 );



// 4. Sorting an array with strings


console.log('\n\n** 4. Example sorting an array with strings *******\n');

const array_unsorted4 = [ 'Apple' , 'apple' , 'Andrew' , 'Andy' , 'A' , 'a' , 'Ana' , 'Amor' ];



let swapping4 = true;

while( swapping4 ){

    swapping4 = false;

    for( j = 0 ; j < array_unsorted4.length - 1 ; j++ ){

        console.log( 'Index of the list j =' , j );

        if( array_unsorted4[ j ] > array_unsorted4[ j + 1 ] ) {
            
            let tmp = array_unsorted4[ j ];
            array_unsorted4[ j ] = array_unsorted4[ j + 1 ];
            array_unsorted4[ j + 1 ] = tmp;

            swapping4 = true;
            
            console.log( swapping4 );

            console.log( 'Swapped' , array_unsorted4 );
        
        } 
    }
}


console.log( 'Sorted list' , array_unsorted4 );


