// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
  src: string
  alt: string
  text: string
}

export interface FooterAbout {
  title: string
  aboutText: string
  logo: Logo
}

export interface SubCategory {
  subCategory: string
  subCategoryLink: string
}

export interface FooterColumn {
  category: string
  subCategories: SubCategory[]
}

export interface SubFooter {
  copywriteText: string
}

export interface FooterData {
  footerAbout: FooterAbout
  footerColumns: FooterColumn[]
  subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
  footerAbout: {
    title: 'Frontier Nations',
    aboutText:
      'Equipping believers to go with the gospel and multiply disciples, churches, and leaders until there is no place left.',
    logo: {
      src: '/fnlogo.svg',
      alt: 'The tailwind astro theme',
      text: 'Frontier Nations'
    }
  },

  footerColumns: [
     {
       category: 'Product',
       subCategories: [
    //     { subCategory: 'Features',   subCategoryLink: '/features' },
    //     { subCategory: 'FAQ',        subCategoryLink: '/faq' },
    //     { subCategory: 'Pricing',    subCategoryLink: '/pricing' },
    //     { subCategory: 'Changelog',  subCategoryLink: '/changelog' },
         { subCategory: 'Terms',      subCategoryLink: '/terms' }
       ]
     },

    // {
    //   category: 'About us',
    //   subCategories: [
    //     { subCategory: 'About us', subCategoryLink: '/' },
    //     { subCategory: 'News',     subCategoryLink: '/blog' },
    //     { subCategory: 'Careers',  subCategoryLink: '/blog' }
    //   ]
    // },

    {
      category: 'Get in touch',
      subCategories: [
        { subCategory: 'Contact', subCategoryLink: '/contact' },

        // { subCategory: 'Support', subCategoryLink: '/contact' },
        // { subCategory: 'Join us', subCategoryLink: '/contact' }
      ]
    }
  ],

  subFooter: {
    copywriteText: '© Frontier Nations - NZ Charity No. CC62618'
  }
}