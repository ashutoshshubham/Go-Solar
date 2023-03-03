import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

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
    <div>
      <div className="container">
        <h1>ALL EQUIPMENTS HERE</h1>
        <div>
          <table className="table table-fixed align-middle text-center">

            <thead className="bg-success text-light">
              <tr>
                <th style={{ width: '8vw' }}>Panel Name</th>
                <th style={{ width: 150 }}>Category</th>
                <th style={{ width: '45vw' }}>Details</th>
              </tr>
            </thead>

            <tbody>
              {
                equipment.map((equip) => (
                  <tr>
                    <td>
                      <div>
                        {equip.name}
                      </div>
                    </td>
                    <td>
                      <div>
                        {equip.category}
                      </div>
                    </td>
                    <td>
                      <p className="text-break">
                        {equip.details}
                      </p>
                    </td>
                  </tr>

                ))
              }
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default BrowsingPage