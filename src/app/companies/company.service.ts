import { Injectable } from '@angular/core';
import { Company } from './company';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompanyService {
    private contactsUrl = '/api/companies';

    constructor (private http: Http) {}

    // get("/api/companies")
    getCompanies(): Promise<Company[]> {
      return this.http.get(this.contactsUrl)
                 .toPromise()
                 .then(response => response.json() as Company[])
                 .catch(this.handleError);
    }

    // post("/api/companies")
    createCompany(newCompany: Company): Promise<Company> {
      return this.http.post(this.contactsUrl, newCompany)
                 .toPromise()
                 .then(response => response.json() as Company)
                 .catch(this.handleError);
    }

    // get("/api/companies/:id") endpoint not used by Angular app

    // delete("/api/companies/:id")
    deleteCompany(delCompanyId: String): Promise<String> {
      return this.http.delete(this.contactsUrl + '/' + delCompanyId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/companies/:id")
    updateCompany(putCompany: Company): Promise<Company> {
      var putUrl = this.contactsUrl + '/' + putCompany._id;
      return this.http.put(putUrl, putCompany)
                 .toPromise()
                 .then(response => response.json() as Company)
                 .catch(this.handleError);
    }

    private handleError (error: any): Promise<any> {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console
      return Promise.reject(errMsg);
    }
}