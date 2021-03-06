import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/modal';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import {NgPipesModule} from 'ngx-pipes';
import { PaginatePipe, PaginationService } from 'ng2-pagination';

import { AppComponent } from './app.component';
import { AllQuestionsComponent } from './pages/all-questions/all-questions.component';
import { SingleQuestionComponent } from './pages/single-question/single-question.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VotesInlineComponent } from './components/votes-inline/votes-inline.component';
import { TittleRowComponent } from './components/tittle-row/tittle-row.component';
import { QuestionComponent } from './components/question/question.component';
import { CommentRowComponent } from './components/comment-row/comment-row.component';
import { ProfileInfoSquareComponent } from './components/profile-info-square/profile-info-square.component';
import { ProfileJoinSquareComponent } from './components/profile-join-square/profile-join-square.component';
import { AllCommentCardComponent } from './components/all-comment-card/all-comment-card.component';
import { AllQuestionContComponent } from './components/all-question-cont/all-question-cont.component';
import { AvatarBoxComponent } from './components/avatar-box/avatar-box.component';

import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
const appRoutes: Routes = [
  { path: 'single/:id',       component: SingleQuestionComponent },
  { path: 'all',          component: AllQuestionsComponent },
  { path: '**',          redirectTo: "/all" }
]
@NgModule({
  declarations: [
    AppComponent,
    AllQuestionsComponent,
    SingleQuestionComponent,
    ProfileComponent,
    VotesInlineComponent,
    TittleRowComponent,
    QuestionComponent,
    CommentRowComponent,
    ProfileInfoSquareComponent,
    ProfileJoinSquareComponent,
    AllCommentCardComponent,
    AllQuestionContComponent,
    AvatarBoxComponent,
    HeroPageComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    Ng2FilterPipeModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
