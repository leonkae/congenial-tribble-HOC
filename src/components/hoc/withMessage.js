function withMessage(Component) {
  return function EnhancedComponent() {
    return (
      <div>
        <h2>Welcome to our application</h2>

        <Component />
      </div>
    );
  };
}

export default withMessage