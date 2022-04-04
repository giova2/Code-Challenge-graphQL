import styled from 'styled-components'

const StyledLoading = styled.div`
  width:100vw;
  height:100vh;
  position:fixed;
  top:0;
  left:0;
  display:flex;
  justify-content: center;
  align-items: center;
  background: #aa3333aa;
`

const Loadingcaption = () => <span>Loading...</span>

const Loading:React.FC<{cover?: boolean}> = ({cover}) => {
  if(cover){
    return <StyledLoading><Loadingcaption/></StyledLoading>
  }
  return(<Loadingcaption/>);
}

export { Loading as default }