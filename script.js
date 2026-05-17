const profile = {
  name: "bunny_blooming",
  initials: "YN",
  role: "Full-stack Developer",
  tagline: "사용자 문제를 제품 경험으로 번역하고, 안정적인 코드로 끝까지 구현합니다.",
  status: "새로운 기회를 탐색 중",
  intro:
    "제품의 목표와 사용자의 맥락을 먼저 정리한 뒤, 작게 검증하고 빠르게 개선합니다. 협업자가 이해하기 쉬운 구조와 운영 가능한 품질을 중요하게 생각합니다.",
  email: "youhe81@naver.com",
  github: "https://bunny-blooming.github.io",
  resume: "",
  facts: [
    ["Location", "Seoul, KR"],
    ["Focus", "Web Products"],
    ["Stack", "React / Node"],
    ["Language", "Korean / English"],
  ],
  metrics: [
    ["12+", "출시 및 개선 프로젝트"],
    ["4년+", "제품 개발 경험"],
    ["35%", "핵심 흐름 개선 사례"],
    ["99.9%", "안정성을 목표로 한 운영"],
  ],
};

const projects = [
  {
    title: "팀 생산성 대시보드",
    category: "Product",
    description:
      "흩어진 업무 데이터를 한 화면에서 추적하도록 설계한 운영 대시보드입니다. 필터링, 권한, 지표 상태를 중심으로 구현했습니다.",
    tags: ["React", "TypeScript", "Charts"],
    color: "#0f7b63",
    demo: "#",
    source: "#",
  },
  {
    title: "개인화 학습 노트",
    category: "AI",
    description:
      "학습 기록을 요약하고 다음 액션을 제안하는 노트 앱입니다. 입력 흐름과 검색 경험을 빠르게 반복하며 개선했습니다.",
    tags: ["Next.js", "OpenAI API", "PostgreSQL"],
    color: "#2364a3",
    demo: "#",
    source: "#",
  },
  {
    title: "커머스 결제 리뉴얼",
    category: "System",
    description:
      "모바일 결제 이탈 구간을 줄이기 위해 폼 구조와 예외 처리를 재설계했습니다. 접근성과 오류 복구에 집중했습니다.",
    tags: ["Frontend", "A11y", "Testing"],
    color: "#d65a45",
    demo: "#",
    source: "#",
  },
];

const skills = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Accessibility", "Design Systems"],
  },
  {
    group: "Backend",
    items: ["Node.js", "REST APIs", "PostgreSQL", "Auth", "Observability"],
  },
  {
    group: "Product",
    items: ["User Flow", "Rapid Prototyping", "Data-informed Iteration", "Documentation"],
  },
];

const timeline = [
  {
    date: "2026",
    title: "포트폴리오와 프로젝트 아카이브 정리",
    description:
      "대표 프로젝트의 문제, 역할, 결과를 명확히 보여주는 형태로 개발 기록을 재구성했습니다.",
  },
  {
    date: "2025",
    title: "운영 가능한 제품 품질 개선",
    description:
      "핵심 화면의 성능과 오류 처리 기준을 정비하고, 반복되는 UI 패턴을 재사용 가능한 구조로 만들었습니다.",
  },
  {
    date: "2024",
    title: "사용자 흐름 중심의 기능 출시",
    description:
      "기획, 디자인, 백엔드와 함께 요구사항을 좁히고 실사용 피드백을 반영해 기능을 출시했습니다.",
  },
];

const $ = (selector) => document.querySelector(selector);

const setText = (selector, value) => {
  const element = $(selector);
  if (element) element.textContent = value;
};

const setHref = (selector, value) => {
  const element = $(selector);
  if (element && value) element.setAttribute("href", value);
};

