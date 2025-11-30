import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Questionnaire from "./pages/Questionnaire";
import Insights from "./pages/Insights";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz" element={<Questionnaire/>} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
