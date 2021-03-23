import { Component, OnInit } from '@angular/core';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm("service_8ylivso", "template_j91b1y4","#c-form","user_CxFa6tB70I5YuaF1WsEfI")
  .then(function(response) {
    var resetForm= <HTMLFormElement>document.getElementById('c-form');
  resetForm.reset();
        alert("Message sent successfully,  Claire will get back to you shortly!");
    },
    function(error) {
        alert("Uh oh! It looks like there was an error in your form,  please try that again!");
    }
);
  }
}

