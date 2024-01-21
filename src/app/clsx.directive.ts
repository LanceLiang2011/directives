import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClsx]',
  standalone: true
})
export class ClsxDirective {


  constructor(private elementRef: ElementRef<HTMLElement>) {}

  @Input('appClsx') set clsx (input: any) {
    console.log(input)
    for (const [key, v] of Object.entries(input)) {
      if (v) {
        this.elementRef.nativeElement.classList.add(key);
      } else {
        this.elementRef.nativeElement.classList.remove(key);
      }
    }
  }


}
