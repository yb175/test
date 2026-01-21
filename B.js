import A from "./A.js";
// Idempotency in pull shark 
// Am I working 
export default function B() {
    console.log(A());
}
