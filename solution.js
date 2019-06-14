//comparing integers
function compareIntegers(first, second) {
    var larger;
    if (first >= second) {
        larger = first;
    } else {
        larger = second;
    }

    console.log('The larger integer is ' + larger);
}

compareIntegers(3, 7);
compareIntegers(20, 5);
compareIntegers(4, 1);

//---------------------------------------------------
//even and odd numbers
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}

//---------------------------------------------------
//multiples

function multiples() {
    var sum = 0;
    for (let i = 0; i < 1000; i++) {
        if ((i % 3 == 0) && (i % 5 == 0) ) {
            sum += i;
        }
    }

    console.log('The sum of the multiples of 3 and 5 under 1000 is ' + sum);
}

multiples();

//---------------------------------------------------
//grades

function assignGrade(score) {
    var grade;
    if (score >= 90 && score <= 100) {
        grade = 'A';
    } else if (score >= 80 && score < 90) {
        grade = 'B';
    } else if (score >= 70 && score < 80) {
        grade = 'C';
    } else if (score >= 60 && score < 70) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    console.log('For ' + score + ' you got a ' + grade);
}

assignGrade(93);
assignGrade(67);
assignGrade(52);
assignGrade(85);
assignGrade(70);

for (var i = 60; i <= 100; i++) {
    assignGrade(i);   
}