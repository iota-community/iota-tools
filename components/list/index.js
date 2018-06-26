import styled from 'styled-components'

export default props => (
  <Wrapper>
    {console.log(props)}
    {Object.keys(props.tools).map(key => (
      <Container>
        <Title>{key}</Title>
        {Object.keys(props.tools[key]).map(name => (
          <div>
            <Item href={props.tools[key][name]} target="_blank">
              {name}
            </Item>
          </div>
        ))}
      </Container>
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  color: white;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 10%;
  margin: -10% 0 60px;
  max-width: 800px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const Title = styled.h4``
const Container = styled.section`
  margin: 0 20px;
  min-width: 220px;
`
const Item = styled.a`
  padding: 5px 10px;
  color: white;
  text-decoration: inherit;
  &:visited {
    color: #ffdfe9;
  }
`
