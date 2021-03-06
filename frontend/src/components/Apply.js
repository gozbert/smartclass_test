import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Element from "./Element";
import {FormContext} from "../FormContext"

const JobDetail = (props) => {
  let params = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItems] = useState([]);
  const [form_fields, setFormFields] = useState([]);
  const [questions, setQuetions] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/workable/jobs/view/${params.shortcode}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/workable/jobs/form/${params.shortcode}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFormFields(result.form_fields);
          setQuetions(result.questions);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(form_fields);
  };

  const handleChange = (id, event) => {
    const newElements = { ...form_fields };
    newElements.fields.forEach((field) => {
      const { field_type, field_id } = field;

      setFormFields(newElements);
    });
    console.log(newElements);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className="header"></div>
        <div className="job_view">
          <div className="job_title">
            <span>{item.full_title}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{item.department}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>
              {item.location.country} / {item.location.region}
            </span>
          </div>
          <br></br>
          <div>
            <h4>Application form</h4>
            {form_fields.form_fields}
          </div>
          <FormContext.Provider value={{ handleChange }}>
            <form>
              {form_fields
                ? form_fields.map((field, i) => (
                    <Element key={i} field={field} />
                  ))
                : null}

              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
            </form>
          </FormContext.Provider>
        </div>
      </div>
    );
  }
};

export default JobDetail;
