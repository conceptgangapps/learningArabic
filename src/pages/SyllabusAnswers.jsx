import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { homeworkData } from '../data/homeworkData';
import { AnswerRenderer } from '../components/AnswerRenderers';

const SyllabusAnswers = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [expandedTasks, setExpandedTasks] = useState({});

  const toggleTask = (taskKey) => {
    setExpandedTasks(prev => ({
      ...prev,
      [taskKey]: !prev[taskKey]
    }));
  };

  const selectWeek = (weekNum) => {
    setSelectedWeek(selectedWeek === weekNum ? null : weekNum);
    setSelectedDay(null);
    setExpandedTasks({});
  };

  const selectDay = (dayNum) => {
    setSelectedDay(selectedDay === dayNum ? null : dayNum);
    setExpandedTasks({});
  };

  const currentWeek = homeworkData.weeks.find(w => w.weekNumber === selectedWeek);
  const currentDay = currentWeek?.days.find(d => d.dayNumber === selectedDay);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span>Back to Home</span>
            </Link>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-800">
                <span className="arabic-text text-2xl text-emerald-600" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {homeworkData.title.ar}
                </span>
              </h1>
              <p className="text-sm text-gray-600">{homeworkData.title.en}</p>
            </div>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Week Selection */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <div className="bg-emerald-500 text-white p-4">
                <h2 className="font-bold text-lg">Weeks</h2>
                <p className="text-emerald-100 text-sm">Select a week to view</p>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {homeworkData.weeks.map((week) => (
                  <button
                    key={week.weekNumber}
                    onClick={() => selectWeek(week.weekNumber)}
                    className={`w-full text-left p-4 border-b border-gray-100 transition-colors ${
                      selectedWeek === week.weekNumber
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        selectedWeek === week.weekNumber
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {week.weekNumber}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{week.weekTitle.en}</p>
                        <p className="text-xs text-gray-500 arabic-text truncate" style={{ fontFamily: 'var(--font-arabic)' }}>
                          {week.weekTitle.ar}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {!selectedWeek ? (
              /* No Week Selected */
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                <div className="text-6xl mb-4">📚</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Select a Week</h2>
                <p className="text-gray-600">
                  Choose a week from the sidebar to view the homework answers
                </p>
              </div>
            ) : !selectedDay ? (
              /* Week Selected - Show Days */
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">
                      {currentWeek.weekNumber}
                    </span>
                    <div>
                      <h2 className="text-2xl font-bold arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>
                        {currentWeek.weekTitle.ar}
                      </h2>
                      <p className="text-emerald-100">{currentWeek.weekTitle.en}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Select a Day:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentWeek.days.map((day) => (
                      <button
                        key={day.dayNumber}
                        onClick={() => selectDay(day.dayNumber)}
                        className="p-4 bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-xl transition-all text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                            {day.dayNumber}
                          </span>
                          <div>
                            <p className="font-medium text-gray-800">{day.dayName.en}</p>
                            <p className="text-sm text-gray-500 arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>
                              {day.dayName.ar}
                            </p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                          {day.tasks.length} task{day.tasks.length !== 1 ? 's' : ''}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Day Selected - Show Tasks */
              <div className="space-y-4">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <button onClick={() => setSelectedWeek(null)} className="hover:text-emerald-600">
                    Weeks
                  </button>
                  <span>/</span>
                  <button onClick={() => setSelectedDay(null)} className="hover:text-emerald-600">
                    Week {selectedWeek}
                  </button>
                  <span>/</span>
                  <span className="text-gray-800">{currentDay.dayName.en}</span>
                </div>

                {/* Day Header */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6">
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-bold">
                        {currentDay.dayNumber}
                      </span>
                      <div>
                        <h2 className="text-2xl font-bold arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>
                          {currentDay.dayName.ar}
                        </h2>
                        <p className="text-blue-100">{currentDay.dayName.en} - Week {selectedWeek}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tasks */}
                {currentDay.tasks.map((task, taskIdx) => {
                  const taskKey = `${selectedWeek}-${selectedDay}-${task.taskNumber}`;
                  const isExpanded = expandedTasks[taskKey];

                  return (
                    <div key={taskIdx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <button
                        onClick={() => toggleTask(taskKey)}
                        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
                            {task.taskNumber}
                          </span>
                          <div className="text-left">
                            <p className="font-medium text-gray-800">{task.task.en}</p>
                            <p className="text-sm text-gray-500 arabic-text" style={{ fontFamily: 'var(--font-arabic)' }}>
                              {task.task.ar}
                            </p>
                          </div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>

                      {isExpanded && (
                        <div className="p-4 border-t border-gray-100 bg-gray-50">
                          <AnswerRenderer answerType={task.answerType} answers={task.answers} />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Navigation */}
                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setSelectedDay(null)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Days
                  </button>

                  {selectedDay < currentWeek.days.length && (
                    <button
                      onClick={() => {
                        setSelectedDay(selectedDay + 1);
                        setExpandedTasks({});
                      }}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors flex items-center gap-2"
                    >
                      Next Day
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default SyllabusAnswers;
