import { Routes } from '@angular/router';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

export const routes: Routes = [
    {path: '', component:AuthLayoutComponent , canActivate:[logedGuard] , children:[
        {path: '' , redirectTo: 'login' , pathMatch: 'full'},
        {path: 'login', component:LoginComponent},
        {path: 'register', component:RegisterComponent},
        {path: 'forgot', component:ForgotPasswordComponent},
    ]},
    {path: '', component:BlankLayoutComponent , canActivate:[authGuard] , children:[
        {path: '' , redirectTo: 'home' , pathMatch: 'full'},
        {path: 'home', component:HomeComponent},
        {path: 'product', loadComponent: ()=> import('./components/product/product.component').then( (c)=> c.ProductComponent ) },
        {path: 'cart', loadComponent: ()=> import('./components/cart/cart.component').then( (c)=> c.CartComponent ) },
        {path: 'brands', loadComponent: ()=> import('./components/brands/brands.component').then( (c)=> c.BrandsComponent ) },
        {path: 'categories', loadComponent: ()=> import('./components/categories/categories.component').then( (c)=> c.CategoriesComponent )},
        {path: 'details/:id', loadComponent: ()=> import('./components/details/details.component').then( (c)=> c.DetailsComponent ) },
        {path: 'allorders', component:AllordersComponent},
        {path: 'orders/:id', loadComponent: ()=> import('./components/orders/orders.component').then( (c)=> c.OrdersComponent ) },
        {path: 'wishlist', loadComponent: ()=> import('./components/wishlist/wishlist.component').then( (c)=> c.WishlistComponent ) },
        {path: 'profile', loadComponent: ()=> import('./componenets/profile/profile.component').then( (c)=> c.ProfileComponent )},
    ]},
    {path: '**', component:NotfoundComponent}
];
