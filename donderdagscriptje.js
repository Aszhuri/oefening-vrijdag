function sayHello() {
  alert("Hello world");
}

function askName() {
  let firstName = prompt('Enter first name:');
  let lastName = prompt('Enter last name:');
  let fullName = firstName + ' ' + lastName;
  if (fullName == 'Alex v') {
    alert('hellooooo you😎');
  } else {
    alert('Hello ' + fullName);
  }
}


function calcBmi() {
  let weight = prompt("Enter weight (kg):")
  let height = prompt("Enter weight (m):")
  let bmi = weight / (height * height)
 alert("Your BMI score is: " + bmi)
 if (bmi < 18.5){
  alert("You are underwweight")
}
else if (bmi >= 18.5 && bmi < 25){
  alert("you have a normal weight, yahoo")
}
else if (bmi >= 25 && bmi < 30){
  alert("getting a little chubby aren't you?")
}
else if (bmi >= 30){
  alert("Whale noises")
}

}

function checkAge() {
    let age = 21
    age = prompt("Enter your age:")
  if (age < 18) {
    alert('Have a bottle of milk🍼');
} else if (age >= 18 && age < 65) {
    alert('lets get wasted🍻');
}
}

function playRps(userChoice) {
  let computerChoice = "rock";
  alert("You: " + userChoice + " vs. Computer: " + computerChoice);
  if (userChoice == computerChoice) {
    alert("It's a tie!");
  } else if (
    (userChoice == "rock" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissors" && computerChoice == "paper")
  ) {
    alert("You win!");
  } else {
    alert("You lose!")
  }
}
function checkInbox() {
  let password = "123";
  let input = prompt("Enter password:");
  while (input != password) {
    alert("🚫Wrong password! Try again...");
    input = prompt("Enter password:");
  }
  alert("✅ Success! Welcome! You can view your emails");
}
function doPushUps(amount) {
  count = 1;
  while (count <= amount) {
    console.log("Push-up #" + count)
    count++;
  }
}
