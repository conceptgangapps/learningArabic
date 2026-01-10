import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homeworkData } from '../data/homeworkData';
import { AnswerRenderer } from '../components/AnswerRenderers';

const SyllabusAnswers = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);
  const [expandedTasks, setExpandedTasks] = useState({});

  const weekScrollRef = useRef(null);
  const dayScrollRef = useRef(null);

  const currentWeek = homeworkData.weeks.find(w => w.weekNumber === selectedWeek);
  const currentDay = currentWeek?.days.find(d => d.dayNumber === selectedDay);

  const totalWeeks = homeworkData.weeks.length;
  const totalDays = currentWeek?.days.length || 0;

  // Scroll selected week/day into view
  useEffect(() => {
    if (weekScrollRef.current) {
      const selectedBtn = weekScrollRef.current.querySelector(`[data-week="${selectedWeek}"]`);
      if (selectedBtn) {
        selectedBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedWeek]);

  useEffect(() => {
    if (dayScrollRef.current) {
      const selectedBtn = dayScrollRef.current.querySelector(`[data-day="${selectedDay}"]`);
      if (selectedBtn) {
        selectedBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedDay, selectedWeek]);

  const toggleTask = (taskKey) => {
    setExpandedTasks(prev => ({
      ...prev,
      [taskKey]: !prev[taskKey]
    }));
  };

  const selectWeek = (weekNum) => {
    setSelectedWeek(weekNum);
    setSelectedDay(1);
    setExpandedTasks({});
  };

  const selectDay = (dayNum) => {
    setSelectedDay(dayNum);
    setExpandedTasks({});
  };

  const goToPrevious = () => {
    if (selectedDay > 1) {
      setSelectedDay(selectedDay - 1);
    } else if (selectedWeek > 1) {
      const prevWeek = homeworkData.weeks.find(w => w.weekNumber === selectedWeek - 1);
      setSelectedWeek(selectedWeek - 1);
      setSelectedDay(prevWeek?.days.length || 1);
    }
    setExpandedTasks({});
  };

  const goToNext = () => {
    if (selectedDay < totalDays) {
      setSelectedDay(selectedDay + 1);
    } else if (selectedWeek < totalWeeks) {
      setSelectedWeek(selectedWeek + 1);
      setSelectedDay(1);
    }
    setExpandedTasks({});
  };

  const canGoPrevious = selectedWeek > 1 || selectedDay > 1;
  const canGoNext = selectedWeek < totalWeeks || selectedDay < totalDays;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation Bars Container */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-2 py-2 space-y-1.5">
          {/* Week Selector Bar */}
          <div
            ref={weekScrollRef}
            className="flex justify-center gap-1.5 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <Link
              to="/"
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-emerald-600 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            {homeworkData.weeks.map((week) => (
              <button
                key={week.weekNumber}
                data-week={week.weekNumber}
                onClick={() => selectWeek(week.weekNumber)}
                className={`flex-shrink-0 h-8 px-3 rounded-lg text-sm font-medium transition-all ${
                  selectedWeek === week.weekNumber
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-gray-300'
                }`}
              >
                Week {week.weekNumber}
              </button>
            ))}
          </div>

          {/* Day Selector Bar */}
          <div
            ref={dayScrollRef}
            className="flex justify-center gap-1.5 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentWeek?.days.map((day) => (
              <button
                key={day.dayNumber}
                data-day={day.dayNumber}
                onClick={() => selectDay(day.dayNumber)}
                className={`flex-shrink-0 h-8 px-3 rounded-lg text-sm font-medium transition-all ${
                  selectedDay === day.dayNumber
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-gray-300'
                }`}
              >
                {day.dayName.en}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-3 sm:px-4 py-4 pb-20">
        {currentDay ? (
          <div className="space-y-3">
            {/* Current Selection Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl p-3 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-lg px-2.5 py-1 text-sm font-bold">
                  W{selectedWeek}D{selectedDay}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base sm:text-lg font-bold truncate">
                    {currentWeek.weekTitle.en}
                  </h2>
                  <p className="text-emerald-100 text-xs sm:text-sm arabic-text truncate" style={{ fontFamily: 'var(--font-arabic)' }}>
                    {currentWeek.weekTitle.ar}
                  </p>
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
                    className="w-full p-3 sm:p-4 flex items-center justify-between hover:bg-gray-50 active:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <span className="w-7 h-7 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0">
                        {task.taskNumber}
                      </span>
                      <div className="text-left min-w-0 flex-1">
                        <p className="font-medium text-gray-800 text-sm truncate">{task.task.en}</p>
                        <p className="text-xs text-gray-500 arabic-text truncate" style={{ fontFamily: 'var(--font-arabic)' }}>
                          {task.task.ar}
                        </p>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 text-gray-400 transition-transform flex-shrink-0 ml-2 ${isExpanded ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {isExpanded && (
                    <div className="p-3 sm:p-4 border-t border-gray-100 bg-gray-50 overflow-x-auto">
                      <AnswerRenderer answerType={task.answerType} answers={task.answers} task={task} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
            <div className="text-5xl mb-4">📚</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">No Content</h2>
            <p className="text-gray-600 text-sm">
              Select a week and day to view the homework answers
            </p>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-3 py-2 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-3">
          <button
            onClick={goToPrevious}
            disabled={!canGoPrevious}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-medium transition-all ${
              canGoPrevious
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                : 'bg-gray-50 text-gray-300 cursor-not-allowed'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Previous</span>
          </button>

          <div className="text-center px-1">
            <span className="text-sm font-bold text-gray-800">{selectedDay}/{totalDays}</span>
          </div>

          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-medium transition-all ${
              canGoNext
                ? 'bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700'
                : 'bg-gray-50 text-gray-300 cursor-not-allowed'
            }`}
          >
            <span className="text-sm">Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SyllabusAnswers;
