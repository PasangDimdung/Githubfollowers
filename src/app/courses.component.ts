import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <img [src]="imageUrl">

        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>


        <ul>
            <li *ngFor="let course of courses">
            {{ course }}
            </li>
        </ul>

        <button class="btn btn-primary" [style.background]="isActive ? 'red' : 'blue' ">Click Me</button>

        <div (click)="DivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
        
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>

        {{ course.title | uppercase }}<br/>
        {{ course.students | number }}<br/>
        {{ course.rating | number:'1.2-2' }}<br/>
        {{ course.price | currency: 'AUD': true: '3.2-2'}}<br/>
        {{ course.releaseDate | date:'shortDate'}}

        {{ text | summary:10}}

    `
})
export class CoursesComponent{
    title= "List of courses";
    courses;
    colSpan=2;
    isActive= true;
    email= "me@icloud.com";

    text = `dhdsjhsbjhbshbdhbhbshbhbshbdhbshdbbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbh`;

    course={
        title: "Complete Angular course",
        students: 1000,
        rating: 8.9876,
        price: 200.28,
        releaseDate: new Date(2016, 3, 1)
    }

    constructor(service: CoursesService){
        this.courses= service.getCourses();

    }

    DivClicked(){
        console.log("Div was clicked");
    }

    onSave($event){
        console.log("Button was clicked!", $event);
    }

    onKeyUp(){
        console.log(this.email);
    }

}

