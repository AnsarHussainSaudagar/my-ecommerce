import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipePipe } from './custom-pipe.pipe';
import { HighlighDirective } from './highligh.directive';

@NgModule({
  declarations: [
    CustomPipePipe,
    HighlighDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [HighlighDirective, CustomPipePipe]
})
export class SharedModule { }
