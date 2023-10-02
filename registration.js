// Get the form element.
const form = document.querySelector('form');

// Add an event listener to the submit button.
form.addEventListener('submit', async (event) => {
  // Prevent the default form submission.
  event.preventDefault();

  // Get the form data.
  const studentType = form.querySelector('select[name="student_type"]').value;
  const residency = form.querySelector('select[name="residency"]').value;
  const creditsTaking = form.querySelector('input[name="credits_taking"]').value;

  // Calculate the registration fee.
  const registrationFee = calculateRegistrationFee(studentType, residency);

  // Calculate the tuition rate.
  const tuitionRate = calculateTuitionRate(studentType, residency);

  // Calculate the tuition.
  const tuition = tuitionRate * creditsTaking;

  // Calculate the total fee.
  const totalFee = registrationFee + tuition;

  // Display the results.
  const results = document.createElement('div');
  results.innerHTML = `
    <h2>Registration Results</h2>
    <ul>
      <li>Registration Fee: ${registrationFee}</li>
      <li>Tuition Rate: ${tuitionRate}</li>
      <li>Tuition: ${tuition}</li>
      <li>Total Fee: ${totalFee}</li>
    </ul>
  `;
  document.body.appendChild(results);
});

// Calculate the registration fee.
function calculateRegistrationFee(studentType, residency) {
  if (studentType === 'bachelor' && residency === 'in-state') {
    return 200;
  } else if (studentType === 'bachelor' && residency === 'out-of-state') {
    return 600;
  } else if (studentType === 'master' && residency === 'in-state') {
    return 300;
  } else if (studentType === 'master' && residency === 'out-of-state') {
    return 900;
  } else {
    throw new Error('Invalid student type or residency');
  }
}

// Calculate the tuition rate.
function calculateTuitionRate(studentType, residency) {
  if (studentType === 'bachelor' && residency === 'in-state') {
    return 350;
  } else if (studentType === 'bachelor' && residency === 'out-of-state') {
    return 700;
  } else if (studentType === 'master' && residency === 'in-state') {
    return 450;
  } else if (studentType === 'master' && residency === 'out-of-state') {
    return 900;
  } else {
    throw new Error('Invalid student type or residency');
  }
}