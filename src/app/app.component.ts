import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todos=[];

 constructor(){  }

   Add(value){
     if(value==''||value==0){
       console.warn('Invalid Entry');

     }else{
     this.todos.push({
       todo:value,
     });
    }
   }


   remove(id){
     this.todos.splice(id,1);
   }


}
