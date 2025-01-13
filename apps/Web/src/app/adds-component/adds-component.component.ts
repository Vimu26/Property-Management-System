import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-adds-component',
  imports: [CommonModule, SlickCarouselModule],
  standalone: true,
  templateUrl: './adds-component.component.html',
  styleUrl: './adds-component.component.scss',
})
export class AddsComponentComponent {
  //TODO these are sample images
  slides = [
    {
      img: 'https://static.vecteezy.com/system/resources/thumbnails/008/954/549/small_2x/web-banner-template-for-business-and-finance-free-vector.jpg',
    },
    {
      img: 'https://www.shutterstock.com/shutterstock/photos/2041227701/display_1500/stock-vector-business-webinar-horizontal-banner-template-design-modern-banner-design-with-black-and-white-2041227701.jpg',
    },
    {
      img: 'https://t3.ftcdn.net/jpg/02/99/05/36/360_F_299053698_xs9eXUDFHCK5XeckhZXuAwnvRvndlI4Z.jpg',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUxl4KKgRD5UMhFZ_yKHHMpB0p9es9Yw2XA&s',
    },
    {
      img: 'https://clickimprimerie.com/uploads/blogs/Montreal_signs_shop.jpg',
    },
    {
      img: 'https://t3.ftcdn.net/jpg/03/39/27/84/360_F_339278490_tqbW2tOAuLOESzYGoN2WF3i643qfeqUO.jpg',
    },
  ];

  slideConfig = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    arrows: false,
    adaptiveHeight: true,
  };
}
