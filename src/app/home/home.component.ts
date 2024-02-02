// home.component.ts
import { Component, OnInit } from '@angular/core';
import { Chart, defaults } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productDetailsArr: any =[];
  constructor( ) { }
  isZoomedIn = false;
  ngOnInit() {
    // this.createDummyGraph();
    this.getProductArr()
  }

  getProductArr(){
    this.productDetailsArr = [
      { imgPath: '../../assets/images/image12.png', value: 1, off:'50%', price:  'Rs 700'},
      { imgPath: '../../assets/images/image13.jpeg', value: 1, off:'50%', price: 'Rs 500'},
      { imgPath: '../../assets/images/image14.jpeg', value: 1, off:'50%', price: 'Rs 100'},
      { imgPath: '../../assets/images/image10.png', value: 1, off:'50%', price: 'Rs 400'},
      { imgPath: '../../assets/images/image11.png', value: 1, off:'50%', price: 'Rs 600'},
      { imgPath: '../../assets/images/image17.jpeg', value: 1, off:'50%', price: 'Rs 600'},
      { imgPath: '../../assets/images/image8.png', value: 1, off:'50%', price: 'Rs 600'},
      { imgPath: '../../assets/images/image9.png', value: 1, off:'50%', price: 'Rs 700'},
      { imgPath: '../../assets/images/image15.jpeg', value: 1, off:'50%', price: 'Rs 700'},
      { imgPath: '../../assets/images/image16.jpeg', value: 1, off:'50%', price: 'Rs 700'},
      { imgPath: '../../assets/images/image8.png', value: 1, off:'50%', price: 'Rs 900'},
      { imgPath: '../../assets/images/image10.png', value: 1, off:'50%', price: 'Rs 1000'},
    ]
  }
  
  toggleZoom() {
    this.isZoomedIn = !this.isZoomedIn;
  }

  
  
  
}
