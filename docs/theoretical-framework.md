# Simulating Human Behavior with Large Language Models: Possibilities and Limits for the Social Sciences

## Theoretical Framework, Key Sources, and Their Bearing on the Research Design

---

## 1. The problem the framework has to solve

The project asks whether, and under what conditions, a large language model prompted to
adopt a persona can stand in for a human respondent or actor in social-scientific inquiry.
That question is not a single question. It decomposes into three that belong to different
literatures and that are routinely conflated in the current debate:

1. **An epistemological question.** What kind of knowledge does a *simulation* produce in
   the first place — is generating a pattern an explanation of it?
2. **A measurement question.** When an LLM emits a survey response, what has been measured?
   Is "simulated agreement with item X" a valid indicator of anything about humans, and how
   would we know?
3. **An ontological/critical question.** What *is* the thing producing the response — a
   model of a person, a distribution over text, or a role-playing system — and what does
   that identity permit us to infer?

A framework that answers only one of these produces the two failure modes visible in the
literature: uncritical enthusiasm (good replication correlations read as evidence that the
model "has" attitudes) and uncritical dismissal (the model is "just" a next-token predictor,
therefore nothing it produces can be informative). This project adopts a **four-layer
framework** in which each layer supplies the constraint the others lack.

---

## 2. The four layers

### Layer 1 — Generative social science (epistemology of simulation)

**Core claim adopted:** Epstein's dictum that *"if you didn't grow it, you didn't explain
it"* — a social regularity is explained when a set of locally interacting agents with
specified micro-rules is shown to be sufficient to generate it. Generativity is a
**necessary but not sufficient** condition for explanation: many distinct micro-specifications
can grow the same macro-pattern, so generation establishes candidate sufficiency, never
uniqueness.

**What this layer contributes:** a pre-existing, well-developed standard for what
simulation-based social science owes its readers. Agent-based modelling (ABM) spent three
decades working out how to validate artificial societies against empirical targets, how to
handle the underdetermination of micro-rules by macro-outcomes, and how to distinguish a
model that is *useful* from one that is *true*. LLM-based simulation has largely restarted
this conversation from zero, and it does not have to.

Larooij and Törnberg's review of the "generative ABM" literature is the anchor here, and it
supplies an empirical finding rather than an exhortation: across the published corpus,
awareness of the historical ABM debates is limited, validation is poorly addressed, many
studies rest on subjective assessments of model *believability*, and even the most rigorous
cases fail to evidence operational validity. Their conclusion — that LLMs are likely to
**exacerbate rather than resolve** the long-standing problems of ABM, because black-box
micro-rules, cultural bias and stochastic output make emergent causal mechanisms harder to
disentangle — is the thesis this project inherits and tests, not one it has to construct.

**What this layer settles for the project:** LLM agents are treated as a new *class of
micro-specification* inside the ABM tradition, not as a new kind of science. Schelling's
segregation model is the reference case: its value came from the transparency and minimality
of its rule ("I move if fewer than k of my neighbors are like me"), which made the
counterintuitive macro-result interpretable. An LLM agent inverts exactly this property —
its micro-rule is a hundred-billion-parameter function that no one can state. This
inversion, not raw predictive accuracy, is the central theoretical tension the thesis
develops: **LLM agents buy behavioral richness at the cost of the mechanistic transparency
that made generative social science explanatory in the first place.** Believability is
thereby identified as the field's characteristic validity error — a criterion that feels like
validation while testing nothing a reader should be persuaded by.

### Layer 2 — *Homo silicus* and algorithmic fidelity (the substantive hypothesis under test)

