# Instructions for Claude

## General Rules
- ALWAYS import components from src/components/ui — never create new ones from scratch
- ALWAYS use CSS variables from tokens.css — never hardcode hex or px values
- NEVER create inline styles that duplicate what's in tokens.css
- NEVER use border-radius, colors, spacing, or font values not defined in the token system
- ALWAYS import tokens.css in any HTML file you create

## Figma Reading Rules
- When reading a component from Figma, always extract:
  - Exact dimensions (width, height)
  - Padding and internal spacing
  - All states and variants (hover, focus, disabled, error, readOnly, etc.)
  - Colors and their token mappings
  - Typography (font family, size, weight, line height)

## Component Rules
- Button → src/components/ui/button.tsx — use variant="primary" or "secondary", Corner-radius/Small (6px)
- Checkbox → src/components/ui/checkbox.tsx — use for all boolean inputs
- Dropdown → src/components/ui/dropdown.tsx — use for all select inputs
- Modal → src/components/ui/modal.tsx — use for all confirmations and dialogs; action button row gap must use var(--space-8)

## Modal Rules
- Modal padding must use var(--modal-padding), which maps to var(--space-24) (24px) — sourced from Figma token Components/Modal/Padding
- All card and form containers must use var(--modal-padding) for padding
- RadioButton → src/components/ui/radio-button.tsx — use for single-select option groups

## Checkbox Rules
- Checkbox box size: 20×20px — always use var(--checkbox-size) for width and height
- Checkbox list item spacing has three density options:
  - Compact: var(--space-12)
  - Default: var(--space-16)
  - Comfortable: var(--space-24)
- When 2 or more Checkbox components appear together they form a group and each must include density="default" unless the design specifies compact or comfortable
- When a wrapper div uses gap to own the spacing between checkboxes, omit density from the individual checkboxes
- Figma documentation: https://www.figma.com/design/aMEyZNEKJaOvFbzAHTzbARu9/%E2%9D%96-Envestnet-DS---UI-Guideline---Components?node-id=108605-19556

## Border Radius Rules
- ALL components must use var(--corner-radius-small) for border radius by default
- Exceptions must be explicitly documented — the only current exception is the filter pill which uses var(--corner-radius-xl)

## Spacing Rules
- ALWAYS reset default browser margins on heading elements (h1–h6) inside components — use margin: 0 unless spacing is explicitly defined using a token (e.g. marginBottom: "var(--space-8)")

## Error Message Rules
- Error message text below form components must use var(--subtle-and-hint) for color and var(--font-size-header-6) for font size (12px bold)
- NEVER use red (var(--error-warning) or any error color) for error message text — red is only for the border/outline of the component itself

## Typography Rules
- Headers H1–H6 → always Red Hat Display, always bold (700)
- Body text → always Red Hat Text, regular (400)
- Labels → always Red Hat Display, bold (700), uppercase, with letter-spacing
- Never use any font not defined in the font token system

## Assets Rules
- The Envestnet logo (src/assets/envestnet-logo.png) is only used on the login page — do not use it in other components or pages

## File Structure
- Components → src/components/ui/
- Token values → tokens.css (single source of truth)
- Never hardcode values that exist in tokens.css

---
# Design System Reference

> This file documents the complete design token architecture for use with Claude.
> Architecture: 3-tier system — Global (raw values) → Themes (semantic aliases) → Components (TBD)

---

## Tier 1: Global Collection (Raw Values)

The Global collection contains all raw, named values. These are never used directly in UI — they are aliased by the Theme layer.

### Typography

#### Font Families (Raw Tokens)

| Token | Value | Role |
|---|---|---|
| `Typography/Font/Red Hat Display` | Red Hat Display | Headings / Display |
| `Typography/Font/Red Hat Text` | Red Hat Text | Body / UI / Captions |
| `Typography/Font/Lato` | Lato | Secondary / alternative body |
| `Typography/Font/Font Awesome 7 Pro` | Font Awesome 7 Pro | Icons |

#### CSS Variables (Typography Bridge)

These CSS variables are the link between Figma text styles and the raw font tokens. Use these variable names when writing CSS or referencing type in code.

| CSS Variable | Value |
|---|---|
| `--font-family-header` | Red Hat Display |
| `--font-family-body` | Red Hat Text |
| `--font-family-caption` | Red Hat Text |
| `--font-size-header-1` | 36px |
| `--font-size-header-2` | 28px |
| `--font-size-header-3` | 20px |
| `--font-size-header-4` | 16px |
| `--font-size-header-5` | 14px |
| `--font-size-header-6` | 12px |
| `--font-size-paragraph-1` | 16px |
| `--font-size-paragraph-2` | 14px |
| `--font-size-caption` | 12px |
| `--font-family-label` | Red Hat Display |
| `--font-size-label-1` | 16px |
| `--font-size-label-2` | 12px |
| `--font-line-height-article-1` | 21px |
| `--font-line-height-article-2` | 18px |

#### Text Style Definitions

| Style Name | Font Family | Size | Weight | Line Height | CSS Variable |
|---|---|---|---|---|---|
| `Header 1` | Red Hat Display | 36px | 700 | normal | `--font-size-header-1` |
| `Header 2` | Red Hat Display | 28px | 700 | normal | `--font-size-header-2` |
| `Header 3` | Red Hat Display | 20px | 700 | normal | `--font-size-header-3` |
| `Header 4` | Red Hat Display | 16px | 700 | normal | `--font-size-header-4` |
| `Header 5` | Red Hat Display | 14px | 700 | normal | `--font-size-header-5` |
| `Header 6` | Red Hat Display | 12px | 700 | normal | `--font-size-header-6` |
| `Paragraph 1` | Red Hat Text | 16px | 400 | normal | `--font-size-paragraph-1` |
| `Paragraph 2` | Red Hat Text | 14px | 400 | normal | `--font-size-paragraph-2` |
| `Paragraph Article 1` | Red Hat Text | 16px | 400 | 21px | `--font-line-height-article-1` |
| `Paragraph Article 2` | Red Hat Text | 14px | 400 | 18px | `--font-line-height-article-2` |
| `Caption` | Red Hat Text | 12px | 400 | normal | `--font-size-caption` |
| `Label 1` | Red Hat Display | 16px | 700 | normal | `--font-size-label-1` |
| `Label 2` | Red Hat Display | 12px | 700 | normal | `--font-size-label-2` |

> **Label special properties:** Both labels use `text-transform: uppercase`. Label 1 has `letter-spacing: 3px`, Label 2 has `letter-spacing: 2px`. Always apply both when using label styles.

#### Usage Guidelines

