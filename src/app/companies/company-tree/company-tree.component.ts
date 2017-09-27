import { Component,  Input } from '@angular/core';
import { Company } from "app/companies/company";

@Component({
  selector: 'company-tree',
  templateUrl: './company-tree.component.html',
  styleUrls: ['./company-tree.component.css']
})
export class CompanyTreeComponent {

  @Input()
  company: Company;

  @Input()
  selectedCompany: Company;
  @Input()
  selectCompanyHandler: Function;

  constructor() { }

  selectCompany(company: Company): void {
    this.selectCompanyHandler(company._id);
  }

}
