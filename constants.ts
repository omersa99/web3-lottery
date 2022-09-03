export const currency: string = "MATIC"

//Visitor Handling
let visitor: boolean = false

function visitorMod(){
    visitor=true
    console.log(visitor)
}
export {visitor,visitorMod}