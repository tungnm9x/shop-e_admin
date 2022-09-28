import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookingComponent } from './booking.component';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookingComponent,
      },
    ]),
    ReactiveFormsModule,
  ],
})
export class BookingModule {}
