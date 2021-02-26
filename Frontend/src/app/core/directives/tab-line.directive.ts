import {
	Directive,
	Renderer2,
	ElementRef,
	AfterViewInit,
	OnDestroy
} from '@angular/core';

@Directive({
	selector: '[mTabLine]'
})
export class TabLineDirective implements AfterViewInit, OnDestroy {
	constructor(private renderer: Renderer2, private el: ElementRef) {		
	}

	ngOnDestroy(): void {}

	ngAfterViewInit(): void {	
	}
}
