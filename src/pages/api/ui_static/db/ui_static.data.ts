import { UiConfig } from "./ui_static.utils";

export const UI_DATA: UiConfig = {
    account_mannager: {
        welcome: {
            title: "welcome!",
            img: {
                src: "",
                alt: "welcome icon",
                width: 0,
                height: 0,
            },
            buttons: ["Sign up", "Login"],
        },
        sign_up: {
            title: "Sign Up",
            fields: [
                {
                    value: "first name",
                    required: true,
                    type: "text",
                },
                {
                    value: "last name",
                    required: true,
                    type: "text",
                },
                {
                    value: "email",
                    required: true,
                    type: "text",
                },
                {
                    value: "number",
                    required: true,
                    type: "number",
                },
                {
                    value: "password",
                    required: true,
                    type: "password",
                },
            ],
            button: "Create",
        },
        login: {
            title: "Sign Up",
            providers: [
                {
                    src: "",
                    alt: "github",
                    width: 0,
                    height: 0,
                },
                {
                    src: "",
                    alt: "google",
                    width: 0,
                    height: 0,
                },
            ],

            fields: [
                {
                    value: "email",
                    required: true,
                    type: "text",
                },
                {
                    value: "password",
                    required: true,
                    type: "password",
                },
            ],
            button: "Login",
        },
    },
};
