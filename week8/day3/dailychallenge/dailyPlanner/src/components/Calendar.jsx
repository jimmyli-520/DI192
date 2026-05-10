import { useDispatch, useSelector } from 'react-redux';
// Assuming your slice is in the same folder
import { selectDay } from '../features/planner/plannerSlice'; // ✅

const Calendar = () => {
  const dispatch = useDispatch();
  
  // 1. Get selectedDay from the state (planner is the name of our slice)
  const selectedDay = useSelector((state) => state.planner.selectedDay);

  const handleChange = (e) => {
    // 2. Dispatch the new date string to the store
    dispatch(selectDay(e.target.value));
  };

  return (
    <div>
      <h2>Select a Day</h2>
      <input
        type="date"
        value={selectedDay}
        // 3. Trigger the update when the user picks a new date
        onChange={handleChange} 
      />
    </div>
  );
};

export default Calendar;