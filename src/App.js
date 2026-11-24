// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import Dashboard from "./components/Dashboard";
import withMessage from "./components/hoc/withMessage";
import withAuth from "./components/hoc/withAuth";
// a component is a function that returns some JSX (HTML-like syntax)


const EnhancedDashboard = withMessage(Dashboard)
const ProtectedDashboard = withAuth(Dashboard)

function App() {

  const isLoggedIn = true;

  let person = {
    name: "John Doe",
    age: 30,
  };

  const headingStyle = {
    color : "blue",
    fonSize : "25px",
    padding: "20px",
    backgroundColor: "lightgray"
  }

  return (
    <div>
      <Navbar />
      <div className="main-parent">
        <h1 style ={headingStyle}>Hello, React!</h1>
        <h1 style={headingStyle}>Another title</h1>
        <p>My name is {person.name}</p>
        <p>And i am {person.age}</p>

        <StudentCard />
        <EnhancedDashboard />
        <ProtectedDashboard isLoggedIn={isLoggedIn}/>
      </div>
    </div>
  );
}

export default App;
