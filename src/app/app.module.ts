import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './/app-routing.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CompetenceComponent } from './competence/competence.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjetsComponent } from './projets/projets.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CompetenceElementComponent } from './competence-element/competence-element.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    CompetenceComponent,
    PresentationComponent,
    ExperienceComponent,
    ProjetsComponent,
    CompetenceElementComponent
  ],
  imports: [
    BrowserModule, 
    MatToolbarModule,
    MatTabsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
