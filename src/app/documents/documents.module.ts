import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsListComponent } from './documents-list.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule
  ],
  declarations: [DocumentsListComponent]
})
export class DocumentsModule { }
