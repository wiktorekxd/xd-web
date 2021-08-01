import { Button, TextField } from '@material-ui/core'
import PropTypes from "prop-types";
import { useAuth } from '../../../common-components/auth/provide-auth';
import { useHistory } from 'react-router-dom';
import { emailRegex } from '../../../constants';
import { Formik } from 'formik';
import { LoginUserModel } from '../../../common-components/auth/model';

const validateFunc:any = (values) => {
    const errors: any = {};
    if (!values.email) 
        errors.email = 'Required';
    else if (!emailRegex.test(values.email)) 
        errors.email = 'Invalid email address';
    
    if(!values.password)
        errors.password = 'Required';
    else if (values.password.length < 10 ) 
        errors.password = "Password must be atleast 8 characters length"

    return errors;
}

export default function Login(props : {setLoginForm: (v: boolean)=> void}) {
    let auth = useAuth();
    let history = useHistory();
    const onSubmitFunc = (values, { setSubmitting }) => {
        auth.signin(new LoginUserModel(values.email, values.password))
            .then(x=> {
                setSubmitting(false);
                history.push("/dashboard")
            })
    }
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
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
                    <form className="login" onSubmit={handleSubmit}>
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
                        <div className="cofirmation-button">
                            <Button size="medium" variant="contained" type="submit"  disabled={isSubmitting} >Send</Button>
                        </div>
                        <div className="switch-form">
                            <Button size="small" onClick={() => props.setLoginForm(false)}>I don't have account</Button>
                        </div>
                    </form>)}
            </Formik>
        </div>
    )
}

Login.propTypes = {
    setLoginForm: PropTypes.func
};

