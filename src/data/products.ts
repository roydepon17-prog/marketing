export interface Product {
  id: string;
  name: string;
  shortName: string;
  price: number;
  originalPrice?: number;
  usdPrice?: number;
  rating: number;
  reviewsCount: number;
  badge: string;
  badgeClass: string;
  category: 'all' | 'dark' | 'native' | 'tablea' | 'keto';
  description: string;
  image: string;
  imageAlt: string;
  cacaoPercentage?: string;
  flavorNotes: string[];
  weight: string;
  ingredients: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'dark-70',
    name: '70% Dark Chocolate',
    shortName: '70% Dark Cacao',
    price: 170,
    usdPrice: 5.50,
    rating: 4.9,
    reviewsCount: 84,
    badge: 'Best Seller',
    badgeClass: 'bg-[#93461d] text-[#ffffff]',
    category: 'dark',
    description: 'Single-origin dark cacao bar with subtle floral finish and deep roasted molasses undertone.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz4Od1YA_GySoWAP4rsHFi8vf9S3eCXG4jmThr4Q7OgF7t-4DbaHLskWts7zD45vA42j_u--5VZdPrP0AsiKxSoajXMmq1hfxJz7bu8cKswy1OZirJoBmwkbEx1EHTzSMlXR-mkx0Gz5fFlOfQOrHO4y9Mh8lKZVb7RHnllM6E27G8hu7TCj7bsC0-IH-_BQ-YLG7oV0QiFh-6uhc7LcmdO_GCeyy3VoeAUuoAs5UmhS_v4sWXBjgvc5VZwAli1MbpqfR0JyB4JltjohY',
    imageAlt: 'Artisanal wrapper of O\'guia 70% Dark Chocolate bar resting on woven rattan alongside rich brown chocolate squares',
    cacaoPercentage: '70% Cacao',
    flavorNotes: ['Fruity Molasses', 'Wild Honey', 'Warm Oak'],
    weight: '50g',
    ingredients: ['Fermented Capiz Cacao Beans', 'Unrefined Cane Sugar', 'Cacao Butter']
  },
  {
    id: 'coffee-fusion',
    name: 'Coffee Fusion',
    shortName: 'Coffee Cacao Fusion',
    price: 175,
    usdPrice: 5.00,
    rating: 4.8,
    reviewsCount: 62,
    badge: 'Award Winner',
    badgeClass: 'bg-[#44634f] text-[#ffffff]',
    category: 'native',
    description: 'Capiz cacao & highland roasted coffee beans blend, marrying dark earthiness with roasted arabica punch.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYHl6ja-Dtams2hBgcDCjoyE1LsJMsZ7nUdNStQ21SZUJF1BWGlp-Nlvb09xJbZNBptZWpfpB1BzdZAlXCSbd7rcOLhu1PSAEiLtIWNCS3j_pJMMxtOQOSI3lzeHszohqmd2_YRFynWLefCWqFY1HkbxTK-fGMbj3RA5-1jJUnO4sFNHCQbXBqM9Nda0j6oOT5R9yr137nr6bQu8R1Qgw2QH4R82VbaBDwDuA3IYZOBza3fnyO6BEScCXnLk86-fq6KF0',
    imageAlt: 'O\'guia Coffee Chocolate Fusion packaging with botanical artwork and roasted coffee beans',
    cacaoPercentage: '60% Cacao',
    flavorNotes: ['Roasted Arabica', 'Toasted Hazelnut', 'Dark Cocoa'],
    weight: '50g',
    ingredients: ['Single-Origin Capiz Cacao', 'Highland Coffee Beans', 'Cane Sugar', 'Cacao Butter']
  },
  {
    id: 'white-nibs',
    name: 'White & Raw Nibs',
    shortName: 'White Choc & Nibs',
    price: 220,
    usdPrice: 5.50,
    rating: 4.7,
    reviewsCount: 45,
    badge: 'Crisp & Creamy',
    badgeClass: 'bg-[#705951] text-[#ffffff]',
    category: 'native',
    description: 'Velvety cold-pressed cacao butter infused with roasted crunchy nibs and caramelized milk notes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgM7ydVJZo3CW42xFbMLtAiN2Lovlk-y4vOoizyxTfSqaTO2wcXtZgkLN0lmUL5SyZIqPv8oqyMYOz_Nqkn72uveBfeifiogE7YcjeuBelOV9DNYFVkoVCNwoz0-WQTJPmXV0QbwLyJQJ87Jey81D7sw8_GrXkdDFhbNqfaFQDlQrnGN-CmUecszVsKmosvs3R66UyZRhOC91scVcxEfm_2IDocKK8fP8Y6HvNkpx6KQyJUVtG-pXQhOLCgX_Xq9mUd60',
    imageAlt: 'White Chocolate with Cacao Nibs by O\'guia wrapped in cream paper',
    cacaoPercentage: '38% Cacao Butter',
    flavorNotes: ['Sweet Cream', 'Roasted Nibs Crunch', 'Bourbon Vanilla'],
    weight: '50g',
    ingredients: ['Pure Cacao Butter', 'Whole Milk Powder', 'Cane Sugar', 'Roasted Cacao Nibs']
  },
  {
    id: 'artisan-ube',
    name: 'Artisan Ube Bar',
    shortName: 'O’guia Ube Bar',
    price: 240,
    usdPrice: 6.00,
    rating: 5.0,
    reviewsCount: 110,
    badge: 'Youth Project',
    badgeClass: 'bg-[#fcdcd1] text-[#775f57]',
    category: 'native',
    description: 'Capiz cacao blended with native sweet purple yam confection. Created with local youth packaging scholars.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYQLAh0Tse_U4UmcJreV0zspWPYQcwh9FR89s0KOkQt94qi816xL0HWzbh6ZViseTQx3pnARIYuSpPSbKcOVqtx4RyBNsRCP8j78JEi_ZJTPt8U9Xz7KGyiP5PvSmj04Yw88OFT8i0c4xzbrciBunqABQvsFzTmAiOx3h5nNoZtT2WcX3Y4y02vJmd4hz1rajuOYGazU2-w4iQg1deAuICgES8F0A-sjdPVV4kBOmB9-bHkPvNEMsYkg',
    imageAlt: 'Playful illustrated packaging of O\'guia Ube Bar chocolate showing deep purple color notes',
    cacaoPercentage: '45% Cacao',
    flavorNotes: ['Native Ube Halaya', 'Toasted Milk', 'Mild Vanilla'],
    weight: '50g',
    ingredients: ['Cacao Butter', 'Milk Powder', 'Native Dried Ube Flour', 'Capiz Cacao Nibs', 'Cane Sugar']
  },
  {
    id: 'keto-dark',
    name: 'Keto Dark Cacao',
    shortName: 'Keto Dark Cacao',
    price: 250,
    usdPrice: 6.50,
    rating: 4.8,
    reviewsCount: 39,
    badge: 'Keto Friendly',
    badgeClass: 'bg-[#5c7c67] text-[#f6fff5]',
    category: 'keto',
    description: 'Pure cacao with roasted pumpkin seeds, sweetened naturally without refined sugars or artificial additives.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcdEFpPhwFkiCsgggaDyibCbvExxh0U8hY565h40gywPvUaZiTdC3AFuNswxW0UKXNhYhqV21DZuMqBKK8BXwaSXfIw-0V9AhF0aJwECq1XyXcdMwd4AesPu1_qMhD67s0Wndj4d4WlOWjvpKhd1pFFth-dPYkWjcICcdttXwtFLQeZIAKBjYi3vUgUt9S3HryCKbnMJQZdCwk-c_8g8PVZu3YnFUjydV8Zb_UEh1gYjNQhu4xpfBeYrehjNKF7wJBtUc',
    imageAlt: 'Keto Sugar-Free Chocolate bar wrapper with pumpkin seeds and cacao pods',
    cacaoPercentage: '85% Cacao',
    flavorNotes: ['Raw Cacao Intensity', 'Pumpkin Seed Toast', 'Zero Bitter Finish'],
    weight: '50g',
    ingredients: ['Single-Origin Capiz Cacao Liquor', 'Monkfruit Extract', 'Erythritol', 'Roasted Pepitas (Pumpkin Seeds)']
  },
  {
    id: 'pure-tablea',
    name: 'Pure Tablea Disk',
    shortName: 'Traditional Round Discs',
    price: 190,
    usdPrice: 4.80,
    rating: 4.9,
    reviewsCount: 93,
    badge: 'Heirloom',
    badgeClass: 'bg-[#fcdcd1] text-[#281811]',
    category: 'tablea',
    description: '100% pure unsweetened cacao rounds roasted in heritage iron pans for rich sikwate & rolled oats champorado.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKeACNttp4CGLyy8e2EZp7l3PRws0LagxJM3Q7kWexo2WXUgi38IypYn34D03SO64DTWA-len6XUIzmSyGpoKAp59VDbiaL2NLIBzvsC3YROq61X6VzmCn_mzt_IN8C1hRhSWIL51Cboi_d_XXtPSeMsxAPmdZOOP91SVwLA69TJs1kwqJqh4JD7r7MKqcBY8PGx13OFT3ifJf4D0aOnS8id7XZ0FKMvy_79NZummDY_-2cCiSkhqjzlGv81hJNgN3orE',
    imageAlt: 'O\'guia Heirloom pure cacao tablea disk roll wrapper with oats champorado bowl',
    cacaoPercentage: '100% Pure Cacao',
    flavorNotes: ['Smoky Iron Roast', 'Earthy Dark Cacao', 'Rich Sikwate Froth'],
    weight: '150g (10 tablets)',
    ingredients: ['100% Unsweetened Fermented Capiz Cacao Mass']
  },
  {
    id: 'milk-chocolate',
    name: 'Milk Chocolate',
    shortName: 'Silky Milk Cacao',
    price: 200,
    usdPrice: 5.00,
    rating: 4.8,
    reviewsCount: 51,
    badge: 'Smooth',
    badgeClass: 'bg-[#e5e2dd] text-[#55433b]',
    category: 'dark',
    description: 'Silky, balanced sweet creaminess with roasted cacao aroma, churned for 48 hours in granite mills.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPvy-U_vanle14aO6oN9IZbxu_lnE2dfyns4wn2S_NxCZ3qIlLA3_ROJgs7-eSQrYCGEnwdR55OOOSRiXSGFQgxN_yp-8t2NqjlrewPsYH5H72vCU3pzoh1dmNpvo3JvSvsCOpml7aaZ11394uX4yvOAdJWW0Bue5HjIcaS9N4UsiC5q04vwApjKWyfJ5oijjxoEMnYbNMtK3zG8ncjiz2eqiIoggK183IFRrf3MVJ7f-klm4si99ONQciu11CXXW2kYg',
    imageAlt: 'O\'guia Creamy Milk Chocolate artisanal bar packaging',
    cacaoPercentage: '52% Cacao',
    flavorNotes: ['Caramelized Sugar', 'Malt Milk', 'Gentle Cocoa Butter'],
    weight: '50g',
    ingredients: ['Single-Origin Capiz Cacao', 'Whole Milk Solids', 'Cacao Butter', 'Organic Cane Sugar']
  },
  {
    id: 'flatlay-bundle',
    name: 'Flatlay Bundle',
    shortName: '6-Bar Gift Set',
    price: 1150,
    originalPrice: 1350,
    usdPrice: 24.00,
    rating: 5.0,
    reviewsCount: 28,
    badge: 'Gift Box',
    badgeClass: 'bg-[#ffdbcc] text-[#783108]',
    category: 'all',
    description: 'Assorted 6-bar gift collection packed in hand-pressed Capiz parchment, featuring our top single-estate micro-lots.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYJURiBqcs8xGBLI7pbgnQRAXRmOc6n22RO-Uf4NaA96mqX7FhTOEGkEv00-a62jEV_bCWOCeMyc93mJLJVcQq2RJR_ylol_djtnAPrJlay2556gVjJz8Whj_-PzjJxB46JDwkKR49lbxYNzjbOaM8vShccFjDdyHwY0a_nuJMZ601C4VpwVlDYLIC0GTvw1GKzLMwpCX7AKhKxJP6MTEnngSzeW6ybVtPu9Z3rg1JFnRGUxA6_ZKXnYvJllfL8VmGikBsVZL-MkR8cpQ',
    imageAlt: 'Overhead flatlay arrangement of colorful O\'guia chocolate bars arranged diagonally on dark textured surface',
    cacaoPercentage: 'Curated 6 Bars',
    flavorNotes: ['Single Origin Flight', 'Ube & Coffee', 'Tablea Accent'],
    weight: '300g total',
    ingredients: ['Assortment of O\'guia 70% Dark, Coffee Fusion, Ube, White Nibs, and Keto Bars']
  }
];

export const TASTING_FLIGHT = {
  id: 'flight-8',
  name: 'The Tasting Flight: Try All 8 Flavors',
  subtitle: 'Complete Origin Set',
  tag: 'Limited Reserve',
  price: 1460,
  originalPrice: 1720,
  savings: 'Save 15%',
  description: 'Experience the nuances of Capiz terroir—from 70% Single Origin to Binukot, Ube, and Coffee Fusion bars.',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQPYUF96-JCn3Wz3GftoWMAG3beHcpQJsE5FtXcLzL5dWCUV4nwRAyDj29bvHGlfItwt88oRGIo2CzNk3kaYTiL0ylPEeO997e1mZJUXCOgV-v6Wn-w216xxB9rGY3g4Q_FSFahUTAwwFld0y_rKkhrQ7UJTzKn0LTkuEzG3YDhwe_PeeC_JkKeqheBnisXdf65bj3HIilyO5r2t-HHBnMqhQS_i7AwuS7FGQUzoCUYIOs9SJQH29-Bb97DVgqGJmnto6b6qQfx3nv58c',
  imageAlt: 'An artisanal handwoven wicker tray overflowing with a rich array of O\'guia chocolate bar packages'
};
