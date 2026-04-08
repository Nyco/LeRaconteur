LeRaconteur app

# Goals

## Vibe coding

I want to develop a free/libre/opensource application "BedTimeStoryMaster" via vibe coding, for my own fun and learning.

## Business Hypothesis

I want to validate the risky assumption that fathers and mothers want to create deb time stories to tell their kids.

## AI contraints

Minimise context and prompt, for lowest possible token consumption, and inference duration.

# Lean Canvas

## Target users

Early adopters: techie parents that read bed time stories to their children age 3 to 6 years old, in my area, in French

## Problem

Parents always tell the same bed time stories in loops that are available in their own library, children always have the same stories again and again.

Alternatives: try to invent stories live, exchange books with other parents/children, borrow books from public library

## Value proposition

Stop reading the same stories again and again from your library
Start to generate stories tailored for your children preferences in under one minute

## Solution

Help parents to craft prompts, in order to create the story in th preferred AI conversational interface.

## Channels

Discussing with people in front of the "maternelle"

# Specs: Tech

Very simple and minimalistic app

Static app

Vanilla JS/CSS/HTML

Can be deployed on GitHub Pages

Local storage in the browser

Version de code on a GitHub repo, as AGPLv3 license: https://github.com/Nyco/BedTimeStoryMaster

# Specs: UI Design

Very simple and minimalistic app

Focused design

Modern UI

Super easy to use


# Specs: UX Design

Quick UX/workflow: user can build a story generation prompt under one minute

Design a very simple form, of 7 fields, where the user can select items from a drop-down

# Specs: form (fields, and drop-down items)

## Child age

2-3
4-5
6+

## World / Setting

space adventure 🚀
magic forest 🌲
dinosaurs 🦖
knights & castles 🏰
cowboys 🤠

## 🧑‍🚀 Hero

curious explorer
shy dreamer
brave adventurer
clever thinker
playful troublemaker

## 🌑 Challenge (Shadow)

fear (dark, alone, unknown)
problem to solve
someone in danger
misunderstanding
competition

## 🧙 Helper (Mentor)

wise animal
magical creature
older friend
talking object
no helper (interesting twist)

## 🎭 Fun Element (Trickster)

silly character
unexpected chaos
funny misunderstandings
playful magic
none

## ❤️ Theme (Transformation)

courage
friendship
sharing
patience
self-confidence

## 🌙 Ending Tone (bedtime-critical)

calm & soothing
happy & joyful
proud & empowering
soft moral lesson

# Specs: Story Structure

## Act 1 → Setup

1. Ordinary World

The hero’s normal life before anything changes.
👉 Establish context, tone, and stakes.

2. Call to Adventure

Something disrupts the normal world.
👉 A problem, opportunity, or crisis appears.

3. Refusal of the Call

The hero hesitates or resists.
👉 Fear, doubt, or obligation holds them back.

4. Meeting the Mentor

A guide appears (person, idea, tool).
👉 Provides advice, training, or confidence.

5. Crossing the First Threshold

The hero commits and enters the unknown.
👉 No turning back.

## Act 2 → Transformation

6. Tests, Allies, Enemies

The hero learns the rules of the new world.
👉 Builds relationships, faces small challenges.

7. Approach to the Inmost Cave

Preparation for a major challenge.
👉 Tension rises, stakes become clearer.

8. Ordeal

The central crisis or “death & rebirth” moment.
👉 The hero faces their greatest fear.

9. Reward (Seizing the Sword)

The hero survives and gains something valuable.
👉 Knowledge, power, object, insight.

10. The Road Back

The hero begins returning, but conflict isn’t over.
👉 Consequences or new dangers arise.

## Act 3 → Resolution

11. Resurrection

Final test at a higher level.
👉 Transformation is proven.

12. Return with the Elixir

The hero comes back changed.
👉 Brings value to others (solution, wisdom, healing).




# Specs: Best Practices

1. It’s not a formula — it’s a diagnostic tool

Use it to fix weak stories, not to rigidly generate them.

👉 If something feels off, ask:

Is the stakes escalation clear?
Did the hero really transform?
Is there a real “ordeal”?
2. Focus on transformation, not plot

The core is internal change, not events.

👉 Weak:

“He wins the battle”

👉 Strong:

“He becomes someone capable of winning”
3. Each stage = emotional shift

Don’t treat stages as plot beats only.
They must change emotion and meaning.

Example:

Call → curiosity or fear
Ordeal → despair
Reward → relief / empowerment
4. The Ordeal is the center of gravity

If this part is weak, the whole story collapses.

👉 It should feel like:

Loss
Death (literal or symbolic)
Identity crisis
5. Stakes must escalate continuously

Each phase should feel more intense than the previous.

👉 Tests < Ordeal < Resurrection

6. External journey mirrors internal journey

Everything happening outside reflects something inside.

Example:

Fighting a villain → confronting fear
Crossing a desert → isolation / doubt
7. Characters are functions

Don’t overcomplicate roles.

👉 Ask:

Who pushes the hero forward? (Herald)
Who tests them? (Guardian)
Who teaches them? (Mentor)
8. The return matters as much as the adventure

Many stories fail here.

👉 Without the “Elixir”:

The story feels pointless
No value is transferred to the audience
9. You can compress, reorder, or skip stages

Modern storytelling often:

Merges stages
Starts in medias res
Loops back

👉 The structure is elastic, not rigid.

10. Make the audience feel the journey

Vogler emphasizes emotional resonance over structure.

👉 If the audience doesn’t feel:

Fear in the Ordeal
Relief in the Reward
Closure in the Return

Then structure alone won’t save the story.

# Specs: app behavior

Given the user is on the form
When the user loads or reloads the page
Then we randomise pre-selected items in drop-downs

Given the user has filled the whole form (or kept the default values)
When the user submits
Then the app creates a prompt to copy-paste in their preferred LLM/AI: items selected, story structure, best practices, and generate names for the characters (random, three syllabus, consonant+vowel+consonant+vowel+consonant+vowel)
