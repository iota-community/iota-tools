import styled, { css } from 'styled-components'
import Link from 'next/link'

const NavRow = styled.nav`
  display: flex;
  font-size: 12px;
  align-items: baseline;
`
const active = props => {
  if (props.active)
    return css`
      opacity: 1;
    `
  if (props.disabled)
    return css`
      opacity: 0.3;
      cursor: not-allowed;
    `
  return css`
    opacity: 0.7;
  `
}

const Item = styled.a`
  padding: 0.5rem 0.5rem 0rem 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: white;
  @media (max-width: 1024px) {
    display: ${props => props.mobile && 'none'};
  }
  ${props => active(props)};
`

export default props => (
  <NavRow>
    <Link href="/">
      <Item mobile>list</Item>
    </Link>
    <Link href="/calculator">
      <Item mobile>calculator</Item>
    </Link>
  </NavRow>
)