- **Headers (H1–H6)** — Always Red Hat Display, always bold (700). Use for page titles, section headings, panel headers, modal titles.
- **Paragraph 1 / 2** — Red Hat Text, regular (400). Use for general UI body text, descriptions, form labels.
- **Paragraph Article 1 / 2** — Same as Paragraph but with explicit line heights for longer-form reading contexts (articles, documentation, rich text areas).
- **Caption** — Red Hat Text 12px, regular. Use for helper text, timestamps, metadata, secondary labels.
- **Label 1 / 2** — Red Hat Display, bold (700), uppercase, wide letter-spacing. Use for category tags, section markers, UI labels that need strong visual hierarchy. Never use for long text — uppercase is for short identifiers only.

### Spacing & Sizing Scale

| Token | Value |
|---|---|
| `Numbers/None` | 0 |
| `Numbers/4` | 4 |
| `Numbers/8` | 8 |
| `Numbers/16` | 16 |
| `Numbers/20` | 20 |
| `Numbers/24` | 24 |
| `Numbers/32` | 32 |
| `Numbers/36` | 36 |
| `Numbers/40` | 40 |
| `Numbers/48` | 48 |
| `Numbers/60` | 60 |
| `Numbers/80` | 80 |
| `Numbers/100` | 100 |
| `Numbers/200` | 200 |
| `Numbers/2` | 2 |
| `Numbers/12` | 12 |
| `Numbers/14` | 14 |
| `Numbers/18` | 18 |
| `Numbers/28` | 28 |
| `Numbers/21` | 21 |
| `Numbers/6` | 6 |

### Corner Radius

| Token | Value |
|---|---|
| `Corner-radius/None` | 0 |
| `Corner-radius/Small` | 6 |
| `Corner-radius/Medium` | 12 |
| `Corner-radius/XL` | 9999 |

### Brand Colors

#### Light steelblue

| Token | Hex |
|---|---|
| `Colors/Brand/Light steelblue/Tint 5` | `#F2F8FC` |
| `Colors/Brand/Light steelblue/Tint 10` | `#E6F1F8` |
| `Colors/Brand/Light steelblue/Tint 25` | `#BFDCEE` |
| `Colors/Brand/Light steelblue/Primary` | `#0074BD` |
| `Colors/Brand/Light steelblue/Shade 5` | `#006EB4` |
| `Colors/Brand/Light steelblue/Shade 10` | `#0068AA` |
| `Colors/Brand/Light steelblue/Shade 25` | `#005F9E` |

#### Dark steelblue

| Token | Hex |
|---|---|
| `Colors/Brand/Dark steelblue/2` | `#4099F2` |
| `Colors/Brand/Dark steelblue/5` | `#78B5F2` |
| `Colors/Brand/Dark steelblue/10` | `#78B3E8` |
| `Colors/Brand/Dark steelblue/Primary` | `#69ABE6` |
| `Colors/Brand/Dark steelblue/30` | `#64A2DA` |
| `Colors/Brand/Dark steelblue/40` | `#5E9ACF` |
| `Colors/Brand/Dark steelblue/50` | `#4F80AC` |
| `Colors/Brand/Dark steelblue/60` | `#1A3A54` |
| `Colors/Brand/Dark steelblue/70` | `#182A3B` |
| `Colors/Brand/Dark steelblue/80` | `#0A2437` |
| `Colors/Brand/Dark steelblue/90` | `#051C2E` |

#### Steelblue

| Token | Hex |
|---|---|
| `Colors/Brand/Steelblue/10` | `#78B5F2` |
| `Colors/Brand/Steelblue/20` | `#407494` |
| `Colors/Brand/Steelblue/30` | `#19597F` |
| `Colors/Brand/Steelblue/40` | `#175479` |
| `Colors/Brand/Steelblue/50` | `#0D4F78` |
| `Colors/Brand/Steelblue/8` | `#6FC6FF` |

### Neutral Colors

| Token | Hex |
|---|---|
| `Colors/Neutral/Black` | `#000000` |
| `Colors/Neutral/Grey-2` | `#262626` |
| `Colors/Neutral/Grey-4` | `#BFBFBF` |
| `Colors/Neutral/Grey-6` | `#E6E6E6` |
| `Colors/Neutral/Grey-8` | `#F2F2F2` |
| `Colors/Neutral/Grey-10` | `#F5F5F5` |
| `Colors/Neutral/Grey-12` | `#FAFAFA` |
| `Colors/Neutral/White` | `#FFFFFF` |

### Shared Color Palettes

#### Blue

| Token | Hex |
|---|---|
| `Colors/Shared/Blue/10` | `#F5F6FF` |
| `Colors/Shared/Blue/20` | `#DDE0FF` |
| `Colors/Shared/Blue/30` | `#BCC2FF` |
| `Colors/Shared/Blue/40` | `#969FFF` |
| `Colors/Shared/Blue/50` | `#7E88FF` |
| `Colors/Shared/Blue/60` | `#6370FA` |
| `Colors/Shared/Blue/70` | `#4C5AF1` |
| `Colors/Shared/Blue/80` | `#3D4CED` |
| `Colors/Shared/Blue/90` | `#2C369B` |
| `Colors/Shared/Blue/100` | `#252959` |

#### Purple

| Token | Hex |
|---|---|
| `Colors/Shared/Purple/10` | `#FCF0FF` |
| `Colors/Shared/Purple/20` | `#F4D6FD` |
| `Colors/Shared/Purple/30` | `#E6ABF6` |
| `Colors/Shared/Purple/40` | `#D780EE` |
| `Colors/Shared/Purple/50` | `#C765E2` |
| `Colors/Shared/Purple/60` | `#B44CD0` |
| `Colors/Shared/Purple/70` | `#9E3ABA` |
| `Colors/Shared/Purple/80` | `#7D3B8F` |
| `Colors/Shared/Purple/90` | `#572964` |
| `Colors/Shared/Purple/100` | `#38223E` |

#### Green

| Token | Hex |
|---|---|
| `Colors/Shared/Green/10` | `#E9FFE9` |
| `Colors/Shared/Green/20` | `#CAF6CA` |
| `Colors/Shared/Green/30` | `#94E794` |
| `Colors/Shared/Green/40` | `#6BD06B` |
| `Colors/Shared/Green/50` | `#46C546` |
| `Colors/Shared/Green/60` | `#3AAA3A` |
| `Colors/Shared/Green/70` | `#2A8F2A` |
| `Colors/Shared/Green/80` | `#257B25` |
| `Colors/Shared/Green/90` | `#215221` |
| `Colors/Shared/Green/100` | `#1E381E` |

#### Teal

| Token | Hex |
|---|---|
| `Colors/Shared/Teal/10` | `#DCFFFF` |
| `Colors/Shared/Teal/20` | `#BAF3F3` |
| `Colors/Shared/Teal/30` | `#7EE2E2` |
| `Colors/Shared/Teal/40` | `#4BCECE` |
| `Colors/Shared/Teal/50` | `#2ABBBB` |
| `Colors/Shared/Teal/60` | `#22A0A0` |
| `Colors/Shared/Teal/70` | `#1F8484` |
| `Colors/Shared/Teal/80` | `#216E6E` |
| `Colors/Shared/Teal/90` | `#164B4B` |
| `Colors/Shared/Teal/100` | `#1C3333` |
| `Colors/Shared/Teal/Shade 25` | `#005D68` |
| `Colors/Shared/Teal/Shade 10` | `#00707C` |
| `Colors/Shared/Teal/Shade 5` | `#007683` |
| `Colors/Shared/Teal/Primary` | `#007C8A` |
| `Colors/Shared/Teal/Tint 25` | `#BFDEE2` |
| `Colors/Shared/Teal/Tint 10` | `#E6F2F3` |
| `Colors/Shared/Teal/Tint 5` | `#F2F8F9` |

