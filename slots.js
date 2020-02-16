///// NEW JAVASCRIPT FILE //


//var bet = 30
var startingBalance = 1000;
var currentBalance;
var finalBalance;


document.querySelector(".go").addEventListener("click", onClick )
function onClick(){
  //test to see if the slots match and show an updated balance
  // slotLetter1 = "Test";
  // slotLetter2 = "Test";
  // slotLetter3 = "Test";

   slotLetter1 = getRandomSlotItem()
   slotLetter2 = getRandomSlotItem()
   slotLetter3 = getRandomSlotItem()

  const bet = parseInt(document.querySelector("#bet-input").value)
  console.log(`bet is ${bet}`)



  if ((slotLetter1 === slotLetter2) && (slotLetter1 === slotLetter3) && (slotLetter2 === slotLetter3))
  {
    // Winning Case Scenario
     currentBalance = parseInt(document.querySelector(".update").innerHTML)
     console.log(currentBalance)
     currentBalance = currentBalance + (10 * bet)
     console.log(currentBalance);
     document.querySelector(".update").innerHTML = currentBalance
   }
   // Losing Case Scenario
   else{
      currentBalance = parseInt(document.querySelector(".update").innerHTML)
      console.log(currentBalance)
      currentBalance = currentBalance - bet
      console.log(currentBalance);
      document.querySelector(".update").innerHTML = currentBalance
    }

  document.querySelector("#slot1").innerHTML = slotLetter1
  document.querySelector("#slot2").innerHTML = slotLetter2
  document.querySelector("#slot3").innerHTML = slotLetter3

}

function getRandomSlotItem(){
  var itemSelected= Math.floor(Math.random()*5) // pick whole numbers between 1 and 5
  var slotSelect = ["A","B","C","D","E"] //array of possible options for slot
    return slotSelect[itemSelected]
 }
