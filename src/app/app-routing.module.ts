import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StoriesComponent } from './stories/stories.component';
import { StorieDetailComponent } from './storie-detail/storie-detail.component';
import { StorieNewComponent } from './storie-new/storie-new.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login',  component: LoginComponent},
  { path: 'stories',  component: StoriesComponent},
  { path: 'edit/:id',  component: StorieDetailComponent},
  { path: 'new',  component: StorieNewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
