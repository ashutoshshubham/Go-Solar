import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button, IconButton } from '@mui/material';

const BrowsingPage = () => {

  const [equipment, setEquipment] = useState([])

  const fetchEquipmentData = async () => {
    const res = await fetch('http://localhost:5000/equipment/getall');
    console.log(res.status)

    const data = await res.json();
    console.log(data);
    setEquipment(data.result);
  }

  useEffect(() => {
    fetchEquipmentData();
  }, [])

  const deleteEquipment = async (id) => {
    console.log(id)
    const res = await fetch('http://localhost:5000/equipment/delete/' + id, {
      method: 'DELETE',
    })

    console.log(res.status)
    if (res.status === 200) {
      fetchEquipmentData();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Equipment Deleted'
      })
    }


  }

  return (
    <div className="container vh-100">
      <div >
        <h1 className='text-center my-3'>ALL EQUIPMENTS HERE</h1>

        {equipment.map((equip) => (

          // <div className="accordion accordion-flush mb-3" id="accordionExample">

          //   <div className="accordion-item">
          //     <h2 className="accordion-header" id="headingOne">
          //       <button
          //         className="accordion-button collapsed"
          //         type="button"
          //         data-mdb-toggle="collapse"
          //         data-mdb-target="#collapseOne"
          //         aria-expanded="false"
          //         aria-controls="collapseOne"
          //       >
          //         <div className='d-block'>
          //           <h1>{equip.name}</h1>
          //         </div>
          //       </button>
          //     </h2>
          //     <div
          //       id="collapseOne"
          //       className="accordion-collapse collapse"
          //       aria-labelledby="headingOne"
          //       data-mdb-parent="#accordionExample"
          //     >
          //       <div className="accordion-body">
          //         <p>
          //           <h5>Category - {equip.category}</h5>
          //         </p>
          //         <p>{equip.details}</p>
          //         <p><CurrencyRupeeIcon />
          //           <b className='fs-5'>{equip.price}</b>
          //         </p>
          //         <button className="btn btn-danger" onClick={() => deleteEquipment(equip._id)}><span class="material-symbols-outlined">
          //           delete
          //         </span></button>
          //       </div>
          //     </div>
          //   </div>

          // </div>


          <Accordion sx={{ marginBottom: '15px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography><h1>{equip.name}</h1></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h5>Category - {equip.category}</h5>
              </Typography>
              <Typography>{equip.details}</Typography>

              <Typography sx={{ marginTop: '15px' }}><CurrencyRupeeIcon /><b className='fs-5'>{equip.price}</b></Typography>

              <Button variant="outlined" startIcon={<DeleteForeverIcon />} onClick={() => deleteEquipment(equip._id)} sx={{ color: 'red', borderColor: 'red', marginTop: '15px' }}>
                Delete
              </Button>

            </AccordionDetails>
          </Accordion>

        ))}

      </div>

      <NavLink to='/main/equipment'>Go To Entry Page</NavLink>
    </div>
  )
}

export default BrowsingPage