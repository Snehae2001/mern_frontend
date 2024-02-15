import React, { useEffect } from 'react'
import { useHistory } from 'react-router';

const Logout = () => {

    const history = useHistory();
    const logout = async () => {
        try {
            const res = await fetch('/logout', {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            });
            if (res.status === 401 || !res) {
                window.alert("Please Logout Later");
            }
            else {
                history.push('/');
                // window.location.reload()
            }
        }
        catch (error) {

        }
    }

    useEffect(() => {
        logout()
    }, []);
    return (
        <div>

        </div>
    )
}

export default Logout
