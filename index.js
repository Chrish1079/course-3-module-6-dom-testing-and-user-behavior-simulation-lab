// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

function createElement(tag, attributes = {}, textContent = '') {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(attributes)) {
    el.setAttribute(key, value);
  }
  if (textContent) el.textContent = textContent;
  return el;
}

function showError(message) {
  const errorBox = document.getElementById('error-message');
  if (!errorBox) return;

  errorBox.textContent = message;
  errorBox.classList.remove('hidden');
}

function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId);
  if (!container) {
    showError(`Container with ID "${containerId}" not found.`);
    return;
  }
  const newEl = createElement('p', { class: 'dynamic-item' }, text);
  container.appendChild(newEl);
}

function removeElementFromDOM(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.remove();
  } else {
    showError(`Element with ID "${elementId}" not found.`);
  }
}

function simulateClick(containerId, text) {
  addElementToDOM(containerId, text);
}

function handleFormSubmit(formId, containerId) {
  const form = document.getElementById(formId);
  const input = form?.querySelector('input');

  if (!input || input.value.trim() === '') {
    showError('Input cannot be empty');
    return;
  }

  addElementToDOM(containerId, input.value.trim());
  input.value = '';
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
    showError,
    createElement,
  };
} else {
  window.addElementToDOM = addElementToDOM;
  window.removeElementFromDOM = removeElementFromDOM;
  window.simulateClick = simulateClick;
  window.handleFormSubmit = handleFormSubmit;
}
