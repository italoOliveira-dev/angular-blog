import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
    photoCover: string = '';
    contentTitle: string = '';
    contentDescription: string = '';

    private id: string | null = '0';

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.paramMap.subscribe(value => this.id = value.get('id'));

        this.setValuesToComponent(this.id);
    }

    setValuesToComponent(id: string | null) {
        const result = DataFake.filter(valor => valor.id == id)

        if (result) {
            result.forEach(value => {
                this.photoCover = value.photoCover
                this.contentTitle = value.title
                this.contentDescription = value.description
            })
        }

    }
}
