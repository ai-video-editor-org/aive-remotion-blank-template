# AGENTS.md

Concise, conversational, precise. No verbosity, no vague language.

## Project Rules

- Use Bun for installs and scripts in this repo.
- Keep edits on the main composition unless the user explicitly asks for variants.
- Use direct Google Cloud Storage asset URLs for project assets.
- For project asset media in Remotion, use the shared wrappers in `src/remotion/components/`:
  - `ProjectVideo`
  - `ProjectImg`
  - `ProjectAudio`
- Do not hardcode custom local asset paths in compositions.
- Avoid starter/demo clutter. Keep the project focused on the requested output.
