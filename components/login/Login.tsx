import { useCallback, useState } from "react";
import RegisterForm from "../form/RegisterForm";
import LoginForm from "../form/LoginForm";

const SIGNIN = 'SignIn';
const REGISTER = 'Register';

type Variant = 'SignIn' | 'Register';

const Login = () => {
    const [view, setView] = useState<Variant>(SIGNIN);

    const toggleMode = useCallback(() => {
        if (view === SIGNIN) {
            setView(REGISTER)
        } else {
            setView(SIGNIN)
        }
    }, [view]);

    return ( 
        <>
            <h2 className="text-white text-4xl mb-8 font-semibold">
                {view === SIGNIN? 'Sign In' : 'Create a new account'}
            </h2>
            <div>
                {view === SIGNIN && <LoginForm toggleMode={toggleMode} />}
                {view === REGISTER && <RegisterForm toggleMode={toggleMode}/>}
            </div>
        </>
     );
}
 
export default Login;