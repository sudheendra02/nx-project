// Screen that displays a simple form with an input box and a button
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setDisplayValue,
  displaySelector,
} from '../../../../libs/rtk/features/display/displaySlice';

export default () => {
  const displayValue = useSelector(displaySelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-solid border-2 border-black p-32 grid">
        <input
          className="border-solid border border-black mb-8 p-2"
          value={displayValue.value}
          autoFocus
          placeholder='Enter your input to display'
          onChange={(e) => {
            dispatch(setDisplayValue(e.target.value));
          }}
        ></input>
        <button
          className="border-solid rounded-2xl bg-gray-100 border border-black"
          onClick={() => navigate('./display-form')}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
