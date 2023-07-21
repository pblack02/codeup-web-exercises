(() => {
    const url = './data/houses.json'
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then(houses => {
            console.log(houses);
            // working with loops
            // const houseTwoBeds = [];
            // for (let house of houses){
            //     const numberOfBeds = parseFloat(house.beds);
            //     if (numberOfBeds >= 2){
            //         houseTwoBeds.push(house)
            //     }
            // }
            // console.log(houseTwoBeds);

// you can chain .filter and .map --
            // using .filter instead.-- when you want to filiter an array through a condtion
            const housesTwoBedPlus = houses.filter(house => {
                return parseFloat(house.beds) >= 2;
            })
            console.log(housesTwoBedPlus);


        // map Method -- transform each element in an array/ and return a new array
    let housePriceRange = houses.map(house => {
        const priceRange = 200_000;
        const canBuy = parseFloat(house.price) > priceRange ? 'Nope' : 'yes';
        const newValue = `
   Address: ${house.address}
   can i afford it: ${canBuy}`
        return newValue;
    });
    for (let house of housePriceRange){
        console.log(house);
    };

    // reduce method --
            // find the most expensive house
            // houses.reduce((ac) => {}, /*function prameter*/, /*what type of data/*);
    const largestPrice = houses.reduce(/*function prameter*/(accumulator, house, index) => {
         let price = parseFloat(house.price);
         if (price > accumulator){
             accumulator = price;
         }
         return accumulator;

     },
      /*initial value for accum*/      0);
            console.log(largestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));




        });

})();