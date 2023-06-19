'use client';

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return ( 
        <Toaster 
            toastOptions={{
                className: "",
                success: {
                    style: {
                        background: 'green',
                    }
                },
                error: {
                    style: {
                        background: 'red',
                    }
                },
            }}
        />
     );
}
 
export default ToasterProvider;