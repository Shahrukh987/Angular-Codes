import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 firstName:string="shahrukh";

 // user = object so object is not valid in interpolation only text 
user={
id:101,
name:"shahrukh"
}

// property binding
userName:string="shahrukh"

// Event Binding

clickMe()
{
  alert("you clicked me !!")
}
f1(event:Event)
{let ans= (event.target as HTMLInputElement).value;
  alert(ans)
  console.log(ans);
  
}
numberChange(event:Event)
{
 
  let ans =(event.target as HTMLInputElement).value;
  console.log(ans);
  alert(ans)
  
}

// two way binding
   password:string="123"
}
