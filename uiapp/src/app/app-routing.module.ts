import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroductionComponent } from './introduction/introduction.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: "", pathMatch:  "full",redirectTo:  "introduction"},
  {path: "introduction", component: IntroductionComponent},
  {path: "experience", component: ExperienceComponent},
  {path: "education", component: EducationComponent},  
  {path: "contact", component: ContactComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
