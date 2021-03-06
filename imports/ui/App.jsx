import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import Dashboard from './pages/Dashboard';
import meteorProvider from '../modules/meteorProvider';
import authProvider from '../modules/authProvider';
import { createBrowserHistory as createHistory } from 'history';
import { TasksList } from './lists/tasks';
import { UsersList } from './lists/users';
import { TasksEdit } from './edits/tasks';
import customRoutes from './customRoutes';
import { StylesProvider } from "@material-ui/core/styles";
import AssignmentIcon from '@material-ui/icons/Assignment';
import UserIcon from '@material-ui/icons/Group';

const history = createHistory();



export const App = () => {

  return (
    <StylesProvider injectFirst>
      <div className='app'>
        <Admin
          customRoutes={customRoutes}
          dashboard={Dashboard}
          dataProvider={meteorProvider}
          authProvider={authProvider}
          history={history}
        >
          <Resource name='tasks' options={{ label: 'Tasks' }} list={TasksList} icon={AssignmentIcon} edit={TasksEdit} />
          <Resource name='users' options={{ label: 'Users' }} list={UsersList} icon={UserIcon} />
        </Admin>
      </div>
    </StylesProvider>
  );
};
