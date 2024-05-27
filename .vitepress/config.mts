// @ts-ignore
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Powerlynx",
  description: "Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FAQ', link: '/faq' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Get started', link: '/getstarted' },
          { text: 'Networking', items:[
            {text: 'Mikrotik Hotstpot', link: '/networking/mikrotik.md'},
            {text: 'Mikrotik Troubleshooting', link: '/networking/mikrotik_troubleshooting.md'},
            {text: 'Cambium Hotstpot', link: '/networking/cambium.md'},
          ] },
          { text: 'System', items: [
            { text: 'Locations', link: '/system/locations.md' },
            { text: 'Hotspots', link: '/system/hotspots.md' },
            { text: 'Splash pages', link: '/system/splash-pages.md' },
            { text: 'Data plans', link: '/system/data-plans.md' },
            { text: 'Vouchers', link: '/system/vouchers.md' },
            { text: 'SMS', link: '/system/sms.md' },
            { text: 'Adverts', link: '/system/adverts.md' },
          ] },
          { text: 'Finance', link: '/finance/main.md', items: [
            { text: 'Stripe', link: '/finance/stripe.md' },
            { text: 'Paypal', link: '/finance/paypal.md' },
            { text: 'Payfast', link: '/finance/payfast.md' },
            { text: 'Payat', link: '/finance/payat.md' },
            { text: 'Login with voucher code', link: '/finance/login_with_voucher_code.md' },
          ] },
          { text: 'Integrations', link: '/integrations/main.md', items: [
            { text: 'Splynx', link: '/integrations/splynx.md' },
          ] }
        ]
      }
    ],

    socialLinks: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"/><path fill="currentColor" d="M22.5 8.75a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 0 1 .53.22l2.72 2.72v-2.19a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5Z"/></svg>',
        },
        link: 'https://forum.powerlynx.app/latest'
      },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M1.796 2.098a.5.5 0 1 0-.6.8L3.198 4.4a.5.5 0 1 0 .6-.8zM1 7a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1zm8.998-5c3.149 0 5.744 2.334 5.984 5.355l.014.222l.004.225l-.001 3.596l.925 2.222a1 1 0 0 1 .053.167l.016.086l.008.131a1 1 0 0 1-.749.963l-.116.027l-.135.01H12.5l-.005.16a2.5 2.5 0 0 1-4.99 0l-.005-.16H3.999q-.132 0-.26-.034l-.124-.043a1 1 0 0 1-.603-1.052l.021-.127l.043-.128l.923-2.22L4 7.793l.004-.224C4.127 4.45 6.771 2 9.998 2M11.5 15.004h-3l.007.141a1.5 1.5 0 0 0 1.349 1.348L10 16.5a1.5 1.5 0 0 0 1.493-1.356zM9.998 3c-2.623 0-4.77 1.923-4.98 4.385l-.014.212L5 7.802V11.5l-.038.192l-.963 2.312l11.958.002l.045-.002l-.964-2.312L15 11.5V7.812l-.004-.204C14.891 5.034 12.695 3 9.998 3m8.906-.802a.5.5 0 0 0-.7-.1L16.202 3.6a.5.5 0 0 0 .6.8l2.002-1.502a.5.5 0 0 0 .1-.7M19.5 7.5A.5.5 0 0 0 19 7h-1.5a.5.5 0 0 0 0 1H19a.5.5 0 0 0 .5-.5"/></svg>',
      },
      link: 'https://feedback.powerlynx.app'
    }
    ],
    search: {
      provider: 'local'
    }
  }
})
