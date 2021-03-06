import Vue from "vue";
import VueRouter from "vue-router";
import { PUBLICPATH } from "@/constants/config";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/occupation/detail/"
  },
  {
    path: "/occupation/",
    name: "Occcupation",
    component: () =>
      import(/* webpackChunkName: "occupation" */ "@/views/Occupation.vue"),
    children: [
      {
        path: "detail",
        name: "OccupationDetail",
        component: () =>
          import(
            /* webpackChunkName: "occupationdetail" */ "@/views/occupation/Detail.vue"
          )
      },
      {
        path: "paygrade",
        name: "OccupationByPaygrade",
        component: () =>
          import(
            /* webpackChunkName: "occupationbypaygrade" */ "@/views/occupation/Paygrade.vue"
          )
      },
      {
        path: "industry",
        name: "OccupationByIndustry",
        component: () =>
          import(
            /* webpackChunkName: "occupationbyindustry" */ "@/views/occupation/Industry.vue"
          )
      },
      {
        path: "state",
        name: "OccupationByState",
        component: () =>
          import(
            /* webpackChunkName: "occupationbyindustry" */ "@/views/occupation/State.vue"
          )
      }
    ]
  },
  {
    path: "/demographics/",
    name: "Demographics",
    component: () =>
      import(/* webpackChunkName: "line" */ "@/views/Demographics.vue"),
    children: [
      {
        path: "age/line",
        name: "AgeLine",
        component: () =>
          import(/* webpackChunkName: "age" */ "@/views/line/Age.vue")
      },
      {
        path: "age/bar",
        name: "AgeBar",
        component: () =>
          import(/* webpackChunkName: "age" */ "@/views/bar/Age.vue")
      },
      {
        path: "education/line",
        name: "EducationLine",
        component: () =>
          import(
            /* webpackChunkName: "education" */ "@/views/line/Education.vue"
          )
      },
      {
        path: "education/bar",
        name: "EducationBar",
        component: () =>
          import(
            /* webpackChunkName: "education" */ "@/views/bar/Education.vue"
          )
      },
      {
        path: "raceethnicity/line",
        name: "RaceethnicityLine",
        component: () =>
          import(
            /* webpackChunkName: "raceethnicity" */ "@/views/line/RaceEthnicity.vue"
          )
      },
      {
        path: "raceethnicity/bar",
        name: "RaceethnicityBar",
        component: () =>
          import(
            /* webpackChunkName: "raceethnicity" */ "@/views/bar/RaceEthnicity.vue"
          )
      },
      {
        path: "sex/line",
        name: "SexLine",
        component: () =>
          import(/* webpackChunkName: "sex" */ "@/views/line/Sex.vue")
      },
      {
        path: "sex/bar",
        name: "SexBar",
        component: () =>
          import(/* webpackChunkName: "sex" */ "@/views/bar/Sex.vue")
      }
    ]
  },
  {
    path: "/industry/",
    name: "Industry",
    component: () =>
      import(/* webpackChunkName: "line" */ "@/views/Industry.vue"),
    children: [
      {
        path: "line",
        name: "IndustryLine",
        component: () =>
          import(/* webpackChunkName: "industry" */ "@/views/line/Industry.vue")
      },
      {
        path: "bar",
        name: "IndustryBar",
        component: () =>
          import(/* webpackChunkName: "industry" */ "@/views/bar/Industry.vue")
      },
      {
        path: "occupation",
        name: "IndustryByOccupation",
        component: () =>
          import(
            /* webpackChunkName: "occupationbyindustry" */ "@/views/occupation/Industry.vue"
          )
      }
    ]
  },
  {
    path: "/state/",
    name: "State",
    component: () => import(/* webpackChunkName: "line" */ "@/views/State.vue"),
    children: [
      {
        path: "line",
        name: "StateLine",
        component: () =>
          import(/* webpackChunkName: "industry" */ "@/views/line/State.vue")
      },
      {
        path: "bar",
        name: "StateBar",
        component: () =>
          import(/* webpackChunkName: "industry" */ "@/views/bar/State.vue")
      },
      {
        path: "occupation",
        name: "IndustryByState",
        component: () =>
          import(
            /* webpackChunkName: "occupationbyindustry" */ "@/views/occupation/State.vue"
          )
      }
    ]
  },
  {
    path: "/service/",
    name: "Service",
    component: () =>
      import(/* webpackChunkName: "line" */ "@/views/Service.vue"),
    children: [
      {
        path: "afqt/line",
        name: "AFQTLine",
        component: () =>
          import(/* webpackChunkName: "afqt" */ "@/views/line/AFQT.vue")
      },

      {
        path: "afqt/bar",
        name: "AFQTBar",
        component: () =>
          import(/* webpackChunkName: "afqt" */ "@/views/bar/AFQT.vue")
      },
      {
        path: "yearsofservice/line",
        name: "YearsOfServiceLine",
        component: () =>
          import(
            /* webpackChunkName: "experience" */ "@/views/line/YearsOfService.vue"
          )
      },
      {
        path: "yearsofservice/bar",
        name: "YearsOfServiceBar",
        component: () =>
          import(
            /* webpackChunkName: "experience" */ "@/views/bar/YearsOfService.vue"
          )
      },
      {
        path: "paygrade/line",
        name: "PaygradeLine",
        component: () =>
          import(/* webpackChunkName: "paygrade" */ "@/views/line/Paygrade.vue")
      },
      {
        path: "paygrade/bar",
        name: "PaygradeBar",
        component: () =>
          import(/* webpackChunkName: "paygrade" */ "@/views/bar/Paygrade.vue")
      },
      {
        path: "occupation",
        name: "PaygradebyOccupation",
        component: () =>
          import(
            /* webpackChunkName: "occupationbypaygrade" */ "@/views/occupation/Paygrade.vue"
          )
      }
    ]
  },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
  base: PUBLICPATH
});

export default router;
