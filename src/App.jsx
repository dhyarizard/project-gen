import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const FIELDS = {
  "UI Design": [
    "a mobile app onboarding flow",
    "a dashboard for a SaaS product",
    "a checkout experience redesign",
    "a design system component library",
    "a settings page with dark/light mode toggle",
    "a music player interface",
    "a food delivery app home screen",
    "a flight booking interface",
    "a social media profile page",
    "a smartwatch UI for a fitness app",
    "a notification center redesign",
    "a ride-sharing app map screen",
  ],
  "UX Design": [
    "a user research report and journey map",
    "a usability audit with annotated wireframes",
    "an end-to-end checkout flow with user testing insights",
    "a service blueprint for an in-store experience",
    "a information architecture overhaul for a website",
    "a set of mid-fidelity wireframes for a mobile app",
    "a competitive analysis and UX recommendations deck",
    "an accessibility audit and redesign proposal",
    "a persona set and scenario map",
    "a prototype for a new feature with user flows",
  ],
  "Product Design": [
    "a full product concept from research to prototype",
    "a feature redesign with before/after documentation",
    "a product roadmap presentation",
    "a new product pitch deck with UX rationale",
    "a design critique and iteration report",
    "an end-to-end case study for a mobile product",
    "a north star vision prototype",
    "a product onboarding flow with retention strategy",
  ],
  "Motion Design": [
    "an animated logo reveal",
    "a set of UI micro-interactions",
    "a product launch bumper reel",
    "a looping background animation for a website hero",
    "an animated explainer for a product feature",
    "a title sequence for a podcast",
    "a scroll-triggered animation sequence for a landing page",
    "a set of animated social media story templates",
    "an app loading screen animation",
    "a motion style guide with 5 animation principles",
  ],
  "2D Animation": [
    "a 30-second character animation",
    "an animated short explaining a product concept",
    "a looping GIF series for social media",
    "a frame-by-frame title card animation",
    "an animated infographic",
    "a 2D explainer video storyboard and animatic",
    "a character walk cycle and expression sheet",
    "a hand-drawn animated ad",
  ],
  "3D Design": [
    "a 3D product visualization",
    "a set of 3D icons for a brand",
    "a 3D scene for a website hero section",
    "an animated 3D logo",
    "a 3D packaging mockup",
    "a stylized 3D character",
    "a 3D environment concept for a game or app",
    "a 3D motion loop for social media",
  ],
  "Logo & Brand Identity": [
    "a full brand identity system (logo, colors, typography)",
    "a logo redesign with rationale",
    "a secondary logo and icon suite",
    "a brand guidelines document",
    "a wordmark and monogram set",
    "a brand identity for a product launch",
    "a logo animation concept",
    "a brand refresh presentation",
  ],
  "Service Design": [
    "a service blueprint for a retail experience",
    "a customer journey map with pain points and opportunities",
    "a touchpoint redesign for a hospitality brand",
    "a service concept pitch deck",
    "an employee experience map for an onboarding process",
    "a co-design workshop plan and output report",
    "a multi-channel service flow diagram",
  ],
  "Graphic Design": [
    "a poster series (3 pieces)",
    "an editorial layout for a magazine spread",
    "a set of promotional banners for digital and print",
    "a zine (6–8 pages)",
    "an annual report layout",
    "a typographic poster series",
    "a set of event promotional materials",
    "a lookbook layout for a fashion brand",
    "a digital and print ad campaign (3 formats)",
  ],
  "Typography": [
    "a typographic poster series exploring one typeface",
    "a custom display lettering for a brand headline",
    "a type specimen sheet for a chosen typeface",
    "a typographic hierarchy system for a publication",
    "a hand-lettered quote series for social media",
    "a bilingual typographic layout",
    "a type-led brand identity concept",
  ],
  "Illustration": [
    "a set of editorial illustrations for an article",
    "a character design sheet with expressions and poses",
    "a spot illustration series for a brand's website",
    "a illustrated map of a city or space",
    "a series of product illustrations for packaging",
    "a conceptual cover illustration",
    "a pattern design using custom illustrations",
    "an icon set of 20 illustrated icons",
  ],
  "Packaging Design": [
    "a product packaging design with dieline",
    "a packaging redesign with before/after rationale",
    "a limited edition packaging concept",
    "a sustainable packaging concept with material notes",
    "a multi-SKU packaging system",
    "an unboxing experience design",
    "a label design for a food or beverage product",
  ],
  "UX Writing": [
    "a microcopy audit and rewrite for an app",
    "an onboarding email sequence (5 emails)",
    "an error message and empty state copy library",
    "a content strategy document for a product section",
    "a tone of voice guide with before/after examples",
    "a chatbot conversation script",
    "a help center article series (3 articles)",
  ],
  "Design Systems": [
    "a component library with 10 core UI components",
    "a design token system (color, spacing, typography)",
    "a design system documentation site mockup",
    "an icon library of 30 consistent icons",
    "a dark mode extension for an existing design system",
    "a motion and animation guidelines document",
    "an audit of an existing product's design inconsistencies",
  ],
  "AR/VR Design": [
    "an AR product try-on experience concept",
    "a VR onboarding flow wireframe and prototype",
    "a spatial UI concept for a VR app",
    "an AR filter for social media",
    "a 360° environment design concept",
    "a mixed reality shopping experience concept",
  ],
  "Game UI": [
    "a HUD design for a mobile game",
    "a main menu and settings screen for a game",
    "an inventory and item management UI",
    "a game onboarding tutorial flow",
    "a leaderboard and achievement screen",
    "a game UI style guide with 5 core screens",
  ],
  "Social Media Design": [
    "a full Instagram grid concept (9 posts)",
    "a set of animated story templates",
    "a social media brand kit (colors, fonts, templates)",
    "a campaign content set for a product launch (6 posts)",
    "a LinkedIn carousel series (3 carousels)",
    "a YouTube thumbnail series",
    "a TikTok visual concept and title card set",
  ],
  "Environmental Design": [
    "a retail store interior concept",
    "a trade show booth design",
    "a branded office environment concept",
    "a pop-up space design",
    "a museum exhibit layout concept",
    "a signage system for a public space",
    "a branded vehicle wrap design",
  ],
};

