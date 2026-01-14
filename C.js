import A from "./A.js";
// testing pull shark 
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
