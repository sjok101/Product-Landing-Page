const Navbar = () => {
  

  return (
    <div>
      <div>
        <div id="nav-links" className="flex flex-row fixed ">
          <div id="nav-links-left" className="space-x-2">
            <a href="/">Home</a>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/">Demo</a>
          </div>
          <div id="nav-links-right" className="fixed right-0 space-x-2">
            <a href="/">FAQ</a>
            <a href="/">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
