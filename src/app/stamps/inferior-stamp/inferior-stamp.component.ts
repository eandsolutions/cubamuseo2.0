import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from 'app/core/service/config-service.service';
import { ActivatedRoute } from '@angular/router';
import { SamplesServiceService } from 'app/core/service/samples-service.service';
import { EnviromentVariableServiceService } from 'app/core/service/enviroment-variable-service.service';
import { ModalService } from 'app/_modal';
import { TalesServiceService } from 'app/core/service/tales-service.service';

@Component({
  selector: 'app-inferior-stamp',
  templateUrl: './inferior-stamp.component.html',
  styleUrls: ['./inferior-stamp.component.css']
})
export class InferiorStampComponent implements OnInit {

  stamp: any;
  constructor(
    public config: ConfigServiceService,
    private activateRoute: ActivatedRoute,
    private samplesService: SamplesServiceService,
    public enviromentVariable: EnviromentVariableServiceService,
    private modalService: ModalService,
    private stampService: TalesServiceService
  ) {
    this.stamp = {
      descripcion: '',
      titulo: '',
      nombre: '',
      carpeta: '',
      id: 0
    }

    activateRoute.params.subscribe(
      data => {
        if (data.id)
          this.stampService.getTaleById(data.id).subscribe(
            (data: any) => {
              this.stamp = {
                descripcion: data.texto,
                titulo: data.titulo,
                nombre: data.nombre,
                carpeta: data.carpeta,
                id: data.idEstampa
              }
            }, err => {

            }
          )
      }
    )

  }

  initSections() {
    this.samplesService.getSamplesCategories().subscribe(
      (data: any[]) => {
        this.enviromentVariable.sections = data;
        this.enviromentVariable.link = { path: '/gallery-stamp' }
      }, err => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    this.enviromentVariable.actualPage = 'stamps';
    this.initSections();
  }



}
