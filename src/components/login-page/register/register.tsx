import PropTypes from "prop-types";
import { Button, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import "./register.scss";
import { emailRegex } from "../../../constants";
import { useAuth } from "../../../common-components/auth/provide-auth";
import { RegisterUserModel } from "../../../common-components/auth/model";


const validateFunc = (values) => {
    const errors: any = {};
    if (!values.email) 
        errors.email = 'Required';
    else if (!emailRegex.test(values.email)) 
        errors.email = 'Invalid email address';
    
    if(!values.password)
        errors.password = 'Required';
    else if (values.password.length < 10 ) 
        errors.password = "Password must be atleast 8 characters length"

    if (!values.password2)
        errors.password2 = 'Required'
    else if (values.password2 !== values.password)
        errors.password2 = "Passwords is not the same"

    return errors;
}


export default function Register(props : {setLoginForm: (v: boolean)=> void}) {
    const auth = useAuth()
    const onSubmitFunc = (values, { setSubmitting }) => {
        auth.register(new RegisterUserModel(values.email, values.password)).then(data => {
            setSubmitting(false);
            props.setLoginForm(true)
        })
    }

    return (
        <div>
            <Formik
            initialValues={{ email: '', password: '', password2: '' }}
            validate={validateFunc}
            onSubmit={onSubmitFunc}
            >
            {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
    
            }) => (
                <form className="register" onSubmit={handleSubmit} >
                    <div className="email-form form-field">
                        <TextField id="outlined-basic" label="Email" type="email" name="email" variant="outlined" 
                        onChange={handleChange} onBlur={handleBlur} value={values.email} />
                        {errors.email && touched.email && <div className="validation-msg" >{errors.email}</div>}
                    </div>
                    <div className="pass-form form-field">
                        <TextField id="outlined-basic" label="Password" variant="outlined" name="password" type="password"
                        onChange={handleChange} onBlur={handleBlur} value={values.password} />
                        {errors.password && touched.password && <div className="validation-msg">{errors.password}</div>}
                    </div>
                    <div className="pass-repeat-form form-field">
                        <TextField id="outlined-basic" label="Repeat Password" name="password2" type="password" variant="outlined" 
                        onChange={handleChange} onBlur={handleBlur} value={values.password2} />
                        {errors.password2 && touched.password2 && <div className="validation-msg">{errors.password2}</div>}
                    </div>
                    <div className="cofirmation-button">
                        <Button size="medium" type="submit"  variant="contained" disabled={isSubmitting} >Send</Button>
                    </div>
                    <div className="switch-form">
                        <Button size="small"   onClick={()=> props.setLoginForm(true)} >Already have account</Button >
                    </div>
                </form>
            )}
        </Formik>
        </div>
    )
}

Register.propTypes = {
    setLoginForm: PropTypes.func
};
