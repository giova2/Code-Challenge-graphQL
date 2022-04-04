import SubTotal from './SubTotal'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  background: red;
`

const Presentational: React.FC = () => {
  return(
    <StyledHeader>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <SubTotal />
    </StyledHeader>
  );
}

export { Presentational as default }