import './App.css'
import Profile from './Profile'
import AdminPanel from './AdminPanel'
import LoginForm from './LoginForm'

// Creating and nesting components
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}



// Writing markup with JSX 
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>

      {/* Adding Styles */}
      <img className="avatar" src="https://i.imgur.com/yXOvdOSs.jpg" />

    </>
  );
}



function App() {
  
  // Conditional rendering
  let content;
  let isLoggedIn = false;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }



  // Rendering lists
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
  
  

  return (
    <>
      <h1>Welcome to my app.</h1>
      <MyButton/>
      <AboutPage />

      
      {/* Displaying Data */}
      <Profile />

      
      {/* Conditional rendering */}
      {content}
      
      
      {/* Rendering lists */}
      <ul>{listItems}</ul>
      
      
    </>
  )
}

export default App