#### Light teal - delete

| Token | Hex |
|---|---|
| `Colors/Shared/Light teal - delete/10` | `#CEFAFF` |
| `Colors/Shared/Light teal - delete/20` | `#ABF6FE` |
| `Colors/Shared/Light teal - delete/30` | `#79E2ED` |
| `Colors/Shared/Light teal - delete/40` | `#50C7D3` |
| `Colors/Shared/Light teal - delete/50` | `#31A8B5` |
| `Colors/Shared/Light teal - delete/60` | `#198793` |
| `Colors/Shared/Light teal - delete/70` | `#0B6B76` |

#### Dark gold

| Token | Hex |
|---|---|
| `Colors/Shared/Dark gold/10` | `#FFF2DB` |
| `Colors/Shared/Dark gold/20` | `#FBE2B6` |
| `Colors/Shared/Dark gold/30` | `#F9D087` |
| `Colors/Shared/Dark gold/40` | `#F8BC58` |
| `Colors/Shared/Dark gold/50` | `#E9AD48` |
| `Colors/Shared/Dark gold/60` | `#D79C41` |
| `Colors/Shared/Dark gold/70` | `#BF7F1D` |

#### Deep red

| Token | Hex |
|---|---|
| `Colors/Shared/Deep red/10` | `#FFE0DA` |
| `Colors/Shared/Deep red/20` | `#FFC6BA` |
| `Colors/Shared/Deep red/30` | `#FFA08E` |
| `Colors/Shared/Deep red/40` | `#FF7961` |
| `Colors/Shared/Deep red/50` | `#D75C4B` |
| `Colors/Shared/Deep red/60` | `#BD4A41` |
| `Colors/Shared/Deep red/70` | `#94322A` |

#### Charcoal

| Token | Hex |
|---|---|
| `Colors/Shared/Charcoal/10` | `#F7F7F7` |
| `Colors/Shared/Charcoal/20` | `#E4E4E4` |
| `Colors/Shared/Charcoal/30` | `#C8C8C8` |
| `Colors/Shared/Charcoal/40` | `#A7A7A7` |
| `Colors/Shared/Charcoal/50` | `#909090` |
| `Colors/Shared/Charcoal/60` | `#7B7B7B` |
| `Colors/Shared/Charcoal/70` | `#666666` |
| `Colors/Shared/Charcoal/80` | `#595959` |
| `Colors/Shared/Charcoal/90` | `#3E3E3E` |
| `Colors/Shared/Charcoal/100` | `#2D2D2D` |

#### Rust

| Token | Hex |
|---|---|
| `Colors/Shared/Rust/10` | `#FFF2F0` |
| `Colors/Shared/Rust/20` | `#FEDAD3` |
| `Colors/Shared/Rust/30` | `#FFAF9F` |
| `Colors/Shared/Rust/40` | `#FE846C` |
| `Colors/Shared/Rust/50` | `#F56C51` |
| `Colors/Shared/Rust/60` | `#EE4F30` |
| `Colors/Shared/Rust/70` | `#DB3919` |
| `Colors/Shared/Rust/80` | `#BB3319` |
| `Colors/Shared/Rust/90` | `#6E2C1F` |
| `Colors/Shared/Rust/100` | `#3F2621` |

#### Maroon

| Token | Hex |
|---|---|
| `Colors/Shared/Maroon/10` | `#FFECF0` |
| `Colors/Shared/Maroon/20` | `#FFB0C2` |
| `Colors/Shared/Maroon/30` | `#FF6185` |
| `Colors/Shared/Maroon/40` | `#FF3A67` |
| `Colors/Shared/Maroon/50` | `#C9294E` |
| `Colors/Shared/Maroon/60` | `#901632` |
| `Colors/Shared/Maroon/70` | `#64041B` |

#### Khaki

| Token | Hex |
|---|---|
| `Colors/Shared/Khaki/Primary` | `#FFE563` |
| `Colors/Shared/Khaki/Tint 5` | `#F2DA5E` |
| `Colors/Shared/Khaki/Tint 10` | `#E6CE59` |
| `Colors/Shared/Khaki/Tint 25` | `#BFAC4A` |
| `Colors/Shared/Khaki/Shade 25` | `#404934` |
| `Colors/Shared/Khaki/Shade 20` | `#333F31` |
| `Colors/Shared/Khaki/Shade 15` | `#26342D` |

#### Yellow

| Token | Hex |
|---|---|
| `Colors/Shared/Yellow/Tint 5` | `#FFFBF5` |
| `Colors/Shared/Yellow/Tint 10` | `#FEF6EA` |
| `Colors/Shared/Yellow/Tint 25` | `#FDE9CA` |
| `Colors/Shared/Yellow/Primary` | `#F8A72D` |
| `Colors/Shared/Yellow/Shade 5` | `#EC9F2B` |
| `Colors/Shared/Yellow/Shade 10` | `#DF9628` |
| `Colors/Shared/Yellow/Shade 25` | `#BA7D22` |

#### Tomato

| Token | Hex |
|---|---|
| `Colors/Shared/Tomato/Primary` | `#F75959` |
| `Colors/Shared/Tomato/Tint 5` | `#EB5555` |
| `Colors/Shared/Tomato/Tint 10` | `#DE5050` |
| `Colors/Shared/Tomato/Tint 25` | `#B94343` |
| `Colors/Shared/Tomato/Shade 25` | `#3E2631` |
| `Colors/Shared/Tomato/Shade 20` | `#31232F` |
| `Colors/Shared/Tomato/Shade 15` | `#251F2C` |

#### Teal - delete

| Token | Hex |
|---|---|
| `Colors/Shared/Teal - delete/Tint 5` | `#F2F8F9` |
| `Colors/Shared/Teal - delete/Tint 10` | `#E6F2F3` |
| `Colors/Shared/Teal - delete/Tint 25` | `#BFDEE2` |
| `Colors/Shared/Teal - delete/Primary` | `#007C8A` |
| `Colors/Shared/Teal - delete/Shade 5` | `#007683` |
| `Colors/Shared/Teal - delete/Shade 10` | `#00707C` |
| `Colors/Shared/Teal - delete/Shade 25` | `#005D68` |

#### Red

