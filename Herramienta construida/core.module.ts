// imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { HttpModule } from '@angular/http';

//PROVIDERS
import { CourseContentProvider } from './providers/course-content.provider';
import { NavigationProvider } from './providers/navigation.provider';
import { SideMenuProvider } from './providers/side-menu.provider';
import { SCORMProvider } from './providers/scorm.provider';
import { StateProvider } from './providers/state.provider';
import { ActionsProvider } from './providers/actions.provider';
import { LOStructureProvider } from './providers/lo-structure.provider';
import { InteractionsProvider } from './providers/interactions.provider';
import { ModalProvider } from './providers/modal-provider';

//BASE
import { CourseColumnComponent } from './components/base/course-column/course-column.component';
import { ColumnContentComponent } from './components/base/course-column/column-content.component';
import { CourseContentComponent } from './components/base/course-content/course-content.component';
import { CourseRowComponent } from './components/base/course-row/course-row.component';

//BASIC
import { ParagraphComponent } from './components/basic/paragraph/paragraph.component';
import { ImgComponent } from './components/basic/img/img.component';
import { ButtonComponent } from './components/basic/button/button.component';
import { VoidComponent } from './components/basic/void/void.component';

//LEARNING ACTIVITIES
import { FormQuestionComponent } from './components/learning-activities/form-question/form-question.component';

//CONTENT ORGANIZERS
import { SimpleContainerComponent } from "./components/content-organizers/simple-container/simple-container.component";
import { TestOrganizerComponent } from "./components/content-organizers/test-organizer/test-organizer.component";

//LAYOUT
import { BaseCourseContainerComponent } from './components/layout/base-course-container/base-course-container.component';
import { DemoLayoutFooterComponent } from "./components/layout/demo/demo-layout-footer/demo-layout-footer.component";
import { DemoLayoutHeaderComponent } from "./components/layout/demo/demo-layout-header/demo-layout-header.component";
import { DemoLayoutNavBarComponent } from "./components/layout/demo/demo-layout-nav-bar/demo-layout-nav-bar.component";

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    ColumnContentComponent,
    CourseColumnComponent,
    CourseContentComponent,
    CourseRowComponent,
    ParagraphComponent,
    BaseCourseContainerComponent,
    SafeHtmlPipe,
    ImgComponent,
    ButtonComponent,
    VoidComponent,
    SimpleContainerComponent,
    FormQuestionComponent,
    TestOrganizerComponent,
    DemoLayoutFooterComponent,
    DemoLayoutHeaderComponent,
    DemoLayoutNavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CourseContentProvider,
    NavigationProvider,
    SideMenuProvider,
    SCORMProvider,
    StateProvider,
    ActionsProvider,
    LOStructureProvider,
    InteractionsProvider,
    ModalProvider
  ],
  exports: [
    ColumnContentComponent,
    CourseColumnComponent,
    CourseContentComponent,
    CourseRowComponent,
    ParagraphComponent,
    BaseCourseContainerComponent,
    ImgComponent,
    ButtonComponent,
    VoidComponent,
    SimpleContainerComponent,
    FormQuestionComponent,
    TestOrganizerComponent,
    DemoLayoutFooterComponent,
    DemoLayoutHeaderComponent,
    DemoLayoutNavBarComponent
  ],
  entryComponents: [
    ParagraphComponent,
    ImgComponent,
    ButtonComponent,
    VoidComponent,
    SimpleContainerComponent,
    FormQuestionComponent,
    TestOrganizerComponent,
    DemoLayoutFooterComponent,
    DemoLayoutHeaderComponent,
    DemoLayoutNavBarComponent
  ]
})
export class CoreModule { }