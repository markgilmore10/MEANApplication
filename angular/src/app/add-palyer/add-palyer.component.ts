import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PlayerService } from '../services/player.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-add-palyer',
  templateUrl: './add-palyer.component.html',
  styleUrls: ['./add-palyer.component.css']
})
export class AddPalyerComponent implements OnInit {

  constructor(private service: PlayerService, private flashMessage: FlashMessagesService, private validateService: ValidationService) { }

  onAddPlayer(form: NgForm) {

    // Validate Email
    if(!this.validateService.validateEmail(form.value.email)) {
     this.flashMessage.show('Please use a valid Email Address', {cssClass: 'alert-danger'});
     return false;
   }
   this.service.addPlayer(form.value.name, form.value.phone, form.value.dob, form.value.position, form.value.email, form.value.wage, form.value.contract).subscribe();
  
   console.log(form.value);
   form.resetForm();
   this.flashMessage.show('Player registered successfully', {cssClass: 'alert-success'});
 }

  ngOnInit() {
  }

}