| Token | Hex |
|---|---|
| `Colors/Shared/Red/Tint 5` | `#FDF3F3` |
| `Colors/Shared/Red/Tint 10` | `#FBE7E8` |
| `Colors/Shared/Red/Tint 25` | `#F5C3C4` |
| `Colors/Shared/Red/Primary` | `#D91014` |
| `Colors/Shared/Red/Shade 5` | `#CE0F13` |
| `Colors/Shared/Red/Shade 10` | `#C30E12` |
| `Colors/Shared/Red/Shade 25` | `#A30C0F` |

#### Turquoise

| Token | Hex |
|---|---|
| `Colors/Shared/Turquoise/Primary` | `#1BCBC5` |
| `Colors/Shared/Turquoise/Tint 5` | `#1AC1BB` |
| `Colors/Shared/Turquoise/Tint 10` | `#18B7B1` |
| `Colors/Shared/Turquoise/Tint 25` | `#149894` |
| `Colors/Shared/Turquoise/Shade 25` | `#07424C` |
| `Colors/Shared/Turquoise/Shade 20` | `#053944` |
| `Colors/Shared/Turquoise/Shade 15` | `#04303C` |

#### Slate gray

| Token | Hex |
|---|---|
| `Colors/Shared/Slate gray/10` | `#D4DFEA` |
| `Colors/Shared/Slate gray/20` | `#B6C5D4` |
| `Colors/Shared/Slate gray/30` | `#516578` |
| `Colors/Shared/Slate gray/40` | `#324A60` |
| `Colors/Shared/Slate gray/50` | `#1F3545` |
| `Colors/Shared/Slate gray/60` | `#122533` |
| `Colors/Shared/Slate gray/70` | `#0A1E2D` |
| `Colors/Shared/Slate gray/80` | `#001524` |
| `Colors/Shared/Slate gray/90` | `#020F1C` |

#### Muted blue

| Token | Hex |
|---|---|
| `Colors/Shared/Muted blue/2` | `#407494` |
| `Colors/Shared/Muted blue/4` | `#19597F` |
| `Colors/Shared/Muted blue/6` | `#0D4F78` |
| `Colors/Shared/Muted blue/8` | `#005377` |
| `Colors/Shared/Muted blue/10` | `#005176` |
| `Colors/Shared/Muted blue/12` | `#004E75` |
| `Colors/Shared/Muted blue/14` | `#004671` |
| `Colors/Shared/Muted blue/16` | `#0C4B6E` |
| `Colors/Shared/Muted blue/18` | `#19486F` |
| `Colors/Shared/Muted blue/20` | `#0D4770` |
| `Colors/Shared/Muted blue/22` | `#404B6C` |
| `Colors/Shared/Muted blue/24` | `#19506A` |
| `Colors/Shared/Muted blue/26` | `#3E5E60` |

#### Reddish

| Token | Hex |
|---|---|
| `Colors/Shared/Reddish/Primary` | `#FF5C5C` |
| `Colors/Shared/Reddish/10` | `#F25757` |
| `Colors/Shared/Reddish/15` | `#E65353` |
| `Colors/Shared/Reddish/25` | `#BF4545` |

#### Magenta

| Token | Hex |
|---|---|
| `Colors/Shared/Magenta/10` | `#FFEEF5` |
| `Colors/Shared/Magenta/20` | `#FED5E5` |
| `Colors/Shared/Magenta/30` | `#F9A8C8` |
| `Colors/Shared/Magenta/40` | `#EB84AD` |
| `Colors/Shared/Magenta/50` | `#ED5F98` |
| `Colors/Shared/Magenta/60` | `#EB3F84` |
| `Colors/Shared/Magenta/70` | `#D92A70` |
| `Colors/Shared/Magenta/80` | `#BF2261` |
| `Colors/Shared/Magenta/90` | `#66263F` |
| `Colors/Shared/Magenta/100` | `#42202E` |

#### Cyan

| Token | Hex |
|---|---|
| `Colors/Shared/Cyan/10` | `#EFF9FF` |
| `Colors/Shared/Cyan/20` | `#D1ECFB` |
| `Colors/Shared/Cyan/30` | `#A2D3EF` |
| `Colors/Shared/Cyan/40` | `#73BAE3` |
| `Colors/Shared/Cyan/50` | `#39ACEE` |
| `Colors/Shared/Cyan/60` | `#159BE8` |
| `Colors/Shared/Cyan/70` | `#0F7FC0` |
| `Colors/Shared/Cyan/80` | `#0F70A8` |
| `Colors/Shared/Cyan/90` | `#08507A` |
| `Colors/Shared/Cyan/100` | `#063A57` |

### Alpha Colors

| Token | Value |
|---|---|
| `Colors/Alpha/Black/0` | `#000000 @ 0%` |
| `Colors/Alpha/Black/15` | `#000000 @ 15%` |
| `Colors/Alpha/Black/25` | `#000000 @ 25%` |
| `Colors/Alpha/Black/42` | `#000000 @ 42%` |
| `Colors/Alpha/Black/55` | `#000000 @ 55%` |
| `Colors/Alpha/Black/85` | `#000000 @ 85%` |
| `Colors/Alpha/White/0` | `#FFFFFF @ 0%` |
| `Colors/Alpha/White/5` | `#FFFFFF @ 5%` |
| `Colors/Alpha/White/10` | `#FFFFFF @ 10%` |
| `Colors/Alpha/White/25` | `#FFFFFF @ 25%` |
| `Colors/Alpha/White/35` | `#FFFFFF @ 35%` |
| `Colors/Alpha/White/42` | `#FFFFFF @ 42%` |
| `Colors/Alpha/White/50` | `#FFFFFF @ 50%` |
| `Colors/Alpha/White/70` | `#FFFFFF @ 70%` |
| `Colors/Alpha/White/75` | `#FFFFFF @ 75%` |
| `Colors/Alpha/Dark steelblue primary/15` | `#69ABE6 @ 15%` |
| `Colors/Alpha/Dark steelblue primary/20` | `#69ABE6 @ 20%` |
| `Colors/Alpha/Dark steelblue primary/25` | `#69ABE6 @ 25%` |
| `Colors/Alpha/Light steelblue primary/5` | `#0074BD @ 5%` |
| `Colors/Alpha/Light steelblue primary/10` | `#0074BD @ 10%` |
| `Colors/Alpha/Light steelblue primary/25` | `#0074BD @ 25%` |
| `Colors/Alpha/Yellow primary/5` | `#F8A72D @ 5%` |
| `Colors/Alpha/Yellow primary/10` | `#F8A72D @ 10%` |
| `Colors/Alpha/Yellow primary/25` | `#F8A72D @ 25%` |
| `Colors/Alpha/Khaki primary/15` | `#FFE563 @ 15%` |
| `Colors/Alpha/Khaki primary/20` | `#FFE563 @ 20%` |
| `Colors/Alpha/Khaki primary/25` | `#FFE563 @ 25%` |
| `Colors/Alpha/Teal primary/5` | `#007C8A @ 5%` |
| `Colors/Alpha/Teal primary/10` | `#007C8A @ 10%` |
| `Colors/Alpha/Teal primary/20` | `#007C8A @ 20%` |

