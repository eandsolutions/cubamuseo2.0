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
  allSamples: any[];
  constructor(
    private collectionService: CollectionServiceService,
    public enviromentVariable: EnviromentVariableServiceService,
    public config: ConfigServiceService,
    private samplesService: SamplesServiceService
  ) { 
    this.allSamples=[];
    this.homeData = {
      titulo: '',
      descripcion: '',
      imagen: ''
    }
    
    this.enviromentVariable.deleteSection();
    this.initAllSamples();
  }

  initAllSamples(){
    this.samplesService.getAllSamples().subscribe(
      (data:any)=>{
        this.allSamples = data;
        console.log(this.allSamples)
      },err=>{

      }
    )
      
  }

  initSections() {
    this.samplesService.getSamplesCategories().subscribe(
      (data: any[]) => {
        data.forEach(element => {
          this.enviromentVariable.sections.push(element);
        });
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
  initBreadcrumb(){
    let data:any = this.enviromentVariable.getSection();
    this.enviromentVariable.breadcrumbList[1]={
      name:'Muestras',
      path:'/samples'
    };
    this.enviromentVariable.breadcrumbList.splice(2,2);
    this.enviromentVariable.setBreadcrumb(this.enviromentVariable.breadcrumbList);
  }

  ngOnInit(): void {
    this.enviromentVariable.actualPage = 'samples'
    this.initBreadcrumb();
    this.enviromentVariable.sections=[];
    this.enviromentVariable.sections.push({
      idCategoriaEstampa:0,
      nombre:'Todas',
      imagenMenu:'todas.jpg',
      descripcion:'',
      publicada:1,
      orden:''


    });
    this.initSections();
    this.initComponent();
  }

}
