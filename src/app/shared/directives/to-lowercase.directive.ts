import { Directive, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToLowercase]'
})
export class ToLowercaseDirective implements OnInit{
val : string =''
@Output() inputValEmmiter : EventEmitter<string> = new EventEmitter<string>()
  constructor(
    private _eleRef : ElementRef,
    private  _rendere : Renderer2
  ) { }
  ngOnInit(): void {


  }
  @HostListener('keyup',['$event'])

  onKeyUp(eve:Event){
    // console.log(eve)
  //  this.val = (this._rendere.selectRootElement(this._eleRef.nativeElement.value)).toLowercase()
  this.val = (eve.target as HTMLInputElement).value as string
  (eve.target as HTMLInputElement).value = this.val.toLowerCase()
   this.inputValEmmiter.emit(this.val)
  }

}