---

## Tier 2: Theme Collection (Semantic Aliases)

The Theme collection maps semantic roles to Global raw values. It supports three modes: **Light**, **Dark**, and **Contrast**.

> **How to read this table:** Each token name is the semantic role. The alias columns show which Global token it points to in each mode.

### Utility Colors

| Token | Light → Global | Dark → Global | Contrast → Global |
|---|---|---|---|
| `action` | `Colors/Brand/Light steelblue/Primary` | `Colors/Brand/Dark steelblue/Primary` | `Colors/Neutral/White` |
| `affirmation` | `Colors/Shared Depricate/Teal/Primary` | `Colors/Shared Depricate/Turquoise/Primary` | `Colors/Shared Depricate/Turquoise/Primary` |
| `caution` | `Colors/Shared/Yellow/Primary` | `Colors/Shared/Khaki/Primary` | `Colors/Shared/Khaki/Primary` |
| `error&warning` | `Colors/Shared Depricate/Red/Primary` | `Colors/Shared Depricate/Tomato/Primary` | `#FF9191` |
| `information` | `Colors/Brand/Light steelblue/Shade 25` | `Colors/Brand/Dark steelblue/2` | `Colors/Brand/Steelblue/10` |
| `positive change` | `Colors/Shared Depricate/Light green/80` | `Colors/Shared Depricate/Turquoise/Primary` | `Colors/Shared Depricate/Turquoise/Primary` |
| `negative change` | `Colors/Shared Depricate/Red/Primary` | `Colors/Shared Depricate/Tomato/Primary` | `#FF9191` |
| `highlight` | `Colors/Brand/Light steelblue/Tint 5` | `Colors/Brand/Dark steelblue/70` | `Colors/Brand/Steelblue/40` |
| `delay` | `Colors/Brand/Light steelblue/Primary` | `Colors/Brand/Steelblue/8` | `Colors/Brand/Steelblue/8` |

### Text Colors

| Token | Light → Global | Dark → Global | Contrast → Global |
|---|---|---|---|
| `default` | `Colors/Alpha/Black/85` | `Colors/Neutral/White` | `Colors/Neutral/White` |
| `subtle-and-hint` | `Colors/Alpha/Black/55` | `Colors/Shared Depricate/Slate gray/10` | `Colors/Alpha/White/70` |
| `disabled` | `Colors/Alpha/Black/25` | `Colors/Shared Depricate/Slate gray/20` | `Colors/Alpha/White/50` |
| `link` | `Colors/Brand/Light steelblue/Primary` | `Colors/Brand/Dark steelblue/Primary` | `#69ABE6` |
| `link-hover` | `Colors/Brand/Light steelblue/Shade 5` | `Colors/Brand/Dark steelblue/10` | `#78B3E8` |
| `primary-on-action` | `Colors/Neutral/White` | `Colors/Shared/Slate gray/80` | `Colors/Shared/Muted blue/14` |
| `secondary-on-action` | `Colors/Alpha/White/75` | `Colors/Alpha/Slate gray-80/75` | `#001524 @ 75%` |
| `caution-on-action` | `Colors/Neutral/Grey-2` | `Colors/Alpha/Slate gray-80/75` | `#001524 @ 75%` |
| `default-inversion` | `Colors/Alpha/Black/85` | `Colors/Shared Depricate/Slate gray/80` | `Colors/Neutral/White` |
| `primary-on-action-disabled` | `Colors/Alpha/White/50` | `Colors/Alpha/Slate gray-80/50` | `Colors/Shared/Muted blue/14` |
| `caution-on-action-disabled` | `Colors/Neutral/Grey-2` | `Colors/Alpha/Slate gray-80/75` | `#001524 @ 75%` |

### Neutral (Theme)

| Token | Light → Global | Dark → Global | Contrast → Global |
|---|---|---|---|
| `input-divider` | `Colors/Alpha/Black/42` | `Colors/Shared/Slate gray/30` | `Colors/Alpha/White/42` |
| `divider` | `Colors/Alpha/Black/15` | `Colors/Shared/Slate gray/40` | `Colors/Alpha/White/35` |
| `bg-2` | `Colors/Neutral/Grey-10` | `Colors/Shared/Slate gray/60` | `Colors/Alpha/White/10` |
| `bg-1` | `Colors/Neutral/Grey-12` | `Colors/Shared/Slate gray/70` | `Colors/Alpha/White/5` |
| `bg-0` | `Colors/Neutral/White` | `Colors/Shared/Slate gray/80` | `Colors/Shared/Muted blue/14` |
| `bg-dashboard-0` | `Colors/Neutral/Grey-10` | `Colors/Shared/Slate gray/90` | `Colors/Alpha/White/10` |
| `bg-dashboard-2` | `Colors/Neutral/White` | `Colors/Shared/Slate gray/70` | `Colors/Shared/Muted blue/14` |
| `bg-dropdown-0` | `Colors/Neutral/White` | `Colors/Shared/Slate gray/50` | `Colors/Alpha/White/5` |
| `bg-dropdown-2` | `Colors/Neutral/Grey-10` | `Colors/Shared/Slate gray/40` | `Colors/Alpha/White/10` |
| `bg-overlay-0` | `Colors/Neutral/White` | `Colors/Shared/Slate gray/60` | `Colors/Alpha/White/5` |

### Background Accent Colors

