// src/components/UserData.jsx
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { fetchUser } from '../store/userSlice';

const UserData = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);
  const [userId, setUserId] = useState(1);

  const handleFetch = useCallback(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  return (
    <div>
      <h2>Fetch User</h2>

      <input
        type="number"
        min="1"
        max="10"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleFetch}>Fetch User</button>

      {loading && <p>Loading...</p>}
      {error   && <p>Error: {error}</p>}

      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Website: {data.website}</p>
          <p>Company: {data.company.name}</p>
          <p>City: {data.address.city}</p>
        </div>
      )}
    </div>
  );
};

export default UserData;