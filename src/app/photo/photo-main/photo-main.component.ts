import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-photo-main',
  templateUrl: './photo-main.component.html',
  styleUrls: ['./photo-main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhotoMainComponent {
  
  photos = [
    {
      src: '/assets/img/examples_copyright1.jpg',
      name: 'Копирайтинг',
      details: ['Продающие тексты', 'Статьи', 'Пресс-релизы', 'SEO копирайтинг']
    },
    {
      src: '/assets/img/examples_social.jpg',
      name: 'Продвижение в соц. сетях',
      details: ['Разработка креативных маркетинговых концепций', 'Интеграция с лидерами мнений (блоггерами)','Графическое оформление сообществ', 'Массфоловинг' ]
    },
    {
      src: '/assets/img/examples_photo.jpg',
      name: 'Фото',
      details: ['Организация фотосесссий', 'Студийная фотосъёмка', 'Обработка фотографий']
    },
    {
      src: '/assets/img/examples_video.jpg',
      name: 'Видео',
      details: ['Професиональная видеосъёмка', 'Монтаж видео', 'Создание рекламных роликов']
    },
    {
      src: '/assets/img/photo5.jpg',
      name: 'Таргетинг',
      details: ['Контекстный', 'Прямой', 'Поведенческий']
    },
    {
      src: '/assets/img/photo6.jpg',
      name: 'Создание сайтов',
      details: ['Индивидуальный дизайн', 'Вёрстка и переез страниц', 'Создание сайта под ключ с нуля']
    },
    {
      src: '/assets/img/photo7.jpg',
      name: 'Контекстная реклама',
      details: ['SEO оптимизация сайтов', 'Яндекс.Директ', 'Google AdWards', 'Rambler']
    },
    {
      src: '/assets/img/photo8.jpg',
      name: 'Reputation management',
      details: ['Google business', 'Яндекс Справочник', 'Trip Advisor и др.']
    }
  ];

  clientPhotos = [
    {
      src: '/assets/img/client_angels.png'
    },
    {
      src: '/assets/img/clients_chaihana.jpg'
    },
    {
      src: '/assets/img/clients_clumba.jpg'
    },
    {
      src: '/assets/img/clients_ekzupery.jpg'
    },
    {
      src: '/assets/img/clients_fasol_.jpg'
    },
    {
      src: '/assets/img/clients_la_scala.jpg'
    },
    {
      src: '/assets/img/clients_mai_thai.jpg'
    },
    {
      src: '/assets/img/clients_stolle.jpg'
    },
    {
      src: '/assets/img/clients_bessonica.jpg'
    },
    {
      src: '/assets/img/clients_tokini.png'
    },
    {
      src: '/assets/img/clients_id_bar.png'
    },
    {
      src: '/assets/img/clients_moroz.jpg'
    }
  ]
}
