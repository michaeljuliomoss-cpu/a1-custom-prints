# A1 Custom Prints & Embroidery — Design System

## Grounded in: Headspace (headspace.com) via OpenDesign

> Source: https://opendesign.cc/packs/headspace/spec.json
> Design director protocol applied: real tokens, not AI-slop defaults.

## Identity

A warm, playful consumer brand that makes custom printing feel approachable — not industrial.
Think: friendly print shop in the Bahamas, not corporate merchandise factory.

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F9F4F2` | Main background (warm off-white) |
| `--ink` | `#2D2C2B` | Body text, headings |
| `--ink-soft` | `#4B4C4D` | Secondary text |
| `--muted` | `#44433F` | Placeholders, fine print |
| `--accent` | `#FFCE00` | CTAs, highlights, badges |
| `--accent-2` | `#0061EF` | Secondary actions, links |
| `--line` | `rgba(75,76,77,0.3)` | Dividers, borders |

**Principle:** Warm off-white base with high-chroma yellow accent. Deep charcoal text for maximum readability and warmth. One accent does the heavy lifting — no gradient soup.

## Typography

- **Display & Body:** Humanist sans-serif (Nunito as Google Font proxy — warm, rounded, friendly)
- Clean, approachable, not corporate

| Token | Size | Line-height | Weight | Letter-spacing | Use |
|---|---|---|---|---|---|
| display | clamp(44px, 7vw, 64px) | 1.05 | 700 | -1.2px | Hero headlines |
| h1 | clamp(32px, 5vw, 48px) | 1.1 | 700 | -0.96px | Section titles |
| h2 | clamp(24px, 4vw, 32px) | 1.2 | 700 | -0.54px | Card headings |
| h3 | 20px | 1.3 | 700 | -0.3px | Subsection titles |
| body | 17px | 1.6 | 400 | 0 | Primary body text |
| caption | 13px | 1.15 | 400 | 0 | Labels, fine print |

**Type rules:**
- Tight line-heights (1.0-1.2) for headlines
- Negative letter-spacing on larger text
- Bold (700) for all headings — no thin weights

## Spacing

Base: 4px. Scale: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 px
Generous section spacing (48-64px). Comfortable inner padding (24-32px). Breathable.

## Surfaces

- **Radius:** sm 8px, md 16px, lg 32px, pill 999px
- **Shadows:** `0px 1px 8px 0px rgba(20,19,19,0.2)` — soft, low-contrast
- **Borders:** Minimal. Cards use subtle shadows instead. When present, 2px solid muted charcoal.

## Layout

- Container max: 1280px
- Paragraph max: 680px
- 12-column grid, 24px gutter
- Breakpoints: 768 / 1024 px
- Skeleton: Centered single-column hero with large typography → two-column card layout → full-width sections

## Motion

- **Durations:** micro 150ms, small 300ms, medium 400ms
- **Easing:** `cubic-bezier(0.32, 0.94, 0.6, 1)`
- **Patterns:** Color/background transitions on hover. Transform on hover. Opacity fades for reveals.
- No bouncy springs. No gradient animations. Quick, smooth, polished.

## Voice

- Warm, encouraging, approachable
- Conversational, benefit-focused
- Direct CTAs: "Get started", "Pick your style", "Upload your design"
- Avoid: corporate jargon, aggressive sales language, clinical tone

## Don'ts

- ❌ No cold blue-gray backgrounds — warm off-white only
- ❌ No sharp, angular shapes — rounded corners (16-32px) on everything
- ❌ No gradient text or gradient buttons
- ❌ No color overlays on product images — show them clean
- ❌ No mix-blend-mode on images
- ❌ No serif or decorative fonts — clean humanist sans-serif
- ❌ No dense, cramped layouts — generous whitespace
- ❌ No harsh saturated colors everywhere — accent only on CTAs/highlights
- ❌ No thin text weights for headlines — bold (700) consistently
- ❌ No radial gradient blob decorations
- ❌ No Poppins, no Inter, no generic AI fonts

## Adaptation Notes

- Headspace is wellness/consumer → A1 is custom apparel/consumer → same approachable, warm energy
- Yellow accent (#FFCE00) works for a creative print shop — energetic, sunny, tropical
- Blue secondary (#0061EF) for links and secondary actions — trust without being cold
- Product images shown as-is on clean white card backgrounds — no colored gradient behind them
- Rounded shapes (16-32px radius) suit a friendly, modern ordering experience
