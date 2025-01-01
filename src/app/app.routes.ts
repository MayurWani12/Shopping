import { Routes } from '@angular/router';
// import { SignupComponent, SigupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SigupComponent } from './signup/signup.component';
// import { GoogleComponent } from './google/google.component';
import { HComponent } from './h/h.component';
import { ForgetComponent } from './forget/forget.component';
import { ResetComponent } from './reset/reset.component';
import { AdminComponent } from './admin/admin.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { HeroComponent } from './hero/hero.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermComponent } from './term/term.component';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { ProdetailsComponent } from './prodetails/prodetails.component';
import { OrdersComponent } from './orders/orders.component';
import { UserorderComponent } from './userorder/userorder.component';
// import { ProdetailsComponent } from './prodetails/prodetails.component';




export const routes: Routes = [
  {path:"",component:LoginComponent  },
  {path:'checkout',component:CheckoutComponent},{
    path:"cart",component:CartComponent
  },
  {
    path:"login",component:LoginComponent
},
{
    path:"signup",component:SigupComponent
},
{
  path:"google",component:HComponent
},{
  path:"forget",component:ForgetComponent
}
,{path:"reset",component:ResetComponent},{
  path:"admin",component:AdminComponent
},{
  path:'product/:id',component:ProductdetailComponent
},{path:'hero',component:HeroComponent},{
  path:'contact',component:ContactusComponent},{
    path:'privacy',component:PrivacyComponent
  }
,{
  path:'term',component:TermComponent
},{ path: 'category/:name', component: CategorydetailsComponent },{
  path:'electronic',component:ElectronicComponent
},  { path: 'produc/:name', component: ProdetailsComponent },
{
  path:'orders',component:OrdersComponent
},{
  path:'userorder',component:UserorderComponent
}

];
