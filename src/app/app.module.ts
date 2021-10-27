import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import { ShowListComponent } from './Books/list/show-list/show-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { DialogComponent } from './Books/dialog/dialog/dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import { CreatebookComponent } from './Books/list/createbook/createbook.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { EditbookComponent } from './Books/list/editbook/editbook.component';
import { DetailbookComponent } from './Books/list/detailbook/detailbook/detailbook.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {path:'list', component:ShowListComponent},
  {path: 'create', component:CreatebookComponent},
  {path: 'update-book/:id', component:EditbookComponent},
  {path:'detail-book/:id',component:DetailbookComponent},
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, ShowListComponent, DialogComponent, CreatebookComponent, EditbookComponent, DetailbookComponent],
  imports: [
      MatInputModule,
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    RouterModule.forRoot(appRoutes, {useHash: false}), MatTableModule, MatPaginatorModule, MatFormFieldModule, MatDialogModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
