# UQ Research — Design of Experiments

An English research website covering 100 papers in ten experimental-design categories.

**Website:** https://llmuq.github.io/uq-research/

The site contains searchable paper reviews, original and modified methods, individual experimental results, interactive category charts, theory assessments, and two downloadable English reports.

## Versions

**Site v1.1.0 · Results v1.0.** This update adds verified authors and publication details for all 100 papers, data availability labels, visitor statistics, and email feedback. The experimental values and both PDFs are unchanged from the first published report dataset. Results versions identify that dataset; they are not numbered algorithm revisions.

All 100 pages have method descriptions and selected experiments. 94 papers have reported numerical values, and 92 have comparable results. Missing or noncomparable results retain their recorded status and explanation.

## Contact and visitor statistics

Contact the research team at **LLM_UQ@163.com**. The Contact us page and each paper's Send feedback link open an email draft; messages are not published on the website.

The visitor map uses the site's own [Flag Counter](https://info.flagcounter.com/DTCs). It shows approximate country/region counts and starts with site v1.1.0; earlier visits cannot be recovered. One counter image loads per full document, including direct paper links. Hash navigation reuses that image. Local previews and URLs containing `?qa=1` disable counting. See the provider's [counting rules](https://www.flagcounter.com/faq.html) and [privacy policy](https://www.flagcounter.com/privacy.html).

The free provider may remove counters after 30 days without a new visitor. Statistics are stored by the provider; the website keeps no visitor database. A provider outage or blocked request leaves the research pages usable and shows a link to the external statistics page.

## Reported results

- 96 papers have final review; 92 contribute comparable experiments.
- 275 comparable experiments: 172 AI wins, 88 ties, and 15 original-method wins.
- AI win rate: 62.5%; tie rate: 32.0%.
- 298 selected experiments are displayed, including 11 final-reviewed noncomparable experiments and 12 from papers awaiting final review.
- Papers 17, 29, 58, and 83 await final review.

## Reports and data

- `documents/doe-overview-report.pdf`: 29-page English translation of the supplied category statistics and theory review.
- `documents/doe-detailed-report.pdf`: original supplied 332-page English detailed report, unchanged.
- `assets/categories.csv`, `assets/experiments.csv`, and `assets/theory.csv`: downloadable tables.
- `assets/data.json`: structured content used by the website.

Reported values, uncertainty summaries, comparison rules, and exclusions are retained from the reports. The website adds no new experiments. Relative theoretical improvements are assessed within the reviewed claims and conditions; they are not claims of field-wide novelty.

## Local preview

Open `index.html` directly, or serve this folder:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. No package installation or build step is required.

## Hosting

GitHub Pages publishes the `main` branch from the repository root. Application scripts, research data, and reports are local assets with relative paths. The visitor-map image is provided by Flag Counter; no public comment system or feedback database is used.
