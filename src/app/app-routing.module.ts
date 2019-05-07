import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { SmeComponent } from './components/pages/sme.component';
import { EnterpriseComponent } from './components/pages/enterprise.component';
import { ImsComponent } from './components/pages/ims.component';
import { AccountComponent } from './components/pages/account.component';
import { PayrollComponent } from './components/pages/payroll.component';
import { NetworkComponent } from './components/pages/network.component';

const routes: Routes = [
  {   path: '', 
      component: HomeComponent 
  },
  {   path: 'sme', 
      component: SmeComponent 
  },
  {   path: 'ims', 
      component: ImsComponent 
  },
  {   path: 'account', 
      component: AccountComponent 
  },
  {   path: 'payroll', 
      component: PayrollComponent 
  },
  {   path: 'network', 
      component: NetworkComponent 
  },
  {   path: 'enterprise', 
      component: EnterpriseComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
