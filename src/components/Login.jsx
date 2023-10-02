import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleLogin} className="bg-slate-200 w-[30%] mx-auto p-3 flex flex-col items-center justify-center gap-4 rounded-md">
                <center>
                    <h1 className="text-slate-950 text-4xl font-bold uppercase">Login</h1>
                </center>
                <input className="input" type="email" name="email" placeholder="Your Email Address" required />
                <input className="input" type="password" name="password" placeholder="Your Password" required />
                <button className="btn btn-primary">Login</button>
                <p>{`Don't have an account? Please go to`} <Link className="underline text-primary" to={'/register'}>register</Link></p>
            </form>
        </div>
    );
};

export default Login;