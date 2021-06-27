export const showDropDownMenu = (event) => {
    const dropdownMenus = document.querySelectorAll( ".dropdown-menu" );
    // for( let i = 0; i < dropdownMenus.length; i++ )
    // {
    //     const child = dropdownMenus[ i ];
    //     child.style.opacity = "0";
    //     child.style.display = "none";  
    //     child.setAttribute( "data-visible", "false" )
    // }
    const item = event.currentTarget;
    const child = item.querySelector( ".dropdown-menu" );
    // if( child )
    // {
    // }
    if( child.dataset.visible === "true" )
    {
        child.style.opacity = "0";
        child.style.display = "none";  
        child.setAttribute( "data-visible", "false" )      
    }
    else
    {
        child.style.display = "flex";
        child.style.opacity = "1";
        child.setAttribute( "data-visible", "true" )    
    }
}

// const hideDropdownMenu = (event) => {
//     // $(".dropdown-menu").css( "opacity", "0" );
//     const item = event.currentTarget;
//     const child = item.querySelector( ".dropdown-menu" );
//     // if( child )
//     // {
//     // }
//     child.style.opacity = "0";
//     child.style.display = "none";
// }

// const handleDropDownNavMenu = () => {
//     console.log('handleDropDownNavMenu()')
//     document.querySelectorAll('.parent').forEach(item => {
//         console.log(item, 'item')
//         item.addEventListener('click', showDropDownMenu)
//         // item.addEventListener('mouseleave', hideDropdownMenu)
//       })
// }

// handleDropDownNavMenu();

// export const handleAddToWishlist = (element) => {
//     const { target } = element;
//     console.log(target)
    
//     if( target.dataset.add === "true" )
//     {
//         const parent = target.parentElement;
//         target.style.display = "none";
//         const fullHeart = parent.querySelector( ".full-heart" );
//         fullHeart.style.display = "block"
//     }
//     else if( target.dataset.remove === "true" )
//     {
//         const parent = target.parentElement.parentElement;
//         target.parent.style.display = "none";
//         const emptyHeart = parent.querySelector( ".empty-heart" );
//         emptyHeart.style.display = "block";
//     }
// }

// export default {showDropDownMenu, handleAddToWishlist};