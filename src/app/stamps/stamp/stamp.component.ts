import { Component, OnInit } from '@angular/core';
import { CollectionServiceService } from 'app/core/service/collection-service.service';
import { EnviromentVariableServiceService } from 'app/core/service/enviroment-variable-service.service';
import { ConfigServiceService } from 'app/core/service/config-service.service';
import { SamplesServiceService } from 'app/core/service/samples-service.service';

@Component({
  selector: 'app-stamp',
  templateUrl: './stamp.component.html',
  styleUrls: ['./stamp.component.css']
})
export class StampComponent implements OnInit {

  homeData: any;
  constructor(
    private collectionService: CollectionServiceService,
    public enviromentVariable: EnviromentVariableServiceService,
    public config: ConfigServiceService,
    private samplesService: SamplesServiceService
  ) { 
    this.homeData = {
      titulo: '',
      descripcion: '',
      imagen: ''
    } 
    this.enviromentVariable.deleteSection();
  }

  initSections() {
    this.samplesService.getSamplesCategories().subscribe(
      (data: any[]) => {
        this.enviromentVariable.sections = data;

        console.log(this.enviromentVariable.sections)
        this.enviromentVariable.link = { path: '/gallery-stamp' }
      }, err => {
        console.log(err)
      }
    )
  }

  initComponent() {
    this.collectionService.getCollectionText(2).subscribe(
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
    this.enviromentVariable.actualPage = 'stamps'
    this.initSections();
    this.initComponent();
  }

}
