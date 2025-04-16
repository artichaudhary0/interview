import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import QuestionList from './components/QuestionList';
import { htmlQuestions } from './data/htmlQuestions';
import { cssQuestions } from './data/cssQuestions';
import { javascriptQuestions } from './data/javascriptQuestions';
import { reactQuestions } from './data/reactQuestions';
import { nodeQuestions } from './data/nodeQuestions';
import { expressQuestions } from './data/expressQuestions';
import { mongoQuestions } from './data/mongoQuestions';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/html" element={<QuestionList category="HTML" questions={htmlQuestions} />} />
            <Route path="/css" element={<QuestionList category="CSS" questions={cssQuestions} />} />
            <Route path="/javascript" element={<QuestionList category="JavaScript" questions={javascriptQuestions} />} />
            <Route path="/react" element={<QuestionList category="React" questions={reactQuestions} />} />
            {/* <Route path="/node" element={<QuestionList category="Node.js" questions={nodeQuestions} />} /> */}
            <Route path="/express" element={<QuestionList category="Express.js" questions={expressQuestions} />} />
            <Route path="/mongodb" element={<QuestionList category="MongoDB" questions={mongoQuestions} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;