import { useCallback, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import axios from 'axios';
import RegisterForm from "../form/RegisterForm";
import LoginForm from "../form/LoginForm";

enum MODE {
    SIGNIN = 0,
    SIGNUP = 1
} 

const Login = () => {
    const [view, setView] = useState(MODE.SIGNIN);

    const toggleMode = useCallback(() => {
        if (view === MODE.SIGNIN) {
            setView(MODE.SIGNUP)
        } else {
            setView(MODE.SIGNIN)
        }
    }, [view]);

    return ( 
        <>
            <h2 className="text-white text-4xl mb-8 font-semibold">
                {view === MODE.SIGNIN ? 'Sign In' : 'Create a new account'}
            </h2>
            <div>
                {view === MODE.SIGNIN && <LoginForm toggleMode={toggleMode} />}
                {view === MODE.SIGNUP && <RegisterForm toggleMode={toggleMode}/>}
            </div>
        </>
     );
}
 
export default Login;