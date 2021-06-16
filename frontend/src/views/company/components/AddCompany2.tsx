import React,{useState}from 'react';
import { CREATE_COMPANY } from '../../../gqlQueries/companies/addone';
import { GET_ALL_COMPANIES } from '../../../gqlQueries/companies/getAll';
import { useMutation } from '@apollo/client';
import {  Form, Input, InputNumber, Button,DatePicker } from 'antd';

const layout = {
  labelCol: {
    span: 30,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!'

  //, AddressBillingCity:'${label} is required!'}
  /* ,
            '${label} is required!',
  },
   types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },  */
};
/* eslint-enable no-template-curly-in-string */

const AddCompany2: React.FC=() =>{

    const [showSuccess, setshowSuccess] = useState(false);
    const [name, setName] = React.useState("");
    // const [memberSince,setMemberSince] = React.useState(new Date())
    const [addressBillingCity, setAddressBillingCity] = React.useState("");
    const [createcompany, { data, loading, error }] = useMutation(CREATE_COMPANY, {
      refetchQueries: [{ query: GET_ALL_COMPANIES }],
    });
    const handleSubmit=()=>{
        try{
        createcompany({ variables: { input:{name, addressBillingCity } }});
        setshowSuccess(true);
        }
        catch(error)
        {
          console.log("error when adding new company")
          console.error();
        }
        //window.location.reload(true);
    }       

    return (
      <>
    <div>
    { showSuccess
                    ? <div> a new company was added successfully</div>
                    : null
    }    
    </div>
    <Form {...layout} >
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
        />
      </Form.Item>
      {/* <Form.Item 
            name= 'Member Since'
            label="Member Since" 
            rules={[
                {
                  required: true,
                },
              ]}
             
            >
           
       <DatePicker  style={{width:'100%'}} />
      </Form.Item> */}
      <Form.Item name= 'introduction' label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default AddCompany2;