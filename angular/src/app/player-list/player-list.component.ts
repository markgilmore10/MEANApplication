import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Observable } from 'rxjs';
import { Player } from '../player.model';
import {Router, ActivatedRoute} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: any = [];

  constructor(private ps:PlayerService, private flashMessage: FlashMessagesService){}

  ngOnInit(){
   
    this.ps.getPlayerData().subscribe(data => {
        this.players = data;
    });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.flashMessage.show('Player Removed Successfully', {cssClass: 'alert-success'}); // Alerts User if Player is Removed Successfully
     this.ps.deletePlayer(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}