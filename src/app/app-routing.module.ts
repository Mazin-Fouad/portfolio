import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '', component: AboutMeComponent },
  { path: 'imprint', component: ImprintComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
