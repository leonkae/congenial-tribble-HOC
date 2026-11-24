import Login from "../Login";

function withAuth(Component) {
  return function ProtectedComponent({ isLoggedIn }) {
    if (!isLoggedIn) {
      return <Login />;
    }

    return <Component />
  };
}

export default withAuth
