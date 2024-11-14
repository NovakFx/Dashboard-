import React, { useState } from 'react';
import './AssData.css';

const AssData = () => {
  const assignments = [
    {
      title: 'Math Assignment: Algebra Basics',
      tasks: [
        'Watch the video on solving linear equations',
        'Complete practice problems in Chapter 3',
        'Submit your solutions in PDF format',
      ],
    },
    {
      title: 'Science Assignment: The Water Cycle',
      tasks: [
        'Read the article on the stages of the water cycle',
        'Create a diagram explaining each stage',
        'Answer the quiz questions at the end',
      ],
    },
    {
      title: 'History Assignment: Ancient Civilizations',
      tasks: [
        'Read pages 45-60 in the textbook',
        'Write a short essay on the Egyptian civilization',
        'Prepare a 5-minute presentation',
      ],
    },
    {
      title: 'English Assignment: Short Story Analysis',
      tasks: [
        'Read the assigned short story',
        'Identify the main themes and characters',
        'Write a one-page analysis',
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [completedTasks, setCompletedTasks] = useState({});

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleTaskChange = (assignmentIndex, taskIndex) => {
    setCompletedTasks(prevState => ({
      ...prevState,
      [assignmentIndex]: {
        ...prevState[assignmentIndex],
        [taskIndex]: !prevState[assignmentIndex]?.[taskIndex],
      },
    }));
  };

  return (
    <div className="assignment-container">
      <h2>Assignment Page</h2>
      {assignments.map((assignment, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <h3>{assignment.title}</h3>
            <span className="accordion-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              {assignment.tasks.map((task, i) => (
                <div key={i} className="task-item">
                  <input
                    type="checkbox"
                    checked={completedTasks[index]?.[i] || false}
                    onChange={() => handleTaskChange(index, i)}
                  />
                  <span className={completedTasks[index]?.[i] ? 'task-completed' : ''}>{task}</span>
                </div>
              ))}
              <button className="submit-button">Submit Assignment</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AssData;
