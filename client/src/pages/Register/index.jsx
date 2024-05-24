
import { FormInput, Logo } from "../../components"
import { 
  StyledFormPage, 
  StyledForm, 
  StyledFromHeading,
  StyledFormText,
  StyledButton, 
  StyledLinkButton,
  StyledFormRow
} from "./styles";

const Register = () => {
  return (
    <StyledFormPage>
        <StyledForm >
          <Logo/>
          <StyledFromHeading>Register</StyledFromHeading>
          <StyledFormRow>
          <FormInput type="text" name="name" defaultValue="deno" />
          <FormInput type="text" name="lastName" labelText="last name" defaultValue="ram" />
          </StyledFormRow>
          <StyledFormRow>
          <FormInput type="text" name="companyName" defaultValue="Asena" />
          <FormInput type="text" name="location" defaultValue="sarajevo" />
          </StyledFormRow>
          <StyledFormRow>
          <FormInput type="text" name="street" defaultValue="Topal Osman 5" />
          <FormInput type="text" name="country" defaultValue="BiH" />
          </StyledFormRow>
          <StyledFormRow>
          <FormInput type="email" name="email" defaultValue="deno@deno.com" />
          <FormInput type="tel" name="phone" defaultValue="123 123 123 123" />
          </StyledFormRow>
          <StyledFormRow>
          <FormInput type="password" name="password" defaultValue="deno1234" />
          <FormInput type="password" name="confirmPassword" labelText="confirm password" defaultValue="deno1234" />
          </StyledFormRow>
          <StyledButton type="submit" className="btn btn-block">submit</StyledButton>
          <StyledFormText>Already a member?
          <StyledLinkButton to='/login'>Login</StyledLinkButton>
          </StyledFormText>
        </StyledForm>
    </StyledFormPage>
  )
}

export default Register;