**Core claim under test:** that an LLM trained on a vast corpus of human-produced text is
thereby an *implicit computational model of human populations* (Horton's *Homo silicus*),
which can be endowed with a demographic backstory and queried as economists query *Homo
economicus*. Argyle et al.'s version is sharper and more useful: the "algorithmic bias"
in these models is **fine-grained and demographically correlated**, so conditioning on a
socio-demographic backstory recovers the response distribution of the corresponding human
subpopulation — the "silicon sample."

**What this layer contributes:** the project's central operational construct, **algorithmic
fidelity**, and with it a ready-made set of evaluation criteria rather than a vague appeal to
"realism." Argyle et al. specify four:

| Criterion | Test |
|---|---|
| **Social-science Turing test** | Generated responses are indistinguishable from human-produced responses to human judges |
| **Backward continuity** | Responses are consistent with the demographic backstory used to condition the model |
| **Forward continuity** | Responses extend into a coherent, plausible continuation of that persona |
| **Pattern correspondence** | Relationships *among* variables — demographics, attitudes, behaviors — mirror those in human data |

The construct has since been sharpened by the same group. Lyman, Hepner, Argyle and
colleagues show that **alignment training and algorithmic fidelity stand in tension**:
the RLHF/instruction-tuning that makes a model usable is also what pulls its outputs toward
a homogenized, normatively sanitized centre and away from the distributional texture that
fidelity requires. This matters for the project's causal story, because it means the
flattening documented in Layer 4 is not only a corpus-representation effect but partly an
*artefact of post-training* — a variable that can be manipulated, not merely lamented.

**What this layer settles for the project:** algorithmic fidelity is treated as the
*dependent variable* of the thesis, not as an assumption. The four criteria are the
measurement targets, and — critically — they are **separable**: a model can pass the Turing
test and fail pattern correspondence, which is precisely the diagnostic situation the
empirical work is designed to detect. The strongest current evidence sits here — Park et
al.'s agents, built from two-hour interviews with a national sample of 1,052 Americans,
reproduce held-out GSS responses at 83% of those participants' own two-week test–retest
consistency (86% combining interviews and surveys); Ashokkumar et al. predict 476 treatment
effects across 70 nationally representative survey experiments at *r* = .85, equalling or
surpassing pooled human forecasters — and it is strong enough that dismissal is not a
defensible position.

One number in that evidence does more work for this project than any other: the same Park et
al. agents built from **demographics alone** reach only 74%. Demographic conditioning is
precisely the mechanism silicon sampling relies on, so the headline results are *not*
vindication of persona prompting; the gains come from individuating self-report data that a
researcher simulating a population they have not surveyed does not have. The fidelity
ceiling for silicon sampling proper is therefore the 74% figure, not the 83–86% one — a
distinction the enthusiastic reading of this literature routinely collapses.

### Layer 3 — Construct validity (the measurement apparatus)

**Core claim adopted:** Cronbach and Meehl's insistence that when there is no adequate
external criterion, a measure is validated by embedding it in a **nomological network** — a
lawful web of relations to other constructs — and testing the predictions that network
implies. Validity is a property of *inferences from scores*, never of the instrument itself.

**What this layer contributes:** the vocabulary that the LLM-simulation debate most
conspicuously lacks. Almost every published dispute about whether LLMs can replace
participants is, on inspection, a construct-validity dispute conducted without the concept.
"GPT-4 correlates r = .85 with human treatment effects" is a criterion-validity claim about
a specific population, instrument, and moment; it licenses nothing about construct validity,
and it silently inherits the criterion problem when the human benchmark data were themselves
plausibly in the training corpus.

**What this layer settles for the project:** the study's inferential structure. Correlational
replication success is demoted from *finding* to *precondition*, and the real tests become
nomological: does the simulated construct behave as the theory says the human construct
should — under moderators, in interaction, at the tails, and on items the model cannot have
seen? This layer also supplies the design's most important negative control, **temporal
validation** (testing against experiments published after the training cutoff), which
separates recall from generalization.

### Layer 4 — Critical and sociotechnical theory (the ontology and the limits)

**Core claims adopted:** (a) an LLM is a system for stitching together sequences of linguistic
form according to probabilistic information about how they combine, with no access to
meaning or communicative intent — Bender et al.'s "stochastic parrot"; (b) the right
high-level description of a dialogue agent's persona behavior is **role play**, i.e. the
model maintains a superposition of simulacra rather than instantiating a self, so folk-
psychological vocabulary can be used without anthropomorphic commitment (Shanahan et al.);
(c) alignment training and the distributional properties of web corpora cause LLMs to
**misportray and flatten** demographic groups, reproducing an out-group's stereotype of a
group rather than its internal variation (Wang et al.).

**What this layer contributes:** a principled account of *why* the failures documented by
Bisbee et al. (unstable, non-reproducible synthetic feeling-thermometer distributions),
Santurkar et al. (systematic misalignment with 60 US demographic groups, on the order of the
partisan divide on climate change), and Wang et al. (variance collapse) are **structural
consequences of how these systems are built**, not incidental defects awaiting a larger model.

Kozlowski and Evans give this layer its working taxonomy. They identify six properties of
current models that impair realistic simulation of human subjects, and the project adopts
these as its inventory of limits because each is separately diagnosable:

| Impairment | What it breaks |
|---|---|
| **Bias** | Systematic displacement of a simulated group from its human counterpart |
| **Uniformity** | Variance collapse — the flattening mechanism, stated as a general property |
| **Atemporality** | No stable position in historical time; the corpus blends eras, so period-specific attitudes are unrecoverable |
| **Disembodiment** | No sensory, material or situated experience underwriting reported behavior |
| **Linguistic cultures** | Fidelity is bounded by what is *written*, and written unevenly across languages and groups |
| **Alien intelligence** | The system's failure modes are not human failure modes, so human-likeness on average does not imply human-likeness at the margin |

Three of these — atemporality, disembodiment and alien intelligence — are absent from the
CS-side literature this project also draws on, and they are the ones that bear hardest on
sociological use, which is the reason the taxonomy is adopted wholesale rather than
reconstructed.

**What this layer settles for the project:** the scope conditions. Because the model is
role-playing a distribution over *textual depictions* of a group rather than sampling from
the group, the framework predicts a specific and testable signature — **central tendencies
that replicate reasonably well alongside systematically compressed variance and attenuated
within-group heterogeneity**, degrading as the target group is less represented in the
training corpus. This converts the critique from a philosophical objection into an empirical
hypothesis, which is the methodological move the thesis is built around.

### Bridging layer — Interpretive sociology (what "behavior" means)

Weber's distinction between *Verhalten* (behavior) and *soziales Handeln* (social action
carrying subjective meaning oriented to others), and his method of *Verstehen*, mark the
boundary this project does not cross. Geertz's contrast between a twitch and a wink — the
same physical behavior, different social acts, distinguishable only through thick
description — states the point most economically. An LLM can generate the *description* of
a wink with high fidelity; on the framework adopted here this is evidence about the
distribution of accounts of winking in the training corpus, not about winking.

