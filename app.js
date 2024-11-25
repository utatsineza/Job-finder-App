document.getElementById('job-search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const title = document.getElementById('job-title').value.trim();
    const location = document.getElementById('location').value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "<p>Loading...</p>";
  
    try {
      const response = await fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&what=${title}&where=${location}`);
      if (!response.ok) throw new Error('Failed to fetch data');
  
      const data = await response.json();
      resultsDiv.innerHTML = ""; // Clear loading message
  
      if (data.results && data.results.length > 0) {
        data.results.forEach(job => {
          const jobCard = document.createElement('div');
          jobCard.classList.add('job-card');
          jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company.display_name} - ${job.location.display_name}</p>
            <p><a href="${job.redirect_url}" target="_blank">View Job</a></p>
          `;
          resultsDiv.appendChild(jobCard);
        });
      } else {
        resultsDiv.innerHTML = "<p>No jobs found. Try a different search.</p>";
      }
    } catch (error) {
      console.error(error);
      resultsDiv.innerHTML = "<p>Error fetching job data. Please try again later.</p>";
    }
  });
  