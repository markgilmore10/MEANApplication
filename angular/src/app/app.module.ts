import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PlayerService } from './services/player.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPalyerComponent } from './add-palyer/add-palyer.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ValidationService } from 'src/app/services/validation.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: PlayerListComponent },
  { path: 'create', component: AddPalyerComponent },
  { path: 'edit/:id', component: EditPlayerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddPalyerComponent,
    PlayerListComponent,
    EditPlayerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule,
  FlashMessagesModule.forRoot()
  ],
  providers: [PlayerService, ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
