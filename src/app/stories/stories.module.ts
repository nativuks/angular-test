import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoriesComponent } from './stories.component';
import { StoriesService } from '../shared/services/stories.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { StoriesItemComponent } from '../stories-item/stories-item.component';
import { StorieDetailComponent } from '../storie-detail/storie-detail.component';
import { StorieNewComponent } from '../storie-new/storie-new.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [StoriesComponent, StoriesItemComponent, StorieDetailComponent, StorieNewComponent],
  providers: [StoriesService]
})
export class StoriesModule {
 }
