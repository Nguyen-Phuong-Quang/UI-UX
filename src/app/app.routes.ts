import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { MyProjectsComponent } from './features/home/my-projects/my-projects.component';
import { InspirationComponent } from './features/home/inspiration/inspiration.component';
import { ProvideFeedbackComponent } from './features/home/provide-feedback/provide-feedback.component';
import { ProjectDetailComponent } from './features/home/my-projects/project-detail/project-detail.component';
import { TroubleshootComponent } from './features/home/troubleshoot/troubleshoot.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'my-projects',
        component: MyProjectsComponent,
      },
      {
        path: 'my-projects/create',
        component: ProjectDetailComponent,
      },
      {
        path: 'detail/:id',
        component: ProjectDetailComponent,
      },
      {
        path: 'inspiration',
        component: InspirationComponent,
      },
      {
        path: 'troubleshoot',
        component: TroubleshootComponent,
      },
      {
        path: 'provide-feedback',
        component: ProvideFeedbackComponent,
      },
      {
        path: '**',
        redirectTo: 'my-projects',
      },
    ],
  },
];
