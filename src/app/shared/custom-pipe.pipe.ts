import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expensive'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any { // ... is called as spread operator
    console.log(args);
    
    const [price, sortType] = args; // Array destructuring
    // const price = args[0];

    // const [myName, surname, fatherName]  = ["Ansar", "Saudagar", "Anwar"]; // Array destructuring
    // console.log(myName + " "  + surname);
    // console.log(fatherName + " "  + surname);

    const filteredArr = value.filter((prod : any) => {
      return prod.price >= price
    });

    filteredArr.sort((a : any,b : any) => {
      if(sortType === "desc"){
        return b.price - a.price
      }

      return a.price - b.price
    });
    
    return filteredArr;
  }

}
