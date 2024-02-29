import Layout from './Layout/Layout';
import AppBar from './AppBar/AppBar';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';
// import './App.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/operations.js';
import { getIsLoading, getError } from '../redux/selectors.js';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <AppBar />
        <TaskForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <TaskList />
      </Layout>
    </>
  );
}

export default App;
