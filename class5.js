// fizzbuzzz


// for(let i=1;i<=10;i++){
//     if(i%2==0&&i%3==0){
//         console.log(`${i} fizzbuzz`);
//     }
//    else if(i%2==0){
//         console.log(`${i}fizz`)
//     }
//     else if(i%3==0){
//         console.log(`${i}buzz`)
//     }
//     else {
//         console.log(`${i}jackass`)
//     }
// }
// 1. Calculate the sum of all even numbers between 1 and 100

// - Test case 1: Verify that the sum of all even numbers between 1 and 100 is 2550.
// - Test case 2: Verify that the sum of all even numbers between 1 and 50 is 650.
// ans:
    let evesum=0;
    let va=100
    for(let i=0;i<=va;i++){
        if(i%2===0){
            evesum+=i;
        }
    }
    console.log(evesum);
// ans:
//     let evesum=0;
//     for(let i=0;i<=50;i++){
//         if(i%2===0){
//             evesum+=i;
//         }
//     }
//     console.log(evesum);
// 2. Write a program to find the factorial of a given number

// - Test case 1: Input: 5, Expected output: 120
// - Test case 2: Input: 3, Expected output: 6
// ans:
    let fac=1;
    let val=0;
    for(let i=val;i>0;i--){
        fac*=i;
    }
    console.log(fac);
// 3. Determine the number of digits in a given number

// - Test case 1: Input: 123, Expected output: 3
// - Test case 2: Input: 4567, Expected output: 4
// ans:
    let dig=124563;
    for(var i=1;dig>0;i++){
        let mod=dig%10;
        dig-=mod;
        dig/=10;
    }
    console.log(i-1);
// Else-If Ladder:

// 1. Write a program to determine the fare for a taxi ride based on the distance traveled:
//     - 0-5 km: $5
//     - 5-10 km: $10
//     - 10-20 km: $20
//     - Above 20 km: $30 + $5 for every additional km
// ans:
    let fare=21;

    if(fare>0&&fare<=5){
    console.log(5);}
    else if(fare>5&&fare<=10){
        console.log(10);
    }
    else if(fare>10&&fare<=20){
        console.log(20);
    }
    else if(fare>20){
        console.log(30+(5*(fare-20)));
    }
    // 2. Write a program to determine the discount on a product based on the quantity purchased:
    // - 1-5 units: No discount
    // - 6-10 units: 5% discount
    // - 11-20 units: 10% discount
    // - Above 20 units: 15% discount
    // ans:
        let units=21;

        if(units>0&&units<=5){
        console.log("No discount");;
        }
        else if(units>5&&units<=10){
            console.log("5%discount");
        }
        else if(units>10&&units<=20){
            console.log("20%discount");
        }
        else if(units>20){
            console.log("15%discount");
        }
        else{
            console.log("invaild");
        }

    //     Switch Statement:

    //     1. Write a program to determine the type of coffee based on the user's selection:
    //         - 1: Espresso
    //         - 2: Cappuccino
    //         - 3: Latte
    //         - 4: Mocha
    //   ans:
            let coffee=3;
            switch(coffee){
                case 1:
                    console.log("Espresso");
                    break;
                case 2:
                    console.log("Cappuccino");
                    break;
                case 3:
                    console.log("Latte");
                    break;
                case 4:
                    console.log("Mocha");
                    break;
                default:
                    console.log("Not a coffee");
                    
            }
            // 2. Write a program to determine the shipping cost based on the region:
            // - 1: North America ($10)
            // - 2: South America ($20)
            // - 3: Europe ($30)
            // - 4: Asia ($40)
            // - 5: Australia ($50)
            // ans:
            let continent="North America";
            switch(continent){
                case "North America":
                    console.log("$10");
                    break;
                case "South America":
                    console.log("$20");
                    break;
                case "Europe":
                    console.log("$30");
                    break;
                case "Asia":
                    console.log("$40");
                    break;
                case "Australia":
                    console.log("$50");
                    break;
                default:
                    console.log("Not a continent");
                    
            }

