function purchase(price, pay){

    if(price > pay){
        console.log('Too expensive.');
    }

    else{
        console.log('Price: ' + price + 'kr.');
        console.log('Payment: ' + pay + 'kr.');
        console.log('Change: ' + (pay-price) + 'kr.');

        let d100, d50, d20, d10, d5, d2, d1;
        let change = pay - price;

        d100 = Math.floor( (change)/100 );
        change = change-d100*100;

        d50 = Math.floor( (change)/50 );
        change = change-d50*50;

        d20 = Math.floor( (change)/20 );
        change = change-d20*20;

        d10 = Math.floor( (change)/10 );
        change = change-d10*10;

        d5 = Math.floor( (change)/5 );
        change = change-d5*5;

        d2 = Math.floor( (change)/2 );
        change = change-d2*2;

        d1 = Math.floor( (change)/1 );
        change = change-d1*1;


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



purchase(100, 251); //price, pay