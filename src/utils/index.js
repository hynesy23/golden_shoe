// import $ from 'jquery';

// const showDropDownMenu = (element) => {
//     console.log(element, 'HOVERED OVER')
//     const item = element.currentTarget;
//     console.log(item, 'item')
//     console.log(item.parent(), 'parent')
//     // item.parent().find(".dropdown-menu").css( "opacity", "1" );
// }

// const hideDropdownMenu = () => {
//     $(".dropdown-menu").css( "opacity", "0" );
// }

// const handleDropDownNavMenu = () => {
//     console.log('HEELLLOOOO')
//     $('.category-item .header').hover( showDropDownMenu, hideDropdownMenu )
// }
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

handleDropDownNavMenu();

export default handleDropDownNavMenu;