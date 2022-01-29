import React from "react";
import Input from "./elements/Input";
import Select from "./elements/Select";
import Complex from "./elements/Complex";
import File from "./elements/File";
import TextArea from "./elements/TextArea";
const Element = ({
  field: { type, key, label, field_placeholder, field_value, fields },
}) => {
  switch (type) {
    case "string":
      return (
        <Input
          field_id={key}
          field_label={label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );
    case "file":
      return (
        <File
          field_id={key}
          field_label={label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );
    case "free_text":
      return (
        <TextArea
          field_id={key}
          field_label={label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );
    case "select":
      return (
        <Select
          field_id={key}
          field_label={label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );
    case "complex":
      return (
        <Complex
          field_id={key}
          field_label={label}
          field_placeholder={field_placeholder}
          field_value={fields}
        />
      );

    default:
      return null;
  }
};

export default Element;
