import { Directive, ElementRef, HostListener, inject, input, OnInit } from '@angular/core';

@Directive({
  selector: '[ptHighlight]',
})
export class HighlightDirective implements OnInit {
  
  ptHighlight = input<string>();
  private el = inject(ElementRef<HTMLElement>)
  constructor() {

    console.log("directive active");
    console.log(this.el);
    
  }
  ngOnInit(): void {
    console.log(this.ptHighlight());
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.ptHighlight();
  }
  @HostListener('mouseleave')
  onMouseLeaver() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
