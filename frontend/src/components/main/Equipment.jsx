import React from 'react'
import { Formik } from 'formik'
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom'


const Equipment = () => {

    const equipmentSubmit = async (formdata, { resetForm }) => {
        console.log(formdata)
        resetForm()
        const res = await fetch('http://localhost:5000/equipment/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(res.status);

        if (res.status === 201) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Submited Successfully'
            })
            // navigate('/user');
        }

    }







    return (
        <div style={{height : '200vh'}}>

            <div className="my-3">
                <h1 className='text-center my-3'>PANEL DESCRIPTION</h1>

                <div className="row">

                    <div className="col-md-6 mx-auto  my-auto">
                        <img src="https://assets.rbl.ms/29665013/origin.jpg" style={{ width: '100%' }} alt="" />
                    </div>

                </div>

                <div className="row  mt-3">

                    <div className="col-md-6 mx-auto ">



                        <Formik
                            initialValues={{ name: "", category: '', details: "", price: '' }}
                            onSubmit={equipmentSubmit}>

                            {
                                ({ values, handleChange, handleSubmit }) => (<form onSubmit={handleSubmit}>

                                    <div className="mb-3">
                                        <label className="form-label" for="form12"><b>PANEL NAME</b></label>
                                        <input required name='name' type="text" id="form12" className="form-control" onChange={handleChange} value={values.name} />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" for="form12"><b>CATEGORY</b></label>
                                        <input required name='category' type="text" id="form12" className="form-control" onChange={handleChange} value={values.category} />
                                    </div>

                                    <div className="">
                                        <label className="form-label" for="textAreaExample"><b>DETAILS</b></label>
                                        <textarea required name='details' className="form-control" id="textAreaExample" onChange={handleChange} value={values.details} rows="5"></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" for="form12"><b>PRICE</b></label>
                                        <input required name='price' type="text" id="form12" className="form-control" onChange={handleChange} value={values.price} />
                                    </div>


                                    <button type="submit" className="btn btn-success btn-rounded my-3 w-100" data-mdb-ripple-color="dark">Submit</button>


                                </form>
                                )
                            }

                        </Formik>

                        <NavLink to='/main/browsing'>View All Components</NavLink>





                    </div>

                </div>

            </div>

        </div>
    )
}

export default Equipment