// Select necessary DOM elements
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const shoppingList = document.getElementById('shoppingList');
const clearButton = document.getElementById('clearButton');

// Function to add an item to the shopping list
addButton.addEventListener('click', () => {
  const itemText = itemInput.value.trim();
  if (itemText === '') return; // Prevent adding empty items

  // Create a list item
  const listItem = document.createElement('li');
  listItem.textContent = itemText;

  // Create "Mark Purchased" button
  const markPurchasedButton = document.createElement('button');
  markPurchasedButton.textContent = 'Mark Purchased';
  markPurchasedButton.classList.add('mark-purchased');

  // Add event listener to toggle purchased state
  markPurchasedButton.addEventListener('click', () => {
    listItem.classList.toggle('purchased');
  });

  // Append the button to the list item
  listItem.appendChild(markPurchasedButton);
  shoppingList.appendChild(listItem);

  // Clear the input field after adding the item
  itemInput.value = '';
});

// Clear all items from the shopping list
clearButton.addEventListener('click', () => {
  shoppingList.innerHTML = '';
});
