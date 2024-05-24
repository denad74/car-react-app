import { FormInput, Logo } from "../../components"
import { 
  StyledForm, 
  StyledHeadingExtraSmall, 
  StyledLoginContainer,
  StyledLoginText,
  StyledLogoImg,
  StyledButton,
  StyledMemberButton
} from "./styles"

const Login = () => {
  return (
    <StyledLoginContainer>
        <StyledForm>
          <StyledLogoImg>
            <Logo/>
          </StyledLogoImg>
          <StyledHeadingExtraSmall>login</StyledHeadingExtraSmall>
          <FormInput type="email" name="email" defaultValue="deno@deno.com"/>
          <FormInput type="password" name="password" defaultValue="deno1234"/>
          <StyledButton type="submit">
            submit
          </StyledButton>
          <StyledButton type="button">
            explore the app
          </StyledButton>
          <StyledLoginText>Not a member yet?
            <StyledMemberButton to='/register'>Register</StyledMemberButton>
            </StyledLoginText>
        </StyledForm>
    </StyledLoginContainer>
  )
}

export default Login