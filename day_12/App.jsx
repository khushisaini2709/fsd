import { useState } from 'react';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) {
      return;
    }

    setTasks((currentTasks) => [...currentTasks, task.trim()]);
    setTask('');
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            addTask();
          }
        }}
      />{' '}
      <button type="button" onClick={addTask}>
        ADD
      </button>
      <ul>
        {tasks.map((item, index) => (
          <li key={`${index}-${item}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
