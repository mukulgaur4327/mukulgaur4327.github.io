import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from 'src/app/angular-material.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: ParentRoutingModule,
  },
];


@NgModule({

    declarations: [
        HeaderComponent,
        LayoutComponent,
        SidebarComponent,
        FooterComponent        
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatCardModule,
        ReactiveFormsModule,
        FormsModule,
        AngularMaterialModule,        
    ],
  exports: [
    HeaderComponent
  ]
})
export class ParentModule { }
