export interface Product {
  id:          string;
  name:        string;
  price:       number;
  salePrice?:  number;   // original (higher) price; shown strikethrough
  image:       string;
  category:    string;
  isSale?:     boolean;
  isNew?:      boolean;
}

export interface Category {
  id:    string;
  label: string;    // small eyebrow label
  name:  string;    // large display name
  bg:    string;    // background hex
  text:  string;    // text/icon hex
}

export interface NewsArticle {
  id:      string;
  date:    string;
  author:  string;
  title:   string;
  excerpt: string;
  image:   string;
}

export interface PromoBannerData {
  bg:          string;
  displayText: string;   // large overflow decorative text
  discount:    string;
  dateRange:   string;
  brand:       string;
  heading:     string;
  description: string;
  image:       string;
  imageAlt:    string;
}