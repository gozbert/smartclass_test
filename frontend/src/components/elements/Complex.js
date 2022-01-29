import React, { useContext } from 'react'
import Element from '../Element'

const Complex = ({ field_id, field_label, field_placeholder, field_value }) => {
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{field_label}</label>
           
            {field_value.map((field, i) => <Element key={i} field={field} />)}
        </div>
    )
}

export default Complex
