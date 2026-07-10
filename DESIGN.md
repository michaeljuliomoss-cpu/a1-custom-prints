# A1 Custom Prints & Embroidery — Design System

## Grounded in: Regrocery (regrocery.co) via OpenDesign

> Source: https://opendesign.cc/packs/regrocery/spec.json
> Design director protocol applied: real tokens, not AI-slop defaults.

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F7F6F2` | Main background (warm off-white) |
| `--bg-soft` | `#EFEDF7` | Card/section backgrounds |
| `--ink` | `#211D1C` | Body text, headings |
| `--accent` | `#F74C25` | CTAs, highlights, borders |
| `--line` | `rgba(247, 76, 37, 1.0)` | Dividers, thin borders |

**Principle:** Warm neutrals + single orange-red accent. Restraint over noise.

## Typography

- **Display:** Didone serif (Playfair Display as Google Font proxy) — hero headlines only
- **Body:** Humanist sans (Inter as fallback, but using "Segoe UI" system stack for warmth) — all functional text

| Token | Size | Line-height | Weight | Letter-spacing | Use |
|---|---|---|---|---|---|
| display | clamp(48px, 8vw, 100px) | 0.85 | 400 | -3px | Hero headlines |
| heading | clamp(28px, 4vw, 40px) | 1.1 | 400 | -1.5px | Section headings |
| subheading | 20px | 1.3 | 600 | -0.4px | Subsection titles |
| body | 18px | 1.6 | 400 | -0.2px | Primary body text |

## Spacing

Base: 4px. Scale: 4 / 8 / 10 / 16 / 20 / 30 / 40 / 60 / 95px
Generous whitespace — let products and typography breathe.

## Surfaces

- **Radius:** sm 4px, md 8px, lg/pill 999px
- **Shadow:** `0px 0px 20px 0px rgba(0,0,0,0.05)`
- **Borders:** Thin 1px solid in accent color

## Layout

- Container max: 1280px
- Paragraph max: 680px
- 12-column grid, 20px gutter
- Breakpoints: 768 / 1024 px
- Skeleton: Asymmetric splits, large hero image + text blocks

## Motion

- Durations: micro 220ms, small 400ms, medium 800ms
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`
- Pattern: Smooth background-color transitions on hover

## Don'ts

- ❌ No cluttered layouts — generous whitespace
- ❌ No sans-serif for display headlines — use serif
- ❌ No harsh primary colors — use the warm orange-red
- ❌ No square corners on buttons — pill-shaped
- ❌ No cold clinical white backgrounds — warm off-white
- ❌ No generic corporate language

## Adaptation Notes

- Regrocery is e-commerce/editorial → A1 is product/custom-order → same product showcase energy
- Orange-red accent works perfectly for a Bahamas print shop (warm, tropical)
- Didone serif gives premium feel to custom embroidery/print work
- Pill buttons suit a modern, friendly ordering experience
