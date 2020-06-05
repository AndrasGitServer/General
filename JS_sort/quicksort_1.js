// Works !  2020 June 4 Thursday

// ara = [ 3, 2 , 20 , 0 ,  13 , 15 , 5 , 100 , 98 , 50 , 1 , 7 , 71, 70 , 72 , 69 , 73 ];

// ara = [ 5 , 4 , 3 , 0 , 1]

ara = [ 71 , 0 , 2 , 5 , 1 , 3 , 7 , 4 ];

let low  = 0;
let high = ara.length - 1;


function swap( index1 , index2 ){
    let temp = ara[index1];
    ara[index1] = ara[index2];
    ara[index2] = temp;
}


function hoare_partition( ara , low_index , high_index ) {


    // control for quicksort if there is only 2 elements in the array already sorted
    // if (low_index == high_index || ((high_index - low_index) == 1 )) return high_index;
    // Does not need this 1 line of code because it is controlled in the algorithm afterwards ! 


    // let pi_index = Math.floor( ( high_index - low_index ) / 2 ) ;
    // Calculating about the middle of the array was not working before, try again ! 
    let pi_index = low_index;
    

    console.log( ara , '\nlow_index=' , low_index , '\nhigh_index=', high_index , '\npi_index=' , pi_index , '\n');
    

    while( low_index != high_index ) {


        while( ara[low_index] < ara[pi_index] && low_index != pi_index) {
            low_index++;
        } 
        

        // now low_index is bigger than the pivot & ready to swap
        

        while( ara[high_index] > ara[pi_index] && high_index != pi_index) {
            high_index--;
        } 
        

        // now high_index is smaller than the pivot & ready to swap

        swap( low_index, high_index );

                
        console.log( ara , '\nlow_index=' , low_index , '\nhigh_index=', high_index , '\npi_index=' , pi_index , '\n');


        if( high_index == pi_index) {
            pi_index = low_index
        } else if( low_index == pi_index) {
            pi_index = high_index;
        }

    } 

    return low_index;
        
} 

// *****************************************************************


// console.log('\n');

// console.log( ara , '\nlow=' , low , '\nhigh=', high , '\n');

// pivot_index = hoare_partition( ara , low , high );

// console.log('\n');

// console.log( 'pivot_index ='  , pivot_index );

// console.log( 'array_partitioned =' , ara );



// // ** Quicksort ******************************************************


function quicksort( ara , low , high ) {

    counter++;

    // if ( low == high || (high - low == 1) || low > high) {
    if ( low == high || low > high) {
        return;
    }

    let pivot_new_index = hoare_partition( ara , low , high );

    console.log( '**returned pivot=' , pivot_new_index );
    console.log( ara , '\nlow =' , low , '\nhigh =', high ,'\n');
    
    quicksort( ara , low , pivot_new_index );

    console.log( '**returned pivot=' , pivot_new_index );
    console.log( ara , '\nlow =' , low , '\nhigh =', high ,'\n');
    
    quicksort( ara , pivot_new_index + 1 , high );

}


let counter = 0;

quicksort( ara , low , high );

console.log( '\nHow many times quicksort() was called (stacks) counter =' , counter );

if( counter == 1) console.log( ara );
