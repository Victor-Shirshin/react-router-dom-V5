import { Link, Redirect, Route, Switch, useParams } from "react-router-dom";

const users = [
  { id: 1, name: 'user 1' },
  { id: 2, name: 'user 2' },
  { id: 3, name: 'user 3' },
  { id: 4, name: 'user 4' },
  { id: 5, name: 'user 5' }
]

const NavBar = () => {
  return (
    <ul>
      <li><Link to="/">Home Page</Link></li>
    </ul>
  )
}

const HomePage = () => {
  return (
    <>
      <h1> Home Page</h1>
      <li><Link to="/users">Users list Page</Link></li>
    </>
  )
}

const UsersListPage = ({ users }) => {
  return (
    <>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
        ))}
      </ul>
      <li><Link to="/">Home Page</Link></li>
    </>
  )
}

const UserPage = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>User Page</h1>
      <ul>
        <li><Link to={"/users"}>Users List Page</Link></li>
        <li><Link to={`/edit/${userId}`}>Edit this User</Link></li>
      </ul>
      <span>{`userId: ${userId}`}</span>
    </>
  )
}

const EditUserPage = () => {
  const { userId } = useParams();
  const nextUser = Number(userId) + 1;
  return (
    <>
      <h1>Edit User Page</h1>
      <ul>
        <li><Link to={`/users/${userId}`}>User profile Page</Link></li>
        <li><Link to={`/users/${nextUser}`}>Another User</Link></li>
        <li><Link to={"/users"}>Users List Page</Link></li>
      </ul>
    </>
  )
}

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users/:userId" component={UserPage} />
        <Route path="/users" render={(props) => <UsersListPage users={users} {...props} />} />
        <Route path="/edit/:userId" component={EditUserPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
