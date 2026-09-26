import re

with open(r'c:\new website final\kage\code.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Title and Meta
html = re.sub(
    r'<title>.*?</title>',
    '<title>Department of IoT & Cyber Security — National Institute of Engineering</title>',
    html
)
html = re.sub(
    r'<meta name="description" content=".*?">',
    '<meta name="description" content="Official website for the Department of IoT & Cyber Security. Leading engineering research, physical silicon security, embedded systems, and cryptographic defense testbeds.">',
    html
)

# 2. Update Color Tokens to Match Department Design System (Electric Blue, Cyan, Night Black, Bone)
css_tokens_replacement = """
:root{
  --ink:#070b0e;          /* deep nocturnal slate */
  --ink-2:#0f161b;        /* raised panel black */
  --bone:#f5f6fa;         /* Cloud White */
  --bone-dim:#cad3dc;     /* technical muted white */
  --muted:#7a8996;        /* monograph metadata */
  --line:rgba(9,132,227,.22);  /* electric blue structural hairline */
  --line-soft:rgba(223,231,224,.09);
  --vermilion:#0984e3;    /* Electric Blue primary accent */
  --ember:#00cec9;        /* Cyan telemetric accent */
  --gold:#0769b5;         /* Deep high-contrast blue */
  --pad:clamp(20px, 3.4vw, 56px);
  --nav-h:84px;
  --ease:cubic-bezier(.22,.61,.36,1);
  --ease-out:cubic-bezier(.16,1,.3,1);
  --ease-io:cubic-bezier(.65,0,.35,1);
}
"""
html = re.sub(r':root\s*\{[^}]*--ease-io:[^}]*\}', css_tokens_replacement.strip(), html)

# 3. Three.js Library Loading with CDN Fallback
html = html.replace(
    '<script src="secret-pathways-assets/three.min.js"></script>',
    '<script src="secret-pathways-assets/three.min.js"></script>\n<script>if(typeof THREE==="undefined"){document.write(\'<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\\/script>\');}</script>'
)

# 4. Update Brand Logo & Navigation
brand_and_nav = """
  <a class="brand" href="/" data-cursor aria-label="Department of IoT & Cyber Security Home">
    <div style="width:36px;height:36px;border-radius:6px;border:1px solid rgba(9,132,227,0.4);display:flex;align-items:center;justify-content:center;background:rgba(9,132,227,0.08);">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0984e3" stroke-width="1.8">
        <path d="M12 2L4 5V11C4 16.5 7.5 21.3 12 22C16.5 21.3 20 16.5 20 11V5L12 2Z" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="11" r="2" fill="#00cec9" fill-opacity="0.8"/>
        <path d="M12 7V9M12 13V15M8.5 12.5L10.5 11.5M15.5 12.5L13.5 11.5" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="brand-tx">
      <b>IOT & CYBER SECURITY</b>
      <i>SCHOOL OF COMPUTING · NBA TIER-1</i>
    </div>
  </a>
  <nav class="nav-links" id="navlinks">
    <a class="nav-link" href="#silicon" data-cursor><span>Silicon Edge</span><span class="alt">集積回路</span></a>
    <a class="nav-link" href="#crypto" data-cursor><span>Crypto Enclave</span><span class="alt">暗号機構</span></a>
    <a class="nav-link" href="#testbeds" data-cursor><span>Testbeds</span><span class="alt">防衛演習</span></a>
    <a class="nav-link" href="#curriculum" data-cursor><span>Curriculum</span><span class="alt">教育体系</span></a>
    <a class="nav-link" href="/faculty" data-cursor><span>Faculty</span><span class="alt">教授陣</span></a>
    <a class="nav-link" href="/contact" data-cursor><span>Inquiries</span><span class="alt">連絡窓口</span></a>
  </nav>
"""
html = re.sub(
    r'<a class="brand".*?</nav>',
    brand_and_nav.strip(),
    html,
    flags=re.DOTALL
)

# 5. Update Hero Section Content
hero_content = """
<section class="hero" id="hero" data-cam="0">
  <div class="hero-top">
    <div class="eyebrow" data-rv="fade"><span class="dot"></span> CHAPTER 00 — CYBER-PHYSICAL SYSTEMS & DEFENSE</div>
    <h1 class="display h-hero">
      <span class="mask-line"><span>Where connected</span></span>
      <span class="mask-line"><span>intelligence meets</span></span>
      <span class="mask-line"><span>cyber defense.</span></span>
    </h1>
    <p class="hero-sub body" data-rv="up">Advancing engineering rigor across embedded silicon microarchitectures, real-time wireless telemetry, and high-assurance cryptographic enclaves.</p>
  </div>

  <div class="hero-spacer"></div>

  <div class="hero-foot">
    <div class="hero-cue" data-rv="fade"><span>Scroll to inspect architecture</span><span class="track"><i></i></span></div>
    <div class="chapters" id="chips">
      <div class="chip" data-chip="0" data-rv="up" data-cursor><span class="num">01</span>
        <span class="tx"><b>Silicon & Edge</b><p>RISC-V, ARM TrustZone, and physical sensor buses.</p></span></div>
      <div class="chip" data-chip="1" data-rv="up" data-cursor><span class="num">02</span>
        <span class="tx"><b>Embedded RTOS</b><p>Deterministic kernel isolation and secure boot firmware.</p></span></div>
      <div class="chip" data-chip="2" data-rv="up" data-cursor><span class="num">03</span>
        <span class="tx"><b>Crypto Enclaves</b><p>Hardware AES-256-GCM and Post-Quantum Kyber-768.</p></span></div>
      <div class="chip" data-chip="3" data-rv="up" data-cursor><span class="num">04</span>
        <span class="tx"><b>Cyber Range</b><p>Industrial SCADA testbeds and live defense drills.</p></span></div>
    </div>
  </div>

  <a class="peek" href="#crypto" data-view="3" data-rv="fade" data-cursor aria-label="Preview: Cryptographic Enclave Lab">
    <span class="peek-fr" data-frame></span>
    <span class="peek-play"><svg viewBox="0 0 22 22" fill="none"><path d="M8 5.6 16.4 11 8 16.4z" fill="#00cec9"/></svg></span>
    <span class="peek-cap"><b>CYBER RANGE</b><i>Testbed #04 — Live Simulation</i></span>
  </a>

  <div class="word-fb" aria-hidden="true">CYBER</div>

  <div class="hero-side" data-rv="up">
    <span class="v jp">電子防衛網</span>
  </div>
</section>
"""
html = re.sub(r'<section class="hero" id="hero".*?</section>', hero_content.strip(), html, flags=re.DOTALL)

# 6. Update Chapter 1: Silicon & Edge (replacing #gate)
chap1_content = """
<section class="sec" id="silicon" data-cam="1">
  <div class="sec-head" data-rv="fade">
    <span class="k"><b>01</b> — Silicon & Edge Computing</span><span class="rule"></span><span class="k jp">物理層</span>
  </div>
  <div class="gate-grid">
    <h2 class="display h-sec" data-rv="up">Deterministic silicon, bus isolation, zero firmware trust.</h2>
    <div class="gate-copy">
      <p class="lead" data-rv="up">Security begins where software abstraction ends: in embedded silicon registers, bus transceivers, and physical memory protection units. Our scholars engineer hardware-rooted telemetry that treats every external interface as a potential threat vector.</p>
      <p class="body" data-rv="up">In our laboratories, inquiry unfolds through hands-on microcontroller testbeds, software-defined radio analysis, side-channel evaluation, and hardware attack mitigation compliant with national industrial defense standards.</p>
      <a class="arrowlink" href="#crypto" data-rv="fade" data-cursor>
        <span>Inspect Cryptographic Enclave</span>
        <span class="ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#00cec9" stroke-width="1.3"/></svg></span>
      </a>
    </div>
  </div>
  <div class="gate-stats" data-rv="up">
    <div><b>03</b><span>Pathways (B/M/PhD)</span></div>
    <div><b>12+</b><span>Doctoral Chairs</span></div>
    <div><b>06</b><span>Research Testbeds</span></div>
    <div><b>NBA</b><span>Tier-1 Accredited</span></div>
  </div>
</section>
"""
html = re.sub(r'<section class="sec" id="gate".*?</section>', chap1_content.strip(), html, flags=re.DOTALL)

# 7. Update Chapter 2: Cryptographic Enclave (replacing #pathways)
chap2_content = """
<section class="sec" id="crypto" data-cam="2">
  <div class="sec-head" data-rv="fade">
    <span class="k"><b>02</b> — Cryptographic Enclaves</span><span class="rule"></span><span class="k jp">暗号機構</span>
  </div>
  <div class="cards" id="cards">
    <article class="card" data-rv="up" data-view="0" data-cursor>
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#00cec9" stroke-width="1.3"/></svg></span>
        <i class="glow" style="--gx:80.2%; --gy:23.9%; --gr:22%; --gt:6.1s; --gt2:9.7s; --gc1:rgba(9,132,227,.55); --gc2:rgba(0,206,201,.30)"></i>
        <div class="card-lab"><b>Post-Quantum Enclave</b><span class="jp">耐量子</span></div>
      </div>
      <div class="card-meta"><span>ML-KEM Kyber-768 Core</span><span>01 / 03</span></div>
    </article>
    <article class="card" data-rv="up" data-view="1" data-cursor>
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#00cec9" stroke-width="1.3"/></svg></span>
        <i class="glow glow--flame" style="--gx:70.5%; --gy:47.2%; --gr:14%; --gt:3.7s; --gt2:5.3s; --gc1:rgba(0,206,201,.62); --gc2:rgba(9,132,227,.35)"></i>
        <div class="card-lab"><b>Hardware Security Modules</b><span class="jp">真正性</span></div>
      </div>
      <div class="card-meta"><span>Fused Key Roots & AES-256</span><span>02 / 03</span></div>
    </article>
    <article class="card" data-rv="up" data-view="2" data-cursor>
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#00cec9" stroke-width="1.3"/></svg></span>
        <i class="glow" style="--gx:48.0%; --gy:16.8%; --gr:20%; --gt:7.3s; --gt2:11.2s; --gc1:rgba(9,132,227,.52); --gc2:rgba(0,206,201,.25)"></i>
        <div class="card-lab"><b>CAN-FD & SCADA Bus</b><span class="jp">制御網</span></div>
      </div>
      <div class="card-meta"><span>Automotive & OT Defense</span><span>03 / 03</span></div>
    </article>
  </div>
</section>
"""
html = re.sub(r'<section class="sec" id="pathways".*?</section>', chap2_content.strip(), html, flags=re.DOTALL)

# 8. Update Chapter 3: Curricular Matrix & Lessons (replacing #lessons)
chap3_content = """
<section class="sec" id="testbeds" data-cam="3">
  <div class="sec-head" data-rv="fade">
    <span class="k"><b>03</b> — Research Testbeds & Curricula</span><span class="rule"></span><span class="k jp">演習体系</span>
  </div>
  <div class="cur-head">
    <h2 class="display h-sec" data-rv="up">Five core disciplines. Experiential praxis. Global standards.</h2>
    <p class="body-lg" data-rv="up">Each module is rooted in physical laboratory benches, not mere theoretical simulation. Scholars stress-test real hardware, audit firmware kernels, and defend industrial testbeds.</p>
  </div>
  <div class="cur" id="cur">
    <div class="les" data-les="0" data-cursor>
      <span class="k">01</span>
      <h3>Silicon Edge Microarchitectures<em class="jp">集積回路</em></h3>
      <p>RISC-V architectures, ARM Cortex TrustZone, and physical bus transceivers.</p>
      <span class="t">14 cr</span><i class="bar"></i>
    </div>
    <div class="les" data-les="1" data-cursor>
      <span class="k">02</span>
      <h3>Embedded Firmware & RTOS<em class="jp">安全組込</em></h3>
      <p>Deterministic preemptive scheduling, MPU isolation, and memory-safe boot.</p>
      <span class="t">18 cr</span><i class="bar"></i>
    </div>
    <div class="les" data-les="2" data-cursor>
      <span class="k">03</span>
      <h3>Applied Cryptography & HSMs<em class="jp">暗号応用</em></h3>
      <p>Side-channel DPA mitigation, Post-Quantum Kyber-768, and entropy sources.</p>
      <span class="t">21 cr</span><i class="bar"></i>
    </div>
    <div class="les" data-les="3" data-cursor>
      <span class="k">04</span>
      <h3>Cyber Range & Network Forensics<em class="jp">防衛演習</em></h3>
      <p>SCADA utility testbeds, penetration modeling, and MITRE ATT&CK correlation.</p>
      <span class="t">17 cr</span><i class="bar"></i>
    </div>
    <div class="les" data-les="4" data-cursor>
      <span class="k">05</span>
      <h3>Autonomous Cyber Defense<em class="jp">自律防衛</em></h3>
      <p>Zero-trust sensor grids, wireless RF interception defense, and IEEE compliance.</p>
      <span class="t">22 cr</span><i class="bar"></i>
    </div>
  </div>
</section>
"""
html = re.sub(r'<section class="sec" id="lessons".*?</section>', chap3_content.strip(), html, flags=re.DOTALL)

# 9. Update Chapter 4: Academic Horizon & Accreditation (replacing #eternity)
chap4_content = """
<section class="sec fin" id="curriculum" data-cam="4">
  <div class="eyebrow" data-rv="fade">CHAPTER 04 — OUTCOME-BASED EXCELLENCE</div>
  <h2 class="display" data-rv="up">NBA Tier-1 Accredited</h2>
  <p class="body-lg" data-rv="up">Accredited under the Washington Accord framework, guaranteeing international degree equivalence and industry leadership in critical cyber-physical defense systems.</p>
  <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:24px;">
    <a class="cta" href="/about" data-rv="fade" data-cursor>
      <i></i><span>Department Overview</span>
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg>
    </a>
    <a class="cta" href="/faculty" data-rv="fade" data-cursor style="background:rgba(9,132,227,0.15);border:1px solid rgba(9,132,227,0.4);">
      <i></i><span>Faculty Directory</span>
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#00cec9" stroke-width="1.3"/></svg>
    </a>
  </div>
</section>
"""
html = re.sub(r'<section class="sec fin" id="eternity".*?</section>', chap4_content.strip(), html, flags=re.DOTALL)

# 10. Update Footer Colophon
footer_content = """
<footer class="foot" data-cam="5">
  <div class="foot-main">
    <div class="foot-col brand-col">
      <div class="brand" style="margin-bottom:16px;">
        <div style="width:32px;height:32px;border-radius:6px;border:1px solid rgba(9,132,227,0.4);display:flex;align-items:center;justify-content:center;background:rgba(9,132,227,0.08);">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0984e3" stroke-width="1.8">
            <path d="M12 2L4 5V11C4 16.5 7.5 21.3 12 22C16.5 21.3 20 16.5 20 11V5L12 2Z"/>
            <circle cx="12" cy="11" r="2" fill="#00cec9"/>
          </svg>
        </div>
        <div class="brand-tx">
          <b>IOT & CYBER SECURITY</b>
          <i>NATIONAL INSTITUTE OF ENGINEERING</i>
        </div>
      </div>
      <p class="body" style="max-width:34ch;font-size:13px;line-height:1.7;">Computing Sciences & Cyber Labs Complex, Level 4. Academic year 2026–2027.</p>
    </div>
    <div class="foot-col">
      <span class="foot-h">Academic Pathways</span>
      <a class="foot-a" href="/academics#btech" data-cursor>B.Tech IoT & Cyber Security</a>
      <a class="foot-a" href="/academics#mtech" data-cursor>M.Tech Cyber Security</a>
      <a class="foot-a" href="/academics#phd" data-cursor>Ph.D. Doctoral Research</a>
    </div>
    <div class="foot-col">
      <span class="foot-h">Research & Labs</span>
      <a class="foot-a" href="/research#range" data-cursor>Industrial Cyber Range</a>
      <a class="foot-a" href="/research#iot" data-cursor>Connected Hardware Bench</a>
      <a class="foot-a" href="/research#crypto" data-cursor>Cryptographic Enclave</a>
    </div>
    <div class="foot-col">
      <span class="foot-h">Institutional Portal</span>
      <a class="foot-a" href="/faculty" data-cursor>Faculty Directory</a>
      <a class="foot-a" href="/events" data-cursor>Symposia & Drills</a>
      <a class="foot-a" href="/contact" data-cursor>Official Inquiries</a>
    </div>
  </div>
  <div class="foot-bar">
    <span>© 2026 Department of IoT & Cyber Security · All rights reserved</span>
    <span class="jp">防衛工学と自律分散網</span>
    <span>NBA Tier-1 Accredited · NAAC A++ Grade</span>
  </div>
</footer>
"""
html = re.sub(r'<footer class="foot".*?</footer>', footer_content.strip(), html, flags=re.DOTALL)

# 11. Update Three.js lighting & celestial beacon colors (electric blue & cyan)
html = html.replace("hdr(3.6, .64, .61)", "hdr(0.4, 2.2, 3.8)")
html = html.replace("rgba(255,124,112,.90)", "rgba(0,206,201,.90)")
html = html.replace("rgba(206,52,48,.26)", "rgba(9,132,227,.35)")
html = html.replace("rgba(255,142,108,.50)", "rgba(9,132,227,.50)")
html = html.replace("rgba(212,56,38,.24)", "rgba(0,206,201,.25)")

# 12. Preloader text jobs
html = html.replace("Reading the type", "Initializing System Topology")
html = html.replace("Pouring the ground", "Calibrating Silicon Grid")
html = html.replace("Cutting the approach", "Configuring Zero-Trust Bus")
html = html.replace("Raising the hall", "Synthesizing Cryptographic Enclave")
html = html.replace("Hanging the moon", "Aligning Celestial Telemetry")
html = html.replace("Setting the gate", "Activating Hardware Gateways")
html = html.replace("Placing the stones", "Deploying Physical Testbeds")
html = html.replace("Growing the maples", "Mapping Connected Sensor Nodes")
html = html.replace("Painting the near grass", "Calibrating Volumetric Enclave")
html = html.replace("Cutting the word", "Verifying Root Key Fuses")
html = html.replace("Raising the mist", "Starting Anomaly Detection Engine")
html = html.replace("Polishing the water", "Securing Telemetry Flow")

with open(r'c:\new website final\public\department.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Successfully generated c:\\new website final\\public\\department.html")
