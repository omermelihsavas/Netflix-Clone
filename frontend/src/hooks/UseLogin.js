import { useState } from "react";
import { useAuthContext } from "./UseAuthContext";

export const useLogin = () => {
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json();

        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json));

            dispatch({type:'LOGIN', payload:json});

            setError(false);
        }
    }

    return { login, loading, error };
}