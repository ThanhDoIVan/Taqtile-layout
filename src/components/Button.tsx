import { useAppDispatch, useAppSelector } from '../store/store';
import { change } from '../store/features/pageSlice';

const Button = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(state => state.page.value);
  return (
    <button
      className='button mt-28'
      onClick={() => {
        if (page === 'offer') {
          dispatch(change('features'));
          return;
        }
        dispatch(change('offer'));
      }}
    >
      Continue
    </button>
  );
};

export default Button;
