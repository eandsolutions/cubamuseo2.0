import { Component, OnInit } from '@angular/core';
import { CollectionServiceService } from 'app/core/service/collection-service.service';
import { EnviromentVariableServiceService } from 'app/core/service/enviroment-variable-service.service';
import { ConfigServiceService } from 'app/core/service/config-service.service';
import { SamplesServiceService } from 'app/core/service/samples-service.service';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {

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
        this.enviromentVariable.link = { path: '/gallery-samples' }
      }, err => {
        console.log(err)
      }
    )
  }

  initComponent() {
    this.collectionService.getCollectionText(3).subscribe(
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
    this.enviromentVariable.actualPage = 'samples'
    this.initSections();
    this.initComponent();
  }

}
