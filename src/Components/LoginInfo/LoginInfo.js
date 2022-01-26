import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './LoginInfo.css';

const LoginInfo = () => {

    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    console.log(formValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        console.log(formValues);

        // request the server
       
            fetch('http://localhost:7000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.insertedId) {
                //     alert('food added success fully')
                // }
                // else{
                //     alert('some things went wrong')
                // }
            })
            
            // reset();

            // empty dependency array means this effect will only run once (like componentDidMount in classes)
       
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };

    return (
        <Popup trigger={<button className="button"> Open Modal </button>}
            modal
        >
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> Modal Title </div>
                    <div className="content">
                        <div class="login-warp">
                            <div className="container">
                                {Object.keys(formErrors).length === 0 && isSubmit ? (
                                    <div className="ui message success">Signed in successfully</div>
                                ) : (
                                    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <h1>Login Form</h1>
                                    <div className="ui divider"></div>
                                    <div className="ui form">
                                        <div className="field">
                                            <label>Username</label>
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                                value={formValues.username}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <p>{formErrors.username}</p>
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
                                        <p>{formErrors.email}</p>
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
                                        <p>{formErrors.password}</p>
                                        <button className="fluid ui button blue">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Popup>
    );
};

export default LoginInfo;