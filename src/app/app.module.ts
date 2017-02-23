import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AllQuestionsComponent } from './pages/all-questions/all-questions.component';
import { SingleQuestionComponent } from './pages/single-question/single-question.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VotesInlineComponent } from './components/votes-inline/votes-inline.component';
import { TittleRowComponent } from './components/tittle-row/tittle-row.component';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    AllQuestionsComponent,
    SingleQuestionComponent,
    ProfileComponent,
    VotesInlineComponent,
    TittleRowComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
