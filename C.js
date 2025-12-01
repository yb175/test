import A from "./A.js";

export default function C() {
    if(A()==1){
        console.log("hello this is pull shark");
    }
    else {
        while(true){
            console.log("crash") ; 
        }
    }
}
