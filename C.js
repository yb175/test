import A from "./A.js";

export default function C() {
    if(A()==1){
        console.log("ok");
    }
    else {
        console.log(0/0);
        while(true){
            console.log("crash") ; 
        }
    }
}
