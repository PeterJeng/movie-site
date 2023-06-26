'use client';

import { useCallback, useEffect, useState } from "react";
import RegisterForm from "../form/RegisterForm";
import LoginForm from "../form/LoginForm";
import { useSearchParams } from "next/navigation";
import qs from "query-string";

const SIGNIN = 'SignIn';
const REGISTER = 'Register';

type Variant = 'SignIn' | 'Register';

const Login = () => {
    const [view, setView] = useState<Variant>(SIGNIN);
    const params = useSearchParams();

    useEffect(() => {
        const currentQuery = qs.parse(params.toString());

        if (currentQuery.email) {
            setView(REGISTER);
        }
    }, [params]);

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
                {view === REGISTER && <RegisterForm toggleMode={toggleMode} />}
            </div>
        </>
     );
}
 
export default Login;