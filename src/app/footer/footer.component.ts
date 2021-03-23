import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.css'],
  template: `
  <div class="footer-background">
    <div class="text-center p-3 footer-text">
    <a href="https://github.com/ClaireLally8"><i class="nature fas fa-tree mr-2"></i>Made in nature by Claire Lally<i class="ml-2 fas fa-tree nature"></i></a>
    </div></div>`
})
export class FooterComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
