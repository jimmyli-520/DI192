import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ageDownAsync, ageUpAsync } from './state/slice';
export default function AgeTracker() {
  const age = useSelector(state=> state.ageReducer.age);
  const status = useSelector((state)=>state.ageReducer.status);
  const d = useDispatch();

 return (
    <div>
      <h2>Age: {age}</h2>
      

      <button 
        disabled={status === 'loading'} 
        onClick={() => d(ageUpAsync())}
      > 
        Age + 
      </button>

      <button 
        disabled={status === 'loading'} 
        onClick={() => d(ageDownAsync())}
      > 
        Age - 
      </button>

      {status === 'loading' && <h2>Loading...</h2>}
    </div>
  );
}
