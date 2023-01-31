import styled from "styled-components";
import { mobile } from "../responsive";
import {Form,Button,Input, } from "antd";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),
url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
display: flex;
align-item: center;
justify-content: center;
`;

const Wrapper = styled.div`
width:30%;
padding: 20px;
margin: 100px;

background-color: white;
${mobile({ width: "75%" })}
`;

const Title = styled.h1`
font-size: 20px;
font-weight: 300;
`;

// const Form = styled.div`
// display: flex;
// flex-wrap: wrap;
// `;

// const Agreement = styled.span`
// font-size: 12px;
// margin: 20px 0px;
// `;

// const Button = styled.button`
// width: 40%;
// border: none;
// padding: 15px 20px;
// background-color: teal;
// color: white;
// cursor:pointer;

// `;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form autoComplete="off"  labelCol={{ span: 20 }}
          wrapperCol={{ span: 25}}
          onFinish={(values)=>{
            console.log({ values});
          }}
          onFinishFailed ={(error) => {
            console.log({error});}} >
          <Form.Item name="first name"
          rules ={[
         {
          required: true,
          message: " Enter your Firstname"
         }
          ]}
        hasFeedback
          >
        <Input placeholder="First name"/>
        </Form.Item>

        <Form.Item name ="lastname"
         rules ={[
          {
           required: true,
           message: " Enter your Lastname"
          }
           ]}
         hasFeedback
        >
        <Input placeholder="last name"/>
        </Form.Item>
        <Form.Item  name ="Username"
        rules ={[
          {
            required: true,
          },
          {whitespace:true},  
        ]}
       hasFeedback
        >
        <Input placeholder="username"/>
        </Form.Item>
        <Form.Item
        name ="Email"
        rules ={[
          {
            required: true,
            message: "Enter your email",
          },
          {type:"email", message:"Enter  a valid email"},  
        ]}
       hasFeedback
        >
        <Input placeholder="email"/>
        </Form.Item>
        <Form.Item
         name ="password"
         rules ={[
           {
             required: true,
             message: "Enter your Password",
           },
           { min: 6 },
         
         ]}
        hasFeedback
        >
        <Input.Password placeholder="password"/>
        </Form.Item>
        <Form.Item
         name ="Confirm password"
         dependencies={["password"]}
         rules ={[
           {
             required: true,
             message: "Enter your  Confirm Password",
           },
           ({getFieldValue})=>({
            validator(_,value){
              if(!value || getFieldValue ("password") === value){
                return Promise.resolve()
              }
              return Promise.reject("Those passwords didn’t match. Try again.")
            }
           })
            
         ]}
        hasFeedback
        >
        <Input.Password placeholder="confirm password"/>
        </Form.Item>
        < Form.Item name="Agreement"> By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY </b>
            </Form.Item>
            
            <Button block type = "primary" htmlType = "submit" >
              CREATE
              </Button>
        </Form>

      </Wrapper>
    </Container>
  )
}

export default Register
