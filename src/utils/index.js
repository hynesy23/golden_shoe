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

export const handleSuccessModal = () => {
    const modal = document.getElementById( "success-modal" );
    if( modal.dataset.open === "true" )
    {
        modal.dataset.open = "false";
        modal.style.opacity = "0";
        modal.style.zIndex = "-99";
        window.location.reload();
    }
    else
    {
        modal.dataset.open = "true"
        modal.style.zIndex = "9999";
        modal.style.opacity = "0.9";
    }

}

export const formatPrices = arr => {
    arr.forEach( item => {
        item.price = parseInt( item.price );
    })
    
    return arr;
}