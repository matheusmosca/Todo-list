// import {Promise} from 'es6-promise'
import { Observable } from 'rxjs'

const basic: any = Observable.create((observer:any) => {
    observer.next("oi");
})

basic.subscribe((x:any) => {
    console.log(x);
})

console.log("Test")

