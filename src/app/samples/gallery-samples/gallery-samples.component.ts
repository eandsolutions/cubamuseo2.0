import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from 'app/core/service/config-service.service';
import { ActivatedRoute } from '@angular/router';
import { SamplesServiceService } from 'app/core/service/samples-service.service';
import { EnviromentVariableServiceService } from 'app/core/service/enviroment-variable-service.service';

@Component({
  selector: 'app-gallery-samples',
  templateUrl: './gallery-samples.component.html',
  styleUrls: ['./gallery-samples.component.css']
})
export class GallerySamplesComponent implements OnInit {

  gallery:any[];
  id:number;
  section:any;

  constructor(
    public config: ConfigServiceService,
    private activateRoute: ActivatedRoute,
    private samplesService: SamplesServiceService,
    public enviromentVariable: EnviromentVariableServiceService,
    ) { 
    this.gallery = [];
    activateRoute.params.subscribe(
      data=>{
        if(data.id){
          this.id = data.id;
          this.initGallery(data.id)
          this.section = JSON.parse(window.localStorage.getItem('section'));
        }
      }
      
    )
  }

  initGallery(id:number){
    if(id==0){
      this.samplesService.getAllSamples().subscribe(
        (data:any)=>{
          this.gallery = data;
          console.log(this.gallery)
        },err=>{
  
        }
      )
    }
    else{
      this.samplesService.getSamplesCategory(id).subscribe(
        (data:any)=>{
          this.gallery = data;
          console.log(this.gallery)
        },err=>{
  
        }
      )
    }

    
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

  ngOnInit(): void {
    this.enviromentVariable.actualPage = 'samples';
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
  }

}
