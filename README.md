# Project Spira

Project Spira is Voelori’s early-stage public resource about the physical side of AI: the electricity and water behind data centers, how local (on-device) AI fits in, and practical ways to help. It is an educational page, not a fund, a measurement service or a carbon calculator.

## Website

The expected default GitHub Pages address is [https://dionnedeh.github.io/Project-Spira/](https://dionnedeh.github.io/Project-Spira/). The site has not been verified live; availability depends on completing and publishing the Pages configuration. A custom domain could change the address.

## What is on the page

| # | Section | Purpose |
|---|---------|---------|
| — | Hero | Introduction, with a slowly turning spiral (decorative) |
| 01 | What we know so far | Published estimates on data-center electricity and water, plus a key for reading the numbers on the page |
| 02 | Where does the water go? | Four expandable steps (data center, grid, watershed, your own device) and a withdrawal-vs-consumption illustration |
| 03 | Exploring a more local path | Voelori’s position on local AI, what running locally can and cannot change |
| 04 | Right task. Right place. | Interactive tools comparing local and centralized computing |
| 05 | Small actions, wider care | Practical actions and questions for a local data-center proposal |
| 06 | Help beyond the screen | Independent organizations working on broader environmental and water issues |
| 07 | Follow the evidence | Grouped sources and key terms |

### Interactive tools

Every tool carries one of three labels, explained on the page:

- **Published estimate:** figures from cited research.
- **Illustration:** arithmetic on values the visitor chooses. It does not describe a real device, model or facility.
- **Qualitative guide:** questions and tradeoffs, with no numbers.

| Tool | Label | What it shows |
|------|-------|---------------|
| Withdrawal vs. consumption | Illustration | How 100 hypothetical units of withdrawn water split into consumed and returned water |
| Where does the computing happen? | Qualitative guide | Which parts of the system (device, network, data center, training and hardware) a cloud, hybrid or fully on-device set-up relies on |
| Could this work locally? | Qualitative guide | Decision prompts for example workloads |
| Small watts still add up | Illustration | kWh = watts × hours ÷ 1,000, with an idle baseline and a yearly total, plus how to measure instead |

## Editorial principles

- Spira has measured no device, AI model or data center. Do not add per-prompt footprints, savings estimates or comparisons that the cited sources do not support.
- Illustrative defaults are arbitrary examples and must stay labeled as such.
- Voelori advocates local AI and has more work planned. Suitable local workloads can reduce reliance on major centralized AI infrastructure, but local devices still use electricity, and hardware manufacturing, workload efficiency, electricity sources and remaining remote dependencies all affect the comparison. Do not claim local AI is universally greener.
- Giving options are starting points, not offsets, partners or endorsements.

See [research.md](research.md) for sources, scope, limitations and organization-review notes.

## Project structure

```
index.html    Page content (static; readable without JavaScript)
styles.css    All styles, organized by page section, with color tokens at the top
script.js     Progressive enhancement: spiral pause control and the interactive tools
favicon.svg   Site icon
research.md   Sources, limitations and a log of content decisions
PROJECT.md    Short project status
```

There is no build step and there are no dependencies.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Maintenance notes

- **Evidence date:** the snapshot date appears in the evidence section note, the footer and `research.md`. Update all three together after re-checking sources.
- **Content Security Policy:** `index.html` allows scripts, styles and images from the site itself only. Keep JavaScript in `script.js` and styles in `styles.css`; inline `<script>` blocks and `style=""` attributes will be blocked.
- **Scripts:** write dynamic text with `textContent` or `replaceChildren`, never `innerHTML`.
- **Accessibility:** use native controls (select, radio fieldset, range with `<output>`), keep visible focus outlines, and don’t rely on color alone. Content and controls must work without JavaScript or show a `<noscript>` summary.
- **Motion:** the spiral animates only when the visitor has not requested reduced motion, pauses off screen, and has a pause/play button. Keep any new animation under the same rules.
- **Before publishing a change:** check the page at desktop and phone widths, confirm there are no console errors or horizontal scrolling, try every control, and verify that links still resolve.
