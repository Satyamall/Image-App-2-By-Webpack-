import './Fashion.html'
import './Nature.html'
import './Film.html'
import './People.html'
import './Technology.html'

const Navbar = () => {
    const div = document.createElement("div");
    const nav = document.createElement("nav");
    nav.className = "navbar";
    nav.innerHTML = `
    <div>
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX///8AAAAwMDDx8fE3NzeOjo4sLCwQEBD29vaFhYULCwsaGho6OjofHx+WlpZJSUlcNdZGAAABFElEQVR4nO3c2Q3CMBBF0eCE7Ev/3VICyJaYgZzbwPP5HsldJ0mSJEmSJEmS9Kf1U2lp6qMBb+sfbRHGR0hIGB8hIWF8hISE8RESEsZHSEgYHyEhYXyEhITxERISxkdISBgfISFhfISEhPHNy7OlZY4GSJIkSZIkSZL0k60Vd4etcXOr2Fyr10rF2tAoHCo2CyEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISHhbYV7o3BPLzzOpj8VziO9MCJCwvwREuaPkDB/hIT5IyTMHyFh/ggJ80dImD9CwvwREuaPkDB/hIT5IyTMHyFh/gjvLByjn/5hY7XwGssvNF7VQkmSJEmSJEmSpC/2AvViRWsS6bj5AAAAAElFTkSuQmCC" class="logo">
    </div>
    <div class="text">
       <h4>Image App</h4>
       <p>Photos for everyone</p>
    </div>
    <div>
       <input type="text" placeholder="Search photos" id="search">
    </div>
    <div>
       <button id="btn">Search</button>
    </div>
    <div class="right">
      <img src="https://lh3.googleusercontent.com/ogw/ADea4I5nUDw8BDzBDsmWlB_Gj7GcA8opMT6BKtV4-74--w=s64-c-mo" class="img">
    </div>
    `
    const nav2 = document.createElement("div");
    nav2.className="nav2";
    nav2.innerHTML =`
        <a href="index.html">Home</a>
        <a href="Fashion.html" >Fashion</a>
        <a href="Nature.html" >Nature</a>
        <a href="Film.html">Film</a>
        <a href="People.html">People</a>
        <a href="Technology.html">Technology</a>
    `
    div.append(nav,nav2)
    return div
}

export default Navbar;