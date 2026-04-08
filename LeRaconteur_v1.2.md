# Fixes

Problem: All the copy in the interface must be in true and good French, but accents are missing
Solution: Fix all missing accents, both in UI and generated prompt

# Additions

## New feature: user taste

Add two text area for the user (multiple lines):
- What I would like
- What I want to avoid

Add some copy guiding the child, and example text in textarea (greyed out, that disappears when user types, reappears when textarea empty with no focus)

Add those user-input text contents to the prompt

## New feature: name characters

Name generation must happen at load/reload of page

In the Characters section, create a two-columns sub-form:
- Archetype drop-down selector (Hero, Ally, Mentor, Trickster, Antagonist)
- Suggested name: text input, prefilled with randomly generated name, user can edit it

## Screen density & organisation

Change the three columns view to a two columns spatial organisation of the drop-downs, add space (less density)

Add sections:
- My preferences: age & length, "What I would like" &  "What I want to avoid"
- Story Setup: style, world, theme, tone
- Story Characters: hero, ally, mentor, trickster, and add the opponent (with a few 5 types of villain)

## Prompt

- Add guardrails in prompt:
    - Copy and paste:
        - The whole structure in Structure.md
        - Best practices in Best_Practices.md
    - Tell AI in prompt to remove (do not add):
	    - Intro: Opening, Acknowledgement, Preamble, Lead-in, Hook, prompt paraphrase
	    - Outro: Closing, Postscript, Summary, Explanation, Justification

