import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    NgbPaginationModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatTabsModule,
    MatButtonToggleModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    NgbPaginationModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatTabsModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule { }
