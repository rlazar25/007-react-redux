import { NavLink } from "react-router-dom";

function NavbarComponent() {
    return (
        <div className="flex gap-2 justify-center">
            <NavLink to={'/'} >Home</NavLink>
            <NavLink to={'/products'} >Products</NavLink>
        </div>
    )
}

export default NavbarComponent;