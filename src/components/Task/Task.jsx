import { IoMdClose } from 'react-icons/io';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/tasksSlice.js';

export default function Task({ task }) {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <input
        onChange={() => dispatch(toggleCompleted(task.id))}
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={() => dispatch(deleteTask(task.id))} className={css.btn}>
        <IoMdClose />
      </button>
    </div>
  );
}
