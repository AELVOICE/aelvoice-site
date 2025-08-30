# AELVOICE — Next.js + Tailwind + Sanity CMS

Μοντέρνο blog για κάλυψη αγώνων και άποψη για την ΑΕΛ FC Novibet.

## 🚀 Γρήγορη εκκίνηση (Vercel Upload)
1. Κατέβασε το ZIP από το ChatGPT.
2. Στο Vercel: **Add New → Project → Import → Upload** και ανέβασε το ZIP.
3. Μετά το πρώτο build, στο Vercel πήγαινε **Settings → Environment Variables** και βάλε:
   - `SANITY_PROJECT_ID` = *το Project ID από το sanity.io*
   - `SANITY_DATASET` = `production`
4. Κάνε **Redeploy**.
5. Σύνδεσε domain `aelvoice.gr` από **Settings → Domains**.

## 🧠 Sanity CMS
1. Δημιούργησε λογαριασμό στο https://www.sanity.io/ και νέο Project.
2. Πάρε το **Project ID** από το Sanity Project.
3. Φτιάξε Studio (web panel) με το Sanity CLI *ή* χρησιμοποίησε το Hosted Studio.
4. Πρόσθεσε το schema άρθρου (δες παρακάτω) και δημιούργησε άρθρα.

### Schema για Άρθρο (Sanity)
```ts
// article.ts
export default {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "content", title: "Content", type: "array", of: [{ type: "block" }] },
    { name: "date", title: "Date", type: "datetime" },
    { name: "coverImage", title: "Cover Image", type: "image" },
  ],
}
```

## 🖌️ Χρώματα
- Βυσσινί: `#800020`
- Σκούρο Βυσσινί: `#4B0010`

## 📂 Δομή
- `app/` — Σελίδες (Home, Articles, Article, About)
- `components/` — UI components
- `lib/sanity.ts` — Σύνδεση με Sanity

## 🧩 Τοπικά (προαιρετικά)
```
npm install
npm run dev
```
και δημιούργησε `.env.local` με:
```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
```

Καλή επιτυχία! ⚽️
