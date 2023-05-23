const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => {
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode);
        }}
        className="save"
        size="1.3em"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
