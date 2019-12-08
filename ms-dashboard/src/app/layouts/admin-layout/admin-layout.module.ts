import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { WordCloudComponent } from '../../charts/word-cloud/word-cloud.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatTabsModule, MatSlideToggleModule, MatCardModule } from '@angular/material';
import { SocialAccountLoginComponent } from 'app/pages/social-account-login/social-account-login.component';
import { NewpostComponent } from 'app/pages/newpost/newpost.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatCardModule,
    ReactiveFormsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    WordCloudComponent,
    NewpostComponent,
    SocialAccountLoginComponent
  ],
  entryComponents:[
    SocialAccountLoginComponent
  ]
})

export class AdminLayoutModule {}
