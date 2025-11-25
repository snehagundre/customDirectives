import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";


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



