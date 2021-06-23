import React,{useState}from 'react';
import { CREATE_COMPANY } from '../../../gqlQueries/companies/addOne';
import { GET_ALL_COMPANIES } from '../../../gqlQueries/companies/getAll';
import { useMutation } from '@apollo/client';
import {  Form, Input, Row, Col, Button,DatePicker } from 'antd';

const layout = {
  labelCol: {
    span: 30,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!'
};

const CreateCompanyView: React.FC=() =>{

    const [showForm, setShowForm]=useState(true)
    const [name, setName] = React.useState("");
    const [addressBillingCity, setAddressBillingCity] = React.useState("");
    const [memberSince,setMemberSince] = React.useState("");
    
    const [createcompany, { data, loading, error }] = useMutation(CREATE_COMPANY, {
      refetchQueries: [{ query: GET_ALL_COMPANIES }],
    });
    const handleSubmit=(name:string, addressBillingCity:string, memberSince:string)=>{
        try{
            if(name!='' && addressBillingCity!='' && memberSince!=''){
            createcompany({ variables: { input:{name, addressBillingCity, memberSince } }});
            setShowForm(false);
            alert("a new company was added successfully")
            window.location.reload(true);
          } 
        }
        catch(error)
        {
            console.log("error when adding new company");
            console.error();
        }
    }
    
    return (
    <div>
    {showForm &&
    <Form 
     labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 14,
    }}
    layout="horizontal"
    initialValues={{
      size: 'default',
    }} 
    validateMessages={validateMessages}
    style={{ borderStyle:'solid', borderWidth:'thin', borderColor :'green' }}
     >
       <Row justify="center">
          <span style={{color:'green'}}>New Company</span>
      </Row>
      <Form.Item/>
      <Form.Item
        name='Company Name'
        label="Company Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input 
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter company name"
            style={{ width: '50%' }}
        />
      </Form.Item>
      <Form.Item 
            name= 'Address Billing City'
            label="Address Billing City" 
            rules={[
                {
                  required: true,
                },
              ]}
            >  
        <Input
            type="text"
            onChange={(e) => setAddressBillingCity(e.target.value)}
            placeholder="Enter Address Billing City"
            style={{ width: '50%' }}
        />
      </Form.Item>
      <Form.Item 
            name= 'Member Since'
            label="Member Since" 
            rules={[
                {
                  required: true,
                },
              ]} 
            >
        <DatePicker  style={{width:'30%'}} onChange={(date)=>date && setMemberSince(date.toString())}/>
      </Form.Item> 

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
        
        <Button type="primary" htmlType="submit" onClick={() => {
                  handleSubmit(name, addressBillingCity, memberSince);
                }}>
          Save
        </Button>
        <Button style={{margin: '15px'}} type="primary" onClick={(event: React.MouseEvent<HTMLInputElement>) => {
            window.location.reload(true);
          }}>Cancel
       </Button>
      </Form.Item>
    </Form>
    }
    </div>
  );
};

export default CreateCompanyView;