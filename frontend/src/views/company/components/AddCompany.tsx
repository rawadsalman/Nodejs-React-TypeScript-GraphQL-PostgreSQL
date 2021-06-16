import React,{useState}from 'react';
import { CREATE_COMPANY } from '../../../gqlQueries/companies/addone';
import { GET_ALL_COMPANIES } from '../../../gqlQueries/companies/getAll';
import { useMutation } from '@apollo/client';
import {Form, Button, Input, Col, Row,Select, InputNumber, DatePicker } from 'antd';
//import './AddCompanyStyles.css'

const InputGroup = Input.Group;
const { Option } = Select;
  
const AddCompany: React.FC=() => 
    {
    const [showSuccess, setshowSuccess] = useState(false);
    const [name, setName] = React.useState("");
    const [addressBillingCity, setAddressBillingCity] = React.useState("");
    const [createcompany, { data, loading, error }] = useMutation(CREATE_COMPANY, {
      refetchQueries: [{ query: GET_ALL_COMPANIES }],
    });
   
    
    // const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
        const handleSubmit=()=>{
        //event.preventDefault();
        // console.log("name..",name,"addressBillingCity..",addressBillingCity)
        try{
        createcompany({ variables: { input:{name, addressBillingCity } }});
        //alert("a new company was added successfully");
        setshowSuccess(true);
        }
        catch(error)
        {
          console.log("error when adding new company")
          console.error();
          
        }
        //window.location.reload(true);
    }
    return(
    <>
    <div>
    <Row>
    { showSuccess
                    ? <div> a new company was added successfully</div>
                    : null
    }
    {/* <form onSubmit={handleSubmit}> */}
    </Row>
    </div>
    
<div>
{/* <div>
  <Row>
    <Col>
  <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter a company name"
  />
  </Col>
  <Col style={{width:'5%'}}></Col>
  <Col>
  <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter a company name"
  />
  
  </Col>
  </Row>
</div> */}
<Form  layout="inline" className='addform'>
<Form.Item style={{width:'100%'}}/>
<Form.Item style={{width:'100%'}}/>
 
     <Form.Item 
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
      >
          <Input
          // value= {}
           placeholder="user name" />
      </Form.Item>
     {/*  <Form.Item style={{width:'100%'}}></Form.Item>
      <Form.Item style={{width:'50%'}}> */}
      {/* <Form.Item></Form.Item> */}
    
      <Form.Item>
      <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter a company name"
         // className="input"
      />

      </Form.Item>

      <Form.Item style={{width:'100%'}}/>

      <Form.Item>
      <Input
          value={addressBillingCity}
          onChange={(e) => setAddressBillingCity(e.target.value)}
          type="text"
          placeholder="Enter an Address Billing City"
         // className="input"
      />

      </Form.Item>
      {/* <Form.Item style={{width:'100%'}}></Form.Item> */}
      <Form.Item>
      <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter a company name"
         // className="input"
      />
      </Form.Item>
      <Form.Item style={{width:'100%'}}/>
      <Form.Item>
      <DatePicker />
      </Form.Item>
      <Form.Item style={{width:'100%'}}/>

      <Form.Item>
      
      <Row justify="start">

        <Button type="primary" htmlType="submit" onClick={() => {
                  handleSubmit();
                }} style={{margin: 'auto',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  }}>Save</Button> 
      </Row>

      </Form.Item>  
      <Form.Item style={{width:'100%'}}/>


    </Form>
   
    </div>
    
    </>
    );
    };
  export default AddCompany
