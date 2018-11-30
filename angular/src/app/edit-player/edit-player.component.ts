import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { NgForm } from "@angular/forms";
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  player : any = [];
  myName : String; 
  myPhone : String; 
  myDob : String; 
  myPosition : String;
  myEmail : String; 
  myWage : String; 
  myContract : String; 
  
  constructor(private router:Router, private route: ActivatedRoute, private service:PlayerService, private flashMessage: FlashMessagesService, private validateService: ValidationService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getPlayer(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.player = data;
      console.log(this.player);
      this.myName = this.player.name;
      console.log("message " + this.myName);

    });
  }
  onEditPlayer(form: NgForm) {
     // Validate Email
     if(!this.validateService.validateEmail(form.value.email)) {
      this.flashMessage.show('Please use a valid Email Address', {cssClass: 'alert-danger'});
      return false;
    }
    this.service.updatePlayer(this.player._id, form.value.name, form.value.phone, form.value.dob, form.value.position, form.value.email, form.value.wage, form.value.contract).subscribe(() =>
    {
      this.flashMessage.show('Post edited Successfully', {cssClass: 'alert-success'});
      this.router.navigate(['/list']);
    });
  }

}
