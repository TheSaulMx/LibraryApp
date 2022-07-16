import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/services/autores-services/autores-services.service';

@Component({
  selector: 'app-autores-list',
  templateUrl: './autores-list.component.html',
  styleUrls: ['./autores-list.component.scss']
})
export class AutoresListComponent implements OnInit {

  constructor(private AutoresService: AutoresService) { }

  autores: any = []

  ngOnInit(): void {
    this.getAutores();
  }

  getAutores() {
    try {
      this.AutoresService.getAutores().subscribe({
        next: (data) => {
          this.autores = data.entity;
          console.log(data);
        },
        error: (err) => console.log(err),
        complete: () => console.info('Get autores Complete!')
      })
    } catch (error) {
      console.log(error)
    }
  }

}
