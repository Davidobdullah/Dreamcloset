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

  ngOnInit() {
    this.createDummyGraph();
    this.getProductArr()
  }

  getProductArr(){
    this.productDetailsArr = [
      { imgPath: '../../assets/images/image.jpg', value: 1, off:'50%', price:  'Rs 700'},
      { imgPath: '../../assets/images/image2.jpg', value: 1, off:'50%', price: 'Rs 500'},
      { imgPath: '../../assets/images/image3.jpg', value: 1, off:'50%', price: 'Rs 100'},
      { imgPath: '../../assets/images/image4.jpg', value: 1, off:'50%', price: 'Rs 400'},
      { imgPath: '../../assets/images/image5.jpg', value: 1, off:'50%', price: 'Rs 600'},
      { imgPath: '../../assets/images/image6.jpg', value: 1, off:'50%', price: 'Rs 700'},
      { imgPath: '../../assets/images/image2.jpg', value: 1, off:'50%', price: 'Rs 900'},
      { imgPath: '../../assets/images/image.jpg', value: 1, off:'50%', price: 'Rs 1000'},
    ]
  }

  createDummyGraph() {
    const ctx = document.getElementById('dummyGraph') as HTMLCanvasElement;
    const dummyGraph = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Monthly Sales',
          data: [10, 25, 18, 32, 20],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Sales'
            }
          }
        }
      }
    });
    return dummyGraph
  }
  
  
}
