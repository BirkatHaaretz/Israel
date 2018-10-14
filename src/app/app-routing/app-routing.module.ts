import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InstructionsComponent } from '../instructions/instructions.component';
import { PersonDetailsComponent } from '../person-details/person-details.component';
import { PdfLoaderComponent } from '../pdf-loader/pdf-loader.component';

const routes: Routes = [
  { path: '', redirectTo: '/Instructions', pathMatch: 'full' },
  { path: 'Instructions', component: InstructionsComponent },
  { path: 'PersonDetails', component: PersonDetailsComponent },
  { path: 'PdfLoader', component: PdfLoaderComponent },
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }