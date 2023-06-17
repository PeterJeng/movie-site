import { useCallback, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

enum MODE {
    SIGNIN = 0,
    SIGNUP = 1
} 

const Login = () => {
    const [view, setView] = useState(MODE.SIGNIN);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const toggleMode = useCallback(() => {
        if (view === MODE.SIGNIN) {
            setView(MODE.SIGNUP)
        } else {
            setView(MODE.SIGNIN)
        }
    }, [view]);

    const register = useCallback(async () => {
        try {
          await axios.post('/api/register', {
            email,
            name,
            password
          });
    
        } catch (error) {
            console.log(error);
        }
      }, [email, name, password]);

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
                    onChange={(e: any) => setEmail(e.target.value)}
                />
                {view === MODE.SIGNUP && 
                    <Input 
                        id="username"
                        label="Username"
                        onChange={(e: any) => setName(e.target.value)}
                    />
                }
                <Input 
                    id="password"
                    label="Password"
                    type="password"
                    onChange={(e: any) => setPassword(e.target.value)}
                />
                <Button
                    label={view === MODE.SIGNIN ? 'Sign In' : 'Create an account'}
                    onClick={view === MODE.SIGNIN ? () => {} : register}
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