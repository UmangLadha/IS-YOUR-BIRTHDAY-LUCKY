const inputDob = document.querySelector("#DOB")
const inputNumb = document.querySelector("#numb")
const checkBtn = document.querySelector("#check-btn")
const outputTxt = document.querySelector("#output")

 
checkBtn.addEventListener("click", checkDob)

function checkDob(){
	let dob = inputDob.value;
	const numb = inputNumb.value;
    const sum = calculateSum(dob,numb)
	if(sum&&numb){
    compareValue(sum&&numb) 
	}
	else{
	outputTxt.innerText = "Please enter Both the Fields!!"}

}

function calculateSum(dob,numb){
	let sum= 0;
	dob=dob.replaceAll("-","")
	for(let i=0; i<dob.length; i++){
	    let numbers = dob.charAt(i)
		sum = sum + Number(numbers)
	}
	if(sum%numb===0){
		outputTxt.innerText = "Your Birthday Is Lucky!!"
	}
	else{
		outputTxt.innerText = "Your Birthday Is Not Lucky!!"
	}
	return sum
}
