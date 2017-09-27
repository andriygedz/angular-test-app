import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './companies/company-details/company-details.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';

import { ContainsPipe } from './util/contains.pipe';
import { FilterParentsPipe } from './util/filter-parents.pipe';
import { AddSelfPipe } from './util/add-self.pipe';
import { CompanyTreeComponent } from './companies/company-tree/company-tree.component';
import { OnlyCurrentLevelPipe } from './util/only-current-level.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    CompanyListComponent,
    ContainsPipe,
    FilterParentsPipe,
    AddSelfPipe,
    CompanyTreeComponent,
    OnlyCurrentLevelPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
