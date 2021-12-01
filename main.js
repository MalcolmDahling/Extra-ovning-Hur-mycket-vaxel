function purchase(price, payment){

    if(price > payment){
        console.log('Too expensive.');
    }

    else{
        let d100 = (payment-price)/100;
        let d50 = (payment-price)/50;
        let d20 = (payment-price)/20;
        let d10 = (payment-price)/10;
        let d5 = (payment-price)/5;
        let d2 = (payment-price)/2;
        let d1 = (payment-price)/1;


        let pay = payment;
        pay = pay%100;




        console.log('Price: ' + price + 'kr.');
        console.log('Payment: ' + payment + 'kr.');
        console.log('Change: ' + (payment-price) + 'kr.');
        console.log('Change denominations:');
        console.log('100kr note: ' + d100);
        console.log('50kr note: ' + d50);
        console.log('20kr note: ' + d20);
        console.log('10kr coin: ' + d10);
        console.log('5kr coin: ' + d5)
        console.log('2kr coin: ' + d2);
        console.log('1kr coin: ' + d1);
    }
}



purchase(100, 250);