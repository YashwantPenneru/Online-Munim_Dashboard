import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { StockComponent } from './components/stock/stock.component';
import { ReportComponent } from './components/report/report.component';
import { SalesComponent } from './components/sales/sales.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TagsComponent } from './components/tags/tags.component';
import { LoansComponent } from './components/loans/loans.component';
import { CrComponent } from './components/cr/cr.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { UsersComponent } from './components/users/users.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'header',component:HeaderComponent},
    {path:'stock',component:StockComponent},
    {path:'report',component:ReportComponent},
    {path:'sales',component:SalesComponent},
    {path:'orders',component:OrdersComponent},
    {path:'tags',component:TagsComponent},
    {path:'loans',component:LoansComponent},
    {path:'cr',component:CrComponent},
    {path:'expenses',component:ExpensesComponent},
    {path:'users',component:UsersComponent},
    {path:'settings',component:SettingsComponent},
    {path:'',redirectTo:'',pathMatch:'full'}
];
