import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirectivesDirective {
  @HostBinding('class.show') isOpen: boolean = false; 

  constructor(private elRef:ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    //console.log(event.target)
    // Add 'show' class to the dropdown menu inside <ul>
    const dropdownMenu = this.elRef.nativeElement.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      this.isOpen ? dropdownMenu.classList.add('show') : dropdownMenu.classList.remove('show');
    }
  }
}
