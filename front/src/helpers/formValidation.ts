import { LoginErrorsProps, LoginProps, RegisterErrorsProps, RegisterProps } from "@/types";

export function validationFormLogin(dataUser: LoginProps) {
    let errors:LoginErrorsProps = {

    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if(!dataUser.email) {
        errors.email = "Email is required"
    } else if (!emailRegex.test(dataUser.email)) {
        errors.email = "Email is not valid"
    } else if (!dataUser.password) {
        errors.password = "Password is required"
    }

    return errors;
}

export function validationFormRegister(dataUser: RegisterProps) {
    let errors:RegisterErrorsProps = {

    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if(!dataUser.email) {
        errors.email = "Email is required"
    } else if (!emailRegex.test(dataUser.email)) {
        errors.email = "Email is not valid"
    } else if (!dataUser.password) {
        errors.password = "Password is required"
    } else if (!dataUser.name) {
        errors.name = "Name is required"
    } else if (!dataUser.address) {
        errors.address = "Address is required"
    } else if (!dataUser.phone) {
        errors.phone = "Phone is required"
    }

    return errors;
}