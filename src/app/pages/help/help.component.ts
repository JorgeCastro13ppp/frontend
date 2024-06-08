import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  scrollToQuestion(questionId: string): void {
    const targetElement = document.getElementById(questionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Código adicional para abrir la respuesta correspondiente si es necesario
    }
  }

  ngOnInit(): void {
  }

}
