import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SinginComponent } from './components/singin/singin.component';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../../shared/modules/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [SinginComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        SharedModule
    ],
})
export class AuthModule { }
