import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  //products = [...products];
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.makeRequest();
  }

  share() {
    window.alert('¡El producto ha sido compartido!');
  }

  onNotify() {
    window.alert('Recibirás una notificación cuando el producto sea vendido');
  }

  makeRequest() {
    this.http
      .get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((response) => {
        this.products = response;
      });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
