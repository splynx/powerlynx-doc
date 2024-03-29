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
          ] },
          { text: 'Finance', link: '/finance/main.md', items: [
            { text: 'Stripe', link: '/finance/stripe.md' },
            { text: 'Paypal', link: '/finance/paypal.md' },
            { text: 'Payfast', link: '/finance/payfast.md' },
            { text: 'Payat', link: '/finance/payat.md' },
            { text: 'Login with voucher code', link: '/finance/login_with_voucher_code.md' },
          ] }
        ]
      }
    ],

    socialLinks: [
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"/><path fill="currentColor" d="M22.5 8.75a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 0 1 .53.22l2.72 2.72v-2.19a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5Z"/></svg>',
        },
        link: 'https://forum.powerlynx.app/latest'
      }
    ],
    search: {
      provider: 'local'
    }
  }
})
