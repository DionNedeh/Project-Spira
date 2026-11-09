# Project Spira — research and source notes

Evidence snapshot: 9 November 2026. This is a focused initial review, not a systematic literature review, independent audit, or certification of any organization. Sources and organizations should be rechecked before publication and periodically thereafter.

## Evidence

- [IEA, Energy and AI, executive summary (2025)](https://www.iea.org/reports/energy-and-ai/executive-summary): estimates 415 TWh and 1.5% of global electricity consumption for data centers in 2024; projects roughly 945 TWh in 2030 in its base case. The aggregate includes AI and other services. Forecasts depend on assumptions; they are not observed future consumption. IEA identifies AI as a major driver of growth, not the whole sector.
- [Lawrence Berkeley National Laboratory, 2024 United States Data Center Energy Usage Report](https://eta-publications.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report): U.S.-specific historical estimates and scenarios, not worldwide AI-only measurements. Its report discusses water consumption and the electricity-water relationship. Water withdrawn is not necessarily water consumed; water consumption is water not returned immediately to the same source, for example through evaporation.
- [IEA, Powering Artificial Intelligence, executive summary](https://www.iea.org/reports/powering-artificial-intelligence/executive-summary): discusses local community concerns and water stress. Site-specific impacts require site-specific data; exposure to water stress alone does not establish an individual facility's harm.

Per-request footprints depend on workload, hardware, utilization, cooling, energy mix, location and accounting boundaries. They cannot be reliably generalized from these aggregate sources. Hardware manufacturing and other lifecycle effects are outside this initial page's quantitative scope. The individual-use suggestion is a reasonable practical inference, not a quantified estimate of savings.

## Prospective giving options — limited screening

These are examples of broader work, not verified offsets, partners, or recipients of a Voelori donation. No donation has been made. Organization statements are first-party evidence and do not independently prove effectiveness.

- **Clean Air Task Force:** [about, board, annual report, Forms 990 and financial statements](https://www.catf.us/about/); [official giving page](https://www.catf.us/donate/). Reviewed mission and availability of reporting and official donation route. Its climate and clean-energy policy and technology advocacy is broader than AI; its technology choices and policy positions may not suit every donor. We did not independently audit financial statements, measure cost-effectiveness, check all funding sources or assess all programs.
- **Water.org:** [financials, annual reports, audited statements and returns](https://water.org/about-us/financials/); [official giving page](https://water.org/donate/); [2025 impact report](https://water.org/about-us/financials/2025-impact/). Reviewed stated mission, its use of local financial partners and small loans, availability of financial reporting and official donation route. Water access is not equivalent to replenishing water at an AI facility. Loan terms and local outcomes vary; we did not independently assess borrower outcomes, audit finances or verify every program claim.

Donors should check current materials, charitable status and terms in their own jurisdiction, including whether a gift is restricted, recurring, and tax deductible. The availability of financial documents does not itself establish effectiveness. No charity ranking or exhaustive comparison was performed.

## Maintenance and unknowns

Revisit source dates and new studies; seek facility-specific, independently verified electricity and direct and indirect water data where available; consider impacts on communities and ecosystems; update organization due diligence and donation links. No actual local impact, AI-specific share, project partnership, or future donation amount is established here.

## Local AI: scope and tradeoffs

Voelori advocates local AI and intends future work on this subject. Moving a given inference from a remote server to a local device shifts that computation, but does not establish a net environmental saving. Device energy, hardware manufacture and lifespan, workload, model, utilization, electricity supply, and remote training or downloads affect comparisons.

- [Guégain and Coignion, The Battery Price of Edge AI (preprint)](https://arxiv.org/abs/2609.11940) compares selected models on two smartphones and a server and reports that batched server inference was more energy-efficient on average in its tested configurations. Its modeled lifecycle conclusions depend on its assumptions and do not settle all device, model or deployment comparisons. It is a preprint, not a universal result.
- [Chung et al., Where Do the Joules Go? (preprint)](https://arxiv.org/abs/2601.22076) reports substantial inference-energy variation across tasks, hardware and configurations, including utilization. Its server-GPU measurements are not a direct local-versus-cloud comparison.

These sources were reviewed as an initial targeted check, not a comprehensive lifecycle assessment. No quantified saving or universal environmental advantage is claimed.

## Educational interactions (9 November 2026)

The workload explorer gives qualitative decision prompts, not measured recommendations or environmental rankings. The device-energy illustration uses kWh = average watts × minutes / 60 / 1,000. Defaults and slider bounds are illustrative, not device benchmarks. Its boundary excludes embodied impacts, remote services and additional room cooling; it distinguishes whole-device power from incremental AI energy. No carbon, water or cloud-saving conversion is made.

Rechecked the abstract of the mobile/server preprint above and [IEA’s energy-demand chapter](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai) for the added discussion. The abstract supports a bounded comparison of selected smartphone/server configurations, not a general conclusion about every local workload. IEA describes server, networking, storage and cooling electricity. Workload suitability examples and the recommendation to compare equal-quality outcomes are practical inferences; no device or provider benchmark was run. Voelori’s advocacy and planned work are owner-provided statements, not research findings.

## Interaction and motion update (9 November 2026)

- **Hero spiral:** the earlier artwork was a set of near-concentric rings, which look the same when rotated, and a later duplicate `@keyframes spira-drift` rule replaced the full rotation with a 12° sway over 45 seconds. The artwork is now a true spiral that turns once every 40 seconds with a slow breathing scale, so the motion is visible. It runs only when the visitor has not requested reduced motion, stops while the hero is off screen, and has a pause/play button that is hidden when motion is off. Purely decorative.
- **Reading key:** every interactive element is labeled as a *published estimate* (cited figures), an *illustration* (arithmetic on visitor-chosen values) or a *qualitative guide* (no numbers). Spira has not measured any device, model or facility.
- **Withdrawal vs. consumption:** a concept illustration with a visitor-chosen share of 100 hypothetical units. No real or typical share is stated or implied; the default split is arbitrary.
- **Where does the computing happen?:** a qualitative comparison of cloud, hybrid and fully on-device set-ups across the device, network, data center and upstream (training, downloads, hardware manufacture). It describes which parts of the system a task relies on, not their size. It supports the owner-provided position that suitable local workloads can reduce reliance on centralized AI infrastructure, while stating that local devices still use electricity and that total impact depends on hardware, workload efficiency and electricity supply. No net saving is claimed.
- **Fourth water-pathway step:** explains that local processing moves electricity use, and any related indirect water use, to the grid serving the device. Practical inference from the electricity–water relationship in the Berkeley Lab report; not quantified.
- **Electricity illustration:** adds an idle baseline (additional kWh = max(average W − idle W, 0) × hours ÷ 1,000) and a yearly total (× sessions per week × 52). Defaults (50 W, 10 W idle, 30 minutes, 5 sessions) are arbitrary examples, not device data. A note describes how to measure with a plug-in meter instead.
- **Workload explorer:** adds "Answer questions about recent events" as an example of a remaining remote dependency (retrieval of current information).
- **Hardening:** a Content-Security-Policy meta tag limits scripts, styles and images to the site's own files; scripts write content with `textContent` only.

## Polish pass (9 November 2026)

- **Structure:** sections are numbered 01–07 in page order, and the navigation links to the water pathway and the local-AI section. `index.html` and `styles.css` were reformatted for readability without changing the rendered page.
- **Local AI summary:** "What running locally can change" and "What stays in the picture" restate points already made in the section and the comparison tool. Keeping data on the device applies only when processing truly stays local; it is a privacy point, not an environmental claim.
- **New action, "Try local tools where they fit":** a practical suggestion consistent with Voelori's owner-provided advocacy. It claims no saving and notes that new hardware adds manufacturing impacts and that some tasks suit shared infrastructure better.
- **Sources:** the page's source list now also includes the IEA energy-demand chapter and the two preprints already reviewed above (Guégain and Coignion; Chung et al.).
- **Key terms:** short general definitions (watt, kilowatt-hour, training, inference, local AI, utilization, manufacturing impacts, withdrawal and consumption). They are explanatory, not drawn from a single source, and contain no figures beyond unit definitions.
