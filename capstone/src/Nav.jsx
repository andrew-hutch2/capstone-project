import logo from "./images/small_logo.jpg";

function Nav() {
    return (
        <nav >
            <ul className="grid-adjustable-columns">
                <li> <img src={logo} width="200" height="50" alt="logo" ></img></li>
                <li> <a href="/home"> Home</a> </li>
                <li> <a href="/about"> About</a> </li>
                <li> <a href="/menu"> Menu</a> </li>
                <li> <a href="/reservations"> Reservations</a> </li>
                <li> <a href="/order_online"> Order Online</a> </li>
                <li> <a href="/login"> Login</a> </li>
            </ul>
        </nav>
    );
  }
  export default Nav;