import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { products } from '../../products';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.products = this.productService.getProducts();

    const productsObservable = this.productService.getProducts();
    productsObservable.subscribe(
      (data) => {
        this.products = data;
        // console.log('次のデータが出力されました：' + data)
        // debugger
      },
      (err) => { console.error('次のエラーが発生しました: ' + err) }
    )

    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // console.log('subscribe前');
    // observable.subscribe({
    //   next(data) { console.log('次のデータが出力されました：' + data); },
    //   error(err) { console.error('次のエラーが発生しました: ' + err); },
    //   complete() { console.log('完了しました！'); }
    // });
    // console.log('subscribeから抜けました！');
  }
}
