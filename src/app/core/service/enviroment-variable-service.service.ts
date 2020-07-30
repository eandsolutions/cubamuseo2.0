import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigServiceService } from './config-service.service';

@Injectable({
  providedIn: 'root'
})
export class EnviromentVariableServiceService {

  sections: any[];
  link: any;
  actualPage: string;
  googlePlus: string = '';
  Twitter: string = 'http://twitter.com/share?text=[TITLE]&url=[URL]';

  constructor(public http: HttpClient, private config: ConfigServiceService) {
    this.sections = [];
    this.link = { path: '' };
    this.actualPage = 'collection';
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
