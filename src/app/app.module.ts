import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule, MatButtonModule, MatCheckboxModule} from '@angular/material'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InstructionsComponent } from './instructions/instructions.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PdfLoaderComponent } from './pdf-loader/pdf-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    PersonDetailsComponent,
    PdfLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
