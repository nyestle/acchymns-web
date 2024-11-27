const prepackaged_books = ["ZHG", "ES", "LDH", "MO", "BS"];
const prepackaged_book_urls: string[] = prepackaged_books.map(
  (book_name) => import.meta.env.BASE_URL + "books/" + book_name
);

const branch: string = import.meta.env.VITE_GIT_BRANCH;
// const branch: string = "staging";

// function calcUrl(book_name: string) {
//     if (import.meta.env.DEV) {
//         return import.meta.env.BASE_URL + "public/books/" + book_name;
//     } else if (import.meta.env.MODE == "production") {
//         return `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/${book_name}`;
//     }
// }

const public_references = {
  ZH: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/ZH`,
  GH: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/GH`,
  JH: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/JH`,
  HG: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/HG`,
  CH: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/CH`,
  HZ: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/HZ`,
  ZG: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/ZG`,
  XC: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/XC`,
  ZGE: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/ZGE`,
  ZHJ: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/ZHJ`,
  ZHSP: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/ZHSP`,
  ZHH: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/ZHH`,
  ZHR: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/ZHR`,
  HS: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/HS`,
  PC: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/PC`,
} as const;

const known_references = {
  ...public_references,
  ARF: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/ARF`,
  ARFR: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/ARFR`,
  HSZ: `https://raw.githubusercontent.com/ACC-Hymns/acchymns-web/${branch}/public/books/HSZ`,
} as const;

export { prepackaged_books, prepackaged_book_urls, public_references, branch, known_references };
