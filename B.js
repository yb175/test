import A from "./A.js";
// Idempotency in pull shark 
export default function B() {
    console.log(A());
}
