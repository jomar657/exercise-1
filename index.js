var lastName = prompt('ENTER LAST NAME:');
var firstName = prompt('ENTER FIRST NAME:');
var firstSubject = parseInt(prompt ('First Subject:'));
var secondSubject = parseInt(prompt ('Second Subject:'));
var thirdSubject = parseInt(prompt ('Third Subject:'));
var totalGrades = firstSubject + secondSubject + thirdSubject
var averageGrade = totalGrades / 3
var GRADES = "";
    if (averageGrade > 74 && averageGrade < 99 )
{
    GRADES = "PASS";

}
else if (averageGrade < 100 && averageGrade <1000)
{
    GRADES = "FAIL";

}

else 
{
   GRADES = "INVALID INPUT";
}




alert (
 'NAME: ' + lastName + ', ' + firstName + '\n'
+'First Subject: ' + firstSubject+ '\n'
+'Second Subject: ' + secondSubject+ '\n'
+'Third Subject: ' + thirdSubject+ '\n'
+ 'TOTAL Grades: ' + totalGrades +'\n'
+'AVERAGE: ' + averageGrade + '\n'
+'STATUS: ' + GRADES + '\n'
)