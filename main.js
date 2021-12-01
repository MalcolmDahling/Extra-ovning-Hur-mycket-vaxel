function purchase(price, pay){

    if(price > pay){
        console.log('Too expensive.');
    }

    else{
        console.log('Price: ' + price + 'kr.');
        console.log('Payment: ' + pay + 'kr.');
        console.log('Change: ' + (pay-price) + 'kr.');

        let d100, d50, d20, d10, d5, d2, d1;
        let a;

        d100 = Math.floor((pay-price)/100);

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