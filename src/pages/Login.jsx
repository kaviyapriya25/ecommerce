import styled from "styled-components";
import {Form,Button,Input } from "antd";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
width: 100vw;
height: 200vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),
url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
background-position:center;
background-size:cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
width:24%;
padding: 20px;
margin-bottom: 40%;
background-color: white;
${mobile({ width: "75%" })}
`;

const Title = styled.h1`
font-size: 20px;
font-weight: 300;

`;

// const Form = styled.div`
// display: flex;
// flex-direction: column;
// `;

// const Input = styled.input`
// flex:1;
// min-width:40%;
// margin: 5px 0px;
// padding:10px;
// `;


// const Button = styled.button`
// width: 40%;
// border: none;
// padding: 15px 20px;
// background-color: teal;
// color: white;
// cursor:pointer;
// margin-bottom:10px;

// `;

// const Link = styled.a`
// margin:5px 0px;
// font-size: 12px; 
// text-decoration: underline;
  
// `;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form autoComplete="off"  labelCol={{ span: 12 }}
          wrapperCol={{ span: 16}} >
          <Form.Item name="name" 
          
          rules={[
            {
              required: true,
              message: "please enter your name"
            },
            { whitespace: true
        
            },
            {min : 3},

          ]}
          hasFeedback
          >
        <Input placeholder="name"/>
        </Form.Item>
        <Form.Item  name = "password"
        rules={[
          {
            required:true
          }
        ]}
        hasFeedback
        >
        <Input.Password placeholder="password"/>
        </Form.Item>
        <Form.Item  wrapperCol={{ span: 24 }}>
        <Button  type = "primary" htmlType ="submit" >
          LOGIN
          </Button>
        </Form.Item>
        <p>   Don't have account?
        <Link to = "/Register">CREATE A NEW ACCOUNT</Link>
        </p>
        </Form>

      </Wrapper>
      
    </Container>
  )
}

export default Login
