document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("visaForm");
    const successPage = window.location.pathname === "/success.html";

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Store data in localStorage
            localStorage.setItem("formData", JSON.stringify(data));

            // Redirect to success page
            window.location.href = "success.html";
        });
    }

  
        const submittedInfo = document.getElementById("submitted-info");
        const data = JSON.parse(localStorage.getItem("formData"));

        if (data) {
            submittedInfo.innerHTML = `
                <p><strong>Full Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Passport Number:</strong> ${data.passportNumber}</p>
                <p><strong>Country:</strong> ${data.country}</p>
                <p><strong>Type of Visa:</strong> ${data.visaType}</p>
                <p><strong>Gender:</strong> ${data.gender}</p>
                 <p><strong>Education:</strong> ${data.Education}</p>
                <p><strong>Date of Birth:</strong> ${data.dateOfBirth}</p>
                <p><strong>Reason for Visa:</strong> ${data.reason}</p>
            `;

          
        }
    }
);
