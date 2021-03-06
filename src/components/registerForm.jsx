import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from "../services/userService";


class RegisterForm extends Form {
    state = {
        data: {username: "", password: "", name: ""},
        errors: {}
    };

    schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Username"),
        name: Joi.string().required().label("Username"),
    };

    doSubmit = async () => {
        try {
            await userService.register(this.state.data);
        } catch (ex) {
            if (ex.response && ex.response.status === 400){
                const errors = {...this.state.errors};  // klon listy bledow
                errors.username = ex.response.data;     // wiadomosc bledu z serwera
                this.setState({errors});            // zamianka na nowa liste
            }
        }
    };

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    };
}

export default RegisterForm;