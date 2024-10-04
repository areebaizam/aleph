import { Component, Input } from '@angular/core';

@Component({
  selector: 'tap-blog-detail',
  standalone: true,
  imports: [],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export default class BlogDetailComponent {
  @Input({ alias: 'id', required: true, transform: (val: string) => Number(val) }) productId!: number;
}
