import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from 'app/core/service/config-service.service';
import { EnviromentVariableServiceService } from 'app/core/service/enviroment-variable-service.service';
import { CollectionServiceService } from 'app/core/service/collection-service.service';
import { StoreServiceService } from 'app/core/service/store-service.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  homeData: any;
  constructor(
    private collectionService: CollectionServiceService,
    public enviromentVariable: EnviromentVariableServiceService,
    public config: ConfigServiceService,
    private storeService: StoreServiceService
  ) {
    this.homeData = {
      titulo: '',
      descripcion: '',
      imagen: ''
    }

    this.enviromentVariable.deleteSection();

  }

  initSections() {
    this.storeService.getStoreCategories().subscribe(
      (data: any[]) => {

        this.enviromentVariable.sections = data;

        console.log(this.enviromentVariable.sections)
        this.enviromentVariable.link = { path: '/gallery-store' }
      }, err => {
        console.log(err)
      }
    )
  }

  initComponent() {
    this.collectionService.getCollectionText(7).subscribe(
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
    this.enviromentVariable.actualPage = 'store'
    this.initSections();
    this.initComponent();
  }

}
