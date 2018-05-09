	function calculatePayPal()
	{
		var numberToCalc = document.getElementById("calc").value;
		var fee;
		
		if (numberToCalc == "")
		{
			alert("דרוש להכניס מספר לחישוב העמלות");
			clearFields();
			return;
		}
		
		numberToCalc = parseFloat(numberToCalc);
		if (isNaN(numberToCalc) || numberToCalc < 0 )
		{
			alert("הכנס מספר תקין לחישוב עמלות");
			clearFields();
			return;
		}
		
		document.getElementById("resultsDiv").style.display ="block";
		
		if (numberToCalc >= 0 && numberToCalc <=  12000)
		{
			fee = ((numberToCalc * 3.4) / 100) + 1.2;
		}
		else if (numberToCalc > 12000 && numberToCalc <=  40000)
		{
			fee = ((numberToCalc * 2.9) / 100) + 1.2;
		}
		else if (numberToCalc > 40000 && numberToCalc <=  400000)
		{
			fee = ((numberToCalc * 2.7) / 100) + 1.2;
		}
		else if (numberToCalc > 400000)
		{
			fee = ((numberToCalc * 2.4) / 100) + 1.2;
		}
		
		
		document.getElementById("result").value = fee.toFixed(2);
		receivePaypal();
		
		document.getElementById("howMuchToPay").innerHTML="אם שולחים לכם סכום של <span class=\"numColorBlue\"> " + numberToCalc.toFixed(2) + "₪ </span><br /> תשלום העמלה יהיה <span class=\"numColorRed\"> " + fee.toFixed(2) + "₪ </span><br /> ישאר לכם בכיס רק <span class=\"numColorGreen\"> " + ((numberToCalc.toFixed(2)-fee.toFixed(2)).toFixed(2)) + "₪</span>";
	}
	
	function clearFields()
	{
		document.getElementById("calc").value = "";
		document.getElementById("result").value = "";
		document.getElementById("receive").value = "";
	}

	function receivePaypal()
	{
		var rNumberToCalc = document.getElementById("calc").value;
		var rFee;
		
		rNumberToCalc = parseFloat(rNumberToCalc);
		
		if (rNumberToCalc >= 0 && rNumberToCalc <=  12000)
		{
			rFee = (rNumberToCalc + 1.2) / (1 - 0.034);
		}
		else if (rNumberToCalc > 12000 && rNumberToCalc <=  40000)
		{
			rFee = (rNumberToCalc + 1.2) / (1 - 0.029);
		}
		else if (rNumberToCalc > 40000 && rNumberToCalc <=  400000)
		{
			rFee = (rNumberToCalc + 1.2) / (1 - 0.027);
		}
		else if (rNumberToCalc > 400000)
		{
			rFee = (rNumberToCalc + 1.2) / (1 - 0.024);
		}

		document.getElementById("receive").value = rFee.toFixed(2);
		
		document.getElementById("howMuchYouGet").innerHTML="אם אתם רוצים לקבל <span class=\"numColorGreen\">" + rNumberToCalc.toFixed(2) + "₪</span><br /> אתם צריכים לבקש <span class=\"numColorRed\">" + rFee.toFixed(2) + "₪</span>";
		
	}
	
