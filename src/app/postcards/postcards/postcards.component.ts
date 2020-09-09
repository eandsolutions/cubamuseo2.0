import { Component, OnInit } from '@angular/core';
import { EnviromentVariableServiceService } from 'app/core/service/enviroment-variable-service.service';
import { ConfigServiceService } from 'app/core/service/config-service.service';
import { CollectionServiceService } from 'app/core/service/collection-service.service';
import { VpostServiceService } from 'app/core/service/vpost-service.service';

@Component({
  selector: 'app-postcards',
  templateUrl: './postcards.component.html',
  styleUrls: ['./postcards.component.css']
})
export class PostcardsComponent implements OnInit {

  postcards: any;
  constructor(
    private collectionService: CollectionServiceService,
    public enviromentVariable: EnviromentVariableServiceService,
    public config: ConfigServiceService,
    private postalService: VpostServiceService
  ) {
    this.postcards = {
      titulo: '',
      descripcion: '',
      imagen: ''
    }
    this.enviromentVariable.deleteSection();
  }

  initSections() {
    this.postalService.getVpostCategories().subscribe(
      (data: any[]) => {
        this.enviromentVariable.sections = data;
        console.log(this.enviromentVariable.sections)
        this.enviromentVariable.link = { path: '/gallery-postcards' }
      }, err => {
        console.log(err)
      }
    )
  }

  initComponent() {
    this.collectionService.getCollectionText(6).subscribe(
      (data: any) => {
        this.postcards = {
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
      name:'Postales',
      path:'/postcards'
    };
    this.enviromentVariable.breadcrumbList.splice(2,2);
    this.enviromentVariable.setBreadcrumb(this.enviromentVariable.breadcrumbList);
  }

  ngOnInit(): void {
    this.enviromentVariable.actualPage = 'postcards'
    this.initBreadcrumb();
    this.initSections();
    this.initComponent();
  }

}
