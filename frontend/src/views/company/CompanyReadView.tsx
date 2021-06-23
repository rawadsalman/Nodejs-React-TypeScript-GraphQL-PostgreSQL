import React from 'react'
import { ScrollWrapper } from '../../components/Layout/ContentWrapper'
import CustomPageHeader from '../../components/Layout/CustomPageHeader'
import { StyledContent } from '../styles'
import { ShowCompanyViewModel } from '../../generated/api'
import { RouteComponentProps, useParams } from 'react-router-dom';
import { GET_COMPANY_DETAILS } from '../../gqlQueries/companies/getOne'
import { useQuery } from '@apollo/client'
import LoadingSpinner from '../../components/Basic/LoadingSpinner'
import {Result, Row ,Descriptions} from 'antd'
import HomeButton from './components/HomeButton'


interface ICompanyReadView extends RouteComponentProps {
   company: ShowCompanyViewModel;
}
const CompanyReadView: React.FC<ICompanyReadView> = ( props ) => {
   
  const uuid=(props as any).match.params.id;
  const { loading, error, data} = useQuery(GET_COMPANY_DETAILS,{ variables: {uuid} })

  const companydetails = data?.company[0]
   if (loading) {
    console.log("loading")
    return <LoadingSpinner data-testid="spinner" />
  }

   if (error || companydetails === null || companydetails === undefined) {
    return (
      <Row justify="center">
        <Result status={'500' as any} title="500" subTitle="Error from the server" />
      </Row>
    )
  } 

  return (
    <ScrollWrapper>
      <CustomPageHeader title={`Company Details`} />
      <StyledContent>
        <Row>
          <Descriptions bordered>

            <Descriptions.Item label="Company Name">{companydetails.name}</Descriptions.Item>
            <Descriptions.Item label="Uuid">{companydetails.uuid}</Descriptions.Item>
            <Descriptions.Item label="Member Since">{companydetails.memberSince}</Descriptions.Item>
            <Descriptions.Item label="Address Billing City">{companydetails.addressBillingCity}</Descriptions.Item>
            <Descriptions.Item label="Address Billing Phone">{companydetails.addressBillingPhone}</Descriptions.Item>

          </Descriptions>
        </Row>
        <br/>
        <br/>
        <Row justify="center">
           <HomeButton />
        </Row>
        
        
      </StyledContent>
    </ScrollWrapper>
  )
}

export default CompanyReadView
