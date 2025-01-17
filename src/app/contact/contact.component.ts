
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  labelVisibility: { [key in 'userName' | 'userAge' | 'userEmail' | 'userPassword']: boolean } = {
    userName: true,
    userAge: true,
    userEmail: true,
    userPassword: true,
  };


  ShowLabel(labelKey: 'userName' | 'userAge' | 'userEmail' | 'userPassword', event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.labelVisibility[labelKey] = inputValue === '';
    
  }
  sendMessage(event:MouseEvent):void{
    event.preventDefault()
  }
}
