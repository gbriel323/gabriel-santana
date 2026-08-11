import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { iExperience } from '../../interfaces/iExperience'; // Adjust the path as needed
import PratileirasImage from '../../assets/pratileiras.svg'; // Adjust this path to where you keep the image

// Card Component to display an individual experience
interface ExperienceCardProps {
  experience: iExperience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <div
    className={`border rounded-lg p-5 shadow-md bg-[#F4F1EA] text-white transition duration-300 ease-in-out`}
    style={{ borderColor: '#BFF7E1', borderWidth: '2px' }}>
    <h3 className="text-lg font-bold text-[#C7B8A6]">{experience.company}</h3>
    <h4 className="text-md font-medium text-[#C7B8A6]">{experience.role}</h4>
    <p className="text-[#2F2F2F]">{experience.duration}</p>
    <p className="text-[#2F2F2F]">{experience.description}</p>
  </div>
);

// Main Experiences Component
const Experiences: React.FC = () => {
  const { experiences, skills, titleSkill } = useLanguage(); // Accessing experiences, skills, and title from context

  if (!experiences || !Array.isArray(experiences)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#C7B8A6] pt-20 flex px-4 md:px-8">
      {/* Left Half: Image */}
      <div className="w-1/2 flex justify-center items-center mt-[-100px]"> {/* Adjust the margin */}
        <img src={PratileirasImage} alt="Pratileiras" className="object-contain max-h-full" />
      </div>

      {/* Right Half: Experience Cards */}
      <div className="w-1/2 flex flex-col items-center">
        {experiences.map((exp: iExperience, index: number) => (
          <div
            className={`w-full max-w-md mb-4 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            key={index}>
            {/* Line connecting the cards */}
            {index > 0 && (
              <div
                className={`absolute left-[50%] transform -translate-x-1/2 h-[50%] bg-gray-900 ${index % 2 === 0 ? 'top-0' : 'top-3/4'}`}></div>
            )}
            <ExperienceCard experience={exp} />
          </div>
        ))}


      </div>
    </div>
  );
};

export default Experiences;
