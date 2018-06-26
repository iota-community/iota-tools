import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    font-size: 12px;
    padding: .5rem .5rem;
`
const Main = styled.div`
    padding-right: .5rem;
`
const Second = styled.div`
    opacity: .7;
`

export default props => (
  <Wrap>
    <Main>{props.primary}</Main>
    <Second> {props.price} {props.secondary}</Second>
  </Wrap>
)