The consequence for the thesis is a deliberate restriction of the claim: LLM simulation is
positioned as a tool for **behaviorally thin, response-distributional questions** (survey
marginals, treatment-effect direction and rough magnitude, pretest screening, pilot design),
and explicitly *not* as a source of interpretive knowledge about meaning-making, nor as a
replacement for participants whose standing in research is partly political and ethical
rather than merely informational (Harding et al.).

---

## 3. Key authors and sources

### Central (five)

**1. Maik Larooij & Petter Törnberg — does generative simulation actually solve ABM's problems?**
Larooij, M., & Törnberg, P. (2025). Validation is the central challenge for generative social
simulation: a critical review of LLMs in agent-based modeling. *Artificial Intelligence
Review*, 59(1).
DOI: [10.1007/s10462-025-11412-6](https://doi.org/10.1007/s10462-025-11412-6) ·
preprint (different title): [arXiv:2504.03274](https://arxiv.org/abs/2504.03274), "Do Large
Language Models Solve the Problems of Agent-Based Modeling? A Critical Review of Generative
Social Simulations"
*Role:* supplies Layer 1. A systematic review of the generative-ABM literature finding that
validation is poorly addressed, that "believability" is standing in for operational validity,
and that LLMs are likely to *exacerbate* rather than resolve ABM's long-standing problems.
This is the paper that carries the generative-social-science tradition into the LLM era, so
the project cites it rather than reconstructing the bridge from Epstein (1999) by hand.

**2. Austin C. Kozlowski & James Evans — the promise and peril of simulated subjects.**
Kozlowski, A. C., & Evans, J. (2025). Simulating subjects: The promise and peril of artificial
intelligence stand-ins for social agents and interactions. *Sociological Methods & Research*,
54(3), 1017–1073.
DOI: [10.1177/00491241251337316](https://doi.org/10.1177/00491241251337316)
*Role:* the closest published statement of this project's own question, from inside
sociological methodology rather than computer science. Supplies Layer 4's six-part taxonomy of
impairments — bias, uniformity, atemporality, disembodiment, linguistic cultures, alien
intelligence — together with a constructive methodological foundation for simulating subjects
and their interactions.

**3. Joon Sung Park & Michael S. Bernstein — generative agents.**
Park, J. S., O'Brien, J., Cai, C. J., Morris, M. R., Liang, P., & Bernstein, M. S. (2023).
Generative agents: Interactive simulacra of human behavior. *UIST '23*.
DOI: [10.1145/3586183.3606763](https://doi.org/10.1145/3586183.3606763) ·
[arXiv:2304.03442](https://arxiv.org/abs/2304.03442)
Park, J. S., Zou, C. Q., Kamphorst, J., Egan, N., Shaw, A., Hill, B. M., Cai, C.,
Morris, M. R., Liang, P., Willer, R., & Bernstein, M. S. (2026). LLM agents grounded in
self-reports enable general-purpose simulation of individuals.
[arXiv:2411.10109](https://arxiv.org/abs/2411.10109) — *cite this title:* the paper was
circulated in 2024 as "Generative agent simulations of 1,000 people" and retitled in the
2026-06-28 revision, which also revised the headline accuracies.
*Role:* the strongest constructive evidence, and the architectural state of the art —
memory, reflection, and planning scaffolding, plus interview-grounded individual agents
benchmarked against participants' own test–retest reliability. Establishes the ceiling the
critical layer must explain rather than deny — and, in the demographics-only condition, the
much lower ceiling that applies to persona-prompted simulation without individuating data.

**4. Angelina Wang, Jamie Morgenstern & John P. Dickerson — flattening and misportrayal.**
Wang, A., Morgenstern, J., & Dickerson, J. P. (2025). Large language models that replace
human participants can harmfully misportray and flatten identity groups.
*Nature Machine Intelligence*, 7(3), 400–411.
DOI: [10.1038/s42256-025-00986-z](https://doi.org/10.1038/s42256-025-00986-z) ·
[arXiv:2402.01908](https://arxiv.org/abs/2402.01908)
*Role:* converts the critique of persona simulation into a mechanism with a testable
empirical signature (out-group portrayal, variance collapse), and carries the normative
argument about representational harm.

**5. Christopher A. Bail — the disciplinary programme.**
Bail, C. A. (2024). Can generative AI improve social science? *PNAS*, 121(21), e2314021121.
DOI: [10.1073/pnas.2314021121](https://doi.org/10.1073/pnas.2314021121)
*Role:* frames the field-level stakes — where generative AI plausibly improves surveys,
experiments, content analysis and ABM, against bias, replication, and infrastructure
concerns — and motivates the open, auditable-infrastructure commitments of the research
design.

### A note on the venue: *Sociological Methods & Research* 54(3), 2025

Sources 2 and several below come from a single special issue devoted to generative AI in
sociological method, introduced by Davidson & Karell (2025), "Integrating generative
artificial intelligence into social science research: Measurement, prompting, and
simulation," 54(3), 775–793,
DOI: [10.1177/00491241251339184](https://doi.org/10.1177/00491241251339184). Its eleven
articles are the most concentrated disciplinary treatment of this project's question
currently available, and four bear on simulation directly:

- **Kozlowski & Evans**, Simulating subjects (1017–1073) — central source 2 above.
- **Broska, D., Howes, M., & van Loon, A. (2025).** The mixed subjects design: Treating large
  language models as potentially informative observations. 54(3), 1074–1109.
  DOI: [10.1177/00491241251326865](https://doi.org/10.1177/00491241251326865) — the
  constructive design answer to the replacement question: treat simulated responses as
  *informative observations to be combined with* human data under explicit assumptions,
  rather than as substitutes for it. This is the design template the project adopts in §4.3.
- **Lyman, A., Hepner, B., Argyle, L. P., Busby, E. C., Gubler, J. R., & Wingate, D. (2025).**
  Balancing large language model alignment and algorithmic fidelity in social science research.
  54(3), 1110–1155.
  DOI: [10.1177/00491241251342008](https://doi.org/10.1177/00491241251342008) — the Argyle
  team's own follow-up, establishing alignment training as a *cause* of fidelity loss and so
  as a manipulable variable rather than a fixed property.
- **Boelaert, J., Coavoux, S., Ollion, É., Petev, I., & Präg, P. (2025).** Machine bias: How do
  generative language models answer opinion polls? 54(3), 1156–1196.
  DOI: [10.1177/00491241251330582](https://doi.org/10.1177/00491241251330582) — systematic
  evidence on synthetic poll response, including the distributional distortions the project
  predicts.
- **Zhang, S., Xu, J., & Alvero, AJ. (2025).** Generative AI meets open-ended survey responses:
  Research participant use of AI and homogenization. 54(3), 1197–1242.
  DOI: [10.1177/00491241251327130](https://doi.org/10.1177/00491241251327130) — the mirror-image
  threat, and one the project must control for: *human* respondents using AI homogenize the
  benchmark data against which simulation is validated.

### Supporting

- **Epstein, J. M. (1999).** Agent-based computational models and generative social science.
  *Complexity*, 4(5), 41–60.
  DOI: [10.1002/(SICI)1099-0526(199905/06)4:5<41::AID-CPLX9>3.0.CO;2-F](https://doi.org/10.1002/(SICI)1099-0526(199905/06)4:5%3C41::AID-CPLX9%3E3.0.CO;2-F)
  — the generativist standard ("if you didn't grow it, you didn't explain it"), read through
  Larooij & Törnberg. With **Schelling, T. C. (1971)**, Dynamic models of segregation,
  *Journal of Mathematical Sociology*, 1(2), 143–186,
  DOI: [10.1080/0022250X.1971.9989794](https://doi.org/10.1080/0022250X.1971.9989794), as the
  paradigm case of explanatory transparency that LLM agents forfeit.
- **Argyle, L. P., Busby, E. C., Fulda, N., Gubler, J. R., Rytting, C., & Wingate, D. (2023).**
  Out of one, many: Using language models to simulate human samples. *Political Analysis*,
  31(3), 337–351. DOI: [10.1017/pan.2023.2](https://doi.org/10.1017/pan.2023.2) ·
  [arXiv:2209.06899](https://arxiv.org/abs/2209.06899) — the origin of *algorithmic fidelity*
  and its four criteria, which the project still uses as its evaluation scaffold; superseded
  as a framework statement by Lyman et al. (2025) above, but indispensable as the source of
  the construct.
- **Anthis, J. R., Liu, R., Richardson, S. M., Kozlowski, A. C., Koch, B., Evans, J.,
  Brynjolfsson, E., & Bernstein, M. (2025).** LLM social simulations are a promising research
  method. *ICML 2025*. [arXiv:2504.02234](https://arxiv.org/abs/2504.02234) — the deliberate
  counterweight to Larooij & Törnberg: five tractable challenges, and the position that
  simulation is already usable for pilot and exploratory work. Holding these two reviews
  against each other is how the project keeps "possibilities" and "limits" in the same frame.
- **Horton, J. J., Filippas, A., & Manning, B. S. (2023).** Large language models as
  simulated economic agents: What can we learn from *Homo silicus*? NBER Working Paper 31122.
  [nber.org/papers/w31122](https://www.nber.org/papers/w31122) ·
  [arXiv:2301.07543](https://arxiv.org/abs/2301.07543) — the *Homo silicus* framing.
- **Shanahan, M., McDonell, K., & Reynolds, L. (2023).** Role play with large language models.
  *Nature*, 623, 493–498. DOI: [10.1038/s41586-023-06647-8](https://doi.org/10.1038/s41586-023-06647-8)
  — the non-anthropomorphic ontology of persona behavior.
- **Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021).** On the dangers of
  stochastic parrots: Can language models be too big? *FAccT '21*, 610–623.
  DOI: [10.1145/3442188.3445922](https://doi.org/10.1145/3442188.3445922) — form-without-meaning;
  corpus skew as the source of demographic distortion.
- **Messeri, L., & Crockett, M. J. (2024).** Artificial intelligence and illusions of
  understanding in scientific research. *Nature*, 627(8002), 49–58.
  DOI: [10.1038/s41586-024-07146-0](https://doi.org/10.1038/s41586-024-07146-0) — the
  epistemic-risk argument (illusions of explanatory depth, monocultures of knowing) that
  generalizes this project's worry beyond simulation to the discipline's knowledge base.
- **Bisbee, J., Clinton, J. D., Dorff, C., Kenkel, B., & Larson, J. M. (2024).** Synthetic
  replacements for human survey data? The perils of large language models. *Political Analysis*,
  32(4), 401–416. DOI: [10.1017/pan.2024.5](https://doi.org/10.1017/pan.2024.5) — instability and
  non-reproducibility of synthetic survey distributions.
- **Santurkar, S., Durmus, E., Ladhak, F., Lee, C., Liang, P., & Hashimoto, T. (2023).** Whose
  opinions do language models reflect? *ICML 2023*, PMLR 202, 29971–30004.
  [proceedings.mlr.press/v202/santurkar23a.html](https://proceedings.mlr.press/v202/santurkar23a.html) ·
  [arXiv:2303.17548](https://arxiv.org/abs/2303.17548) — the OpinionQA misalignment benchmark
  (60 US demographic groups; misalignment on par with the Democrat–Republican divide on
  climate change).
- **Ashokkumar, A., Hewitt, L., Ghezae, I., & Willer, R. (2026).** Large language models can
  predict the results of social science experiments. *Nature*, 656(8126), 115–122.
  DOI: [10.1038/s41586-026-10742-x](https://doi.org/10.1038/s41586-026-10742-x) — 70
  pre-registered, nationally representative survey experiments; 476 treatment effects;
  105,165 participants; *r* = .85 overall, rising to *r* = .90 on unpublished studies that
  could not have entered the training data.
- **Dillion, D., Tandon, N., Gu, Y., & Gray, K. (2023).** Can AI language models replace human
  participants? *Trends in Cognitive Sciences*, 27(7), 597–600.
  DOI: [10.1016/j.tics.2023.04.008](https://doi.org/10.1016/j.tics.2023.04.008) — and the reply,
  **Harding, J., D'Alessandro, W., Laskowski, N. G., & Long, R. (2024)**, AI language models cannot
  replace human research participants, *AI & Society*, 39(5), 2603–2605.
  DOI: [10.1007/s00146-023-01725-x](https://doi.org/10.1007/s00146-023-01725-x) — the exchange that
  frames the normative dimension.
- **Grossmann, I., Feinberg, M., Parker, D. C., Christakis, N. A., Tetlock, P. E., & Cunningham,
  W. A. (2023).** AI and the transformation of social science research. *Science*, 380(6650),
  1108–1109. DOI: [10.1126/science.adi1778](https://doi.org/10.1126/science.adi1778).
- **Lin, Z. (2025).** Six fallacies in substituting large language models for human participants.
  *Advances in Methods and Practices in Psychological Science*, 8(3).
  DOI: [10.1177/25152459251357566](https://doi.org/10.1177/25152459251357566) — a taxonomy of
  inferential errors that doubles as a checklist for the analysis plan.
- **Ollion, É., Shen, R., Macanovic, A., & Chatelain, A. (2024).** The dangers of using
  proprietary LLMs for research. *Nature Machine Intelligence*, 6(1), 4–5.
  DOI: [10.1038/s42256-023-00783-6](https://doi.org/10.1038/s42256-023-00783-6) — model
  deprecation and version drift as threats to reproducibility; the argument for open-weights
  replication in the design.
- **Cronbach, L. J., & Meehl, P. E. (1955).** Construct validity in psychological tests.
  *Psychological Bulletin*, 52(4), 281–302.
  DOI: [10.1037/h0040957](https://doi.org/10.1037/h0040957) — the nomological-network standard.
- **Weber, M. (1922/1978).** *Economy and Society*, Part I, ch. 1 (on *Verstehen* and social
  action); **Geertz, C. (1973).** Thick description, in *The Interpretation of Cultures* —
  the meaning/behavior boundary.

---

## 4. How the existing theory informs the approach

### 4.1 It reframes the research question

The literature's animating question — *can LLMs replace human participants?* — is
unanswerable as posed, because "replace" is not a property of a technology but of a
technology-task-population triple. Construct-validity theory (Layer 3) supplies the
reformulation the project adopts:

> **For which constructs, which populations, and which inferential purposes does an LLM-
> generated response distribution support valid inference — and what is the structure of the
> error where it does not?**

This turns a yes/no controversy into a mapping problem with an answer that can be wrong, and
it makes the *pattern* of failure the primary scientific yield rather than an embarrassment.

### 4.2 It generates the hypotheses

Each layer contributes a directional prediction that the others do not:

| From | Hypothesis |
|---|---|
| Layer 2 (algorithmic fidelity) | Conditioned response *means* track human subgroup means with useful accuracy on well-represented populations and widely-discussed attitude objects. |
| Layer 4 (flattening) | *Variance* is systematically compressed: simulated within-group heterogeneity falls well below human within-group heterogeneity, and the gap widens as corpus representation falls. |
| Layer 4 (role play) | Simulated responses reflect the corpus's *depiction* of a group; divergence from human data is larger for self-referential/experiential items than for factual or normative ones. |
| Layer 3 (construct validity) | Accuracy degrades on post-cutoff studies relative to pre-cutoff ones — the contamination signature. **Stated in its strong form this is already partly disconfirmed:** Ashokkumar et al. report *r* = .90 on unpublished studies against *r* = .85 overall. The project therefore narrows it to the level where verbatim recall is actually plausible — reproduction of *specific items and their response distributions* — rather than the direction and rough magnitude of treatment effects, which appear to survive the cutoff. |
| Layer 1 (generativity) | Emergent macro-outcomes in multi-agent LLM settings are not robust to theoretically irrelevant perturbations (prompt phrasing, option order, run seed), because the micro-rule is unconstrained. |
| Layer 4 (atemporality, *Kozlowski & Evans*) | Simulated attitudes cannot be moved reliably to a specified historical period: conditioning on a year produces responses closer to the corpus-blended present than to that period's human data. Directly testable against archived time series (GSS, ANES). |
| Layer 2 (alignment, *Lyman et al.*) | Fidelity varies systematically with post-training: base or less heavily aligned models show wider, less normatively sanitized response distributions than their aligned counterparts on the same items. Makes alignment a manipulated factor, not a constant. |

Together these predict a specific joint signature — **good means, bad variance, worse
tails, contamination-sensitive, perturbation-fragile** — which is a far more falsifiable
claim than either "LLMs work" or "LLMs don't."

### 4.3 It fixes the design

- **A validation ladder, from Argyle's four criteria.** Tier 1: distributional comparison
  against human benchmark data (means *and* dispersion *and* full distributions, not
  correlations alone). Tier 2: pattern correspondence — do the *relations* among variables
  survive? Tier 3: nomological tests — moderators, interactions, and theoretically predicted
  null effects. A model passing Tier 1 and failing Tier 3 is a plausible outcome, and
  the framework says exactly what that would mean.
- **Temporal validation as a standing control**, from the construct-validity layer: the
  pre-/post-cutoff split is a design requirement, not a robustness check. Ashokkumar et al.'s
  unpublished-studies comparison is the model to extend — and their result is a warning
  against assuming the contamination story: the project must be prepared to report that
  contamination is *not* what drives fidelity for effect-direction tasks, and to locate the
  level (item reproduction, distributional shape) at which it does bite.
- **Prompt-space sampling rather than prompt selection**, from Layers 1 and 4: because the
  micro-rule is opaque and results are known to be prompt-sensitive, the analysis treats
  prompt variants and run seeds as a *sampled design factor* with reported variance
  components, rather than fixing one prompt and reporting a point estimate. Bisbee et al.
  and Lin's fallacy taxonomy make the alternative untenable.
- **Heterogeneity as the primary outcome, not a nuisance**, from Wang et al.: the study
  reports variance ratios and distributional distances (e.g. Wasserstein) alongside central
  tendency, because the theory predicts the divergence lives there.
- **Stratified targets**, from the corpus-representation mechanism: sampling target
  populations deliberately across the representation gradient, so the predicted degradation
  is measurable rather than assumed.
- **Non-independence taken seriously**, from Layer 4: *n* simulated respondents are not *n*
  independent observations. Uncertainty quantification cannot use the sampling theory that
  human survey work uses, and the project treats this as an open methodological problem to
  state explicitly rather than a detail to finesse.
- **A mixed-subjects design rather than a replacement design**, from Broska et al.: the
  study does not ask whether simulated respondents can *stand in for* humans, but how
  simulated and human observations should be **combined** under stated assumptions, with the
  simulation's weight determined by its measured fidelity rather than assumed. This converts
  the project's negative findings into usable methodology instead of a verdict.
- **Believability is not a validation criterion**, from Larooij & Törnberg: no claim in this
  project rests on whether outputs read as plausible to the researcher or to judges. Face
  plausibility is recorded as a descriptive property and explicitly excluded from the
  inferential chain, because their review identifies precisely this substitution as the
  field's dominant validity failure.
- **Alignment as a manipulated factor**, from Lyman et al.: where licensing permits, the same
  protocol is run across models differing in post-training, so fidelity loss attributable to
  alignment is separated from loss attributable to corpus representation. Paired with
  open-weights replication, following Ollion et al. on version drift and deprecation.
- **Benchmark integrity as a threat to be controlled**, from Zhang et al.: human survey data
  collected after widespread LLM availability may itself be partly AI-generated and
  homogenized. The validation targets are therefore dated and, where possible, drawn from
  pre-2023 collection waves — otherwise the study risks measuring simulated text against
  simulated text and reporting the agreement as fidelity.
- **Ethical and epistemic positioning**, from Harding et al. and Bail: human participants
  carry standing that is partly political, and simulation cannot discharge obligations of
  representation. Simulated data are positioned as *pre-registration-stage instruments* —
  hypothesis generation, power analysis, instrument pretesting, prioritizing which human
  studies to run — never as terminal evidence about a population.

### 4.4 It sets the contribution

The theory says the interesting result is not a fidelity number. It is a **map of the
boundary**: which constructs and populations fall inside the zone of valid inference, what
mechanism explains the boundary's shape, and what methodological safeguards follow. The
thesis's contribution is therefore a **validity framework for LLM-based social simulation**
— generativist in its epistemology, psychometric in its evidentiary standards, and critical
in its account of why the failures are structural — together with an empirical demonstration
of where that boundary currently lies.

Positioned against the two recent reviews, the project sits deliberately between them:
Larooij and Törnberg conclude that generative simulation worsens ABM's validation problem,
Anthis et al. that its promise is reachable by addressing five tractable challenges. Both
are position papers. Neither settles the question empirically for a specified construct and
population, and doing so — with variance, not correlation, as the discriminating outcome —
is the gap this thesis occupies.

---

## 5. Citation verification record

Every DOI and preprint identifier above was resolved and checked against source metadata on
**2026-09-11** (Crossref REST API for DOIs; arXiv API for preprints; publisher pages for the
NBER working paper and the Ashokkumar et al. article). All 15 DOIs resolve, and author lists,
venues, volumes and page ranges match as cited.

Three discrepancies were found and corrected in this revision; they are recorded here because
each affects a substantive claim, not merely a reference:

1. **Park et al. (arXiv:2411.10109) was retitled and revised.** It is no longer "Generative
   agent simulations of 1,000 people" but "LLM Agents Grounded in Self-Reports Enable
   General-Purpose Simulation of Individuals" (revision of 2026-06-28), with an expanded
   eleven-author list. The revision also changed the headline accuracies: the earlier 85%
   figure is superseded by 83% (interview-only), 82% (survey-only) and 86% (combined), against
   **74% for demographics-only agents**, on a sample of 1,052. The demographics-only figure is
   now load-bearing for §2 Layer 2 and §4.2, since it isolates the performance of exactly the
   conditioning mechanism that silicon sampling uses.
2. **Ashokkumar et al. report 476 treatment effects, not 469**, across 70 pre-registered
   nationally representative survey experiments and 105,165 participants.
3. **The contamination hypothesis required weakening.** Ashokkumar et al. report *r* = .90 on
   unpublished studies that could not have been in the training data, against *r* = .85
   overall — evidence *against* the strong form of the pre-/post-cutoff prediction stated in
   the earlier draft. The hypothesis in §4.2 has been narrowed accordingly rather than left
   standing.

One item was checked because it looked wrong and proved correct: NBER Working Paper 31122 is
indeed co-authored by **Horton, Filippas & Manning**, not by Horton alone as the widely cited
2023 version of the *Homo silicus* paper suggests.

Sources that are books or book chapters (Weber 1922/1978; Geertz 1973) carry no DOI and were
not machine-verified; cite them from a specific edition with page numbers when drafting.

### Second pass — source selection revised (2026-09-11)

The central five were reselected for closer correspondence to the topic. Park et al., Wang et
al. and Bail are retained. Two were replaced and **demoted to supporting rather than dropped**,
since both remain necessary citations:

- **Epstein (1999) → Larooij & Törnberg (2025).** Epstein predates LLMs by two decades and
  required the document to build the bridge from generative social science to generative ABM
  itself. Larooij & Törnberg have now built it, and supply a reviewed empirical finding
  (validation failure; believability substituting for operational validity) where Epstein
  supplied only a standard.
- **Argyle et al. (2023) → Kozlowski & Evans (2025).** Argyle et al. is a method demonstration
  that originated *algorithmic fidelity*; it is not a framework for possibilities and limits.
  Kozlowski & Evans is, states the question in this project's own terms, comes from
  sociological methodology rather than CS, and supplies the six-part taxonomy now used in
  Layer 4. Argyle's own strand is carried forward by Lyman et al. (2025), which is the more
  current statement of the fidelity construct.

All eleven newly added DOIs were resolved against Crossref on the same date, and the contents
of *Sociological Methods & Research* 54(3) were enumerated through the Crossref journal API to
confirm the special issue and its article-level pagination.
