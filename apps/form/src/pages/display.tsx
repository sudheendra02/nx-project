import { displaySelector } from '../../../../libs/rtk/features/display/displaySlice';
import { useSelector } from 'react-redux';

export default () => {
  const displayValue = useSelector(displaySelector);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-solid border-2 border-black p-32 grid">
        <div className='mb-4'>---The Data you entered---</div>
        <div className='text-center'>{displayValue.value}</div>
      </div>
    </div>
  );
};
