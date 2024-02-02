import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


// const routes: Routes = [
//   // {
//   //   path: '',
//   //   component:SidebarComponent,
//   //   pathMatch: 'full',
//   // },
//   {
//     path: '',
//     component: LayoutComponent,
//     children: [
//       { path: 'home', component: HomeComponent },
//       { path: 'about', component: AboutComponent },
//       { path: 'contact', component: ContactComponent },
      
//     ],
//   },
// ];
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', // Redirect to the home component
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// app-routing.module.ts


