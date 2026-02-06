import A from "./A.js";

console.log("hello I am using pullshark") ; 
export default function C() {
    if(A()==1){
        console.log("ok");
    }
    else {
        while(true){
            console.log("crash") ; 
        }
    }
}
