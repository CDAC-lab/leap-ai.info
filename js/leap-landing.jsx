
    const FONT_DISPLAY = "'Geist', ui-sans-serif, sans-serif";
    const FONT_SERIF   = "'Instrument Serif', Georgia, serif";
    const FONT_MONO    = "'JetBrains Mono', ui-monospace, monospace";

    const CONTENT = {
      hero: {
        eyebrow: "La Trobe Energy Analytics Platform",
        location: "Bundoora · Bendigo · Albury–Wodonga · Mildura · Shepparton",
        lede: "LEAP is La Trobe University's flagship AI program for net-zero carbon emissions. It harnesses Predictive, Explainable, Generative and Causal AI to turn a billion data points from 200 sources into the decisions a facilities team makes every morning.",
      },
      capabilities: [
        { tag:"01", kind:"Predictive",   title:"Forecast", body:"Short-, medium- and long-term forecasting of building load, renewables generation and weather-coupled demand — tuned per building's 'micro-seasons'.", example:"Long Horizon Forecasting 12 months → Nearcasting next minutes" },
        { tag:"02", kind:"Explainable",  title:"Explain",  body:"Every alert and prediction is delivered with a chain of evidence a facilities manager can act on — not a black box.", example:"Anomaly attribution + drivers per asset" },
        { tag:"03", kind:"Generative",   title:"Converse", body:"An AI assistant lets any staff member ask the data plain-English questions: how is the campus tracking, what's drifting, what's possible.", example:"Plain-English Q&A across the data lake" },
        { tag:"04", kind:"Causal",       title:"Reason",   body:"Causal models separate what changed from what caused the change — so investment in chillers, glazing or controls can be justified before it's spent.", example:"Counterfactuals on retrofit decisions" },
      ],
      pipeline: [
        { step:"01", title:"Sense",  body:"Streaming data across multiple sources." },
        { step:"02", title:"Lake",   body:"200 disparate sources unified into a governed, queryable Azure Data Lake." },
        { step:"03", title:"Reason", body:"Predictive · Explainable · Generative · Causal AI runs continuously over the lake." },
        { step:"04", title:"Act",    body:"Actionable insights surface to facilities, finance and academia — every weekday morning." },
      ],
      metrics: [
        { figure:"45,000", unit:"t CO₂e",   label:"Emissions abated since inception" },
        { figure:"1B+",    unit:"points",    label:"Data signals ingested daily" },
        { figure:"200",    unit:"sources",   label:"Meters, sensors, satellites, BoM" },
        { figure:"267",    unit:"hectares",  label:"Across 5 campuses, 100+ buildings" },
        { figure:"3.6",    unit:"MW",        label:"Solar PV under live optimisation" },
        { figure:"2029",   unit:"",          label:"Net-zero target year" },
      ],
      awards: [
        { year:"2022", title:"Best Paper Award",          venue:"IEEE 15th Conference on Human System Interaction" },
        { year:"2021", title:"Clever Campus Innovation",  venue:"Tertiary Education Facilities Management Assoc." },
        { year:"2024", title:"AI-First Strategy partner", venue:"Microsoft × La Trobe" },
      ],
    };

    function Kicker({ children, color="var(--ink)", style }) {
      return (
        <span style={{
          fontFamily: FONT_MONO, fontSize: 11, letterSpacing: ".12em",
          textTransform: "uppercase", color, opacity: .75, ...style,
        }}>{children}</span>
      );
    }

    function PhotoSlot({ label, ratio="4 / 3", style }) {
      return (
        <div style={{
          aspectRatio: ratio, background: "var(--paper)",
          backgroundImage: "repeating-linear-gradient(135deg, rgba(15,26,20,0.06) 0 1px, transparent 1px 14px)",
          position: "relative", overflow: "hidden", ...style,
        }}>
          <div style={{
            position:"absolute", inset:0, display:"flex", alignItems:"flex-end",
            padding:"16px 18px", color:"var(--ink)", opacity:.6,
            fontFamily: FONT_MONO, fontSize: 11, letterSpacing:".08em", textTransform:"uppercase",
          }}>▸ {label}</div>
        </div>
      );
    }

    function LogoMark() {
      return (
        <div style={{ position:"relative", width: 28, height: 28 }}>
          <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:"1.5px solid var(--ink)" }} />
          <div style={{ position:"absolute", left:4, top:4, right:4, bottom:4, borderRadius:"50%", background:"var(--accent)" }} />
          <div style={{ position:"absolute", left:10, top:10, right:10, bottom:10, borderRadius:"50%", background:"var(--bg)" }} />
        </div>
      );
    }

    function Sparkline({ height=64, color="var(--accent)" }) {
      const pts = [10, 22, 18, 30, 26, 38, 32, 44, 38, 50, 46, 56, 52, 64, 60, 70, 66, 76, 72, 80];
      const max = 90, step = 100 / (pts.length - 1);
      const path = pts.map((y, i) => `${i === 0 ? "M" : "L"} ${i*step} ${100 - (y/max)*100}`).join(" ");
      return (
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width:"100%", height, display:"block" }}>
          <defs>
            <linearGradient id="sl-grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%"   stopColor={color} stopOpacity="0.22" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${path} L 100 100 L 0 100 Z`} fill="url(#sl-grad)" />
          <path d={path} fill="none" stroke={color} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
      );
    }

    function TopBar() {
      return (
        <div className="pad-32" style={{
          display:"grid", gridTemplateColumns:"auto 1fr auto", alignItems:"center", gap:24,
          padding:"14px 32px", background:"var(--ink)", color:"var(--bg)",
          fontFamily: FONT_MONO, fontSize: 11, letterSpacing:".08em", textTransform:"uppercase",
        }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"#a6c388" }} />
            <span>Live · LEAP control plane · ingest healthy</span>
          </div>
          <div style={{ textAlign:"center", opacity:.7 }}>T −1,034 days to net-zero target · 2029</div>
          <div style={{ opacity:.7 }}>v 4.2 · CDAC</div>
        </div>
      );
    }

    const navLink = { color:"inherit", textDecoration:"none" };
    function Nav() {
      return (
        <div className="pad-32" style={{
          display:"flex", alignItems:"center", justifyContent:"space-between",
          padding:"22px 32px", borderBottom:"1px solid var(--hair)",
        }}>
          <div style={{ display:"flex", alignItems:"center", gap:14 }}>
            <LogoMark />
            <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 18, letterSpacing:"-0.01em" }}>
              LEAP<span style={{ color:"var(--accent)" }}>.</span>
            </span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 11, opacity:.5, paddingLeft:6 }}>
              la trobe energy analytics platform
            </span>
          </div>
          <nav style={{ display:"flex", gap:28, fontFamily: FONT_DISPLAY, fontSize: 13, color:"var(--ink)" }}>
            <a href="#platform" style={navLink}>Platform</a>
            <a href="#methods"  style={navLink}>Methods</a>
            <a href="#works"    style={navLink}>Living Lab</a>
            <a href="#impact"   style={navLink}>Impact</a>
            <a href="#awards"   style={navLink}>Awards</a>
          </nav>
          <button style={{
            fontFamily: FONT_DISPLAY, fontSize: 13, fontWeight: 500,
            padding:"10px 16px", borderRadius: 999,
            background:"var(--ink)", color:"var(--bg)", border:"none", cursor:"pointer",
          }} onClick={()=>window.location.href='/cooee/'}>Talk to LEAP →</button>
        </div>
      );
    }

    function HeroPanel() {
      return (
        <div style={{
          background:"var(--paper)", border:"1px solid var(--hair)",
          padding:"24px", display:"flex", flexDirection:"column", gap:18,
        }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline" }}>
            <Kicker>Live · cumulative abatement</Kicker>
            <Kicker style={{ color:"var(--accent)", opacity:1 }}>● rec</Kicker>
          </div>
          <div style={{ display:"flex", alignItems:"baseline", gap:12 }}>
            <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 64, lineHeight:1, letterSpacing:"-0.03em" }}>
              45,000
            </span>
            <span style={{ fontFamily: FONT_MONO, fontSize: 12, opacity:.65 }}>t CO₂e · since 2020</span>
          </div>
          <Sparkline height={80} />
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr",
                        borderTop:"1px solid var(--hair)", paddingTop:12 }}>
            {[["1B+","signals / day"], ["200","sources"], ["3.6 MW","solar live"]].map(([n,l], i) => (
              <div key={i} style={{ display:"flex", flexDirection:"column", gap:2 }}>
                <span style={{ fontFamily: FONT_DISPLAY, fontWeight:600, fontSize:18 }}>{n}</span>
                <span style={{ fontFamily: FONT_MONO, fontSize:10, opacity:.6, textTransform:"uppercase", letterSpacing:".06em" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    function Hero() {
      const c = CONTENT.hero;
      return (
        <section id="platform" className="pad-32" style={{ padding:"48px 32px 64px" }}>
          <div className="hero-split" style={{ display:"grid", gridTemplateColumns:"7fr 5fr", gap:32, alignItems:"stretch" }}>
            <div style={{ display:"flex", flexDirection:"column", gap:28, padding:"24px 24px 0 0" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
                <Kicker>§ Mission</Kicker>
                <Kicker style={{ opacity:.55 }}>{c.location}</Kicker>
              </div>
              <h1 style={{
                margin: 0, fontFamily: FONT_DISPLAY, color:"var(--ink)",
                fontSize: "clamp(48px, 7vw, 104px)", lineHeight: 0.98,
                letterSpacing: "-0.035em", fontWeight: 500, textWrap:"balance",
              }}>
                Net Zero comes through{" "}
                <span style={{ fontFamily: FONT_SERIF, fontStyle:"italic", color:"var(--accent)", fontWeight:400 }}>
                  thousands of better decisions.
                </span>
                <br/>LEAP is the AI that make it possible.
              </h1>
              <p style={{ fontFamily: FONT_DISPLAY, fontSize: 17, lineHeight: 1.55, opacity:.78, maxWidth: 540, margin:0 }}>
                {c.lede}
              </p>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <button style={{ padding:"14px 22px", border:"none", cursor:"pointer", borderRadius:999,
                                 background:"var(--ink)", color:"var(--bg)",
                                 fontFamily: FONT_DISPLAY, fontWeight:500, fontSize:14 }}
                                 onClick={()=>window.location.href='/use-cases/'}>
                  See LEAP in action →
                </button>
                <button style={{ padding:"14px 22px", borderRadius:999, cursor:"pointer",
                                 background:"transparent", color:"var(--ink)",
                                 border:"1px solid var(--hair-strong)",
                                 fontFamily: FONT_DISPLAY, fontWeight:500, fontSize:14 }}
                                 onClick={()=>window.location.href='/ai-capabilities/'}>
                  Read the methodology
                </button>
              </div>
              <div className="col-4" style={{
                marginTop:"auto", display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr",
                borderTop:"1px solid var(--hair-strong)", paddingTop:18, gap:0,
              }}>
                {[["45,000","t CO₂e abated"], ["1B+","signals / day"], ["100+","buildings live"], ["2029","net-zero target"]]
                  .map(([n,l], i) => (
                  <div key={i} style={{ display:"flex", flexDirection:"column", gap:4, paddingRight:12 }}>
                    <span style={{ fontFamily:FONT_DISPLAY, fontWeight:600, fontSize:22, letterSpacing:"-0.02em" }}>{n}</span>
                    <span style={{ fontFamily:FONT_MONO, fontSize:10, opacity:.6, textTransform:"uppercase", letterSpacing:".06em" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              <PhotoSlot label="Solar PV · Bundoora · live feed" ratio="4 / 3" />
              <HeroPanel />
            </div>
          </div>
        </section>
      );
    }

    function CapIcon({ kind }) {
      const s = { width: 28, height: 28 };
      const stroke = "var(--ink)";
      if (kind === 0) return (
        <svg viewBox="0 0 24 24" style={s}><path d="M3 18 L9 12 L13 16 L21 6" fill="none" stroke={stroke} strokeWidth="1.5" /><path d="M15 6 L21 6 L21 12" fill="none" stroke={stroke} strokeWidth="1.5"/></svg>
      );
      if (kind === 1) return (
        <svg viewBox="0 0 24 24" style={s}><rect x="3" y="3" width="18" height="18" fill="none" stroke={stroke} strokeWidth="1.5"/><rect x="8" y="8" width="8" height="8" fill="none" stroke={stroke} strokeWidth="1.5"/></svg>
      );
      if (kind === 2) return (
        <svg viewBox="0 0 24 24" style={s}><path d="M4 5 H20 V16 H10 L5 20 V16 H4 Z" fill="none" stroke={stroke} strokeWidth="1.5"/><path d="M13 9 L14 11 L16 12 L14 13 L13 15 L12 13 L10 12 L12 11 Z" fill={stroke}/></svg>
      );
      return (
        <svg viewBox="0 0 24 24" style={s}>
          <circle cx="5"  cy="12" r="2" fill="none" stroke={stroke} strokeWidth="1.5"/>
          <circle cx="14" cy="6"  r="2" fill="none" stroke={stroke} strokeWidth="1.5"/>
          <circle cx="14" cy="18" r="2" fill="none" stroke={stroke} strokeWidth="1.5"/>
          <circle cx="21" cy="12" r="2" fill="none" stroke={stroke} strokeWidth="1.5"/>
          <path d="M7 12 L12 7 M7 12 L12 17 M16 6 L19 11 M16 18 L19 13" fill="none" stroke={stroke} strokeWidth="1.5"/>
        </svg>
      );
    }

    function Capabilities() {
      return (
        <section id="methods" className="pad-32" style={{ padding:"96px 32px 64px" }}>
          <div className="col-2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"end", marginBottom:48 }}>
            <div>
              <Kicker>§ 02 · Methods</Kicker>
              <h2 style={{ margin:"12px 0 0", fontFamily:FONT_DISPLAY, fontWeight:500,
                           fontSize:"clamp(36px, 4.2vw, 56px)", lineHeight:1.02, letterSpacing:"-0.03em" }}>
                Four lenses on the same{" "}
                <span style={{ fontFamily:FONT_SERIF, fontStyle:"italic", color:"var(--accent)", fontWeight:400 }}>
                  data lake.
                </span>
              </h2>
            </div>
            <p style={{ fontFamily:FONT_DISPLAY, fontSize:15.5, lineHeight:1.6, opacity:.75, maxWidth:460, margin:0, justifySelf:"end" }}>
              Each capability is custom-built in CDAC and tuned to the rhythms of a tertiary campus — terms, holidays, weather, micro-seasons.
            </p>
          </div>
          <div className="col-4" style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:16 }}>
            {CONTENT.capabilities.map((cap, i) => (
              <div key={i} style={{
                border:"1px solid var(--hair)", background:"var(--paper)",
                padding:"24px", display:"flex", flexDirection:"column", gap:16, minHeight: 360,
              }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <Kicker style={{ color:"var(--accent)", opacity:1 }}>{cap.tag}</Kicker>
                  <CapIcon kind={i} />
                </div>
                <div style={{ fontFamily:FONT_MONO, fontSize:11, opacity:.6, textTransform:"uppercase", letterSpacing:".08em" }}>
                  {cap.kind} AI
                </div>
                <h3 style={{ margin:0, fontFamily:FONT_DISPLAY, fontWeight:500, fontSize:32, lineHeight:1, letterSpacing:"-0.02em" }}>
                  {cap.title}
                </h3>
                <p style={{ margin:0, fontFamily:FONT_DISPLAY, fontSize:13.5, lineHeight:1.55, opacity:.78 }}>
                  {cap.body}
                </p>
                <div style={{ marginTop:"auto", paddingTop:16, borderTop:"1px solid var(--hair)" }}>
                  <Kicker style={{ opacity:.65 }}>{cap.example}</Kicker>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }

    function PipelineMini({ kind }) {
      if (kind === 0) return (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(10, 1fr)", gap:4, marginTop:8 }}>
          {Array.from({length: 30}).map((_, i) => (
            <div key={i} style={{ aspectRatio:"1/1", borderRadius:"50%",
              background: [3,7,11,18,22,25].includes(i) ? "var(--accent)" : "color-mix(in oklab, var(--ink) 22%, transparent)" }} />
          ))}
        </div>
      );
      if (kind === 1) return (
        <div style={{ display:"flex", alignItems:"flex-end", gap:3, height:48, marginTop:8 }}>
          {[12, 22, 18, 30, 14, 26, 32, 20, 38, 24, 30, 18, 42, 28, 36, 24].map((h, i) => (
            <div key={i} style={{ flex:1, height: h + "px",
              background: i % 3 === 0 ? "var(--accent)" : "color-mix(in oklab, var(--ink) 30%, transparent)" }}/>
          ))}
        </div>
      );
      if (kind === 2) return <div style={{ marginTop:8 }}><Sparkline height={48} /></div>;
      return (
        <div style={{ marginTop:8, display:"flex", flexDirection:"column", gap:6 }}>
          {["Tune chiller setpoint", "Defer non-essential load", "Switch lecture-hall lighting"].map((t, i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:8,
                                  fontFamily:FONT_MONO, fontSize:10.5, letterSpacing:".04em", opacity:.78 }}>
              <span style={{ width:12, height:12, border:"1px solid var(--ink)", display:"flex",
                             alignItems:"center", justifyContent:"center", color:"var(--accent)" }}>✓</span>
              {t}
            </div>
          ))}
        </div>
      );
    }

    function Pipeline() {
      return (
        <section id="works" className="pad-32" style={{ padding:"72px 32px 96px", background:"var(--paper)" }}>
          <div className="col-2" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"end", marginBottom:48 }}>
            <div>
              <Kicker>§ 03 · How it works</Kicker>
              <h2 style={{ margin:"12px 0 0", fontFamily:FONT_DISPLAY, fontWeight:500,
                           fontSize:"clamp(32px, 3.6vw, 48px)", lineHeight:1.02, letterSpacing:"-0.03em" }}>
                From sensor to{" "}
                <span style={{ fontFamily:FONT_SERIF, fontStyle:"italic", color:"var(--accent)", fontWeight:400 }}>action,</span>{" "}
                every morning.
              </h2>
            </div>
            <Kicker style={{ opacity:.55, justifySelf:"end" }}>Live feeds</Kicker>
          </div>
          <div className="col-4" style={{
            display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0,
            border:"1px solid var(--hair)",
          }}>
            {CONTENT.pipeline.map((p, i) => (
              <div key={i} style={{
                padding:"32px 28px", display:"flex", flexDirection:"column", gap:14,
                borderRight: i < 3 ? "1px solid var(--hair)" : "none",
                background: "var(--bg)",
              }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ fontFamily:FONT_MONO, fontSize:11, letterSpacing:".06em", opacity:.6 }}>STEP {p.step}</span>
                  {i < 3 && <span style={{ fontFamily:FONT_MONO, color:"var(--accent)" }}>→</span>}
                </div>
                <h3 style={{ margin:0, fontFamily:FONT_DISPLAY, fontWeight:500, fontSize:36, lineHeight:1, letterSpacing:"-0.02em" }}>
                  {p.title}
                </h3>
                <p style={{ margin:0, fontFamily:FONT_DISPLAY, fontSize:13.5, lineHeight:1.55, opacity:.78 }}>
                  {p.body}
                </p>
                <PipelineMini kind={i} />
              </div>
            ))}
          </div>
        </section>
      );
    }

    function Metrics() {
      return (
        <section id="impact" className="pad-32" style={{ padding:"96px 32px" }}>
          <div className="col-2" style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:48, gap:32, flexWrap:"wrap" }}>
            <div>
              <Kicker>§ 04 · Impact</Kicker>
              <h2 style={{ margin:"12px 0 0", fontFamily:FONT_DISPLAY, fontWeight:500,
                           fontSize:"clamp(32px, 3.6vw, 48px)", lineHeight:1.02, letterSpacing:"-0.03em" }}>
                Measured.{" "}
                <span style={{ fontFamily:FONT_SERIF, fontStyle:"italic", color:"var(--accent)", fontWeight:400 }}>Audited.</span>{" "}
                Public.
              </h2>
            </div>
            <Kicker style={{ opacity:.55 }}>FY25 · reported quarterly</Kicker>
          </div>
          <div className="col-6" style={{
            display:"grid", gridTemplateColumns:"repeat(6, 1fr)", gap:0,
            border:"1px solid var(--hair)",
          }}>
            {CONTENT.metrics.map((m, i) => (
              <div key={i} style={{
                padding:"28px 22px", display:"flex", flexDirection:"column", gap:8, minHeight: 200,
                borderRight: (i % 6) < 5 ? "1px solid var(--hair)" : "none",
                background: i === 0 ? "var(--ink)" : "var(--bg)",
                color: i === 0 ? "var(--bg)" : "var(--ink)",
              }}>
                <Kicker color={i === 0 ? "var(--bg)" : "var(--ink)"} style={{ opacity:.65 }}>
                  {String(i+1).padStart(2,"0")}
                </Kicker>
                <div style={{ display:"flex", alignItems:"baseline", gap:6, marginTop:8 }}>
                  <span style={{ fontFamily:FONT_DISPLAY, fontWeight:500, fontSize:44, lineHeight:1, letterSpacing:"-0.03em" }}>
                    {m.figure}
                  </span>
                  {m.unit && <span style={{ fontFamily:FONT_MONO, fontSize:11, opacity:.65 }}>{m.unit}</span>}
                </div>
                <div style={{ fontFamily:FONT_DISPLAY, fontSize:13, lineHeight:1.5,
                              opacity: i === 0 ? .85 : .75, marginTop:"auto" }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }

    function Awards() {
      return (
        <section id="awards" className="pad-32" style={{ padding:"80px 32px", background:"var(--ink)", color:"var(--bg)" }}>
          <div className="col-2" style={{ display:"grid", gridTemplateColumns:"1fr 2fr", gap:48, alignItems:"end", marginBottom:48 }}>
            <Kicker color="var(--bg)" style={{ opacity:.6 }}>§ 05 · Recognition</Kicker>
            <h2 style={{ margin:0, fontFamily:FONT_DISPLAY, fontWeight:500,
                         fontSize:"clamp(36px, 4.2vw, 56px)", lineHeight:1.02, letterSpacing:"-0.03em" }}>
              Awarded.{" "}
              <span style={{ fontFamily:FONT_SERIF, fontStyle:"italic", color:"var(--secondary)", fontWeight:400 }}>
                Peer-reviewed.
              </span>{" "}
              Shared.
            </h2>
          </div>
          <div className="col-3" style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:0, border:"1px solid rgba(255,255,255,.18)" }}>
            {CONTENT.awards.map((a, i) => (
              <div key={i} style={{
                padding:"32px 28px", display:"flex", flexDirection:"column", gap:16, minHeight: 220,
                borderRight: i < 2 ? "1px solid rgba(255,255,255,.18)" : "none",
              }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <Kicker color="var(--bg)" style={{ color:"var(--secondary)", opacity:1 }}>{a.year}</Kicker>
                  <span style={{ width:24, height:24, borderRadius:"50%",
                                 border:"1px solid rgba(255,255,255,.4)", display:"flex",
                                 alignItems:"center", justifyContent:"center",
                                 fontFamily:FONT_MONO, fontSize:11 }}>★</span>
                </div>
                <h3 style={{ margin:0, fontFamily:FONT_DISPLAY, fontWeight:500, fontSize:26, lineHeight:1.1, letterSpacing:"-0.02em" }}>
                  {a.title}
                </h3>
                <p style={{ margin:"auto 0 0", fontFamily:FONT_DISPLAY, fontSize:13, opacity:.7, lineHeight:1.5 }}>{a.venue}</p>
              </div>
            ))}
          </div>
          <div className="col-2" style={{ marginTop:64, display:"grid", gridTemplateColumns:"3fr 2fr", gap:48, alignItems:"center" }}>
            <div>
              <Kicker color="var(--bg)" style={{ opacity:.6 }}>Project Lead</Kicker>
              <div style={{ fontFamily:FONT_DISPLAY, fontWeight:500, fontSize:24, marginTop:8, letterSpacing:"-0.01em" }}>Professor Daswin De Silva</div>
              <div style={{ fontFamily:FONT_DISPLAY, fontSize:14, opacity:.7, marginTop:4 }}>
                Centre for Data Analytics &amp; Cognition · La Trobe University
              </div>
            </div>
            <div style={{ display:"flex", gap:12, alignItems:"center", flexWrap:"wrap", justifyContent:"flex-end" }}>
              {["La Trobe University", "Microsoft Azure", "CyberCX", "TEFMA"].map((p, i) => (
                <div key={i} style={{
                  padding:"10px 14px", border:"1px solid rgba(255,255,255,.3)", borderRadius:999,
                  fontFamily:FONT_MONO, fontSize:11, letterSpacing:".06em", textTransform:"uppercase", opacity:.8,
                }}>{p}</div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    function Footer() {
      return (
        <section className="pad-32" style={{ padding:"40px 32px 56px", background:"var(--bg)", borderTop:"1px solid var(--hair)" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:24, flexWrap:"wrap" }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <LogoMark />
              <span style={{ fontFamily:FONT_DISPLAY, fontWeight:600, fontSize:16 }}>LEAP<span style={{color:"var(--accent)"}}>.</span></span>
            </div>
            <Kicker style={{ opacity:.6 }}>© La Trobe University · CDAC · 2026 · leap-ai.info</Kicker>
          </div>
          <div style={{ marginTop: 20, borderTop: "1px solid var(--hair)", paddingTop: 20,
                        display:"flex", gap:24, flexWrap:"wrap" }}>
            {[["AI Capabilities","/ai-capabilities/"],["COOEE","/cooee/"],["Architecture","/architecture/"],
              ["Use Cases","/use-cases/"],["Solar Forecasting","/solar-forecasting/"],
              ["Outage Detection","/outage-detection/"],["Future Vision","/future-vision/"],
              ["Publications","/publications/"]].map(([label, href], i) => (
              <a key={i} href={href} style={{ fontFamily: FONT_MONO, fontSize: 11, letterSpacing: ".08em",
                textTransform: "uppercase", color: "var(--ink)", opacity: .5, textDecoration: "none" }}>
                {label}
              </a>
            ))}
          </div>
        </section>
      );
    }

    function App() {
      return (
        <div className="lp-shell">
          <TopBar />
          <Nav />
          <Hero />
          <Capabilities />
          <Pipeline />
          <Metrics />
          <Awards />
          <Footer />
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
