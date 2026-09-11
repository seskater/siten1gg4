# Subtopic Proposal

## Simulating the Past: Temporal Conditioning and the Declarative–Performative Gap in LLM-Based Social Simulation

*A subtopic of "Simulating Human Behavior with Large Language Models: Possibilities and Limits
for the Social Sciences."*

---

## 1. The subtopic in one paragraph

Kozlowski and Evans list **atemporality** as one of six properties that impair the realistic
simulation of human subjects: a language model has no stable position in historical time,
because its corpus blends eras. The claim is asserted rather than measured, and it is the only
item in their taxonomy with a pristine, public, and free benchmark against which it *can* be
measured — the General Social Survey has asked identically worded items of nationally
representative American samples since 1972. This project asks whether an LLM prompted to
respond as a member of the public in a specified past year reproduces that year's response
distribution, and how fidelity decays as the target year recedes.

The question is not archival curiosity. If models cannot be moved in time, then every
simulation is implicitly a simulation of *approximately now*, whatever backstory it is given —
which silently invalidates a large class of proposed uses, including historical counterfactuals,
cohort analysis, and any claim that a simulated population represents anything other than the
recent English-language internet.

## 2. The move that makes it a contribution

The design's central feature is a dissociation between two ways of asking the same model about
the same year:

| Condition | Prompt form | What it measures |
|---|---|---|
| **Declarative** | "What share of Americans in 1988 approved of X?" | Third-person aggregate knowledge of the period |
| **Performative** | "You are a 34-year-old machinist in Ohio. The year is 1988. Do you approve of X?" × *n* | First-person simulation as a period respondent |

The framework predicts these come apart: **the model can describe the 1988 distribution but
cannot sample from it.** If that holds, the fidelity failure is not an *information* deficit —
the model demonstrably has the information — but a *simulation* deficit, which is a far stronger
and more interesting result than "the model doesn't know."

It also converts Shanahan et al.'s role-play ontology from an interpretive stance into a tested
prediction. A system maintaining a superposition of simulacra weighted by corpus frequency
should be pulled toward the corpus's centre of temporal mass no matter what year the prompt
names, while remaining perfectly able to *report* on other years. Declarative accuracy alongside
performative anchoring is the signature that ontology predicts, and nothing else in the
literature predicts it as specifically.

## 3. Why the benchmark is unusually good

- **Identical item wording across five decades.** The single hardest problem in temporal
  comparison — that the question changed — is solved by the GSS design rather than by the
  analyst.
- **Real distributions, not just means.** Repeated cross-sections give within-year dispersion,
  so the variance-collapse prediction from the parent framework is testable at every time point
  rather than only in aggregate.
- **A built-in dose–response.** Target year is a continuous treatment. The prediction is not
  pass/fail but a **decay curve**, and its shape is diagnostic: corpus text density grows
  roughly exponentially toward the present, so fidelity should track that, not calendar
  distance as such.
- **A built-in placebo.** Items whose distributions barely moved (some religious and
  family-structure items) should show *no* temporal penalty. If they do, the measure is broken,
  not the model. Items that moved sharply — same-sex relations, women in politics, interracial
  marriage, cannabis, confidence in institutions — are the treatment.
- **Contamination cuts the right way for once.** GSS marginals are almost certainly in the
  training data. That makes this a *conservative* test: a model that has effectively memorized
  the answer key and still cannot simulate as a period respondent is strong evidence. Better
  still, the declarative condition doubles as a **memorization probe**, so the degree of
  contamination is measured inside the design rather than assumed.

## 4. Position against the adjacent literature

Three nearby works exist; none tests this.