function applyProfile() {
  document.title = `${profile.name} | Developer Portfolio`;
  setText(".brand-mark", profile.initials);
  setText(".brand-text", profile.name);
  setText("#profileRole", profile.role);
  setText("#heroTitle", profile.name);
  setText("#profileTagline", profile.tagline);
  setText("#profileStatus", profile.status);
  setText("#profileIntro", profile.intro);
  setText("#footerName", profile.name);
  setText("#year", new Date().getFullYear());
  setHref("#githubLink", profile.github);
  setHref("#footerGithub", profile.github);
  setHref("#emailLink", `mailto:${profile.email}`);
  setHref("#footerEmail", `mailto:${profile.email}`);

  const resumeLink = $("#resumeLink");
  if (resumeLink && profile.resume) {
    resumeLink.href = profile.resume;
    resumeLink.removeAttribute("aria-disabled");
  }

  const facts = $("#quickFacts");
  facts.innerHTML = profile.facts
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");

  const metrics = $("#metricsGrid");
  metrics.innerHTML = profile.metrics
    .map(([value, label]) => `<div class="metric"><strong>${value}</strong><span>${label}</span></div>`)
    .join("");
}

function renderProjects(filter = "All") {
  const grid = $("#projectGrid");
  const filtered = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  grid.innerHTML = filtered
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-visual" style="--visual: ${project.color}" aria-hidden="true"></div>
          <div class="project-card-content">
            <p class="eyebrow">${project.category}</p>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <ul class="tag-list">
              ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
            </ul>
          </div>
          <div class="project-card-footer">
            <a href="${project.demo}" aria-label="${project.title} 데모 보기">
              Demo
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </a>
            <a href="${project.source}" aria-label="${project.title} 코드 보기">
              Code
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 9 4 12l4 3m8-6 4 3-4 3M14 4l-4 16" /></svg>
            </a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFilters() {
  const filters = ["All", ...new Set(projects.map((project) => project.category))];
  const filterGroup = $("#projectFilters");
  filterGroup.innerHTML = filters
    .map(
      (filter) =>
        `<button class="filter-button" type="button" aria-pressed="${filter === "All"}" data-filter="${filter}">${filter}</button>`,
    )
    .join("");

  filterGroup.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    filterGroup.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    renderProjects(button.dataset.filter);
  });
}

function renderSkills() {
  $("#skillGroups").innerHTML = skills
    .map(
      (skill) => `
        <article class="skill-group">
          <h3>${skill.group}</h3>
          <ul class="tag-list">
            ${skill.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderTimeline() {
  $("#timeline").innerHTML = timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-date">${item.date}</div>
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function setupNavigation() {
  const header = $(".site-header");
  const toggle = $(".nav-toggle");
  const links = $("#navLinks");

  const closeMenu = () => {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    links.dataset.open = "false";
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    document.body.classList.toggle("nav-open", !isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
    links.dataset.open = String(!isOpen);
  });

  links.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  const updateHeader = () => {
    header.dataset.elevated = String(window.scrollY > 8);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function setupTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = saved || (prefersDark ? "dark" : "light");

  $("#themeToggle").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", root.dataset.theme);
  });
}

function setupHeroCanvas() {
  const canvas = $("#heroCanvas");
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: 0, y: 0, active: false };
  let width = 0;
  let height = 0;
  let particles = [];
  let animationId = 0;

  const colors = () => {
    const styles = getComputedStyle(document.documentElement);
    return {
      ink: styles.getPropertyValue("--ink").trim(),
      accent: styles.getPropertyValue("--accent").trim(),
      coral: styles.getPropertyValue("--coral").trim(),
      blue: styles.getPropertyValue("--blue").trim(),
      bg: styles.getPropertyValue("--bg").trim(),
    };
  };

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.max(28, Math.min(72, Math.floor((width * height) / 18000)));
    particles = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      radius: index % 9 === 0 ? 2.4 : 1.6,
    }));
  };

  const draw = () => {
    const palette = colors();
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = palette.bg;
    ctx.fillRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      if (!reduceMotion) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (pointer.active) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 180) {
            particle.x -= dx * 0.002;
            particle.y -= dy * 0.002;
          }
        }

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;
      }

      for (let next = index + 1; next < particles.length; next += 1) {
        const other = particles[next];
        const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (distance < 128) {
          ctx.strokeStyle = palette.accent;
          ctx.globalAlpha = (1 - distance / 128) * 0.18;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 0.62;
      ctx.fillStyle = index % 7 === 0 ? palette.coral : index % 5 === 0 ? palette.blue : palette.accent;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    animationId = requestAnimationFrame(draw);
  };

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      draw();
    }
  });

  resize();
  draw();
}

applyProfile();
renderFilters();
renderProjects();
renderSkills();
renderTimeline();
setupNavigation();
setupTheme();
setupHeroCanvas();
