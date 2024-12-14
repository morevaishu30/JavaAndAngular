import { Component } from '@angular/core';



@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  products: any = [];
  productservice: any;
  constructor() { }
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.productservice.feachData().subscribe((products: any) => {
      console.log(products);
      this.products = products;


    });
  }

}
