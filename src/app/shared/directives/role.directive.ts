import { Directive, TemplateRef, ElementRef, Input, ViewContainerRef, Renderer } from '@angular/core';
// import { ProfileService } from '../../services/profile.service';

@Directive({
  selector: '[authRoleCheck]'
})
export class RoleDirective {
  @Input('authRoleCheck') access: any;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  ngOnInit(): void {
    // this.rolePermissions();
  }
  /* Role permission method to hide and show nav links in dashboard
  *  Create embeddedView to create multiple links 
  *  remove() to remove view in nav links
  *  If no roles specified where undefined || empty will allow roles
  */
  // rolePermissions() {
  //   let expectedRole = this.profileService.getRole;
  //   for (let i = 0; i <= this.access.length; i++) {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //     if (expectedRole != this.access[i] && this.access[i] != " " || undefined) {
  //       this.viewContainer.remove();
  //       // console.log(this.access[i]);
  //     }
  //   }
  // }
}