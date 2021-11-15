 const options = document.querySelectorAll(".options");

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const pInput = this.textContent;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        compareInputs(pInput, cInput);
      });
    });
function compareInputs(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;

  // Tie check
  if (pInput === cInput) {
	alert(`${currentMatch} Tie`);
	return;
  }

  // Rock
  if (pInput === "Rock") {
	if (cInput === "Scissors") {
	  alert(`${currentMatch} = Victorious!, click ok to try again`);
	} 
	else {
	  alert(`${currentMatch} = You Lose, click ok to try again `);
	}
  }
  // Paper
  else if (pInput === "Paper") {
	if (cInput === "Rock") {
	  alert(`${currentMatch} = Winner Winner Chicken Dinner!, click ok to try again`);
	} 
	else {
	  alert(`${currentMatch} = You Lose, click ok to try again`);
	}
  }
  // Scissors
  else {
	if (cInput === "Paper") {
	  alert(`${currentMatch} = Simply the Best!, click ok to try again`);
	} 
	else {
	  alert(`${currentMatch} = You Lose, click ok to try again`);
	}
  }
}