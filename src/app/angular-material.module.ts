import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {  MatDividerModule } from "@angular/material/divider";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
const materialModules = [
  MatFormFieldModule,
  MatCardModule,
  MatSelectModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatCheckboxModule,
  FormsModule,
  MatIconModule,
  MatDividerModule,
  MatSidenavModule,
  MatListModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules],
})
export class AngularMaterialModule { }
