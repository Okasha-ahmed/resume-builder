var _a;
var ResumeBuilder = /** @class */ (function () {
    function ResumeBuilder() {
        this.resume = {
            personalInfo: {
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            },
            education: [],
            experience: []
        };
    }
    // Handle personal info
    ResumeBuilder.prototype.updatePersonalInfo = function (firstName, lastName, email, phone) {
        this.resume.personalInfo = { firstName: firstName, lastName: lastName, email: email, phone: phone };
    };
    // Handle education info
    ResumeBuilder.prototype.addEducation = function (degree, university, year) {
        this.resume.education.push({ degree: degree, university: university, year: year });
    };
    // Handle work experience
    ResumeBuilder.prototype.addExperience = function (jobTitle, company, duration, description) {
        this.resume.experience.push({ jobTitle: jobTitle, company: company, duration: duration, description: description });
    };
    // Display the resume in the console (or on the page)
    ResumeBuilder.prototype.displayResume = function () {
        console.log("Personal Information:");
        console.log(this.resume.personalInfo);
        console.log("Education:");
        this.resume.education.forEach(function (ed) {
            console.log(ed);
        });
        console.log("Experience:");
        this.resume.experience.forEach(function (exp) {
            console.log(exp);
        });
    };
    return ResumeBuilder;
}());
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    // Get values from the form fields
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    // Create resume builder instance
    var resumeBuilder = new ResumeBuilder();
    // Update personal info
    resumeBuilder.updatePersonalInfo(firstName, lastName, email, phone);
    // Add education (assuming you have an education form section)
    var degree = document.getElementById("degree").value;
    var university = document.getElementById("university").value;
    var year = document.getElementById("year").value;
    resumeBuilder.addEducation(degree, university, year);
    // Add experience (assuming you have a work experience form section)
    var jobTitle = document.getElementById("jobTitle").value;
    var company = document.getElementById("company").value;
    var duration = document.getElementById("duration").value;
    var description = document.getElementById("description").value;
    resumeBuilder.addExperience(jobTitle, company, duration, description);
    // Display the resume (you can also render it on the page)
    resumeBuilder.displayResume();
}
// Add event listener to your form
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", handleFormSubmit);