const BRANDS = [
  // Real global brands
  "Nike", "Spotify", "Rolex", "IKEA", "Duolingo", "Patagonia", "Apple",
  "Airbnb", "Netflix", "Adidas", "Dyson", "Lego", "Red Bull", "Porsche",
  "Supreme", "Glossier", "Muji", "Aesop", "Polaroid", "Moleskine",
  "Leica", "Brompton", "Razer", "Sonos", "Oatly", "Notion", "Figma",
  "Casper", "Away", "Allbirds", "Hinge", "Monzo", "Headspace", "Calm",
  // Fictional descriptive brands
  "a boutique Norwegian cold-brew coffee brand that ships across Scandinavia",
  "a cult Japanese streetwear label known for minimalist workwear",
  "an ethical smartphone brand founded in Berlin",
  "a luxury pet care brand for urban dog owners",
  "a Scandinavian dog grooming chain with 30 locations",
  "a women-led architecture and interior design studio",
  "a premium composting startup backed by climate investors",
  "a heritage Italian leather goods brand with 80 years of history",
  "a Gen Z-focused mental health app with a bold visual identity",
  "a sustainable sneaker brand made entirely from ocean plastic",
  "a members-only co-working space for creative freelancers",
  "a direct-to-consumer olive oil brand from rural Greece",
  "a Michelin-starred restaurant expanding into meal kit delivery",
  "a vinyl record subscription service for jazz enthusiasts",
  "a Black-owned skincare brand targeting professional women",
  "a zero-waste grocery store chain launching in major US cities",
  "a high-end camping gear brand inspired by Japanese craftsmanship",
  "a fintech startup offering banking services to gig workers",
  "a children's book publisher focused on diverse storytelling",
  "a boutique cycling apparel brand popular in the European peloton",
  "an independent watchmaker known for open-case mechanical designs",
  "a plant-based fast food chain with a streetwear-influenced identity",
  "a luxury travel agency specializing in off-grid experiences",
  "a climate tech company visualizing carbon data for enterprises",
  "a Filipino-inspired bakery with three locations in London",
  "a nonprofit teaching coding to teenagers in underserved communities",
  "a Korean beauty brand entering the Western market",
  "a premium meditation cushion and accessories brand",
  "a challenger bank built exclusively for freelancers and creatives",
  "an indie game studio known for narrative-driven mobile games",
];

