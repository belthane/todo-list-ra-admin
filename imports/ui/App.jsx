import { Meteor } from 'meteor/meteor';
import React, { useState, Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/db/TasksCollection';
import { Admin, Resource, ListGuesser } from 'react-admin';
import Dashboard from './pages/Dashboard';
import meteorProvider from '../modules/meteorProvider';
import authProvider from '../modules/authProvider';
import { createBrowserHistory as createHistory } from 'history';
import { TasksList } from './lists/tasks';
import { UsersList } from './lists/tasks';
import customRoutes from './customRoutes';
import { Home } from './pages/Home';

const history = createHistory();

const toggleChecked = ({ _id, isChecked }) =>
  Meteor.call('tasks.setIsChecked', _id, !isChecked);

const deleteTask = ({ _id }) => Meteor.call('tasks.remove', _id);

export const App = () => {
  const user = useTracker(() => Meteor.user());

  const [hideCompleted, setHideCompleted] = useState(false);

  const hideCompletedFilter = { isChecked: { $ne: true } };

  const userFilter = user ? { userId: user._id } : {};

  const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

  const { tasks, pendingTasksCount, isLoading } = useTracker(() => {
    const noDataAvailable = { tasks: [], pendingTasksCount: 0 };
    if (!Meteor.user()) {
      return noDataAvailable;
    }
    const handler = Meteor.subscribe('tasks');

    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const tasks = TasksCollection.find(
      hideCompleted ? pendingOnlyFilter : userFilter,
      {
        sort: { createdAt: -1 },
      }
    ).fetch();
    const pendingTasksCount = TasksCollection.find(pendingOnlyFilter).count();

    return { tasks, pendingTasksCount };
  });

  const pendingTasksTitle = `${
    pendingTasksCount ? ` (${pendingTasksCount})` : ''
  }`;

  const logout = () => Meteor.logout();

  return (
    <div className='app'>
      <header>
        <div className='app-bar'>
          <div className='app-header'>
            <h1>
              📝️ To Do List
              {pendingTasksTitle}
            </h1>
          </div>
        </div>
      </header>

      <div className='main'>
        <Admin
          //customRoutes={customRoutes}
          dashboard={Dashboard}
          dataProvider={meteorProvider}
          authProvider={authProvider}
          history={history}
        >
          <Resource name='users' list={UsersList} />
          <Resource name='tasks' list={TasksList} />
        </Admin>
      </div>
    </div>
  );
};
