import "./Navbar.css";
export default function Navbar({ userName, setUserAuth }) {
  const handleClick = () => {
    setUserAuth({});
  };
  return (
    <nav>
      <span>{userName ? userName : ""}</span>
      {!userName? 
        <span></span>: <a onClick={handleClick}>Cerrar Sesion</a> }
    </nav>
  );
}
