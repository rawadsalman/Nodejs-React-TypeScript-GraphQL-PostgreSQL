import React,{useState}from 'react';
import { CREATE_COMPANY } from '../../../gqlQueries/companies/addone';
import { GET_ALL_COMPANIES } from '../../../gqlQueries/companies/getAll';
import { useMutation } from '@apollo/client';
import {  Form, Input, InputNumber, Button,DatePicker } from 'antd';
import moment from 'moment';

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

const CreateCompanyView: React.FC=() =>{

    const [showSuccess, setshowSuccess] = useState(false);
    const [name, setName] = React.useState("");
    const [addressBillingCity, setAddressBillingCity] = React.useState("");
    //const [memberSince,setMemberSince] = React.useState(new Date());
    const [memberSince,setMemberSince] = React.useState("");


    const [createcompany, { data, loading, error }] = useMutation(CREATE_COMPANY, {
      refetchQueries: [{ query: GET_ALL_COMPANIES }],
    });
    const handleSubmit=()=>{
        try{
        console.log("member since",memberSince);

        createcompany({ variables: { input:{name, addressBillingCity, memberSince } }});
        setshowSuccess(true);
        }
        catch(error)
        {
          console.log("error when adding new company")
          console.error();
        }
        //window.location.reload(true);
    }   
    /* const onChangeDatePicker=(val )=>{
        console.log('kkkk',val);
    }   */
    /* const handleDateChange = (dateObj: moment.Moment, dateStr: string): void => {
      setMemberSince(dateObj);
    }
 */
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
      <Form.Item 
            name= 'Member Since'
            label="Member Since" 
            rules={[
                {
                  required: true,
                },
              ]}
             
            >
       {/* <DatePicker  style={{width:'100%'}} onChange={(date)=>date && setMemberSince(date?.toDate())}/> */}

       <DatePicker  style={{width:'100%'}} onChange={(date)=>date && setMemberSince(date.toString())}/>
      </Form.Item> 

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" onClick={() => {
                  handleSubmit();
                }}>
          Save
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default CreateCompanyView;