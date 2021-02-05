import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import Dashboard from './pages/Dashboard';
import meteorProvider from '../modules/meteorProvider';
import authProvider from '../modules/authProvider';
import { createBrowserHistory as createHistory } from 'history';
import { TasksList } from './lists/tasks';
import { UsersList } from './lists/tasks';
import customRoutes from './customRoutes';
// import { Home } from './pages/Home';

const history = createHistory();



export const App = () => {

  return (
    <div className='app'>
      <Admin
        //customRoutes={customRoutes}
        dashboard={Dashboard}
        dataProvider={meteorProvider}
        authProvider={authProvider}
        history={history}
      >
        <Resource name='tasks' options={{ label: 'tasks' }} list={TasksList} />
        {/* <Resource name='users' options={{ label: 'users' }} list={UsersList} /> */}
      </Admin>
    </div>
  );
};
