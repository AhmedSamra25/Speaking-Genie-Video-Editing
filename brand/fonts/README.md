# Brand fonts

Families named by the Speaking Genie Design System, as full TTFs from
[google/fonts](https://github.com/google/fonts) (the design system ships browser subsets
only, which caption burn-in cannot use). All three are licensed under the SIL Open Font
License 1.1 (`OFL.txt`).

- Plus Jakarta Sans — Regular, Medium, SemiBold, Bold, ExtraBold (static instances cut
  from the variable font with `fonttools varLib.instancer`)
- IBM Plex Sans Arabic — Regular, SemiBold, Bold (includes Latin)
- JetBrains Mono — Regular, Medium (static instances)

Enablement Design System (marketing look, `look: "enablement"`), also from google/fonts:

- Poppins — Medium, SemiBold, Bold, ExtraBold (`OFL-Poppins.txt`)
- Inter — the variable font, weights 100–900 (`OFL-Inter.txt`)
- Cairo — the variable font, weights 200–1000 (`OFL-Cairo.txt`). Cairo stands in for the brand's own Arabic
  face, which was never supplied (see `brand/enablement/README.md`, "Gaps").

`setup/macos.sh` installs them into `~/Library/Fonts` so Keynote, Final Cut, DaVinci and
Pages see them too. The render tools read them from this folder directly.
