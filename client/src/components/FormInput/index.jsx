import { StyledFormRow, StyledFormLabel, StyledFormInput } from "./styles";

/* eslint-disable react/prop-types */
const FormInput = ({type,name,labelText,defaultValue}) => {
    return (
      <StyledFormRow>
        <StyledFormLabel htmlFor={name} >{labelText || name}</StyledFormLabel>
        <StyledFormInput 
          type={type} 
          id={name} 
          name={name} 
          defaultValue={defaultValue || ""}
          required
          />
      </StyledFormRow>
    )
  }
  
  export default FormInput;