import { useState } from 'react';
import './App.css';
import MultiStepProgressBar from './components/MultiStepProgressBar';
import ProgressBar from './components/ProgressBar';
import PageFour from './pages/PageFour';
import PageOne from './pages/PageOne';
import PageThree from './pages/PageThree';
import PageTwo from './pages/PageTwo';
import PageFive from './pages/PageFive';
import ProgressBar3 from './components/ProgressBar3';


function App() {
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        setPage("pagefour");
        break;
      case "5":
        setPage("pagefive")
        break;
      default:
        setPage("1");
    }
  };

  return (
    <div className="App">
      <ProgressBar/>
      <br/>
      <br/>
      <br/>
      <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
      {
        {
          pageone: <PageOne onButtonClick={nextPage} />,
          pagetwo: <PageTwo onButtonClick={nextPage} />,
          pagethree: <PageThree onButtonClick={nextPage} />,
          pagefour: <PageFour onButtonClick={nextPage} />,
          pagefive: <PageFive />
        }[page]
      }
      <br/>
      <br/>
      <br/>
      <ProgressBar3/>
    </div>
  );
}

export default App;
