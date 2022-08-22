import React from 'react'
import { useState } from "react";


function Login() {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors((formValues));
        setIsSubmit(true);
        fetch ("http://3.7.50.43:3000/API/login" , {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formValues)
        })
            .then((res) => {
                return res.json()
            })
            .then((formValues) => console.log(formValues))
            .catch(error => console.log('ERROR'))
    }

    // useEffect(() => {
    //     console.log(formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log(formValues);
    //     }
    // }, [formErrors]);
    
    return (
        <>
        <div className="App-container">
            <div className="card">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">
                        Signed in successfully!!
                    </div>
                ) : (
                    <noscript>{JSON.stringify(formValues, undefined, 2)}</noscript>
                )}
                <div className="card-header">
                    <h4 className="title">Login Form</h4>
                </div>
                <div className="card-body">
                    <form className="form-style">

                        <div className="ui divider"></div>
                        <div className="ui form">


                            <div className="field">
                                <label>Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <p className="error-msg">{formErrors.email}</p>
                            <div className="field">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <p className="error-msg">{formErrors.password}</p>
                            <button className="btn" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
