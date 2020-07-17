import { Component, OnInit } from '@angular/core';
import { CollectionServiceService } from '../core/service/collection-service.service';
//import { EnviromentVariableServiceService } from '../core/service/enviroment-variable-service.service';
import { ConfigServiceService } from '../core/service/config-service.service';
import { EnviromentVariableServiceService } from 'app/core/service/enviroment-variable-service.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeData: any;
  constructor(
    private collectionService: CollectionServiceService,
    public enviromentVariable: EnviromentVariableServiceService,
    public config: ConfigServiceService
  ) {
    this.homeData = {
      titulo: '',
      descripcion: '',
      imagen: ''
    }

    this.enviromentVariable.deleteSection();

  }

  initSections() {
    this.collectionService.getCollectionsSections().subscribe(
      (data: any[]) => {

        this.enviromentVariable.sections = data;

        console.log(this.enviromentVariable.sections)
        this.enviromentVariable.link = { path: '/superior-collection' }
      }, err => {
        console.log(err)
      }
    )
  }

  initComponent() {
    this.collectionService.getCollectionText(1).subscribe(
      (data: any) => {
        this.homeData = {
          titulo: data.nombre,
          descripcion: data.descripcion,
          imagen: data.imagen
        }
      }, err => {

      }
    )
  }

  ngOnInit(): void {
    this.enviromentVariable.actualPage = 'collection'
    this.initSections();
    this.initComponent();
  }

}
