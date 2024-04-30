let num = 100; 
let count = 0;

while (count < 50) {
    let i = 2;
    let primo = true;

    while (i * i <= num) {
        if (num % i === 0) {
            primo = false;
            break;
        }
        i++;
    }

    if (primo) {
        console.log(num);
        count++;
    }

    num++;
}