import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const RouterName = {
  MAIN: '',
  ABOUT: 'about',
  CONTACT: 'contact',
  TOURS: 'tours-excursions'
}

const routes: Routes = [
  {
    path: RouterName.MAIN,
    pathMatch: 'full',
    redirectTo: RouterName.ABOUT
  },
  {
    path: RouterName.ABOUT,
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: RouterName.TOURS,
    loadChildren: () => import('./modules/tours/tours.module').then(m => m.ToursModule)
  },
  {
    path: RouterName.CONTACT,
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {path: '**', redirectTo: RouterName.ABOUT}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
