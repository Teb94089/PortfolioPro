// Import React and necessary dependencies
    import React, { useState } from 'react';
    import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../Utilities/commonUtils';
    import ScrollService from '../../../Utilities/ScrollService';
    import { faBars } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    
    // Import an image
    import logo from '../../../assets/header/logo.png';
    
    // Import CSS styles for this component
    import './Header.css';
    
    // Define a functional React component  (Header)
    export default function Header() {
        // Initialize state variables using the useState hook
        const [selectedScreen, setSelectedScreen] = useState(0);
        const [showHeaderOptions, setShowHeaderOptions] = useState(false);
    
        // Define an arrow function to update the current screen
        const updateCurrentScreen = (currentScreen) => {
            // Check if currentScreen or currentScreen.screenInView is falsy, and return if so
            if (!currentScreen || !currentScreen.screenInView) return;
    
            // Get the index of the current screen using GET_SCREEN_INDEX function
            let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
            // Return if the screen index is less than 0
            if (screenIndex < 0) return;
        };
    
        // Subscribe to ScrollService's currentScreenBroadcaster and call updateCurrentScreen when it updates
        let currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);
    
        // Define a function to generate header options based on TOTAL_SCREENS
    const getHeaderOptions = ()=>{
        return TOTAL_SCREENS.map((Screen, i)=>(
            <div key={Screen.screen_name} 
                className={getHeaderOptionsClasses(i)}
                onClick={ () => switchScreen(i, Screen)}
            >
                <span>{Screen.screen_name}</span>
            </div>
        ));
    };
    // Define a function to generate CSS classes for header options
    const getHeaderOptionsClasses = (index)=>{
        let classes = "header-option ";
        if(index < TOTAL_SCREENS.length - 1)
        classes += "header-option-seperator ";

        if(selectedScreen === index) classes += "selected-header-option ";

        return classes;
    };
     // Define a function to switch to a different screen
    const switchScreen = (index, screen)=>{
        // Get the DOM element corresponding to the screen
        let screenComponent = document.getElementById(screen.screen_name)
        // Return if the screenComponent is not found
        if(!screenComponent)
        return;
       // Scroll to the screen with smooth behavior
        screenComponent.scrollIntoView({behavior: 'smooth'});
        // Update the selected screen and hide the header options
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    };
    // Render the Header component
    return (
        <div>
            <div className='header-container ' 
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
            >
                <div className='header-parent '>
                    <div className='header-hamburger' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                        <FontAwesomeIcon className='header-hamburger-bars ' icon={faBars}/>
                    </div>
                    <div className='header-logo '>
                        <span>
                        <img src={logo} alt="image not responding" />
                        </span>
                    </div>
                    <div className={(showHeaderOptions) 
                        ? "header-options show-hamburger-options"
                        : "header-options"} >
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>
        </div>
    )
}
