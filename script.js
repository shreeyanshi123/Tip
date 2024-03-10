const billAmountInput = document.getElementById('bill-amount');
const tipPercentageInput = document.getElementById('tip-percentage');
const numPeopleInput = document.getElementById('num-people');
const tipAmountOutput = document.getElementById('tip-amount');
const totalPerPersonOutput = document.getElementById('total-per-person');
const calculateTipButton = document.getElementById('calculate-tip');

calculateTipButton.addEventListener('click', () => {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value) / 100;
  const numPeople = parseInt(numPeopleInput.value);

  const tipAmount = billAmount * tipPercentage;
  const totalPerPerson = (billAmount + tipAmount) / numPeople;

  tipAmountOutput.textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
  totalPerPersonOutput.textContent = `Total Per Person: $${totalPerPerson.toFixed(2)}`;
});
