import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { iWork, iWorkDetails } from '../../interfaces/iWork'; // Ajuste o caminho conforme necessário
import ExampleImage from '../../assets/computer.svg'; // Ajuste esse caminho para onde você mantém a imagem

// Card Component para exibir um portfólio individual
interface WorkCardProps {
  workDetails: iWorkDetails;
}

const WorkCard: React.FC<WorkCardProps> = ({ workDetails }) => {
  const imageSrc = workDetails.imageWork || ExampleImage;

  return (
    <div
      className={`border rounded-lg p-5 shadow-md bg-[#F4F1EA] text-[#2F2F2F] transition duration-300 ease-in-out`}
      style={{ borderColor: '#BFF7E1', borderWidth: '2px' }}>
      <h3 className="text-lg font-bold text-[#C7B8A6]">Título: {workDetails.titleWork}</h3>
      <p>Descrição: {workDetails.descriptionWork}</p>
      <img src={imageSrc} alt={workDetails.titleWork} className="mt-4 rounded shadow-lg object-cover" />
    </div>
  );
};

// Main Work Component
const Work: React.FC = () => {
  const { works, worktitlePage } = useLanguage(); // Acessando works e titlePage do contexto

  if (!works || !Array.isArray(works)) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-[#C7B8A6] min-h-screen flex flex-col items-center px-4 md:px-8">
      <div className="p-20 flex flex-col items-center">
        <h2 className="items-center text-3xl font-bold text-[#2F2F2F] mb-6 mt-8">{worktitlePage}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          {works.map((work: iWorkDetails, index: number) => (
            <WorkCard key={index} workDetails={work} />
          ))}
        </div>
      </div>

    </main>
  );
};

export default Work;
