# AGENTS.md

Concise, conversational, precise. No verbosity, no vague language.

## Project Rules

- Keep edits on the main composition unless the user explicitly asks for variants.
- Use direct Google Cloud Storage asset URLs for project assets.
- For project asset media in Remotion, use the shared wrappers in `src/remotion/components/`:
  - `ProjectVideo`
  - `ProjectImg`
  - `ProjectAudio`
- Do not hardcode custom local asset paths in compositions.
- The preview sandbox may hydrate project assets into `public/__project_assets__`. The wrappers already know how to prefer the local preview copy and fall back to the remote URL.
- Avoid starter/demo clutter. Keep the project focused on the requested output.
