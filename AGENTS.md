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
- Use the existing TanStack React stack and one scrolling index route, since the portfolio explicitly requests smooth-scrolling section navigation.
- Keep sample portfolio content in a browser-safe data module; centralization makes replacing personal details consistent.
- The contact form validates input and opens an email draft; do not imply delivery without a connected email service.
- Keep visual design tokens and portfolio layout styles in src/styles.css so the dark design remains consistent.
