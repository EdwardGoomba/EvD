import styled from 'styled-components'

const NavDirective = styled.a`
  text-decoration: none;
  color: ${props => props.brand ? '#0872a1' : '#000'};
`

export default NavDirective
