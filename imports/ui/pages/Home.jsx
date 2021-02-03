import React from 'react';
import { Task } from '../Task';
import { TaskForm } from '../TaskForm';
import { LoginForm } from '../LoginForm';

const Home = () => {
  const user = useTracker(() => Meteor.user());

  return user ? (
    <Fragment>
      <div className='user' onClick={logout}>
        {user.username} 🚪
      </div>

      <TaskForm />

      <div className='filter'>
        <button onClick={() => setHideCompleted(!hideCompleted)}>
          {hideCompleted ? 'Show All' : 'Hide Completed'}
        </button>
      </div>

      {isLoading && <div className='loading'>loading...</div>}

      <ul className='tasks'>
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            onCheckboxClick={toggleChecked}
            onDeleteClick={deleteTask}
          />
        ))}
      </ul>
    </Fragment>
  ) : (
    <LoginForm />
  );
};

export default Home;
