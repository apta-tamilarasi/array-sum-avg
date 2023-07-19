var arr=[12, 13, 40, 33, 45, 22, 94];

	document.write("Given array is "+"[12, 13, 40, 33, 45, 22, 94]"+"<br><br>");
	
	sum=0;
for (let i=0; i<arr.length; i++){
		sum=sum+arr[i];
	}
	document.write("sum of the array is "+sum+"<br><br>");
	avg=sum/arr.length;
	document.write("Average of the array is "+avg+"<br>");
