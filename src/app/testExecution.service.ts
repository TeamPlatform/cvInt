import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Post} from './post';


@Injectable()
export class TestExecutionServiceComponent {
  
 
 constructor(public http:Http){

 }
 getProjectSelectionDetails():Observable<Post[]>{
  //alert("ll00")
   return this.http.get("/selectionProject")
  .map((response:Response)=><Post[]>response.json());

  }

 
<<<<<<< HEAD
   testScriptDetails(ss):Observable<Post[]>{
  //alert("ll00")
   return this.http.get("/getTestScriptDetails"+ss)
=======
   testScriptDetails():Observable<Post[]>{
  //alert("ll00")
   return this.http.get("/getTestScriptDetails")
>>>>>>> be75818dba656454965cb2bde3be25ebf1cdd8e0
   
  .map((response:Response)=><Post[]>response.json());
  

  } 
<<<<<<< HEAD



   
  rahulDetails(rah):Observable<Post[]>{
    //alert("ll00")
     return this.http.get("/rahuldetails"+rah)
     
    .map((response:Response)=><Post[]>response.json());
    
  
    }
  
      showDetails(vv): Observable<Post[]>{
           alert("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"+vv)
           return this.http.get("/testScript")
          .map((response: Response) => <Post[]>response.json());
      }
=======
  
      // showDetails(): Observable<Post[]>{
      //      alert("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
      //      return this.http.get("/testScript")
      //     .map((response: Response) => <Post[]>response.json());
      // }
>>>>>>> be75818dba656454965cb2bde3be25ebf1cdd8e0

  projectDetails(): Observable<Post[]>{
    // alert("ll00")
       return this.http.get("/getModuleName")
      .map((response: Response) => <Post[]>response.json());
    
      }
    
        childModuleDetails(index): Observable<Post[]> {
    
    // alert(typeof(index)+index)
    //     let params = new URLSearchParams();
    // params.set('selectedModule', 'selectedModule');
    
       return this.http.get('/getFeatureName' + index)
       .map((response: Response) => <Post[]>response.json());
       // console.log(response.json())
    
      }
    
      childModuleDetails1(): Observable<Post[]> {
    
        // alert(typeof(index)+index)
        //     let params = new URLSearchParams();
        // params.set('selectedModule', 'selectedModule');
    
           return this.http.get('/featureName')
           .map((response: Response) => <Post[]>response.json());
           // console.log(response.json())
          }
    
    
      // response:any
       typeDetails(): Observable<Post[]> {
        // alert("ll00")
           return this.http.get("/importType")
          .map((response: Response) => <Post[]>response.json());
    
          }
    
          priorityDetails(): Observable<Post[]> {
            // alert("ll00")
               return this.http.get("/importPriority")
              .map((response: Response) => <Post[]>response.json());
    
              }
    }
  
