document.addEventListener("DOMContentLoaded", function() {
  // Set "HOME" as the default section on page load
  showSection('home');

  // Function to show a section
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }

    // Additional logic to handle the PDF link
    if (sectionId === 'reports') {
      const pdfLink = document.getElementById('pdfLink');
      // Replace the following URL with the actual URL of your Daily Attendance PDF
      const pdfUrl = 'DAS-31G6_2023-2024 - 22.pdf';
      pdfLink.setAttribute('href', pdfUrl);

      const accomplishmentsPdfLink = document.getElementById('accomplishmentsPdfLink');
      // Replace the following URL with the actual URL of your Accomplishments Report PDF
      const accomplishmentsPdfUrl = 'Accomplishments Report - Sepada, Romeo Jr..pdf';
      accomplishmentsPdfLink.setAttribute('href', accomplishmentsPdfUrl);
    } else if (sectionId === 'resume') {
      const resumeLink = document.getElementById('resumeLink');
      // Replace the following URL with the actual URL of your resume PDF
      const resumeUrl = '2023 Internship Applicant Resume] Sepada, Romeo Jr.pdf';
      resumeLink.setAttribute('href', resumeUrl);
    }
  }

  // Event listeners for each button
  const buttons = document.querySelectorAll('.sidebar button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const sectionId = this.textContent.toLowerCase();
      showSection(sectionId);
    });
  });

  // Function to highlight and reset the name color
  function highlightName(isHighlight) {
    const color = isHighlight ? '#331a00' : '';
    document.querySelector('.home-text').style.color = color;
  }

  // Event listeners for name hover
  const profileName = document.querySelector('.home-text');
  profileName.addEventListener('mouseover', function() {
    highlightName(true);
  });

  profileName.addEventListener('mouseout', function() {
    highlightName(false);
  });

  // Function to open a new tab and download the PDF
  function downloadPDF(pdfUrl) {
    const newTab = window.open(pdfUrl, '_blank');
    if (!newTab) {
      console.error('Unable to open a new tab. Please check your browser settings.');
    }
  }

  // Event listener for the "Download PDF" button for Daily Attendance
  const downloadButton = document.querySelector('#dailyAttendanceCard button');
  downloadButton.addEventListener('click', function() {
    const pdfLink = document.getElementById('pdfLink');
    const pdfUrl = pdfLink.getAttribute('href');
    downloadPDF(pdfUrl);
  });

  // Event listener for the "Download PDF" button for Accomplishments Report
  const accomplishmentsDownloadButton = document.querySelector('#accomplishmentsCard button');
  accomplishmentsDownloadButton.addEventListener('click', function() {
    const accomplishmentsPdfLink = document.getElementById('accomplishmentsPdfLink');
    const accomplishmentsPdfUrl = accomplishmentsPdfLink.getAttribute('href');
    downloadPDF(accomplishmentsPdfUrl);
  });

  // Event listener for the "Download PDF" button for Resume
  const resumeDownloadButton = document.querySelector('#resumeCard button');
  resumeDownloadButton.addEventListener('click', function() {
    const resumeLink = document.getElementById('resumeLink');
    const resumeUrl = resumeLink.getAttribute('href');
    downloadPDF(resumeUrl);
  });
});
