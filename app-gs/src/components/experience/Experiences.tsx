import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { iExperience, iExperienceDetails } from '../../interfaces/iExperience'; // Adjust the path as needed
import PratileirasImage from '../../assets/pratileiras.svg'; // Adjust this path to where you keep the image

// Card Component to display an individual experience
interface ExperienceCardProps {
  experience: iExperience;
}

interface ExperienceDetailsCardProps {
  experienceDetails: iExperienceDetails;
}

const ExperienceCard: React.FC<ExperienceDetailsCardProps> = ({ experienceDetails }) => (
  <div
    className={`border rounded-lg p-5 shadow-md bg-[#F4F1EA] text-white transition duration-300 ease-in-out`}
    style={{ borderColor: '#BFF7E1', borderWidth: '2px' }}>
    <h3 className="text-lg font-bold text-[#C7B8A6]">{experienceDetails.company}</h3>
    <h4 className="text-md font-medium text-[#C7B8A6]">{experienceDetails.role}</h4>
    <p className="text-[#2F2F2F]">{experienceDetails.duration}</p>
    <p className="text-[#2F2F2F]">{experienceDetails.description}</p>
  </div>
);


// Main Experiences Component
const Experiences: React.FC = () => {
  const { experiences, titlePage } = useLanguage(); // Accessing experiences and titlePage from context

  if (!experiences || !Array.isArray(experiences)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#C7B8A6]  flex flex-col md:flex-row px-4 md:px-8">
      {/* Left Half: Image, hidden on small screens */}
      <div className="w-full md:w-1/2 flex justify-center items-center md:mt-[-140px] hidden md:flex"> {/* Show only on medium screens and above */}
        <img src={PratileirasImage} alt="Pratileiras" className="object-contain max-h-full animate-fade-in-up" />
      </div>

      {/* Right Half: Experience Cards */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:pt-20">

        <h2 className=" text-3xl font-bold text-[#2F2F2F] mb-6">{titlePage}</h2>

        {experiences.map((exp: iExperienceDetails, index: number) => (
          <div
            className={`w-full max-w-md mb-4 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            key={index}>
            {/* Line connecting the cards */}
            {index > 0 && (
              <div
                className={`absolute left-[50%] transform -translate-x-1/2 h-[50%] bg-gray-900 ${index % 2 === 0 ? 'top-0' : 'top-3/4'}`}></div>
            )}
            <ExperienceCard experienceDetails={exp} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
