import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';

import { GithubFollowersService } from './services/github-followers.service';
import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    SignupFormComponent,
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    InputFormatDirective,
    ContactFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'' , 
        component: HomeComponent
      },
      {
        path:'followers/:username/:id', 
        component: GithubProfileComponent
      },
      {
        path:'followers', 
        component: GithubFollowersComponent
      },
      {
        path:'posts', 
        component: PostsComponent
      },
      {
        path:'**', 
        component: NotFoundComponent
      }
    ])
  ],

  providers: [
    CoursesService,
    PostService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }