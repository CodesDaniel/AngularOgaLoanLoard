import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
  name :'upper'
})

 export class  UpperCasePipe implements PipeTransform {
    transform(value :string ) :any {
        return value.toUpperCase();
    } 
}