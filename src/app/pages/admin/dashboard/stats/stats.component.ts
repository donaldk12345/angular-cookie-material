import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent  implements OnInit {

    @Input() bgClass: string | undefined;
  @Input() icon: string | undefined;
  @Input() count: number | undefined;
  @Input() label: string | undefined;
  @Input() data: number | undefined;
  constructor() {}

  ngOnInit() {}

}
