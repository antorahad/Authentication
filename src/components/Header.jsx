import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex items-center justify-between">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Authentication</Link>
                <ul className="menu menu-horizontal hidden lg:flex items-center gap-5 text-xl font-semibold">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/register'}>Registration</Link>
                </ul>
                <div className="lg:hidden dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="btn m-1">Open</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] mt-1 menu p-4 shadow bg-primary rounded-md w-[400px] mx-auto space-y-4">
                    <Link className="text-white text-center" to={'/'}>Home</Link>
                    <Link className="text-white text-center" to={'/login'}>Login</Link>
                    <Link className="text-white text-center" to={'/register'}>Registration</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;