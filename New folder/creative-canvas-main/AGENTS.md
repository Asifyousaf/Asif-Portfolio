<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep verified portfolio content in a shared browser-safe data module, separate from presentation, so project pages and the homepage remain consistent.
- Define portfolio styling and motion in src/styles.css with semantic tokens, so the visual system remains coherent.
- Load the Three.js installation dynamically inside a client effect, pause it offscreen, and dispose resources on unmount, so SSR and low-power devices remain usable.
- Give project case studies individual TanStack routes using the shared project data, so each project has a direct URL and specific metadata.
<<<<<<< HEAD
=======
- Run the portfolio from the root TanStack application; archived Next and nested source are not application entry points, so preview and deployment use the same pages.
- Use intrinsic grids and wrapping technology lists rather than fixed text heights, so enlarged copy remains readable across devices.
>>>>>>> e993283ad980e98eec55be71333d75bdbce15861
