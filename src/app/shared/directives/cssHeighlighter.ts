import { style } from "@angular/animations";
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector : '[basicCss]'
})



export class CssHeighlighter implements OnInit{

    constructor(private _eleReff : ElementRef,
                private _rendere : Renderer2 
    ){
              
    }
    ngOnInit(): void {
        //  console.log(this._eleReff) // this will give me the paragraph element I.E document object

        // this._eleReff.nativeElement.style.backgroundColor = 'orange' // we don't practice this directly as there are 
        // chancec of dom expose hence opt for renderer by ng
        // this._rendere.setStyle(this._eleReff.nativeElement , "background-color" ,"blueViolet")
        this._rendere.addClass(this._eleReff.nativeElement ,"alert")
        this._rendere.addClass(this._eleReff.nativeElement ,"alert-info")
        

    }
      
}

@Directive({
    selector : '[basicCss1]'
})
export class CssHeighlighter1 implements OnInit{

    constructor(private _eleReff1 : ElementRef,
                private _rendere1 : Renderer2 
    ){
              
    }
    ngOnInit(): void {
        this._rendere1.addClass(this._eleReff1.nativeElement ,"alert")
        this._rendere1.addClass(this._eleReff1.nativeElement ,"alert-warning")
    }
      
}
@Directive({
    selector : '[basicCss2]'
})
export class CssHeighlighter2 implements OnInit{

    constructor(private _eleReff2 : ElementRef,
                private _rendere2 : Renderer2 
    ){
              
    }
    ngOnInit(): void {
        this._rendere2.addClass(this._eleReff2.nativeElement ,"alert")
        this._rendere2.addClass(this._eleReff2.nativeElement ,"alert-primary")
    }
      
}
@Directive({
    selector : '[basicCss3]'
})
export class CssHeighlighter3 implements OnInit{

    constructor(private _eleReff3 : ElementRef,
                private _rendere3 : Renderer2 
    ){
              
    }
    ngOnInit(): void {
        this._rendere3.addClass(this._eleReff3.nativeElement ,"alert")
        this._rendere3.addClass(this._eleReff3.nativeElement ,"alert-warning")
    }
      
}
@Directive({
    selector : '[basicCss4]'
})
export class CssHeighlighter4 implements OnInit{

    constructor(private _eleReff4: ElementRef,
                private _rendere4: Renderer2 
    ){
              
    }
    ngOnInit(): void {
        this._rendere4.addClass(this._eleReff4.nativeElement ,"alert")
        this._rendere4.addClass(this._eleReff4.nativeElement ,"alert-primary")
    }
      
}

@Directive({
    selector : '[mouseOverbgchange]'
})
export class CssHeighlighter5 implements OnInit{
    @HostBinding("style.backgroundColor")
     bgColor : string = 'pink';
    @Input()  defaultColor !: string 
    // = 'hotpink'
    @Input()  hoverClr !: string
    //  = 'violet'
    constructor(private _eleReff5: ElementRef,
                private _rendere5: Renderer2 
    ){
              
    }

    ngOnInit(): void {
        this.bgColor = this.defaultColor
        this._rendere5.addClass(this._eleReff5.nativeElement ,"alert")
        this._rendere5.addClass(this._eleReff5.nativeElement ,"alert-primary")
    }

    @HostListener('mouseover')

    onMouseOver(){
    //    this._rendere5.setStyle(this._eleReff5.nativeElement , "background-color" ,"blue")
    this.bgColor = this.defaultColor
        this._rendere5.setStyle(this._eleReff5.nativeElement,"border-radius","35px")

    }
    
    @HostListener('mouseout')

    onMouseOut(){
    //    this._rendere5.setStyle(this._eleReff5.nativeElement , "background-color" ,"transparent")
    this.bgColor = this.hoverClr
        this._rendere5.setStyle(this._eleReff5.nativeElement,"border-radius","5px")

    }
      
}

@Directive({
    selector:'[mouseovereffect]'
})

export class CssHeighlighter6 implements OnInit{
@HostBinding('style.backgroundColor')

