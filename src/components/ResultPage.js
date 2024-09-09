import React from 'react';

const getColorForProbability = (probability) => {
  if (probability <= 0.20) return { background: '#FFB6C1', border: '#FF8C8C' }; // Rosa Claro e borda mais escura
  if (probability <= 0.40) return { background: '#FFFFE0', border: '#FFFFA0' }; // Amarelo Claro e borda mais escura
  if (probability <= 0.60) return { background: '#98FB98', border: '#77DD77' }; // Verde Pastel e borda mais escura
  if (probability <= 0.80) return { background: '#ADD8E6', border: '#87CEEB' }; // Azul Claro e borda mais escura
  return { background: '#E6E6FA', border: '#D3D3FF' }; // Lavanda e borda mais escura
};

const ResultPage = ({ results }) => {
  if (!results || results.length === 0) return null;

  // Sort results by probability and get the top 4
  const topResults = results
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Top 4 Departamentos</h1>
      <ul className="space-y-4">
        {topResults.map((result, index) => {
          const probability = result[1];
          const { background, border } = getColorForProbability(probability);
          const probabilityPercentage = (probability * 100).toFixed(2);

          return (
            <li
              key={index}
              className="p-4 border rounded-lg flex items-center"
              style={{ backgroundColor: background, borderColor: border, borderWidth: '2px' }}
            >
              <div 
                className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundColor: background, border: `4px solid ${border}` }}
              >
                <span className="text-xl font-semibold text-gray-800">{index + 1}</span>
              </div>
              <div className="ml-4 flex-grow">
                <h2 className="text-lg font-semibold text-gray-800">{result[0]}</h2>
              </div>
              <div className="ml-4 flex-shrink-0">
                <p className="text-xl font-bold text-gray-900">{probabilityPercentage}%</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResultPage;
