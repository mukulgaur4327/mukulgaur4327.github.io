import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  mastersMgmt: any;
  IsCollapsed = false;
  constructor(private service: CommonService, private renderer: Renderer2) {
    this.mastersMgmt = this.service.mastersMgmtData();
  }
  ngAfterViewInit(): void {
    var links = document.querySelectorAll('.sub-menu');
    links.forEach((element) => {
      element.addEventListener('click', function (e) {
        // PreventDefault to prevent redirect
        e.preventDefault();
        links.forEach(function (element) {
          element.classList.remove('sub-active');
        });
        setTimeout(() => {
          (e.target as Element)!.classList.add('sub-active');
        }, 0);
      });
    });
  }
}