    bgColor : string = 'red'
    defColor : string = 'green'
    hovColor : string = 'hotpink'
    constructor(
        private _eleRef : ElementRef,
        private _renderer: Renderer2

    ){

    }
    ngOnInit(): void {
         this._renderer.addClass(this._eleRef.nativeElement,"alert")
        this._renderer.addClass(this._eleRef.nativeElement,"alert-info")
        this.bgColor = this.defColor
    }
    @HostListener('mouseover')
    
    onMouseOver(){
       this.bgColor = this.defColor;
        this._renderer.setStyle(this._eleRef.nativeElement,"border-radius","35px")


    }
    @HostListener('mouseout')
    
    onMouseOut(){
       this.bgColor = this.hovColor;
        this._renderer.setStyle(this._eleRef.nativeElement,"border-radius","5px")
       
    }
}
@Directive({
    selector:'[mouseovereffect1]'
})

export class CssHeighlighter7 implements OnInit{
@HostBinding('style.backgroundColor')

    bgColor : string = 'orange'
   @Input() defColor : string = 'red'
   @Input() hovColor : string = 'gray'
    constructor(
        private _eleRef : ElementRef,
        private _renderer : Renderer2
    ){

    }
    ngOnInit(): void {
        this._renderer.addClass(this._eleRef.nativeElement,"alert")
        this._renderer.addClass(this._eleRef.nativeElement,"alert-info")
        this.bgColor = this.defColor

    }
    @HostListener('mouseover')
    
    onMouseOver(){
       this.bgColor = this.defColor;
        this._renderer.setStyle(this._eleRef.nativeElement,"border-radius","35px")


    }
    @HostListener('mouseout')
    
    onMouseOut(){
       this.bgColor = this.hovColor;
        this._renderer.setStyle(this._eleRef.nativeElement,"border-radius","5px")


    }
}
@Directive({
    selector:'[mouseovereffect2]'
})

export class CssHeighlighter8 implements OnInit{
@HostBinding('style.backgroundColor')

   bgColor : string = 'orange'
   @Input() defColor : string = 'red'
   @Input() hovColor : string = 'gray'
    constructor(
        private _eleRef : ElementRef,
        private _renderer : Renderer2
    ){

    }
    ngOnInit(): void {
        this._renderer.setStyle(this._eleRef.nativeElement,"padding","35px")
        this._renderer.addClass(this._eleRef.nativeElement,"alert")
        this._renderer.addClass(this._eleRef.nativeElement,"alert-warning")
        this.bgColor = this.defColor
    }
    @HostListener('mouseover')
    
    onMouseOver(){
       this.bgColor = this.defColor;
        this._renderer.setStyle(this._eleRef.nativeElement,"border-radius","35px")
    
    }
    @HostListener('mouseout')
    
    onMouseOut(){
       this.bgColor = this.hovColor;
        this._renderer.setStyle(this._eleRef.nativeElement,"border-radius","5px")
      
    }
}
@Directive({
    selector:'[mouseovereffect3]'
})

export class CssHeighlighter9 implements OnInit{
@HostBinding('style.backgroundColor')

   bgColor : string = 'orange'
   @Input() defColor : string = 'red'
   @Input() hovColor : string = 'gray'
    constructor(
        private _eleRef : ElementRef,
        private _renderer : Renderer2
    ){

    }
    ngOnInit(): void {
        this._renderer.setStyle(this._eleRef.nativeElement,"padding","35px")
        this._renderer.setStyle(this._eleRef.nativeElement,"color","white")
        this._renderer.addClass(this._eleRef.nativeElement,"alert")
        this._renderer.addClass(this._eleRef.nativeElement,"alert-warning")
        this.bgColor = this.defColor
    }
    @HostListener('mouseover')
    
    onMouseOver(){
       this.bgColor = this.defColor;
        this._renderer.setStyle(this._eleRef.nativeElement,"border-radius","35px")
    
    }
    @HostListener('mouseout')
    
    onMouseOut(){
       this.bgColor = this.hovColor;
        this._renderer.setStyle(this._eleRef.nativeElement,"border-radius","5px")
      
    }
}
