import { Component, Input } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})

export class CompanyDetailsComponent {
  @Input()
  company: Company;

  @Input()
  companies: Company[];

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  
  

  constructor (private companyService: CompanyService) {
  }

  createCompany(company: Company) {
    this.companyService.createCompany(company).then((newCompany: Company) => {
      this.createHandler(newCompany);
    });
  }

  updateCompany(company: Company): void {
    if(company.children.length != 0){
      let currentPath = company.children[0].path;
      let resultedPath = company.path + company._id + ","
      this.getNestedCompaniesList(company._id).forEach((child:Company) => {
        child.path = child.path.replace(currentPath, resultedPath);
        this.companyService.updateCompany(child);
      });      
    }
    this.companyService.updateCompany(company).then((updatedCompany: Company) => {
      this.updateHandler(updatedCompany);
    });
  }

  deleteCompany(companyId: String): void {
    this.getNestedCompaniesList(companyId).forEach((company:Company) => {
      this.companyService.deleteCompany(company._id);
    })
    this.companyService.deleteCompany(companyId).then((deletedCompanyId: String) => {
      this.deleteHandler(deletedCompanyId);
    });
  }

  getNestedCompaniesList(companyId): Company[]{
    return this.companies.filter(company => (company.path).split(',').indexOf(companyId) > -1 )
  }
}