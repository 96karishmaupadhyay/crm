import { all_routes } from "../../../feature-module/router/all_routes";
const route = all_routes;
export const SidebarData = [
  {
    label: "MAIN MENU",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Main",
    submenuItems: [
      // {
      //   label: "Dashboard",
      //   icon: "ti ti-layout-2",
      //   submenu: true,
      //   showSubRoute: false,

      //   submenuItems: [
      //     { label: "Deals Dashboard", link: route.dealsDashboard },
      //     { label: "Leads Dashboard", link: route.leadsDashboard },
      //     { label: "Project Dashboard", link: route.projectDashboard },
      //   ],
      // },
      // {
      //   label: "Application",
      //   icon: "ti ti-brand-airtable",
      //   submenu: true,
      //   showSubRoute: false,
      //   submenuItems: [
      //     {
      //       label: "Chat",
      //       link: route.chat,
      //       showSubRoute: false,
      //     },
      //     {
      //       label: "Call",
      //       submenu: true,
      //       submenuItems: [
      //         { label: "Video Call", link: route.videoCall },
      //         { label: "Audio Call", link: route.audioCall },
      //         { label: "Call History", link: route.callHistory },
      //       ],
      //     },
      //     {
      //       label: "Calendar",
      //       link: route.calendar,
      //       showSubRoute: false,
      //     },
      //     {
      //       label: "Email",
      //       link: route.email,
      //       showSubRoute: false,
      //     },
      //     {
      //       label: "To Do",
      //       link: route.todo,
      //       showSubRoute: false,
      //     },
      //     {
      //       label: "Notes",
      //       link: route.notes,
      //       showSubRoute: false,
      //     },
      //     {
      //       label: "File Manager",
      //       link: route.fileManager,
      //       showSubRoute: false,
      //     },
      //     {
      //       label: "Socail feed",
      //       link: route.socialfeed,
      //       showSubRoute: false,
      //     },
      //     {
      //       label: "Kanban View",
      //       link: route.kanbanview,
      //       showSubRoute: false,
      //     },
      //     {
      //       label: "Invoice",
      //       link: route.invoice,
      //       showSubRoute: false,
      //     },
      //     {
      //       label: "Invoice Details",
      //       link: route.invoice_details,
      //       showSubRoute: false,
      //     },
      //   ],
      // },
      {
        label: "Super Admin",
        icon: "ti ti-user-star",
        submenu: true,
        showSubRoute: false,
        submenuItems: [
          {
            label: "Dashboard",
            link: route.superadminDashboard,
            showSubRoute: false,
          },
          {
            label: "Company",
            link: route.superadminCompany,
            showSubRoute: false,
          },
          {
            label: "Subscription",
            link: route.superadminSubscription,
            showSubRoute: false,
          },
          {
            label: "Packages",
            link: route.superadminPackagelist,
            showSubRoute: false,
          },
          {
            label: "Domain",
            link: route.superadminDomain,
            showSubRoute: false,
          },
          {
            label: "Purchase Transaction",
            link: route.superadminPurchaseTransaction,
            showSubRoute: false,
          },
        ],
      },
    ],

  }
];
