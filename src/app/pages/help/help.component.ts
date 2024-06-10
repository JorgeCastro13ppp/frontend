import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(private elRef: ElementRef) { }


scrollToQuestion(questionId: string): void {
  // Cerrar todas las respuestas abiertas
  const openCollapses = document.querySelectorAll('.accordion-collapse.show');
  openCollapses.forEach(collapse => {
      collapse.classList.remove('show');
      collapse.classList.add('collapsing');

      // Asegurarse de seleccionar el botón correspondiente al colapso
      const button = collapse.closest('.accordion-item')?.querySelector('.accordion-button');
      if (button) {
          button.classList.add('collapsed');
      }

      setTimeout(() => {
          collapse.classList.remove('collapsing');
          collapse.classList.add('collapse');
      }, 500); // tiempo de transición en milisegundos
  });

  // Abrir la pregunta seleccionada
  const targetElement = document.getElementById(questionId);
  if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

      const button = targetElement.querySelector('.accordion-button');
      if (button) {
          const collapseDiv = targetElement.querySelector('.accordion-collapse');
          if (collapseDiv) {
              collapseDiv.classList.remove('collapse');
              collapseDiv.classList.add('collapsing');

              setTimeout(() => {
                  collapseDiv.classList.remove('collapsing');
                  collapseDiv.classList.add('collapse', 'show');
                  button.classList.remove('collapsed');
              }, 500); // tiempo de transición en milisegundos
          }
      }
  }
}

  ngOnInit(): void {
  }

}