| Token | Light → Global | Dark → Global | Contrast → Global |
|---|---|---|---|
| `Action/action-5` | `Colors/Alpha/Light steelblue primary/5` | `Colors/Alpha/Dark steelblue primary/15` | `Colors/Alpha/White/5` |
| `Action/action-10` | `Colors/Alpha/Light steelblue primary/10` | `Colors/Alpha/Dark steelblue primary/20` | `Colors/Alpha/White/10` |
| `Action/action-25` | `Colors/Alpha/Light steelblue primary/25` | `Colors/Alpha/Dark steelblue primary/25` | `Colors/Alpha/White/25` |
| `Action/action-light-5` | `Colors/Brand/Light steelblue/Tint 5` | `Colors/Brand/Dark steelblue/90` | `Colors/Shared Depricate/Muted blue/6` |
| `Action/action-light-10` | `Colors/Brand/Light steelblue/Tint 10` | `Colors/Brand/Dark steelblue/80` | `Colors/Shared Depricate/Muted blue/4` |
| `Action/action-light-25` | `Colors/Brand/Light steelblue/Tint 25` | `Colors/Brand/Dark steelblue/60` | `Colors/Shared Depricate/Muted blue/2` |
| `Action/action-dark-5` | `Colors/Brand/Light steelblue/Shade 5` | `Colors/Brand/Dark steelblue/30` | `Colors/Neutral/Grey-8` |
| `Action/action-dark-10` | `Colors/Brand/Light steelblue/Shade 10` | `Colors/Brand/Dark steelblue/40` | `Colors/Neutral/Grey-6` |
| `Action/action-dark-25` | `Colors/Brand/Light steelblue/Shade 25` | `Colors/Brand/Dark steelblue/50` | `Colors/Neutral/Grey-4` |
| `Warning/warning-5` | `Colors/Alpha/Red primary/5` | `Colors/Alpha/Tomato primary/15` | `Colors/Alpha/Reddish primary/5` |
| `Warning/warning-10` | `Colors/Alpha/Red primary/10` | `Colors/Alpha/Tomato primary/20` | `Colors/Alpha/Reddish primary/15` |
| `Warning/warning-25` | `Colors/Alpha/Red primary/25` | `Colors/Alpha/Tomato primary/25` | `Colors/Alpha/Reddish primary/25` |
| `Warning/warning-light-5` | `Colors/Shared/Red/Tint 5` | `Colors/Shared/Tomato/Shade 15` | `Colors/Shared/Muted blue/20` |
| `Warning/warning-light-10` | `Colors/Shared/Red/Tint 10` | `Colors/Shared/Tomato/Shade 20` | `Colors/Shared/Muted blue/18` |
| `Warning/warning-light-25` | `Colors/Shared/Red/Tint 25` | `Colors/Shared/Tomato/Shade 25` | `Colors/Shared/Muted blue/22` |
| `Warning/warning-dark-5` | `Colors/Shared/Red/Shade 5` | `Colors/Shared/Tomato/Tint 5` | `Colors/Shared/Reddish/10` |
| `Warning/warning-dark-10` | `Colors/Shared/Red/Shade 10` | `Colors/Shared/Tomato/Tint 10` | `Colors/Shared/Reddish/15` |
| `Warning/warning-dark-25` | `Colors/Shared/Red/Shade 25` | `Colors/Shared/Tomato/Tint 25` | `Colors/Shared/Reddish/25` |
| `Caution/caution-5` | `Colors/Alpha/Yellow primary/5` | `Colors/Alpha/Khaki primary/15` | `Colors/Alpha/Yellow primary/5` |
| `Caution/caution-10` | `Colors/Alpha/Yellow primary/10` | `Colors/Alpha/Khaki primary/20` | `Colors/Alpha/Yellow primary/10` |
| `Caution/caution-25` | `Colors/Alpha/Yellow primary/25` | `Colors/Alpha/Khaki primary/25` | `Colors/Alpha/Yellow primary/25` |
| `Caution/caution-light-5` | `Colors/Shared Depricate/Yellow/Tint 5` | `Colors/Shared Depricate/Khaki/Shade 15` | `Colors/Shared Depricate/Muted blue/16` |
| `Caution/caution-light-10` | `Colors/Shared Depricate/Yellow/Tint 10` | `Colors/Shared Depricate/Khaki/Shade 20` | `Colors/Shared Depricate/Muted blue/24` |
| `Caution/caution-light-25` | `Colors/Shared Depricate/Yellow/Tint 25` | `Colors/Shared Depricate/Khaki/Shade 25` | `Colors/Shared Depricate/Muted blue/26` |
| `Caution/caution-dark-5` | `Colors/Shared Depricate/Yellow/Shade 5` | `Colors/Shared Depricate/Khaki/Tint 5` | `Colors/Shared Depricate/Yellow/Shade 5` |
| `Caution/caution-dark-10` | `Colors/Shared Depricate/Yellow/Shade 10` | `Colors/Shared Depricate/Khaki/Tint 10` | `Colors/Shared Depricate/Yellow/Shade 10` |
| `Caution/caution-dark-25` | `Colors/Shared Depricate/Yellow/Shade 25` | `Colors/Shared Depricate/Khaki/Tint 25` | `Colors/Shared Depricate/Yellow/Shade 25` |
| `Affirmation/affirmation-5` | `Colors/Alpha/Teal primary/5` | `Colors/Alpha/Turquoise primary/15` | `Colors/Alpha/Teal primary/15` |
| `Affirmation/affirmation-10` | `Colors/Alpha/Teal primary/10` | `Colors/Alpha/Turquoise primary/20` | `Colors/Alpha/Teal primary/20` |
| `Affirmation/affirmation-25` | `Colors/Alpha/Teal primary/25` | `Colors/Alpha/Turquoise primary/25` | `Colors/Alpha/Teal primary/25` |
| `Affirmation/affirmation-light-5` | `Colors/Shared Depricate/Teal/Tint 5` | `Colors/Shared Depricate/Turquoise/Shade 15` | `Colors/Shared Depricate/Muted blue/12` |
| `Affirmation/affirmation-light-10` | `Colors/Shared Depricate/Teal/Tint 10` | `Colors/Shared Depricate/Turquoise/Shade 20` | `Colors/Shared Depricate/Muted blue/10` |
| `Affirmation/affirmation-light-25` | `Colors/Shared Depricate/Teal/Tint 25` | `Colors/Shared Depricate/Turquoise/Shade 25` | `Colors/Shared Depricate/Muted blue/8` |
| `Affirmation/affirmation-dark-5` | `Colors/Shared Depricate/Teal/Shade 5` | `Colors/Shared Depricate/Turquoise/Tint 5` | `Colors/Shared Depricate/Teal/Shade 5` |
| `Affirmation/affirmation-dark-10` | `Colors/Shared Depricate/Teal/Shade 10` | `Colors/Shared Depricate/Turquoise/Tint 10` | `Colors/Shared Depricate/Teal/Shade 10` |
| `Affirmation/affirmation-dark-25` | `Colors/Shared Depricate/Teal/Shade 25` | `Colors/Shared Depricate/Turquoise/Tint 25` | `Colors/Shared Depricate/Teal/Shade 25` |
| `Neutral/neutral-5` | `Colors/Neutral/Grey-10` | `Colors/Alpha/White/10` | `Colors/Alpha/White/10` |
| `Neutral/neutral-10` | `Colors/Neutral/Grey-8` | `Colors/Alpha/White/15` | `Colors/Alpha/White/15` |
| `Neutral/neutral-25` | `Colors/Neutral/Grey-6` | `Colors/Alpha/White/25` | `Colors/Alpha/White/25` |

### Info / Feedback Colors

