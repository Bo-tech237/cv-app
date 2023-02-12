import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import personalInput from './PersonalInputs';
import experienceInput from './ExperienceInputs';
import educationInput from './EducationInputs';
import DisplayInputs from './DisplayInputs';

function Main() {
    const personalObject = {
        firstName: '',
        lastName: '',
        currentRole: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
    };
    const experienceObject = {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
    };
    const educationObject = {
        university: '',
        city: '',
        certificate: '',
        subject: '',
        from: '',
        to: '',
    };
    const [personal, setPersonal] = useState(personalObject);
    const [experience, setExperience] = useState(experienceObject);
    const [education, setEducation] = useState(educationObject);

    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('');
    const [message3, setMessage3] = useState('');

    const personalInputs = personalInput();
    const experienceInputs = experienceInput();
    const educationInputs = educationInput();

    const handleSubmit = (e) => {
        e.preventDefault();

        const personalData = Object.entries(personal).map(([key, value]) => {
            return (
                <div key={key}>
                    {key}: {value}
                </div>
            );
        });
        const experienceData = Object.entries(experience).map(
            ([key, value]) => {
                return (
                    <div key={value}>
                        {key}: {value}
                    </div>
                );
            }
        );
        const educationData = Object.entries(education).map(([key, value]) => {
            return (
                <div key={key}>
                    {key}: {value}
                </div>
            );
        });

        setMessage1(personalData);
        setMessage2(experienceData);
        setMessage3(educationData);

        setPersonal(personalObject);
        setExperience(experienceObject);
        setEducation(educationObject);
    };

    const onChangePersonal = (e) => {
        setPersonal({ ...personal, [e.target.name]: e.target.value });
    };
    const onChangeExperience = (e) => {
        setExperience({ ...experience, [e.target.name]: e.target.value });
    };
    const onChangeEducation = (e) => {
        setEducation({ ...education, [e.target.name]: e.target.value });
    };
    const display = [
        { title: 'personal information', message: message1 },
        { title: 'experience', message: message2 },
        { title: 'education', message: message3 },
    ];

    return (
        <div className="main">
            <form onSubmit={handleSubmit}>
                <div className="personal">
                    <h1>Personal Information</h1>
                    {personalInputs.map((personalInput) => (
                        <PersonalInfo
                            key={personalInput.id}
                            {...personalInput}
                            value={personal[personalInput.name]}
                            onChange={onChangePersonal}
                        />
                    ))}
                </div>
                <div className="experience">
                    <h1>Experience</h1>
                    {experienceInputs.map((experienceInput) => (
                        <Experience
                            key={experienceInput.id}
                            {...experienceInput}
                            value={experience[experienceInput.name]}
                            onChange={onChangeExperience}
                        />
                    ))}
                </div>
                <div className="education">
                    <h1>Education</h1>
                    {educationInputs.map((educationInput) => (
                        <Education
                            key={educationInput.id}
                            {...educationInput}
                            value={education[educationInput.name]}
                            onChange={onChangeEducation}
                        />
                    ))}
                </div>
                <button>Submit</button>
            </form>
            {display.map((show) => (
                <DisplayInputs title={show.title} message={show.message} />
            ))}
        </div>
    );
}

export default Main;
