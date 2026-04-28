const user = {
  firstName: 'John',
  lastName: 'Doe',
  favAnimals: ['Horse', 'Dog', 'Elephant', 'Monkey']
};

function App() {
  return (
    <div>
      <h3>{ user.firstName}</h3>
      <h3>{ user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </div>
  );
}