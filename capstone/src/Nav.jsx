import logo from "./images/small_logo.jpg";

function Nav() {
    return (
        <nav>
            <img src={logo} width="200" height="50" alt="logo" ></img>
            <ul>
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