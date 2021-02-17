1. The length of the prices array will be printed out to the console. This happens because i is a var, so it ignores scope and will hold the last value asigned to it.
2. The price of the last entry in the prices list, with a discount according to the discount variable, is printed to the console. Again, this happens because var ignores scope.
3. The discounted price of the last entry in the prices list will be printed to the console. Again, finalPrice is a var, but it is actually properly scoped this time.
4. [150,100,50] will be returned. The function calculates discounted prices for each entry in the prices list, discounted by the discount value. Because they are being pushed into the discounted list, discounted will be in reverse order of the prices list.
5. "ReferenceError: i is not defined" will be output, because i is not in the same scope as line 11.
6. "ReferenceError: discountedPrice is not defined" will be output, because discountedPrice is not in the same scope as line 12.
7. The discounted price of the last entry in the prices list will be printed to the console. Though finalPrice is declared with a let, it is in the same scope as line 13, though the changes made to it by the for loop will be preserved.
8. Same as before, [150,100,50] will be returned. The function calculates discounted prices for each entry in the prices list, discounted by the discount value. The explanation is very close to the explanation for question 4.
9. "ReferenceError: i is not defined" will be output, because i is not in the same scope as line 11.
10. "ReferenceError: discountedPrice is not defined" will be output, because discountedPrice is not in the same scope as line 12.
11. 0 will be output to the console, because finalPrice cannot be changed as it has been declared as a const.
12. An empty list will be returned. Because discounted was declared with a const, it cannot be changed after its declaration.
13. A. student['name']
    B. student['Grad Year']
	C. person.greeting();
	D. student['Favorite Teacher'].name
	E. student.courseLoad[0]
14. A. 32	First digit starts with quotes, therefore second part is appended
	B. 1	Subtraction interprets a string digit with its int value
	C. 3	null is evaluated as zero when adding it to a digit
	D. 3null	First digit starts with quotes, so null gets appended
	E. 4	true is equivalent to a 1
	F. 0	false and null are both evaluated as zero
	G. 3undefined	"3" is a string, so a + appends
	H. NaN	undefined converts to NaN in a numeric operation
15. A. true		Type conversion is happening here, of course 2 is greater than 1
    B. false	Dictionary comparison because both have quotes, 2 comes after 1 in the alphabet
	C. true		Type conversion is happening
	D. false	Triple equals, so no type conversion
	E. false	Type conversion is happening here, and true converts to 1
	F. true		Any value 1 or greater is converted to true by the Boolean function
16. Double equals does type conversion when comparing two objects, triple equals does not.
17. "How are you?" is printed. 2 != true, because type conversion is happening, and true is converted to 1. However, in the bounds of the else if condition, 2 is converted to a boolean true, so it is the case that is triggered
19. [6,8,10]	For each number in [1,2,3], the number is passed to the callback value of modifyArray (the doSomething funciton). In turn this passes the number into the callback value of the doSomething function, which is the unnamed x*2 function. Thus, every number n in [1,2,3] is processed as (n+2)*2
21. 1	4	3	2
