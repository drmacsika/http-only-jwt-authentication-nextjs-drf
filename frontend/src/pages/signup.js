import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import Layout from '../layouts/Layout';
import { signup } from '../actions/auth';
import Loader from "react-loader-spinner";

const signupPage = () => {
    const dispatch = useDispatch();
    const signup_success = useSelector(state => state.auth.signup_success);
    const loading = useSelector(state => state.auth.loading);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        re_password: "",
    });

    const {
        first_name,
        last_name,
        username,
        password,
        re_password,
    } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        if (dispatch && dispatch !== null && dispatch !== undefined){
            dispatch(signup(first_name, last_name, username, password, re_password))
        }
    };


    return (
        <Layout 
            title="httpOnly JWT Auth | Sign Up"
            meta_description="Join Us now"
        >
            <h1 className="display-5 mt-5">Sign up to join us</h1>
            <form className="bg-light p-5 mt-5 mb-5" onSubmit={onSubmit}>
                <h3>Create An Account</h3>
                <div className="form-group">
                    <label className="form-label mt-5" htmlFor="first_name">
                        <strong>First Name*</strong>
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        onChange={onChange}
                        value={first_name}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label mt-3" htmlFor="last_name">
                        <strong>Last Name*</strong>
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={onChange}
                        value={last_name}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label mt-3" htmlFor="username">
                        <strong>Username*</strong>
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={onChange}
                        value={username}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label mt-3" htmlFor="password">
                        <strong>Password*</strong>
                    </label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={onChange}
                        value={password}
                        minLength="8"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label mt-3" htmlFor="re_password">
                        <strong>Confirm Password*</strong>
                    </label>
                    <input
                        className="form-control"
                        type="password"
                        name="re_password"
                        placeholder="Confirm Password"
                        onChange={onChange}
                        value={re_password}
                        minLength="8"
                        required
                    />
                </div>
                <button
                    className="btn btn-primary mt-5"
                    type="submit"
                >
                    Create Account
                </button>
            </form>

        </Layout>
    )
}

export default signupPage
