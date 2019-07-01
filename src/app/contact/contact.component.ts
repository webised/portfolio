import {Component, OnInit} from '@angular/core';
import {ConnectionService} from '../services/connection.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HostListener} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})

export class ContactComponent {


  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }


  constructor(private fb: FormBuilder, private connectionService: ConnectionService) {}

    contactForm = this.fb.group({
    contactFormName: ['', Validators.required],
    contactFormEmail: ['', Validators.compose([Validators.required, Validators.email])],
    contactFormMessage: ['', Validators.required],
    contactFormCopy: [''],
  });


  onSubmit() {
    console.log(this.contactForm.value);
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Votre message a été envoyé. Merci');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

}
