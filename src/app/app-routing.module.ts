import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompetenceComponent } from './components/competence/competence.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component'
import { PresentationComponent } from './components/presentation/presentation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjetsComponent } from './components/projets/projets.component';


const routes: Routes = [
  { path: 'competences', component: CompetenceComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'presentation',  component: PresentationComponent },
  { path: '', redirectTo: 'presentation', pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
