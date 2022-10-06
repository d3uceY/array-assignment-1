////returns multiples of 2 and 5


function multiplesOfTwoAndFive(num){

    for(let i = 1; i < num;i++ ){
        if (i % 2 === 0 || i % 5 === 0){
            console.log(i);
        }
    }
   
}

multiplesOfTwoAndFive(1000)