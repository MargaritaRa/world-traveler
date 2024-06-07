import {NavLink, Link} from 'react-router-dom'


export default function NavBar({ currentUser }){
    
    return(
        
        <div>
            <nav>
                <div className="container nav-container">
                    <Link className="nav-link" to='/'>Home</Link>
                    
                    <NavLink className="nav-link" to='/destinations'>Destinations</NavLink>
                   
                    <NavLink className="nav-link" to='/favorites'>Favorites</NavLink>

                    <NavLink className="nav-link" to='/newsletter'>Newsletter</NavLink>
                    
                    <div className="user-info">
                        {currentUser ? (
                            <span className="welcome">Welcome, {currentUser.username}!</span>
                        ) : (
                            <Link className="nav-link" to="/userPanel">Login</Link>
                        )}
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}