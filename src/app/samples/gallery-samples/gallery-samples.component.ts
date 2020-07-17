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
        }
      }
    )
  }

  initGallery(id:number){
    this.samplesService.getSamplesCategory(id).subscribe(
      (data:any)=>{
        this.gallery = data;
        console.log(this.gallery)
      },err=>{

      }
    )
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

  ngOnInit(): void {
    this.enviromentVariable.actualPage = 'samples';
    this.initSections();
  }

}