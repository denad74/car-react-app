import styled from "styled-components";
import { Link } from "react-router-dom"
const StyledFormPage = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  overflow: hidden;
`

const StyledForm = styled.form`
  width: 100vw;
  max-width: var(--fixed-width);
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);
  padding: 1rem 1.5rem;
  margin: 1rem auto;
  border-top: 5px solid var(--primary-500);
`

const StyledFormRow = styled.div`
    width: 100%;
    display:flex;
    flex:1;
    justify-content: center;
    gap: 1.5rem;
    
`
const StyledButton = styled.button`
    width: 100%;
    cursor: pointer;
    color: var(--white);
    background: var(--primary-500);
    border: transparent;
    border-radius: var(--border-radius);
    letter-spacing: var(--letter-spacing);
    padding: 0.375rem 0.75rem;
    margin-top: 1rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    text-transform: capitalize;
    display: inline-block;
`

const StyledLinkButton = styled(Link)`
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
`
const StyledFromHeading = styled.h4`
    text-align: center;
    margin-bottom: 1.38rem;
`
const StyledFormText = styled.p`
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
`

export {
    StyledFormPage,
    StyledForm,
    StyledFormRow,
    StyledButton,
    StyledLinkButton,
    StyledFromHeading,
    StyledFormText
}