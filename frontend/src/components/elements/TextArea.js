import React, { useContext } from 'react'


const Input = ({ field_id, field_label, field_placeholder, field_value }) => {
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{field_label}</label>
            <textarea className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder={field_placeholder ? field_placeholder : ''}
              
            >{field_value}</textarea>
        </div>
    )
}

export default Input
