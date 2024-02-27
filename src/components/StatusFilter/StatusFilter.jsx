import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/constans.js';
import { setStatusFilter } from '../../redux/filtersSlice.js';
import { getStatusFilter } from '../../redux/selectors.js';

export default function StatusFilter() {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        onClick={() => dispatch(setStatusFilter(statusFilters.all))}
        selected={filter === statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => dispatch(setStatusFilter(statusFilters.active))}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => dispatch(setStatusFilter(statusFilters.completed))}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
}
