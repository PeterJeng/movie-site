import { useCallback, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { FcGoogle } from "react-icons/fc";

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
                {view === MODE.SIGNIN ? 'Sign In' : 'Create an account'}
            </h2>
            <div className="flex flex-col gap-4">
                <Input 
                    id="email"
                    label="Email"
                    type="email"
                />
                {view === MODE.SIGNUP && 
                    <Input 
                        id="username"
                        label="Username"
                    />
                }
                <Input 
                    id="password"
                    label="Password"
                    type="password"
                />
                <Button
                    label={view === MODE.SIGNIN ? 'Sign In' : 'Create an account'}
                    onClick={() => {}}
                />
                <hr />
                <Button
                    label="Continue with Google"
                    onClick={() => {}}
                    outline
                    icon={FcGoogle}
                />
                {view === MODE.SIGNIN && 
                    <div className="text-neutral-500 mt-12">
                        New to Netflix?
                        <span onClick={toggleMode} className="text-white ml-1 hover:underline cursor-pointer">
                            Sign up now.
                        </span>
                    </div>
                }
                {view === MODE.SIGNUP && 
                    <div className="text-neutral-500 mt-12">
                        Already have an account?
                        <span onClick={toggleMode} className="text-white ml-1 hover:underline cursor-pointer">
                            Sign In.
                        </span>
                    </div>
                }
            </div>
        </>
     );
}
 
export default Login;