


const Navbar = () => {
  

  return (
    <div>
      
      <div>
        <h1>Navbar</h1>
        <div id="nav-links" className="flex flex-row fixed ">
          <div id="nav-links-left">
            <a href="/">Link 1</a>
            <a href="/">Link 2</a>
            <a href="/">Link 3</a>
          </div>
          <div id="nav-links-right" className="fixed right-0">
            <a href="/">Login</a>
            <a href="/">Sign-up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
