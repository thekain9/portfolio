// Import necessary React and React Router components and styles.
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import { Reorder } from '@material-ui/icons';

// Define a functional component named Navbar.
function Navbar() {
    // Define a state variable 'expandNavbar' and a function to set it.
    const [expandNavbar, setexpandNavbar] = useState(false);
    // Get the current location using React Router's 'useLocation' hook.
    const location = useLocation();

    // Use the 'useEffect' hook to set 'expandNavbar' to false whenever the location changes.
    useEffect(() => {
        setexpandNavbar(false);
    }, [location]);

    // Render the Navbar component.
    return (
        // Create a div element with a 'navbar' class and dynamic 'id' based on 'expandNavbar' state.
        <div className="navbar" id={expandNavbar === true ? "open" : "close"}>
            <div className='toggleButton'>
                {/* Create a button with an 'onClick' handler to toggle 'expandNavbar' state. */}
                <button onClick={() => {
                    setexpandNavbar((prev) => {
                        return !prev;
                    })
                }}>
                    {/* Render the 'Reorder' icon inside the button. */}
                    <Reorder />
                </button>
            </div>
            <div className='links'>
                {/* Create navigation links using the 'Link' component from React Router. */}
                <Link to="/"> HOME </Link>
                <Link to="/Projects"> PROJECTS </Link>
                <Link to="/CV"> CV </Link>
                <Link to="/Skills">SKILLS</Link>
            </div>
        </div>
    )
}

// Export the Navbar component to make it available for use in other parts of the application.
export default Navbar;

