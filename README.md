# tms-mikrofrontend-template-vitets

Kan brukes som utgangspunkt for å opprette nye mikrofrontends i Min Side.

# Features

- vite-plugin-mock
- vitest
- @navikt/ds-css
- @navikt/ds-react

# Tilpass repo-et

## Tilpass navn

1. Søk etter og erstatt tms-mikrofrontend-template med det som skal være navnet på den nye appen.
2. Sett riktig port i server/server.js, Dockerfile og nais.yaml.
3. Sett riktig namespace og team i nais manifestene, de ligger i mappen under `nais/<cluster>`
4. Sett opp secrets, som default er det lagt opp til at secrets kan hentes fra `<appnavn>-secrets`

## Velg riktig ingress

Templaten kommer konfigurert to ingresser som bruker standarden i Team Min Side.

- Skal brukes til dev: `https://person.dev.nav.no/<appnavn>`
- Skal brukes til prod: `https://person.nav.no/<appnavn>`

# Workflows

Team Min Side bruker pb-workflow-authority for å sette opp workflows, husk å legge det til i prosjektet.

# Kom i gang

1. Bygg tms-mikrofrontend-template ved å kjøre npm run build
2. Start appen lokalt ved å kjøre npm run dev
3. Appen nås på http://localhost:3000

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på github.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-personbruker.
