import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(  private routing:Router ) {  }

  ngOnInit(): void {
  }

  openPlanbb(){
    this.routing.navigate(['./web/planbb'])
  }

  openPublib(){
    this.routing.navigate(['./web/publib'])
  }
  
  openDesarrollob(){
    this.routing.navigate(['./web/desarrollob'])
  }

  openRecorridoVirtual(){
    this.routing.navigate(['./web/recorrido'])
  }

  noti3(){
    this.routing.navigate(['./web/Remate'])
  }
  noti2(){

    this.routing.navigate(['./web/Guiarentar'])
  }
  noti4(){

    this.routing.navigate(['./web/QuieresComprar'])

  }

  noti1(){
    this.routing.navigate(['./web/EvitaFraude'])

  }
}
