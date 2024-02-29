import Button from '../Button/Button';
import css from './TaskForm.module.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/operations.js';

export default function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTask(e.target.elements.text.value));
    e.target.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.field} name="text" placeholder="Enter task text" />
        <Button type="submit">Send</Button>
      </form>
    </>
  );
}
