import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigServiceService } from './config-service.service';

@Injectable({
  providedIn: 'root'
})
export class EnviromentVariableServiceService {

  sections: any[];
  breadcrumbList:any[];
  lang:any;
  link: any;
  actualPage: string;
  googlePlus: string = '';
  Twitter: string = 'http://twitter.com/share?text=[TITLE]&url=[URL]';

  constructor(public http: HttpClient, private config: ConfigServiceService) {
    this.sections = [];
    this.link = { path: '' };
    this.actualPage = 'collection';
    this.breadcrumbList =[];
    this.breadcrumbList[0]={
        name:'Inicio',
        path:'/home'
    };   
  }

  setSections(sections: any[]) {
    this.sections = sections;
  }

  /*   setCategory(category: string) {
      window.localStorage.setItem('category', category);
    } */

  getFacebook(url) {
    return 'http://www.facebook.com/sharer.php?u=' + url
  }

  getGooglePlus(url: string) {
    return 'https://plus.google.com/share?url=' + url;
  }

  getTwitter(title, url) {
    return 'http://twitter.com/share?text=' + title + '&url=' + url
  }

  getLinkedIn(url) {
    return 'http://www.linkedin.com/shareArticle?mini=true&url=' + url
  }

  getPinterest(url, media) {
    return 'http://pinterest.com/pin/create/button/?url=' + url + '&media=' + media
  }

  getMail(subject, body) {
    return 'mailto:?subject=' + subject + '&body=' + body
  }

  setBreadcrumb(breadcrumb: any[]) {
    window.localStorage.setItem('breadcrumb', JSON.stringify(breadcrumb));
  }


  getBreadcrumb() {
    if (window.localStorage.getItem('breadcrumb'))
      return window.localStorage.getItem('breadcrumb') ;
    return 0
  }

  deleteBreadcrumb() {
    window.localStorage.removeItem('breadcrumb');
  }

  setSection(section: any) {
    window.localStorage.setItem('section', JSON.stringify(section));
  }


  getSection() {
    if (window.localStorage.getItem('section'))
      return window.localStorage.getItem('section');
    return 0
  }

  sendMail(data: any) {
    return this.http.post(this.config.serverNodeLocation + 'mail', data)
  }

  deleteSection() {
    window.localStorage.removeItem('section');
  }

  setLanguage(lang:any){
    window.localStorage.setItem('lang', JSON.stringify(lang));
  }
  getLanguage() {
    if (window.localStorage.getItem('lang'))
      return JSON.parse(window.localStorage.getItem('lang'));
    return 0
  }


  /* setLevel(fatherLevel, father, section) {

    if (section === 'vpost' || section === 'tales' || section === 'store') {
      if (father === 'category') {
        window.localStorage.setItem('level', '2');
      }
      else {
        window.localStorage.setItem('level', '1');
      }
    }
    if (section === 'collection' || section === 'samples') {
      if (father === 'category') {
        window.localStorage.setItem('level', '3');
      }
      else if (father === 'text' && fatherLevel === 3) {
        window.localStorage.setItem('level', '2');
      }
      else if (father === 'gallery' && fatherLevel === 3) {
        window.localStorage.setItem('level', '2');
      }
      else {
        window.localStorage.setItem('level', '2');
      }

    }
  } */
}
