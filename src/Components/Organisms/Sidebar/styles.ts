import styled from 'styled-components'

export const Wrapper = styled.nav`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 230px;

  @media (max-width: 768px) {
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
    margin: 2rem 0 2rem 0;
    padding: 0;

    li {
      color: #ffffff;
      padding: 0.5rem;
      text-align: center;
    }
  }
`

interface AProps {
  isSelected?: boolean
}

export const A = styled.a<AProps>`
  color: #ffffff;
  transition: 200ms ease-in-out;
  color: ${(props) => props.isSelected && props.theme.colors.red};
  font-size: 1.25rem;

  :hover {
    color: ${(props) => props.theme.colors.red};
  }
`

export const V = styled.p`
  font-size: 125px;
  color: #ffffff;
  text-shadow: 4px 2px ${(props) => props.theme.colors.red};
  margin: 0;
`

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary.main};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0;
`

export const Subtitle = styled.h5`
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 200;
  margin: 0;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
