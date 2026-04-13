const form = document.getElementById("flatmateForm");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());

  result.innerHTML = `
    <h3>Submitted Profile</h3>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Study / Profession:</strong> ${data.study}</p>
    <p><strong>Budget:</strong> ₹${data.budget}</p>
    <p><strong>Reading Time:</strong> ${data.readingTime}</p>
    <p><strong>Bed Time:</strong> ${data.bedTime}</p>
    <p><strong>Good Habits:</strong> ${data.goodHabits}</p>
    <p><strong>Bad Habits:</strong> ${data.badHabits}</p>
    <p><strong>Location (Greater Noida):</strong> ${data.location}</p>
  `;

  form.reset();
});
