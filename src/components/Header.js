import UserInterface from "./UserInterface";

const Header = () => {
  return (
    <div className="header">
      <h1 className="white-text">
        <a href="/" className="header-nav">
          News from Code It
        </a>
      </h1>
      <UserInterface />
    </div>
  );
};

export default Header;
