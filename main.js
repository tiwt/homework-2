//задание 1
var age = 18;
if (age>=1 && age<=17) {
	console.log("Учеба");
}
else if (age>=18 && age<=64) {
	console.log("Работа");
}
else if (age>=65 && age<=100) {
	console.log("Пенсия");
}

//задание 2
var arr = [1,2,3,4,5,6,7,8,9];
var i;

for (i=1;i<10;i++) {
	switch (i) {
		case 1: console.log(arr[0]+" разработчик"); break;
		case 2: console.log(arr[1]+" разработчика"); break;
		case 3: console.log(arr[2]+" разработчика"); break;
		case 4: console.log(arr[3]+" разработчика"); break;
		case 5: console.log(arr[4]+" разработчиков"); break;
		case 6: console.log(arr[5]+" разработчиков"); break;
		case 7: console.log(arr[6]+" разработчиков"); break;
		case 8: console.log(arr[7]+" разработчиков"); break;
		case 9: console.log(arr[8]+" разработчиков"); break;	
	}
}