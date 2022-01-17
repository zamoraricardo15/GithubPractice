for(var i=1; i<=20; i=i+2) {
    console.log(i);
}

for(var i=100; i>=0; i--) {
    if(i % 3 == 0) {
        console.log(i);
    }
}

for(var i=4; i>-4; i=i-1.5) {
    console.log(i);
}

var sum = 0;
for(var i=1; i<=100; i=i+1) {
    sum = sum + i;
}
console.log(sum);

var product = 1;
for(var i=1; i<=12; i=i+1) {
    product = product * i;
}
console.log(product);