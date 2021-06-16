import { Button, Col, Input, Row, Table } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShowCompanyViewModel } from '../../../generated/api'
import DeleteButton from './DeleteButton'

import AddCompany2 from './AddCompany2'

interface ICompanyList {
  companies: ShowCompanyViewModel[],
}

const columns = [
  {
    title: 'Company Name',
    dataIndex: 'name',
    key: 'companyName',
  },
  {
    title: 'Market Places',
    dataIndex: 'marketplaces',
    key: 'marketplaces',
    render: (places: string[]) => places.join(),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: string, record: ShowCompanyViewModel) => ( 
      <span>
        <Link to={`/companies/${record.uuid}`} >Open</Link>
        {/* <DeleteButton uuid={`${record.uuid}`}/> */}
  </span>

    ),
  },
  
]

const CompanyList: React.FC<ICompanyList> = ({ companies }) =>
{

 const [showaddform, setshowaddform] = React.useState(false);

return (
  
  <div>
    <Row>
       <Button onClick={(event: React.MouseEvent<HTMLInputElement>) => {
        setshowaddform(true)
       }}>Add Company</Button>
        {showaddform && <AddCompany2 /> }
    </Row>
    <Row>
      <Col xs={24}>
        <Table bordered dataSource={companies} rowKey={'uuid'} columns={columns} pagination={false} />
      </Col>
    </Row>
    
  </div> 
 
);
}
export default CompanyList
