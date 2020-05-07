import React, { useState, useRef, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/authContext';

function Login(props) {
  const [email, setEmail] = useState('');
  const [select, setSelect] = useState('1');

  const { login } = useContext(AuthContext);

  const { watch, errors, register, handleSubmit } = useForm();

  const formRef = useRef(null);
  //   const onSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(event.target);
  //     console.log(passwordRef.current.value);
  //     console.log(email);

  //     const data = {};
  //     const fd = new FormData(formRef.current);
  //     for (let [name, value] of fd.entries()) {
  //       data[name] = value;
  //     }
  //     console.log(data);
  //   };

  //   console.log(watch('password'));
  const onSubmit = (data) => {
    console.log('onSubmit', data);
    if (data['password'] === 'admin') {
      login();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              ref={register({ required: true, minLength: 10 })}
              name="email"
            />
          </div>
          {errors.email && errors.email.type === 'required' && (
            <span className="text-danger">Email is required</span>
          )}
          {errors.email && errors.email.type === 'minLength' && (
            <span className="text-danger">minLength is 10</span>
          )}
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              ref={register({ required: true })}
              className="form-control"
              id="inputPassword3"
              name="password"
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-2">Checkbox</div>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="rememberMe"
                id="gridCheck1"
                ref={register}
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
