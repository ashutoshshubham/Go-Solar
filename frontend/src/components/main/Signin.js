import React from 'react';
// import {Button, Card, CardContent, TextField} from '@mui/material';
import { Formik } from "formik"
import { Link, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"

const Signin = () => {

  const navigate = useNavigate();

  const loginSubmit = async (formdata, { resetForm, setSubmitting }) => {
    console.log(formdata)
    resetForm()
    setSubmitting(true)

    const res = await fetch('http://localhost:5000/user/auth', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (res.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Login Successful'
      })
      // navigate('/user');
    }
    else if (res.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Email or Password is incorrect'
      })
    }
    else {
      Swal.fire({
        iicon: 'error',
        title: 'Error',
        text: 'Something went wrong'
      })
    }

    setTimeout(() => {
      setSubmitting(false)
    }, 2000)
  }

  return (

    // <div className='col-md-3 mx-auto mt-5'>

    //   <Card className='mb-5'>
    //     <CardContent>
    //       <TextField fullWidth variant='standard' sx={{mb: 5}} label="Email Address" value={""} />
    //       <TextField fullWidth type="password" variant='standard' sx={{mb: 5}} label="Password" value={""}/>

    //       <Button color='primary' fullWidth>Submit</Button>
    //     </CardContent>
    //   </Card>



    // </div>

    <div className='container'>

      <div className="row mt-5">

        <div className="col-md-6">
          <img src="https://theuniqueacademy.co.in/assets/images/test.png" alt="" style={{ width: '100%' }} />
        </div>

        <div className="col-md-6 my-auto">

          <h1 className='text-center mb-3'>LOGIN FORM</h1>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={loginSubmit}>
            {({ values, handleSubmit, handleChange, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <label>Email Address</label>
                <input required type="email" className="form-control mb-3" value={values.email} name="email" onChange={handleChange} />

                <label>Password</label>
                <input required type="password" className="form-control mb-3" value={values.password} name="password" onChange={handleChange} />

                <Link to="/" className="">
                  Forgot Password
                </Link>

                <button type="submit" className="btn btn-success w-100 my-2">
                  {isSubmitting ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Submit"}
                </button>
              </form>
            )}
          </Formik>

        </div>

      </div>

    </div>




  )
}


export default Signin