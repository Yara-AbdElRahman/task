import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
// import data from "../assets/img/"

@Injectable({
    providedIn: 'root'
})
export class ReadCoursesService {
    objRes: any = null;
    getStudentCoursesRes: any = null;
    constructor(private http: HttpClient) {

        // this.getCourses().subscribe((data:any) => {
        //     console.log("data",data);
        // });
    }

    public getCourses(){
        return this.http.get("../assets/img/courses.json");
    }
    // StudentId:string="1233"

     getCoursesByID(id : Number){
        // let res;
        this.getCourses().subscribe((data:any) => {
          console.log(data);
          debugger
        this.objRes = data.find((x:any) => x.CourseId == id)
        console.log("basel" + this.objRes);
        return this.objRes ;
        });
    }
    public getAllRequests(){
        return this.http.get("../assets/img/requests.json");
        // return this.http.get("../assets/img/requests.json/").map( (res: Response) => res[0].products.filter(x=>x.id==StudentId));;
    }


    public getStudentCourses(StudentId : Number){
        this.getAllRequests().subscribe((requests:any) =>{
            for(let req of requests){
                if(req.StudentId == StudentId){
                  this.getStudentCoursesRes = req.Courses;
                }
            }
            
        })
        return this.getStudentCoursesRes ;
    }





}