| Token | Light → Global | Dark → Global | Contrast → Global |
|---|---|---|---|
| `A/A + 3` | `Colors/Shared/Teal/90` | `Colors/Shared/Teal/20` | `Colors/Shared/Teal/20` |
| `A/A + 2` | `Colors/Shared/Teal/80` | `Colors/Shared/Teal/30` | `Colors/Shared/Teal/30` |
| `A/A + 1` | `Colors/Shared/Teal/70` | `Colors/Shared/Teal/40` | `Colors/Shared/Teal/40` |
| `A/A` | `Colors/Shared/Teal/60` | `Colors/Shared/Teal/50` | `Colors/Shared/Teal/50` |
| `A/A - 1` | `Colors/Shared/Teal/50` | `Colors/Shared/Teal/60` | `Colors/Shared/Teal/60` |
| `A/A - 2` | `Colors/Shared/Teal/40` | `Colors/Shared/Teal/70` | `Colors/Shared/Teal/70` |
| `A/A - 3` | `Colors/Shared/Teal/30` | `Colors/Shared/Teal/80` | `Colors/Shared/Teal/80` |
| `B/B + 3` | `Colors/Shared/Magenta/90` | `Colors/Shared/Magenta/20` | `Colors/Shared/Magenta/20` |
| `B/B + 2` | `Colors/Shared/Magenta/80` | `Colors/Shared/Magenta/30` | `Colors/Shared/Magenta/30` |
| `B/B + 1` | `Colors/Shared/Magenta/70` | `Colors/Shared/Magenta/40` | `Colors/Shared/Magenta/40` |
| `B/B` | `Colors/Shared/Magenta/60` | `Colors/Shared/Magenta/50` | `Colors/Shared/Magenta/50` |
| `B/B - 1` | `Colors/Shared/Magenta/50` | `Colors/Shared/Magenta/60` | `Colors/Shared/Magenta/60` |
| `B/B - 2` | `Colors/Shared/Magenta/40` | `Colors/Shared/Magenta/70` | `Colors/Shared/Magenta/70` |
| `B/B - 3` | `Colors/Shared/Magenta/30` | `Colors/Shared/Magenta/80` | `Colors/Shared/Magenta/80` |
| `C/C + 3` | `Colors/Shared/Purple/90` | `Colors/Shared/Purple/20` | `Colors/Shared/Purple/20` |
| `C/C + 2` | `Colors/Shared/Purple/80` | `Colors/Shared/Purple/30` | `Colors/Shared/Purple/30` |
| `C/C + 1` | `Colors/Shared/Purple/70` | `Colors/Shared/Purple/40` | `Colors/Shared/Purple/40` |
| `C/C` | `Colors/Shared/Purple/60` | `Colors/Shared/Purple/50` | `Colors/Shared/Purple/50` |
| `C/C - 1` | `Colors/Shared/Purple/50` | `Colors/Shared/Purple/60` | `Colors/Shared/Purple/60` |
| `C/C - 2` | `Colors/Shared/Purple/40` | `Colors/Shared/Purple/70` | `Colors/Shared/Purple/70` |
| `C/C - 3` | `Colors/Shared/Purple/30` | `Colors/Shared/Purple/80` | `Colors/Shared/Purple/80` |
| `D/D + 3` | `Colors/Shared/Green/90` | `Colors/Shared/Green/20` | `Colors/Shared/Green/20` |
| `D/D + 2` | `Colors/Shared/Green/80` | `Colors/Shared/Green/30` | `Colors/Shared/Green/30` |
| `D/D + 1` | `Colors/Shared/Green/70` | `Colors/Shared/Green/40` | `Colors/Shared/Green/40` |
| `D/D` | `Colors/Shared/Green/60` | `Colors/Shared/Green/50` | `Colors/Shared/Green/50` |
| `D/D - 1` | `Colors/Shared/Green/50` | `Colors/Shared/Green/60` | `Colors/Shared/Green/60` |
| `D/D - 2` | `Colors/Shared/Green/40` | `Colors/Shared/Green/70` | `Colors/Shared/Green/70` |
| `D/D - 3` | `Colors/Shared/Green/30` | `Colors/Shared/Green/80` | `Colors/Shared/Green/80` |
| `E/E+3` | `Colors/Shared/Rust/90` | `Colors/Shared/Rust/20` | `Colors/Shared/Rust/20` |
| `E/E+2` | `Colors/Shared/Rust/80` | `Colors/Shared/Rust/30` | `Colors/Shared/Rust/30` |
| `E/E+1` | `Colors/Shared/Rust/70` | `Colors/Shared/Rust/40` | `Colors/Shared/Rust/40` |
| `E/E` | `Colors/Shared/Rust/60` | `Colors/Shared/Rust/50` | `Colors/Shared/Rust/50` |
| `E/E-1` | `Colors/Shared/Rust/50` | `Colors/Shared/Rust/60` | `Colors/Shared/Rust/60` |
| `E/E-2` | `Colors/Shared/Rust/40` | `Colors/Shared/Rust/70` | `Colors/Shared/Rust/70` |
| `E/E-3` | `Colors/Shared/Rust/30` | `Colors/Shared/Rust/80` | `Colors/Shared/Rust/80` |
| `F/F+3` | `Colors/Shared/Blue/90` | `Colors/Shared/Blue/20` | `Colors/Shared/Blue/20` |
| `F/F+2` | `Colors/Shared/Blue/80` | `Colors/Shared/Blue/30` | `Colors/Shared/Blue/30` |
| `F/F+1` | `Colors/Shared/Blue/70` | `Colors/Shared/Blue/40` | `Colors/Shared/Blue/40` |
| `F/F` | `Colors/Shared/Blue/60` | `Colors/Shared/Blue/50` | `Colors/Shared/Blue/50` |
| `F/F-1` | `Colors/Shared/Blue/50` | `Colors/Shared/Blue/60` | `Colors/Shared/Blue/60` |
| `F/F-2` | `Colors/Shared/Blue/40` | `Colors/Shared/Blue/70` | `Colors/Shared/Blue/70` |
| `F/F-3` | `Colors/Shared/Blue/30` | `Colors/Shared/Blue/80` | `Colors/Shared/Blue/80` |
| `G/G+3` | `Colors/Shared/Cyan/90` | `Colors/Shared/Cyan/20` | `Colors/Shared/Cyan/20` |
| `G/G+2` | `Colors/Shared/Cyan/80` | `Colors/Shared/Cyan/30` | `Colors/Shared/Cyan/30` |
| `G/G+1` | `Colors/Shared/Cyan/70` | `Colors/Shared/Cyan/40` | `Colors/Shared/Cyan/40` |
| `G/G` | `Colors/Shared/Cyan/60` | `Colors/Shared/Cyan/50` | `Colors/Shared/Cyan/50` |
| `G/G-1` | `Colors/Shared/Cyan/50` | `Colors/Shared/Cyan/60` | `Colors/Shared/Cyan/60` |
| `G/G-2` | `Colors/Shared/Cyan/40` | `Colors/Shared/Cyan/70` | `Colors/Shared/Cyan/70` |
| `G/G-3` | `Colors/Shared/Cyan/30` | `Colors/Shared/Cyan/80` | `Colors/Shared/Cyan/80` |
| `H/H+3` | `Colors/Shared/Charcoal/90` | `Colors/Shared/Charcoal/20` | `Colors/Shared/Charcoal/20` |
| `H/H+2` | `Colors/Shared/Charcoal/80` | `Colors/Shared/Charcoal/30` | `Colors/Shared/Charcoal/30` |
| `H/H+1` | `Colors/Shared/Charcoal/70` | `Colors/Shared/Charcoal/40` | `Colors/Shared/Charcoal/40` |
| `H/H` | `Colors/Shared/Charcoal/60` | `Colors/Shared/Charcoal/50` | `Colors/Shared/Charcoal/50` |
| `H/H-1` | `Colors/Shared/Charcoal/50` | `Colors/Shared/Charcoal/60` | `Colors/Shared/Charcoal/60` |
| `H/H-2` | `Colors/Shared/Charcoal/40` | `Colors/Shared/Charcoal/70` | `Colors/Shared/Charcoal/70` |
| `H/H-3` | `Colors/Shared/Charcoal/30` | `Colors/Shared/Charcoal/80` | `Colors/Shared/Charcoal/80` |
| `H/H+4` | `Colors/Shared/Charcoal/100` | `Colors/Shared/Charcoal/10` | `Colors/Shared/Charcoal/10` |
| `H/H-4` | `Colors/Shared/Charcoal/20` | `Colors/Shared/Charcoal/90` | `Colors/Shared/Charcoal/90` |
| `H/H-5` | `Colors/Shared/Charcoal/10` | `Colors/Shared/Charcoal/100` | `Colors/Shared/Charcoal/100` |
| `B/B + 4` | `Colors/Shared/Magenta/100` | `Colors/Shared/Magenta/10` | `Colors/Shared/Magenta/10` |
| `B/B - 4` | `Colors/Shared/Magenta/20` | `Colors/Shared/Magenta/90` | `Colors/Shared/Magenta/90` |
| `B/B - 5` | `Colors/Shared/Magenta/10` | `Colors/Shared/Magenta/100` | `Colors/Shared/Magenta/100` |
| `D/D + 4` | `Colors/Shared/Green/100` | `Colors/Shared/Green/10` | `Colors/Shared/Green/10` |
| `D/D - 4` | `Colors/Shared/Green/20` | `Colors/Shared/Green/90` | `Colors/Shared/Green/90` |
| `D/D - 5` | `Colors/Shared/Green/10` | `Colors/Shared/Green/100` | `Colors/Shared/Green/100` |
| `C/C + 4` | `Colors/Shared/Purple/100` | `Colors/Shared/Purple/10` | `Colors/Shared/Purple/10` |
| `C/C - 4` | `Colors/Shared/Purple/20` | `Colors/Shared/Purple/90` | `Colors/Shared/Purple/90` |
| `C/C - 5` | `Colors/Shared/Purple/10` | `Colors/Shared/Purple/100` | `Colors/Shared/Purple/100` |
| `E/E+4` | `Colors/Shared/Rust/100` | `Colors/Shared/Rust/10` | `Colors/Shared/Rust/10` |
| `E/E-4` | `Colors/Shared/Rust/20` | `Colors/Shared/Rust/90` | `Colors/Shared/Rust/90` |
| `E/E-5` | `Colors/Shared/Rust/10` | `Colors/Shared/Rust/100` | `Colors/Shared/Rust/100` |
| `F/F+4` | `Colors/Shared/Blue/100` | `Colors/Shared/Blue/10` | `Colors/Shared/Blue/10` |
| `F/F-4` | `Colors/Shared/Blue/20` | `Colors/Shared/Blue/90` | `Colors/Shared/Blue/90` |
| `F/F-5` | `Colors/Shared/Blue/10` | `Colors/Shared/Blue/100` | `Colors/Shared/Blue/100` |
| `A/A + 4` | `Colors/Shared/Teal/100` | `Colors/Shared/Teal/10` | `Colors/Shared/Teal/10` |
| `A/A - 4` | `Colors/Shared/Teal/20` | `Colors/Shared/Teal/90` | `Colors/Shared/Teal/90` |
| `A/A - 5` | `Colors/Shared/Teal/10` | `Colors/Shared/Teal/100` | `Colors/Shared/Teal/100` |
| `G/G+4` | `Colors/Shared/Cyan/100` | `Colors/Shared/Cyan/10` | `Colors/Shared/Cyan/10` |
| `G/G-4` | `Colors/Shared/Cyan/20` | `Colors/Shared/Cyan/90` | `Colors/Shared/Cyan/90` |
| `G/G-5` | `Colors/Shared/Cyan/10` | `Colors/Shared/Cyan/100` | `Colors/Shared/Cyan/100` |

