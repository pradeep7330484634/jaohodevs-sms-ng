

export const ROUTER_LINKS = {
    /* Routing path urls
   * Profile urls
   * Dashboard urls
   */
  /* App rougting pages urls */
  authentication_Link: "auth",
  /* Pages/ sms code urls */
  pageCode_Link : ":code",
  home_Link : "home",
  aboutUs_Link : "aboutus",
  contactUs_Link : "contactus",
  login_Link : "login",
  signup_Link : "signup",
  forgotPassword_Link : "forgot-password",

  /* Dashboard urls */
  // mainDashboardUrl : "main",
  dashboard_Link : "dashboard",
  dashboardHome : "profile",
  // studentUrl : "student",
  // reportUrl : "report",
  homeForm_Link : "home-form",
  aboutusForm_Link : "aboutus-form",
  contactusForm_Link : "contactus-form",

  /* User-defined roles
   * Constants for user roles
   */
  /* User roles constant variables */
  // userRole : "U",
  // adminRole : "A",
  // superAdminRole : "SA",
}

// dashboard sidenav list links 
export const DASHBOARD_SIDENAV_LINKS = [
  {
    name: "Dashboard",
    roles: ["SA", "A", "U"],
    fields: [{
      name: "profile",
      routerLink: ROUTER_LINKS.dashboard_Link + "/" + ROUTER_LINKS.dashboardHome,
    }, {
      name: "settings",
      routerLink: ROUTER_LINKS.dashboard_Link + "/" + ROUTER_LINKS.dashboardHome
    }
    ]
  },
  // {
  //   name: "Students",
  //   roles: ["SA", "A"],
  //   fields: [{
  //     name: "Exams",
  //     routerLink: ROUTER_LINKS.mainDashboardUrl + "/" + ROUTER_LINKS.dashboardUrl + "/" + ROUTER_LINKS.studentUrl
  //   }, {
  //     name: "Batches",
  //     routerLink: ROUTER_LINKS.mainDashboardUrl + "/" + ROUTER_LINKS.dashboardUrl + "/" + ROUTER_LINKS.studentUrl
  //   }
  //   ]
  // },
  // {
  //   name: "Reports",
  //   roles: ["SA"],
  //   fields: [{
  //     name: "Basic report",
  //     routerLink: ROUTER_LINKS.mainDashboardUrl + "/" + ROUTER_LINKS.dashboardUrl + "/" + ROUTER_LINKS.reportUrl
  //   }, {
  //     name: "Total report of exams",
  //     routerLink: ROUTER_LINKS.mainDashboardUrl + "/" + ROUTER_LINKS.dashboardUrl + "/" + ROUTER_LINKS.reportUrl
  //   },
  //   ]
  // },
  {
    name: "Forms",
    roles: [""],
    fields: [
      {
        name: "Home-form",
        routerLink: "/" + ROUTER_LINKS.dashboard_Link + "/" + ROUTER_LINKS.homeForm_Link
      },
      {
        name: "aboutus-form",
        routerLink: "/" + ROUTER_LINKS.dashboard_Link + "/" + ROUTER_LINKS.aboutusForm_Link
      },
      {
        name: "contactus-form",
        routerLink: "/" + ROUTER_LINKS.dashboard_Link + "/" + ROUTER_LINKS.contactusForm_Link
      }
    ]
  },
];