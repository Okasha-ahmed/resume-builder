// app.ts
interface PersonalInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

interface Education {
    degree: string;
    university: string;
    year: string;
}

interface Experience {
    jobTitle: string;
    company: string;
    duration: string;
    description: string;
}

interface Resume {
    personalInfo: PersonalInfo;
    education: Education[];
    experience: Experience[];
}

class ResumeBuilder {
    private resume: Resume;

    constructor() {
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
    updatePersonalInfo(firstName: string, lastName: string, email: string, phone: string): void {
        this.resume.personalInfo = { firstName, lastName, email, phone };
    }

    // Handle education info
    addEducation(degree: string, university: string, year: string): void {
        this.resume.education.push({ degree, university, year });
    }

    // Handle work experience
    addExperience(jobTitle: string, company: string, duration: string, description: string): void {
        this.resume.experience.push({ jobTitle, company, duration, description });
    }

    // Display the resume in the console (or on the page)
    displayResume(): void {
        console.log("Personal Information:");
        console.log(this.resume.personalInfo);

        console.log("Education:");
        this.resume.education.forEach(ed => {
            console.log(ed);
        });

        console.log("Experience:");
        this.resume.experience.forEach(exp => {
            console.log(exp);
        });
    }
}

// Function to handle form submission
function handleFormSubmit(event: Event): void {
    event.preventDefault();
    
    // Get values from the form fields
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;

    // Create resume builder instance
    const resumeBuilder = new ResumeBuilder();

    // Update personal info
    resumeBuilder.updatePersonalInfo(firstName, lastName, email, phone);

    // Add education (assuming you have an education form section)
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const university = (document.getElementById("university") as HTMLInputElement).value;
    const year = (document.getElementById("year") as HTMLInputElement).value;
    resumeBuilder.addEducation(degree, university, year);

    // Add experience (assuming you have a work experience form section)
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const duration = (document.getElementById("duration") as HTMLInputElement).value;
    const description = (document.getElementById("description") as HTMLInputElement).value;
    resumeBuilder.addExperience(jobTitle, company, duration, description);

    // Display the resume (you can also render it on the page)
    resumeBuilder.displayResume();
}

// Add event listener to your form
document.getElementById("resumeForm")?.addEventListener("submit", handleFormSubmit);
