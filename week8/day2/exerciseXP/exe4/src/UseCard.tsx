interface UserCardProps {
  name?: string;
  age?: number;
  role?: string;
}

function UserCard ({name = 'Anonymous', age = 0, role = 'Guest'}: UserCardProps) {
  return (
    <div>
      <h2>User Card</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  )
}

export default UserCard;
