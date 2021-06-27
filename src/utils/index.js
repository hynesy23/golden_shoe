const showDropDownMenu = (event) => {
    console.log('heyyy')
    const item = event.currentTarget;
    const child = item.querySelector( ".dropdown-menu" );
    // if( child )
    // {
    // }
    child.style.opacity = "1";
}

const hideDropdownMenu = (event) => {
    // $(".dropdown-menu").css( "opacity", "0" );
    const item = event.currentTarget;
    const child = item.querySelector( ".dropdown-menu" );
    if( child )
    {
        child.style.opacity = "1";
    }
}

const handleDropDownNavMenu = () => {
    console.log('handleDropDownNavMenu()')
    document.querySelectorAll('.parent').forEach(item => {
        console.log(item, 'item')
        item.addEventListener('click', showDropDownMenu)
        item.addEventListener('mouseleave', hideDropdownMenu)
      })
}

// handleDropDownNavMenu();

// export default handleDropDownNavMenu;