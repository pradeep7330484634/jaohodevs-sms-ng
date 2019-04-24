/* Dashboard MenuItems and list interfaces */
interface Links {
  name: string;
  routerLink: string;
}

export interface User {
  user?: string;
  admin?: string;
  sAdmin?: string;
}

export interface UserRoles {
  name: string;
  roles: string[];
  fields?: Array<Links>;
}

// export class UsersRoles implements UserRoles {
//   name: string;
//   roles: string[];
//   fields: Array<fields>[];
//   constructor(name: string, roles: string[], fields: Array<fields>[]) {
//     this.name = name;
//     this.roles = roles;
//     this.fields = fields;
//   }
// }

// export class UsersRole {
//   // user: string;
//   // admin: string;
//   // sAdmin: string;
//   constructor(user?: string, admin?: string, sAdmin?: string) {
//     // this.user = user; this.admin = admin; this.sAdmin = sAdmin;
//   }
// }

// interface IName {
//   firstName: string
//   lastName?: string;
//   readonly code: string;
// }

// interface IWork {
//   doWork(): void;
//   test();
// }
// abstract class BaseEmployee implements IName, IWork {
//   firstName: string;
//   // lastName: string;
//   code: string;
//   constructor(fName, lName, code) {
//   }
//   abstract doWork();
//   abstract test();
// }
// class Emp extends BaseEmployee {
//   constructor() {
//     super("f", "l", "ds");

//   }
//   doWork() {

//   }
//   test() {

//   }
// }
// class test extends BaseEmployee {
//   firstName: any;
//   code: any;
//   constructor() {
//    super("", "", "")
//   }
//   doWork() {

//   }
//   test() {

//   }
// }
interface fields {
  name: string;
  routerLink: string;
}
interface UsersRole {
  name?: any[];
  roles?: any[];
  fields?: any;
}

// interface x {
//   test();
//   test3();
// }
//  abstract class Users {
//  fn: string;
//  ln: string;
//  constructor(fn: string, ln: string) {
//    this.fn = fn;
//    this.ln = ln;
//  }
//   abstract doWork(): void;
// }

// class Emp extends Users {
//   constructor(fn, ln) {
//     super(fn, ln);
//   }
//   doWork() {
//     console.log(this.ln);
//   }
// }
// let emp = new Emp('jon', "rehman");
// emp.doWork;