import { Button, Col, Row, Table } from 'antd'
import React  from 'react'
import { Link } from 'react-router-dom'
import { ShowCompanyViewModel } from '../../../generated/api'
import CreateCompanyView from './CreateCompanyView'

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
  </span>

    ),
  },  
]

const CompanyList: React.FC<ICompanyList> = ({ companies }) =>
{

const [showAddForm, setShowAddForm] = React.useState(false);
const [showAddButton, setShowAddButton] = React.useState(true);

return (
  
  <div>
    <Row>
       {showAddButton &&<Button onClick={(event: React.MouseEvent<HTMLInputElement>) => {
        setShowAddForm(true);
        setShowAddButton(false);
       }}>Add New Company
       </Button> 
      }
    </Row>
        {showAddForm && <CreateCompanyView /> }
    <br/>
    <Row>
      <Col xs={24}>
        <Table bordered dataSource={companies} rowKey={'uuid'} columns={columns} pagination={false} />
      </Col>
    </Row>
    
  </div> 
 
);
}
export default CompanyList
