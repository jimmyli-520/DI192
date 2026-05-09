import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

function UserList () {
  const [users, setUsers] = useState<User[]> ([]);
  const [loading, setLoading] = useState <boolean> (true)
  const [error, setError] = useState <string | null>(null);

 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((_err) => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);
 
  return (
    <div>
      <h2>User List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email} — {user.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default UserList;