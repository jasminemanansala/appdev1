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

  return (
    <>
      <h1>Welcome to my app.</h1>
      <MyButton/>
      <AboutPage />
    </>
  )
}

export default App
