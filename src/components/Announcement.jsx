import styled from "styled-components"

const Container = styled.div`
height: 100px;
background-color: teal;
color:white;
display:flex;
align-items: center;
gap:30px;
justify-content:center;
font-size: 14px;
font-weight: 500;
`

const Announcement = () => {
  return (
    < Container>
    <div>
      Super Deal! Free shipping on orders over $50
      </div>
      <div>
      Super Deal! Free shipping on orders over $50
      </div>
    </Container>
  )
}

export default Announcement;
