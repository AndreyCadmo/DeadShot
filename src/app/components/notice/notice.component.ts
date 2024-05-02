import { CommonModule, isPlatformBrowser } from "@angular/common";
import { AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID, signal } from "@angular/core";

@Component({
  selector: "app-notice",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./notice.component.html",
  styleUrl: "./notice.component.css",
})
export class NoticeComponent implements AfterViewInit, OnDestroy {
  indexGlobal = 0;

  images = [
    "../../../assets/notice/noticeOne.png",
    "../../../assets/notice/noticeTwo.jpg",
    "../../../assets/notice/noticeThree.jpg",
    "../../../assets/notice/noticeFour.jpg",
    "../../../assets/notice/noticeFive.jpg",
  ];

  actualImage = this.images[this.indexGlobal];

  mudarImage = (index: number) => {
    this.indexGlobal = index >= this.images.length ? 0 : index;
    this.actualImage = this.images[this.indexGlobal];
  };

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  get isBrowserOnly(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  intervalId: any = null;

  ngAfterViewInit() {
    if (this.isBrowserOnly && this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.mudarImage(this.indexGlobal + 1);
      }, 3000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
  }
}
