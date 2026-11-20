# UQ Research — Design of Experiments

An English research website covering 100 papers in ten experimental-design categories.

**Website:** https://llmuq.github.io/uq-research/

The site contains searchable paper reviews, original and modified methods, individual experimental results, interactive category charts, theory assessments, and two downloadable English reports.

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

GitHub Pages publishes the `main` branch from the repository root. All assets are local and use relative paths. The website has no analytics, cookies, or third-party runtime dependencies.
