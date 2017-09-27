import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { CompanyDetailsComponent } from '../company-details/company-details.component';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  providers: [CompanyService]
})

export class CompanyListComponent implements OnInit {
  rootPath = '';
  companies: Company[]
  companyTree:Company[]
  selectedCompany: Company

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
     this.companyService
      .getCompanies()
      .then((companies: Company[]) => {
        this.companies = companies;
        this.updateTreeModel(companies);
      });      
  }

  private getIndexOfCompany = (companyId: String) => {
    return this.companies.findIndex((company) => {
      return company._id === companyId;
    });
  }

  selectCompany(company: Company) {
    this.selectedCompany = company
  }

  selectCompanyHandler = (companyId: string) => {
    this.selectedCompany = this.companies.find((company)=> {return company._id === companyId})
  };

  updateTreeModel(companies: Company[]){
    let leafsInTree = 0;
    let currentPath = ",";
    let currentLeaf;
    let leafsToByPass = [];
    let currentCompany;
    this.companyTree = currentLeaf = companies.filter(it => it.path === currentPath ).slice();;
    while (leafsInTree <  companies.length) {          
      leafsToByPass.push.apply(leafsToByPass, currentLeaf)
      currentCompany = leafsToByPass.shift()
      if(currentCompany===undefined) break;
      currentPath = currentCompany.path + currentCompany._id + ",";
      currentLeaf =  this.companies.filter(it => it.path === currentPath ).slice();
      currentCompany.children = currentLeaf;
      leafsInTree ++;
    };
    this.getTotalVolume(companies);
  }
  
  getTotalVolume(companies:Company[] ):number {
    if(!companies)
      return 0;
    let totalVolume = 0;
    companies.forEach((el)=>{
      totalVolume += el.totalVolume = el.volume + this.getTotalVolume(el.children);
    })
    return totalVolume;
  }

  createNewCompany() {
    var company: Company = {
      name: '',
      volume: 0,
      totalVolume: 0,
      path:',',
      children:null
    };

    // By default, a newly-created company will have the selected state.
    this.selectCompany(company);
  }

  deleteCompany = (companyId: String) => {
    var idx = this.getIndexOfCompany(companyId);
    if (idx !== -1) {
      this.deleteChildrens(this.companies.splice(idx, 1)[0]);
      this.selectCompany(null);
    }

    this.updateTreeModel(this.companies);
    return this.companies;
  }

  deleteChildrens(company:Company){
    company.children.forEach((child) => {
      var idx = this.getIndexOfCompany(child._id);
      if (idx !== -1) {
        this.deleteChildrens(this.companies.splice(idx, 1)[0]);
      }
    })
  }

  addCompany = (company: Company) => {
    this.companies.push(company);
    this.selectCompany(company);
    this.updateTreeModel(this.companies);
    return this.companies;
  }

  updateCompany = (company: Company) => {
    var idx = this.getIndexOfCompany(company._id);
    if (idx !== -1) {
      this.companies[idx] = company;
      this.selectCompany(company);
    }
    this.updateTreeModel(this.companies);
    return this.companies;
  }
}