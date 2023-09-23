import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [{ path: '', component: CustomersComponent },
                        {path:'addCustomer',component:AddCustomerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
