import React, { useState } from 'react';

const ResumeForm = ({ onSubmit }) => {
  const [resume, setResume] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(resume);
  };

  return (
    <div className="min-h-screen bg-black-100 flex justify-center items-center">
      <div className="container mx-auto bg-indigo-700 rounded-2xl p-8 shadow-lg w-1/2">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-white text-3xl mb-6">Detector de Unidade Departamental a partir de resumo do currículo Lattes dos docentes da Unimontes</h1>
          <p className="mx-auto font-normal text-base my-4 max-w-lg text-gray-200">
            Coloque o resumo do currículo Lattes e descubra o departamento correspondente.
          </p>
          <textarea
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            rows="10"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Cole o resumo aqui..."
          />
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
