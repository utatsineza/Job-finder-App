let currentPage = 1;

// Event listener for form submission
document.getElementById("job-search-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  currentPage = 1; // Reset page number
  await fetchJobs(); // Fetch jobs on form submission
});

// Function to fetch and display jobs
async function fetchJobs() {
  const jobTitle = document.getElementById("job-title").value.trim();
  const location = document.getElementById("location").value.trim();
  const resultsContainer = document.getElementById("job-results");

  resultsContainer.innerHTML = '<p>Loading...</p>'; // Display loading message

  try {
    const response = await fetch(
      `https://api.adzuna.com/v1/api/jobs/gb/search/${currentPage}?app_id=f588f183&app_key=a32df00213437c69b0f2673bb7edd9e4&what=${encodeURIComponent(jobTitle)}&where=${encodeURIComponent(location)}`
    );

    if (!response.ok) throw new Error("Failed to fetch jobs.");

    const data = await response.json();
    displayJobs(data.results);
    handlePagination(data); // Handle pagination if applicable
  } catch (error) {
    resultsContainer.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

// Function to display job listings
function displayJobs(jobs) {
  const resultsContainer = document.getElementById("job-results");
  resultsContainer.innerHTML = ""; // Clear previous results

  if (jobs.length === 0) {
    resultsContainer.innerHTML = "<p>No jobs found. Try another search.</p>";
    return;
  }

  jobs.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");

    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company.display_name}</p>
      <p><strong>Location:</strong> ${job.location.display_name}</p>
      <p>${job.description.substring(0, 200)}...</p>
      <a href="${job.redirect_url}" target="_blank" class="apply-btn">Apply Now</a>
    `;
    resultsContainer.appendChild(jobCard);
  });
}

// Function to handle pagination buttons
function handlePagination(data) {
  const paginationContainer = document.createElement("div");
  paginationContainer.classList.add("pagination");

  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.disabled = currentPage === 1;
  prevButton.onclick = () => changePage(-1);

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.disabled = !data.results.length || !data.results.length;
  nextButton.onclick = () => changePage(1);

  paginationContainer.appendChild(prevButton);
  paginationContainer.appendChild(nextButton);

  document.getElementById("job-results").appendChild(paginationContainer);
}

// Function to change pages
async function changePage(direction) {
  currentPage += direction;
  await fetchJobs(); // Re-fetch jobs on page change
}
