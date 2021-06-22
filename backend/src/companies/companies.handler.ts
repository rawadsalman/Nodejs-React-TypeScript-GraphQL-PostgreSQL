import { NextFunction, Request, Response } from 'express'
import CompanyRepository from '../database/repository/company/company.repository'
import logger from '../logger'

export async function getCompaniesHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {

    const companyRepository = new CompanyRepository()
    const companies = await companyRepository.getCompanies()
 
    res.json(companies)
  } catch (err) {
    logger.error(err)
    next(err)
  }
}
export async function getCompanyHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {

    const uuid =req.params.uuid;

    const companyRepository = new CompanyRepository()
    const company = await companyRepository.getCompany(uuid)
    res.json(company);

    } catch (err) {
    logger.error(err)
    next(err)
  }
}
export async function addCompanyHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    
    const name=req.body.name;
    const addressBillingCity=req.body.addressBillingCity;
    const memberSince=req.body.memberSince;
    
    const companyRepository = new CompanyRepository()
    const company = await companyRepository.addCompany(name, addressBillingCity, memberSince)
     if(company)
      console.log("new company was added successfully")
  }catch (err) {
    logger.error(err)
    next(err)
  } 
}

export async function deleteCompanyHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {

    const companyRepository = new CompanyRepository()
    const uuid=req.body.uuid;

    companyRepository.deleteCompany(uuid)
  }catch (err) {
    logger.error(err)
    next(err)
  } 
}