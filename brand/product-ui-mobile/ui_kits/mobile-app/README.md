# Mobile app designs

Learner app screens imported from the "Speaking Genie Mobile App" project (built from the stg-env Flutter source). `Speaking Genie App.dc.html` is the full canvas of every screen, state and RTL variant. `cards/` holds one Design System card per screen (group "Mobile app designs"), rendered through `Mobile Screen.dc.html`.

- Built on the mobile app design system in `_ds/speaking-genie-mobile-app-design-system-ac4dbc79…` (Poppins / Inter, violet #7C3AED).
- Host params: `c` = screen file (e.g. `AI Partners Screens`), `screen`, `state` (default|empty|loading|error), `status` (listening|speaking|thinking|paused), `dir=rtl`, flags `task=1`, `eligible=1`, `streak=1`, `sth=1`.
- For marketing: the call, drill-passed, session feedback, report and certificate screens show the core loop (speak → corrected → measured → certified).
