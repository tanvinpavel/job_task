let cardDistributionData = [
    { name: "Mr Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2 },
    { name: "Mr Raju", birthYear: 1995, currentYear: 2022, district: "Rajshahi", postNo: 1211, priority: 1 },
    { name: "Mr Pavel", birthYear: 1995, currentYear: 2022, district: "Chittagong", postNo: 1211, priority: 1 }
];

function cardDistribution(data){

    //sorting array for dist
    data.sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        if(fa == fb){
            return a.priority - b.priority;
        }
    });
    

    let output = data.map((d, index) => {
        let cardNumber = '';
        let gift;
        let {birthYear, currentYear, district, postNo, priority} = d;

        let currentYearStr = currentYear.toString();
        let postNoStr = postNo.toString();
        let currentNum = (index+1).toString();

        cardNumber += (district[0]+district[1]).toUpperCase();
        cardNumber += currentYearStr[currentYearStr.length-1]+currentYearStr[currentYearStr.length-2];
        cardNumber += postNoStr[0]+postNoStr[1];
        cardNumber += birthYear;
        //add padding 0
        for(let i=1; i<=(6-(currentNum.length)); i++){
            cardNumber += 0;
        }
        cardNumber += data.length - index;

        //gift
        if((data.length - index) % 2 === 0){
            gift = 'R';
        }else{
            gift = 'W';
        }



        return {cardNumber, gift, priority};
    });

    return output;
}


let start = performance.now()
console.log(cardDistribution(cardDistributionData));
let end = performance.now()

console.log('total time needed: ', end-start);