import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = 'https://autolivraria.com.br/bc/wp-content/uploads/2016/08/Mazda-MX-3-1991-02.jpg'
  contentTitle: string = ''
  contentDescription: string = ''
  private id: string | null = '0'

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id')
    )

    this.setValueToComponent(this.id)
  }

  setValueToComponent(id: string|null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photo
  }
}
