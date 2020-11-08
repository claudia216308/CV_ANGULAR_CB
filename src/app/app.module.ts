import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './/app-routing.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CompetencePageComponent } from './components/competences/competence-page/competence-page.component';
import { CompetenceElementComponent } from './components/competences/competence-element/competence-element.component';
import { CompetenceCardComponent } from './components/competences/competence-card/competence-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    CompetencePageComponent,
    PresentationComponent,
    ExperienceComponent,
    ProjetsComponent,
    CompetenceElementComponent,
    CompetenceCardComponent
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
    MatListModule,
    MglTimelineModule,
    RoundProgressModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
