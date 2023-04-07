import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Toast() {
    const notify = () => toast("Hi");
    return (
        <div>
            <button onClick={notify}>Toast</button>
            <ToastContainer />
        </div>
    )
}
