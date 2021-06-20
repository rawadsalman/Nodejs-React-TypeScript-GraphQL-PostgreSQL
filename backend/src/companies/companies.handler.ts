import { NextFunction, Request, Response } from 'express'
import CompanyRepository from '../database/repository/company/company.repository'
import logger from '../logger'

export async function getCompaniesHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    console.log("we are in getcompanies");

    const companyRepository = new CompanyRepository()
    const companies = await companyRepository.getCompanies()
  /*   for (var i = 0; i < companies.length; i++) {
       console.log("address city.....",companies[i]['addressBillingCity']);
    }   */
    console.log("companies.....",companies);
    // res.json(companies.map(({ id, ...rest }) => (rest)))
    res.json(companies)
  } catch (err) {
    logger.error(err)
    next(err)
  }
}
export async function getCompanyHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    console.log("we are in getcompany");
    const companyRepository = new CompanyRepository()
    const companies = await companyRepository.getCompanies()
    // console.log("back end company",companies)

      for (var i = 0; i < companies.length; i++) {
        console.log("req.paras=",req.params);
        if (companies[i] == null || companies[i] == 'undefined') 
              res.status(404);
        else
        if (companies[i]['uuid'] == req.params.uuid) 
              res.json(companies[i]);
      }  
    } catch (err) {
    logger.error(err)
    next(err)
  }
}
export async function addCompanyHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    console.log("we are in create company");
    console.log("req body.....=",req.body);
    const name=req.body.name;
    const addressBillingCity=req.body.addressBillingCity;
    const memberSince=req.body.memberSince;
    console.log("name.....=",name);
    console.log("addressBillingCity.....=",addressBillingCity);
    console.log("memberSince.....=",memberSince);

    
    const companyRepository = new CompanyRepository()
    const company = await companyRepository.addCompany(name, addressBillingCity, memberSince)
     if(company)
      console.log("added succefuly")
  }catch (err) {
    logger.error(err)
    //console.log("error....")
    next(err)
  } 
}

export async function deleteCompanyHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    console.log("we are in delete company");

    const companyRepository = new CompanyRepository()
    const uuid=req.body.uuid;

    companyRepository.deleteCompany(uuid)
  }catch (err) {
    logger.error(err)
    next(err)
  } 
}