- **Kim, J., & Lee, B. (2023/2024).** AI-augmented surveys: Leveraging large language models and
  surveys for opinion prediction. [arXiv:2305.09620](https://arxiv.org/abs/2305.09620) —
  fine-tunes with question, respondent and *period* embeddings on GSS 1972–2021 to do
  **retrodiction** (recovering masked year-level opinions) and unasked-opinion prediction. This
  is prediction/imputation, and it requires the very data a simulation is supposed to substitute
  for: fine-tuning on GSS to recover GSS cannot help a researcher simulate a population they have
  no survey for. The methodologically relevant case — **prompted, zero-shot period conditioning** —
  is the one left untested, and it is the one a working social scientist would actually reach for.
- **Varnum, M. E. W., Baumard, N., Atari, M., & Gray, K. (2024).** Large language models based on
  historical text could offer informative tools for behavioral science. *PNAS*, 121(42).
  DOI: [10.1073/pnas.2407639121](https://doi.org/10.1073/pnas.2407639121) — proposes training on
  historical corpora to "grasp the mentality of ancient peoples." An aspiration in a high-profile
  venue, with no validation. This subtopic supplies the missing feasibility evidence, on the
  easiest possible case: if period conditioning fails for 1985 America — massively documented,
  in-language, in-corpus — the prospects for antiquity are settled a fortiori.
- **Ahnert, G., Pellert, M., Garcia, D., & Strohmaier (2025).** Extracting affect aggregates from
  longitudinal social media data with temporal adapters for LLMs. *ICWSM 2025*.
  [arXiv:2409.17990](https://arxiv.org/abs/2409.17990) — fine-tuned temporal adapters on dated
  timelines. Again a training-side fix, and again it presupposes period data.

The common shape: **every existing approach solves atemporality by training on the period.** The
untested question is what happens when you cannot, which is the normal case.

## 5. Design sketch

**Items.** GSS items with identical wording across ≥ 8 waves, stratified into high-change,
moderate-change and near-static (placebo) strata.

**Factors.** Target year (continuous, 1972–2024) × framing (declarative / performative) ×
conditioning (year only / year + demographic backstory / year + backstory + in-context period
anchoring with dated period text) × model (varying in scale and post-training, per the parent
framework's alignment-as-manipulated-factor commitment).

**Outcomes.** Not correlation. Mean displacement, **variance ratio**, and Wasserstein distance
between simulated and true period distributions; plus a *temporal anchoring index* — how far the
simulated distribution travels toward the target year relative to staying at the present-day
distribution. That index is the paper's headline quantity and it does not yet exist.

**Analysis.** Prompt variants and seeds sampled as design factors with reported variance
components, not fixed. Believability plays no role in the inferential chain.

## 6. The possibilities half

The subtopic is not built to deliver a negative verdict. The third conditioning arm —
**in-context anchoring on dated period text** — is a constructive test of whether retrieval can
do without fine-tuning what Kim & Lee and Ahnert et al. achieve with it. A finding that modest
period anchoring substantially closes the gap is a usable, cheap, portable method for anyone
simulating a population displaced in time, and it would be the most practically valuable outcome
the project could produce. A finding that it does *not* close the gap localizes atemporality in
the weights rather than the context window, which is equally publishable and considerably more
sobering.

## 7. Why this one

- **Bounded.** One impairment, one benchmark, one country, public data, no recruitment, no IRB
  burden for the simulation arm.
- **Falsifiable in both directions**, with a placebo stratum that can invalidate the instrument.
- **Load-bearing for the parent topic.** Temporal displacement is the cleanest available case of
  the general problem — whether a simulated population represents the group named in the prompt
  or the corpus that produced the model. Time is simply the dimension along which the answer can
  be checked against ground truth.
- **It inherits the parent framework intact:** generativist epistemology, variance as the
  discriminating outcome, alignment as a manipulated factor, believability excluded, mixed-subjects
  design for combining simulated and human observations.

## 8. Candidate title

> **Simulating the Past: Temporal Conditioning and the Declarative–Performative Gap in
> LLM-Based Social Simulation**

Alternates, depending on emphasis: *Knowing Without Being* (theory-forward); *Can Language
Models Be Moved in Time?* (question-forward).
