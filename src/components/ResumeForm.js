import React, { useState, useRef } from 'react';

const ResumeForm = ({ onSubmit }) => {
  const [resume, setResume] = useState('');
  const inputRef = useRef(null); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!resume.trim()) {
      // Focus on the input field if the resume is empty
      inputRef.current.focus();
      return;
    }
    onSubmit(resume);
  };

  return (
    <div className="min-h-screen bg-black-100 flex justify-center items-center p-6">
      <div className="container mx-auto bg-[#2e3092] rounded-2xl p-6 shadow-lg w-full max-w-4x2">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-white text-2xl mb-4 md:text-3xl lg:text-4xl">
            Detector de Unidade Departamental a partir de resumo do currículo Lattes dos docentes da Unimontes
          </h1>
          <p className="mx-auto text-center font-normal text-base my-4 max-w-xs md:max-w-md lg:max-w-2xl text-gray-200">
            Coloque o resumo do currículo Lattes e descubra o departamento correspondente.
          </p>
          <textarea
            ref={inputRef}
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            rows="10"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Cole o resumo aqui..."
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 px-6 rounded-full mt-4 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