const AUDIENCES = [
  "stay-at-home parents",
  "Gen Z first-time voters",
  "remote workers living abroad",
  "professional athletes in their 30s",
  "first-generation college students",
  "retired women over 65",
  "urban cyclists commuting daily",
  "independent musicians building a fanbase",
  "small business owners in rural areas",
  "teenage gamers in Southeast Asia",
  "corporate lawyers looking to switch careers",
  "new mothers returning to the workforce",
  "sustainability-conscious Gen X consumers",
  "night-shift healthcare workers",
  "freelance designers earning under $50k",
  "affluent empty-nesters downsizing their homes",
  "high school art teachers",
  "first-time homebuyers in their late 20s",
  "multilingual immigrants navigating a new country",
  "fitness enthusiasts training for their first marathon",
  "seniors learning to use smartphones for the first time",
  "college students managing money for the first time",
  "LGBTQ+ couples planning a wedding",
  "startup founders under 25",
  "people recovering from long-term illness",
  "plant-based eaters in meat-heavy cultures",
  "people in long-distance relationships",
  "night-owl creative professionals",
  "parents of children with learning disabilities",
  "digital nomads between 28 and 40",
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ─── STYLES ──────────────────────────────────────────────────────────────────

const style = `
  @font-face {
    font-family: 'Ngetic Modern';
    src: url('/fonts/NgeticModern-Regular.otf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Ngetic Modern Italic';
    src: url('/fonts/NgeticModern-Italic.otf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Neue Montreal';
    src: url('/fonts/NeueMontreal-Regular.otf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Neue Montreal Light';
    src: url('/fonts/NeueMontreal-Light.otf') format('truetype');
  }

  @font-face {
    font-family: 'Neue Montreal Medium';
    src: url('/fonts/NeueMontreal-Medium.otf') format('truetype');
  }


  @font-face {
    font-family: 'Neue Montreal Bold';
    src: url('/fonts/NeueMontreal-Bold.otf') format('truetype');
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #F3EFF5;
    --surface: #F3EFF5;
    --border: #3F7D20;
    --accent: #3F7D20;
    --accent2: #BC4749;
    --text: #0D0A0B;
    --muted: #454955;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Neue Montreal', sans-serif;
    min-height: 100vh;
  }

  .app {
    max-width: 860px;
    margin: 0 auto;
    padding: 60px 24px 100px;
  }

  .eyebrow {
    font-size: 14px;
    font-family: 'Neue Montreal Bold', sans-serif;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #3F7D20;
    margin-bottom: 12px;
  }

  h1 {
    font-family: 'Ngetic Modern', serif;
    font-size: clamp(52px, 10vw, 96px);
    line-height: 0.92;
    color: #0D0A0B;
    margin-bottom: 20px;
  }

  h1 span { color: #0D0A0B; }

  .subtitle {
    font-size: 16px;
    color: #454955;
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 56px;
    text-align: center;
  }

  .section-label {
    font-size: 14px;
    font-family: 'Neue Montreal Medium', sans-serif;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #0D0A0B;
    margin-bottom: 16px;
    font-weight: 500;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 40px;
    justify-content: center;
  }

  .chip {
    padding: 8px 16px;
    border-radius: 2px;
    border: 1px solid var(--muted);
    background: var(--surface);
    color: #555;
    font-size: 14px;
    letter-spacing: 0.01em;
    font-family: 'Neue Montreal', sans-serif;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .chip:hover { border-color: #555; color: var(--text); }

  .chip.active {
    background: #A7C957;
    color: #0d0d0d;
    border-color: #A7C957;
    font-weight: 500;
  }

  .chip.random {
    border-color: var(--accent);
    color: var(--accent);
  }

  .chip.random.active {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
  }

  hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 8px 0 36px;
  }

  .toggle-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 20px;
    background: var(--surface);
    border: 1px solid var(--muted);
    border-radius: 2px;
    margin-bottom: 36px;
  }

  .toggle-info { text-align: left; }
  .toggle-info h3 { font-size: 16px; font-family: 'Neue Montreal Medium', sans-serif; margin-bottom: 3px; }
  .toggle-info p { font-size: 14px; color: var(--muted); font-weight: 300; }

  .toggle { position: relative; width: 44px; height: 24px; flex-shrink: 0; }
  .toggle input { opacity: 0; width: 0; height: 0; }

  .toggle-slider {
    position: absolute;
    inset: 0;
    background: #aaa;
    border-radius: 24px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .toggle-slider::before {
    content: '';
    position: absolute;
    width: 18px; height: 18px;
    left: 3px; top: 3px;
    background: #454955;
    border-radius: 50%;
    transition: transform 0.2s, background 0.2s;
  }

  .toggle input:checked + .toggle-slider { background: var(--accent); }
  .toggle input:checked + .toggle-slider::before {
    transform: translateX(20px);
    background: #F3EFF5;
  }

  .generate-btn {
    width: 100%;
    text-transform: uppercase;
    padding: 20px;
    background: #A7C957;
    color: #0d0d0d;
    border: none;
    border-radius: 2px;
    font-family: 'Ngetic Modern', serif;
    font-size: 22px;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .generate-btn:hover:not(:disabled) {
    background: #3F7D20;
    color: #F3EFF5;
    transform: translateY(-1px);
  }

  .generate-btn:disabled {
    background: #aaa;
    color: #555;
    cursor: not-allowed;
  }

  .output {
    margin-top: 48px;
    border: 1px solid var(--muted);
    border-left: 3px solid var(--accent);
    padding: 40px 36px;
    background: var(--surface);
    animation: fadeUp 0.35s ease forwards;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .output-row {
    display: grid;
    grid-template-columns: 140px 1fr;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 20px;
  }

  .output-row:last-of-type { margin-bottom: 0; }

  .output-label {
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text);
    font-family: 'Neue Montreal Medium', sans-serif;
    padding-top: 6px;
    text-align: left;
  }

  .output-value {
    font-family: 'Neue Montreal Bold', sans-serif;
    font-size: clamp(26px, 4.5vw, 36px);
    line-height: 1.05;
    color: var(--text);
    letter-spacing: 0.02em;
    text-align: left;
  }

  .output-value.highlight { color: var(--accent); }

  .regen-btn {
    margin-top: 32px;
    padding: 10px 20px;
    background: transparent;
    border: 1px solid var(--border);
    color: var(--muted);
    font-family: 'Neue Montreal', sans-serif;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.15s;
  }

  .regen-btn:hover { border-color: #555; color: var(--text); }
`;

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function ProjectGenerator() {
  const [selected, setSelected] = useState([]);
  const [isRandom, setIsRandom] = useState(false);
  const [includeAudience, setIncludeAudience] = useState(true);
  const [output, setOutput] = useState(null);

  const toggleField = (field) => {
    setIsRandom(false);
    setSelected(prev =>
      prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
    );
  };

  const toggleRandom = () => {
    setIsRandom(prev => !prev);
    setSelected([]);
  };

  const canGenerate = isRandom || selected.length > 0;

  const generate = () => {
    // Pick one field from the selected pool (or all fields if random)
    const pool = isRandom ? Object.keys(FIELDS) : selected;
    const chosenField = pick(pool);
    const assignments = FIELDS[chosenField];

    setOutput({
      field: chosenField,
      design: pick(assignments),
      brand: pick(BRANDS),
      audience: includeAudience ? pick(AUDIENCES) : null,
    });
  };

  return (
    <>
      <style>{style}</style>
      <div className="app">
        <div className="eyebrow">Portfolio Tool</div>
        <h1>PROJECT<br /><span>GEN</span></h1>
        <p className="subtitle">Get a portfolio-worthy brief you can execute in under 10 days.</p>

        <div className="section-label">01 — Design Fields</div>
        <div className="chips">
          <button className={`chip random ${isRandom ? "active" : ""}`} onClick={toggleRandom}>
            ✦ Random
          </button>
          {Object.keys(FIELDS).map(field => (
            <button
              key={field}
              className={`chip ${selected.includes(field) ? "active" : ""}`}
              onClick={() => toggleField(field)}
            >
              {field}
            </button>
          ))}
        </div>

        <hr />

        <div className="section-label">02 — Options</div>
        <div className="toggle-row">
          <div className="toggle-info">
            <h3>Include Target Audience</h3>
            <p>Adds a specific audience segment to the brief</p>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              checked={includeAudience}
              onChange={e => setIncludeAudience(e.target.checked)}
            />
            <span className="toggle-slider" />
          </label>
        </div>

        <button className="generate-btn" onClick={generate} disabled={!canGenerate}>
          Generate Brief
        </button>

        {output && (
          <div className="output">
            <div className="output-row">
              <span className="output-label">Design</span>
              <span className="output-value">{output.design}</span>
            </div>
            <div className="output-row">
              <span className="output-label">For</span>
              <span className="output-value highlight">{output.brand}</span>
            </div>
            {output.audience && (
              <div className="output-row">
                <span className="output-label">Targeted To</span>
                <span className="output-value">{output.audience}</span>
              </div>
            )}
            <button className="regen-btn" onClick={generate}>↻ Regenerate</button>
          </div>
        )}
      </div>
    </>
  );
}