import { useState } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import FinalPage from './components/FinalPage';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleYes = () => {
    setCurrentPage(5);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen">
      {currentPage === 1 && <Page1 onYes={handleYes} onNo={handleNext} />}
      {currentPage === 2 && <Page2 onYes={handleYes} onNo={handleNext} />}
      {currentPage === 3 && <Page3 onYes={handleYes} onNo={handleNext} />}
      {currentPage === 4 && <Page4 onYes={handleYes} />}
      {currentPage === 5 && <FinalPage />}
    </div>
  );
}

export default App;
