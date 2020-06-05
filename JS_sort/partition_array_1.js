// Works !  2020 June 4 Thursday

// Hoare partition algorithm

// It is used in the Quicksort algorithm


// ara = [ 0 , 13 , 14 , 15 , 7 , 6 , 8 , 3];

ara = [ 4 , 0 , 3 , 5 , 2 ];


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


console.log('\n');

console.log( ara , '\nlow=' , low , '\nhigh=', high , '\n' );

pivot_index = hoare_partition( ara , low , high );

console.log('\n');

console.log( 'pivot_index ='  , pivot_index );

console.log( 'array_partitioned =' , ara );


