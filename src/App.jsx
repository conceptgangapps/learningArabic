import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './pages/Home';

// Lazy load all pages except Home for faster initial load
const SyllabusAnswers = lazy(() => import('./pages/SyllabusAnswers'));
const Pronouns = lazy(() => import('./pages/Pronouns'));
const MadiConjugation = lazy(() => import('./pages/MadiConjugation'));
const MudariConjugation = lazy(() => import('./pages/MudariConjugation'));
const AmrConjugation = lazy(() => import('./pages/AmrConjugation'));
const NahiConjugation = lazy(() => import('./pages/NahiConjugation'));
const Rhymes = lazy(() => import('./pages/Rhymes'));
const QiratVocabulary = lazy(() => import('./pages/QiratVocabulary'));

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename="/">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/syllabus-answers" element={<SyllabusAnswers />} />
          <Route path="/pronouns" element={<Pronouns />} />
          <Route path="/madi-conjugation" element={<MadiConjugation />} />
          <Route path="/mudari-conjugation" element={<MudariConjugation />} />
          <Route path="/amr-conjugation" element={<AmrConjugation />} />
          <Route path="/nahi-conjugation" element={<NahiConjugation />} />
          <Route path="/rhymes" element={<Rhymes />} />
          <Route path="/qirat-vocabulary" element={<QiratVocabulary />} />
          <Route path="/syllabus" element={<ComingSoon title="Syllabus" />} />
        </Routes>
      </Suspense>
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
