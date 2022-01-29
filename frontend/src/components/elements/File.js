import React, { useContext } from 'react'


const Input = ({ field_id, field_label, field_placeholder, field_value }) => {
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{field_label}</label>
            <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder={field_placeholder ? field_placeholder : ''}
                value={field_value}
            />
        </div>
    )
}

export default Input
