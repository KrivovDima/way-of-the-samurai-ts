import React from "react";
import {useFormik} from "formik";
import {validateLogin as validate} from "../../utils/validateFunctions";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {postLogin} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

type LoginPropsType = {
  isAuth: boolean
  postLogin: (email: string, password: string, rememberMe: boolean) => void
}

function Login(props: LoginPropsType) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate,
    onSubmit: values => {
      props.postLogin(values.email, values.password, values.rememberMe)
      formik.resetForm();
    },
  })

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email &&
        <div style={{color: 'tomato'}}>{formik.errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password &&
        <div style={{color: 'tomato'}}>{formik.errors.password}</div>}
      </div>
      <div>
        <label htmlFor="rememberMe">remember me</label>
        <input
          id="rememberMe"
          type="checkbox"
          {...formik.getFieldProps('rememberMe')}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

const mapStateToProps = (state: StateType) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {postLogin})(Login);