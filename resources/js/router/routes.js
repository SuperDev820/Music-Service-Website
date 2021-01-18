// import store from '../state/store'

export default [
    {
        path: '/',
        // meta: { authRequired: true },
        name: 'home',
        component: () => import('../contains/dashboard/home'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../contains/auth/login'),
        meta: {
            // beforeResolve(routeTo, routeFrom, next) {
            //     // If the user is already logged in
            //     if (store.getters['isAuthenticated']) {
            //         // Redirect to the home page instead
            //         next({ name: 'home' })
            //     } else {
            //         // Continue to the login page
            //         next()
            //     }
            // },
        },
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../contains/auth/register'),
        meta: {
            // beforeResolve(routeTo, routeFrom, next) {
            //     // If the user is already logged in
            //     if (store.getters['auth/loggedIn']) {
            //         // Redirect to the home page instead
            //         next({ name: 'home' })
            //     } else {
            //         // Continue to the login page
            //         next()
            //     }
            // },
        },
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../contains/auth/forgot-password'),
        meta: {
            // beforeResolve(routeTo, routeFrom, next) {
            //     // If the user is already logged in
            //     if (store.getters['auth/loggedIn']) {
            //         // Redirect to the home page instead
            //         next({ name: 'home' })
            //     } else {
            //         // Continue to the login page
            //         next()
            //     }
            // },
        },  
    },
    {
        path: '/logout',
        name: 'logout',
        meta: {
            authRequired: true,
            // beforeResolve(routeTo, routeFrom, next) {
            //     store.dispatch('auth/logOut')
            //     const authRequiredOnPreviousRoute = routeFrom.matched.some(
            //         (route) => route.push('/login')
            //     )
            //     // Navigate back to previous page, or home as a fallback
            //     next(authRequiredOnPreviousRoute ? { name: 'home' } : { ...routeFrom })
            // },
        },
    },
    // {
    //     path: '/calendar',
    //     name: 'Calendar',
    //     component: () => import('./views/calendar/index'),
    //     meta: {
    //         authRequired: true,
    //     },
    // },
    // {
    //     path: '/email/inbox',
    //     name: 'Email Inbox',
    //     component: () => import('./views/email/inbox'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/email/read-email',
    //     name: 'Read email',
    //     component: () => import('./views/email/reademail'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/email/compose',
    //     name: 'Compose',
    //     component: () => import('./views/email/compose'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/alerts',
    //     name: 'Alerts',
    //     component: () => import('./views/ui/alerts'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/rating',
    //     name: 'Rating',
    //     component: () => import('./views/ui/rating'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/buttons',
    //     name: 'Buttons',
    //     component: () => import('./views/ui/buttons'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/cards',
    //     name: 'Cards',
    //     component: () => import('./views/ui/cards'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/carousel',
    //     name: 'Carousel',
    //     component: () => import('./views/ui/carousel'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/colors',
    //     name: 'Colors',
    //     component: () => import('./views/ui/colors'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/dropdowns',
    //     name: 'Dropdowns',
    //     component: () => import('./views/ui/dropdowns'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/general',
    //     name: 'General',
    //     component: () => import('./views/ui/general'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/grid',
    //     name: 'Grid',
    //     component: () => import('./views/ui/grid'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/images',
    //     name: 'Images',
    //     component: () => import('./views/ui/images'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/modals',
    //     name: 'Modals',
    //     component: () => import('./views/ui/modals'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/progressbar',
    //     name: 'Progressbar',
    //     component: () => import('./views/ui/progressbar'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/rangeslider',
    //     name: 'Range-slider',
    //     component: () => import('./views/ui/rangeslider'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/sweetalert',
    //     name: 'Sweet-alert',
    //     component: () => import('./views/ui/sweetalert'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/tabs',
    //     name: 'Tabs & Accordions',
    //     component: () => import('./views/ui/tabs'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/typography',
    //     name: 'Typography',
    //     component: () => import('./views/ui/typography'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/ui/video',
    //     name: 'Video',
    //     component: () => import('./views/ui/video'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/timeline',
    //     name: 'Timeline',
    //     component: () => import('./views/pages/timeline'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/invoice',
    //     name: 'Invoice',
    //     component: () => import('./views/pages/invoice'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/pricing',
    //     name: 'Pricing',
    //     component: () => import('./views/pages/pricing'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/blank-page',
    //     name: 'Blank page',
    //     component: () => import('./views/pages/blank'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/faqs',
    //     name: 'FAQs',
    //     component: () => import('./views/pages/faqs'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/directory',
    //     name: 'Directory',
    //     component: () => import('./views/pages/directory'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/404',
    //     name: 'Page-404',
    //     component: () => import('./views/pages/error-404'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/500',
    //     name: 'Page-500',
    //     component: () => import('./views/pages/error-500'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/maintenance',
    //     name: 'Maintenance',
    //     component: () => import('./views/pages/maintenance'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/login-1',
    //     name: 'Login-1',
    //     component: () => import('./views/pages/login-1'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/login-2',
    //     name: 'Login-2',
    //     component: () => import('./views/pages/login-2'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/register-1',
    //     name: 'Register-1',
    //     component: () => import('./views/pages/register-1'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/register-2',
    //     name: 'Register-2',
    //     component: () => import('./views/pages/register-2'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/recoverpwd-1',
    //     name: 'Recover Password 1',
    //     component: () => import('./views/pages/recoverpwd-1'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/recoverpwd-2',
    //     name: 'Recover Password 2',
    //     component: () => import('./views/pages/recoverpwd-2'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/lock-screen1',
    //     name: 'Lock-screen 1',
    //     component: () => import('./views/pages/lock-screen1'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/pages/lock-screen2',
    //     name: 'Lock-screen 2',
    //     component: () => import('./views/pages/lock-screen2'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/form/elements',
    //     name: 'Form Elements',
    //     component: () => import('./views/forms/elements'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/form/advanced',
    //     name: 'Form advanced',
    //     component: () => import('./views/forms/advanced'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/form/editor',
    //     name: 'Form editor',
    //     component: () => import('./views/forms/editor'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/form/mask',
    //     name: 'Form mask',
    //     component: () => import('./views/forms/mask'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/form/uploads',
    //     name: 'Form uploads',
    //     component: () => import('./views/forms/uploads'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/form/validation',
    //     name: 'Form validation',
    //     component: () => import('./views/forms/validation'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/form/repeater',
    //     name: 'Form Repeater',
    //     component: () => import('./views/forms/repeater'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/form/wizard',
    //     name: 'Form wizard',
    //     component: () => import('./views/forms/wizard'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/icons/dripicons',
    //     name: 'Dripicons icons',
    //     component: () => import('./views/icons/dripicons'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/icons/fontawesome',
    //     name: 'Font-awesome icons',
    //     component: () => import('./views/icons/fontawesome'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/icons/ion',
    //     name: 'Ion icons',
    //     component: () => import('./views/icons/ion'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/icons/material',
    //     name: 'Material icons',
    //     component: () => import('./views/icons/material'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/icons/themify',
    //     name: 'Themify icons',
    //     component: () => import('./views/icons/themify'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/icons/typicons',
    //     name: 'Typicons icons',
    //     component: () => import('./views/icons/typicons'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/tables/basic',
    //     name: 'Basic table',
    //     component: () => import('./views/tables/basic'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/tables/advancedtable',
    //     name: 'Advanced table',
    //     component: () => import('./views/tables/advancedtable'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/charts/chartist',
    //     name: 'Chartist',
    //     component: () => import('./views/charts/chartist'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/charts/chartjs',
    //     name: 'Chartjs',
    //     component: () => import('./views/charts/chartjs/index'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/charts/apex',
    //     name: 'Apex',
    //     component: () => import('./views/charts/apex'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/charts/echart',
    //     name: 'E - Chart',
    //     component: () => import('./views/charts/echart/index'),
    //     meta: {
    //         authRequired: true
    //     }
    // },
    // {
    //     path: '/email-template/basic',
    //     name: 'Email-template Basic',
    //     component: () => import('./views/email-template/basic'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/email-template/alert',
    //     name: 'Alert Email',
    //     component: () => import('./views/email-template/alert'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/email-template/billing',
    //     name: 'Billing Email',
    //     component: () => import('./views/email-template/billing'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
    // {
    //     path: '/maps/google',
    //     name: 'Google map',
    //     component: () => import('./views/maps/google'),
    //     meta: {
    //         authRequired: true,
    //     }
    // },
]