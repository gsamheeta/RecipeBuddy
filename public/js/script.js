// real code

let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredeintDiv = document.querySelectorAll('.ingredeintDiv')[0];

addIngredientsBtn.addEventListener('click', function(){
  let newIngredients = ingredeintDiv.cloneNode(true);
  let input = newIngredients.getElementsByTagName('input')[0];
  input.value = '';
  ingredientList.appendChild(newIngredients);
});

// real code

// chatgpt

// let addIngredientsBtn = document.getElementById('addIngredientsBtn');
// let ingredientList = document.querySelector('.ingredientList');

// // Correct the class name if it's a typo
// let ingredientDiv = document.querySelector('.ingredientDiv'); // Use querySelector to get the first element

// addIngredientsBtn.addEventListener('click', function() {
//   // Ensure the ingredientDiv is found
//   if (ingredientDiv) {
//     let newIngredients = ingredientDiv.cloneNode(true);
//     let input = newIngredients.getElementsByTagName('input')[0];
//     input.value = '';
//     input.name = 'ingredients[]'; // Ensure the name is correct for the backend to parse
//     ingredientList.appendChild(newIngredients);
//   } else {
//     console.error('Ingredient div not found.');
//   }
// });



// // chatgpt
// document.addEventListener('DOMContentLoaded', function() {
//   const ingredientList = document.querySelector('.ingredientList');
//   ingredientList.addEventListener('click', function(event) {
//     if (event.target.classList.contains('delete-ingredient')) {
//       const ingredientDiv = event.target.closest('.ingredientDiv');
//       ingredientList.removeChild(ingredientDiv);
//     }
//   });
// });
