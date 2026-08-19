// Projects and About are temporarily hidden from the public site while
// they're being redesigned (see the redirect guards on those pages); left
// out here outside of `astro dev` for that reason. Add them back when
// those sections relaunch.
export const nav = import.meta.env.DEV
  ? [
      { label: 'Projects', href: '/en/projects' },
      { label: 'About', href: '/en/about' },
      { label: 'Contact', href: '/en/contact' },
    ]
  : [{ label: 'Contact', href: '/en/contact' }];
