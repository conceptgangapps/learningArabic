import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SyllabusAnswers from './pages/SyllabusAnswers';
import Pronouns from './pages/Pronouns';
import MadiConjugation from './pages/MadiConjugation';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/syllabus-answers" element={<SyllabusAnswers />} />
        <Route path="/pronouns" element={<Pronouns />} />
        <Route path="/madi-conjugation" element={<MadiConjugation />} />
        <Route path="/syllabus" element={<ComingSoon title="Syllabus" />} />
      </Routes>
    </Router>
  );
}

// Placeholder component for pages under development
function ComingSoon({ title }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center p-8">
        <div className="text-6xl mb-4">🚧</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-600 mb-6">This feature is coming soon!</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default App;