### Effects — Drop Shadow

| Token | Light → Global | Dark → Global | Contrast → Global |
|---|---|---|---|
| `Regular` | `Colors/Alpha/Black/8` | `Colors/Neutral/Black` | `Colors/Alpha/Black/15` |
| `Subtle` | `Colors/Alpha/Black/16` | `Colors/Neutral/Black` | `Colors/Alpha/Black/15` |

### Effects — Header Gradient

| Token | Light → Global | Dark → Global | Contrast → Global |
|---|---|---|---|
| `Right point` | `Colors/Neutral/Grey-4` | `Colors/Alpha/Slate gray-70/50` | `#FFFFFF` |
| `Left point` | `Colors/Neutral/Grey-6` | `Colors/Alpha/White/0` | `#FFFFFF` |

### Effects — Cell Gradient

| Token | Light → Global | Dark → Global | Contrast → Global |
|---|---|---|---|
| `Left point` | `Colors/Neutral/Grey-8` | `Colors/Alpha/White/5` | `#FFFFFF` |
| `Right point` | `Colors/Neutral/Grey-6` | `Colors/Alpha/White/10` | `#FFFFFF` |

### Effects — Overlay

| Token | Light → Global | Dark → Global | Contrast → Global |
|---|---|---|---|
| `Overlay` | `Colors/Alpha/Black/20` | `Colors/Alpha/Black/30` | `Colors/Alpha/Black/15` |

---

## Tier 3: Component Collection

> Component-level tokens will be added here once exported. These will alias Tier 2 semantic tokens.

*Pending export.*

---

## How to Use This File with Claude

When generating UI code or design decisions, follow these rules:

1. **Always use Tier 2 tokens** (semantic names like `Colors/Utility/action`) — never hardcode hex values from Tier 1 directly.
2. **Respect mode aliases** — `Colors/Utility/action` points to Light Steelblue in Light mode and Dark Steelblue in Dark mode. Generate mode-aware code accordingly.
3. **Typography hierarchy**: Use `Red Hat Display` (bold/700) for all headers H1–H6. Use `Red Hat Text` (regular/400) for body, paragraphs, and captions. Reference styles by name (e.g. `Header 2`, `Paragraph 1`) and use CSS variables (`--font-size-header-2`, `--font-family-header`) in code. For article/long-form content, use `Paragraph Article 1/2` which have explicit line heights (21px / 18px).
4. **Spacing**: Use values from the `Numbers/` scale (2, 4, 6, 8, 12, 14, 16, 18, 20, 21, 24, 28, 32, 36, 40, 48, 60, 80, 100, 200).
5. **Corner radius**: Use `Corner-radius/` tokens — None, Small, Medium, XL.
6. **Contrast mode**: A third mode exists for accessibility — ensure critical UI paths support it.
7. **Tier 3 (components)** will be added later — when present, always prefer the most specific (component-level) token.
