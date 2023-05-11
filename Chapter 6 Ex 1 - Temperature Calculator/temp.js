const convertBtn = document.getElementById('convertBtn'); // Getting the Convert button element
const tempInput = document.getElementById('tempInput');// Gettin the temperature input button element
const results = document.getElementById('results');// Getting the results display element

convertBtn.addEventListener('click', function() {
	// toGet the Fahrenheit value from the input field
	const fahrenheit = tempInput.value;
	// to Convert Fahrenheit to Celsius using the formula (F - 32) * 5/9
	const celsius = (fahrenheit - 32) * 5/9;
	// to convert celsius to Kelvin using the formula C + 273.15
	const kelvin = celsius + 273.15;
	
	// to Round the converted values to two decimal places using multiplication and division
	const roundedCelsius = Math.round(celsius * 100) / 100;
	const roundedKelvin = Math.round(kelvin * 100) / 100;
	
	// to Update the results div with the rounded converted values
	results.innerHTML = "Celsius: " + roundedCelsius + " °C<br>" + "Kelvin: " + roundedKelvin + " K";
});
