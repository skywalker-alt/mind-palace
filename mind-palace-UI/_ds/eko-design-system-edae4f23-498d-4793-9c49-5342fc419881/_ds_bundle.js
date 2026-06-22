/* @ds-bundle: {"format":3,"namespace":"EkoDesignSystem_edae4f","components":[],"sourceHashes":{"ui_kits/website/components/App.jsx":"4f3ae8d8f50c","ui_kits/website/components/DeepDive.jsx":"1be34c74570c","ui_kits/website/components/DemoForm.jsx":"1ffcce77930e","ui_kits/website/components/FinalCTA.jsx":"dc871dbee312","ui_kits/website/components/Footer.jsx":"3c0c337ea8b3","ui_kits/website/components/Hero.jsx":"217c23e4499c","ui_kits/website/components/Icons.jsx":"0cf430331514","ui_kits/website/components/IntroCard.jsx":"de459a58e415","ui_kits/website/components/Navbar.jsx":"8c47cec5d2c6","ui_kits/website/components/StickyScroll.jsx":"3a0a8c312872","ui_kits/website/components/ThankYou.jsx":"9bc9ae2949a2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EkoDesignSystem_edae4f = window.EkoDesignSystem_edae4f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/components/App.jsx
try { (() => {
function App() {
  const [view, setView] = React.useState("home");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);
  const goHome = () => setView("home");
  const goDemo = () => setView("demo");
  const goThanks = () => setView("thanks");
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "01 " + view,
    key: view,
    className: "fade-in"
  }, /*#__PURE__*/React.createElement(Navbar, {
    onLogo: goHome,
    onDemo: goDemo
  }), view === "home" && /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onDemo: goDemo
  }), /*#__PURE__*/React.createElement(IntroCard, {
    onExplore: goDemo
  }), /*#__PURE__*/React.createElement(StickyScroll, null), /*#__PURE__*/React.createElement(DeepDive, null), /*#__PURE__*/React.createElement(FinalCTA, {
    onDemo: goDemo
  })), view === "demo" && /*#__PURE__*/React.createElement(DemoForm, {
    onHome: goHome,
    onSuccess: goThanks
  }), view === "thanks" && /*#__PURE__*/React.createElement(ThankYou, {
    onHome: goHome
  }), /*#__PURE__*/React.createElement(Footer, null));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/DeepDive.jsx
try { (() => {
function DeepDive() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "deep-dive-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "deep-dive-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "deep-dive-text"
  }, /*#__PURE__*/React.createElement("h3", null, "The operating system for social e-commerce."), /*#__PURE__*/React.createElement("p", null, "Most tools just give you a chatbot. eko provides the entire technical foundation for your business. Manage lead profiles, process payment links in-chat, and seamlessly hand off complex queries to human agents.")), /*#__PURE__*/React.createElement("div", {
    className: "deep-dive-graphic"
  }, /*#__PURE__*/React.createElement("div", {
    className: "clean-mockup-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-ui-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-ui-title"
  }, "CRM Pipeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--eko-blue)"
    }
  }, /*#__PURE__*/React.createElement(TrendingUp, {
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mock-pipeline-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-pipeline-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-pipeline-col-title"
  }, "New Leads"), /*#__PURE__*/React.createElement("div", {
    className: "mock-pipeline-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, "Sarah Al-Ahmad"), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, "Instagram \xB7 Abaya inquiry")), /*#__PURE__*/React.createElement("div", {
    className: "mock-pipeline-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, "Omar Hassan"), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, "WhatsApp \xB7 Price check"))), /*#__PURE__*/React.createElement("div", {
    className: "mock-pipeline-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-pipeline-col-title"
  }, "High Intent"), /*#__PURE__*/React.createElement("div", {
    className: "mock-pipeline-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, "Nour Fatima"), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, "Instagram \xB7 Adding to cart"))), /*#__PURE__*/React.createElement("div", {
    className: "mock-pipeline-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-pipeline-col-title"
  }, "Closed Won"), /*#__PURE__*/React.createElement("div", {
    className: "mock-pipeline-item won"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, "Layla K."), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, "Order #88492 Paid"))))))), /*#__PURE__*/React.createElement("div", {
    className: "deep-dive-row reverse"
  }, /*#__PURE__*/React.createElement("div", {
    className: "deep-dive-text"
  }, /*#__PURE__*/React.createElement("h3", null, "Zero setup. Instant intelligence."), /*#__PURE__*/React.createElement("p", null, "Forget complex workflows. Simply connect your social accounts and let eko's AI instantly categorize your hottest leads, extracting sizes, preferences, and order history into clean CRM profiles.")), /*#__PURE__*/React.createElement("div", {
    className: "deep-dive-graphic"
  }, /*#__PURE__*/React.createElement("div", {
    className: "clean-mockup-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-ui-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-ui-title"
  }, "AI Insights"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--eko-blue)"
    }
  }, /*#__PURE__*/React.createElement(Sparkles, {
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mock-insight-profile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-insight-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mock-avatar"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mock-name"
  }, "Youssef Rahman"), /*#__PURE__*/React.createElement("div", {
    className: "mock-sub"
  }, "VIP Customer \xB7 Riyadh"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "mock-insight-tag"
  }, "Size: L"), /*#__PURE__*/React.createElement("span", {
    className: "mock-insight-tag"
  }, "High Intent"), /*#__PURE__*/React.createElement("span", {
    className: "mock-insight-tag warm"
  }, "Returns: Low"), /*#__PURE__*/React.createElement("span", {
    className: "mock-insight-tag"
  }, "Prefers: Evening Delivery")), /*#__PURE__*/React.createElement("div", {
    className: "mock-summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "AI SUMMARY"), /*#__PURE__*/React.createElement("p", null, "Youssef frequently asks about new limited-edition sneaker drops. Recommend highlighting the upcoming \"Desert Sand\" collection."))))))));
}
window.DeepDive = DeepDive;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/DeepDive.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/DemoForm.jsx
try { (() => {
function DemoForm({
  onHome,
  onSuccess
}) {
  const [form, setForm] = React.useState({
    name: "",
    company: "",
    instagram: "",
    role: "",
    phone: "+974"
  });
  const [submitting, setSubmitting] = React.useState(false);
  const handle = e => setForm({
    ...form,
    [e.target.name]: e.target.value
  });
  const submit = e => {
    e.preventDefault();
    if (!form.name || !form.company) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSuccess();
    }, 700);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "demo-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "back-btn-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-back",
    onClick: onHome
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    size: 14
  }), " Back to Home")), /*#__PURE__*/React.createElement("div", {
    className: "demo-header"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "demo-title"
  }, "Book your ", /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, "eko"), " demo."), /*#__PURE__*/React.createElement("p", {
    className: "demo-subtitle"
  }, "Let's scale your ", /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, "social sales"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "demo-card"
  }, /*#__PURE__*/React.createElement("form", {
    className: "onboarding-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Name"), /*#__PURE__*/React.createElement("input", {
    name: "name",
    value: form.name,
    onChange: handle,
    placeholder: "Jane Smith",
    required: true,
    disabled: submitting
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Company name"), /*#__PURE__*/React.createElement("input", {
    name: "company",
    value: form.company,
    onChange: handle,
    placeholder: "eko.co",
    required: true,
    disabled: submitting
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Instagram Handle (Optional)"), /*#__PURE__*/React.createElement("input", {
    name: "instagram",
    value: form.instagram,
    onChange: handle,
    placeholder: "@yourbrand",
    disabled: submitting
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Role"), /*#__PURE__*/React.createElement("select", {
    name: "role",
    value: form.role,
    onChange: handle,
    required: true,
    disabled: submitting
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select\u2026"), /*#__PURE__*/React.createElement("option", {
    value: "ceo"
  }, "CEO"), /*#__PURE__*/React.createElement("option", {
    value: "cto"
  }, "CTO"), /*#__PURE__*/React.createElement("option", {
    value: "employee"
  }, "Employee"), /*#__PURE__*/React.createElement("option", {
    value: "support"
  }, "Customer Support"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Phone number"), /*#__PURE__*/React.createElement("input", {
    name: "phone",
    value: form.phone,
    onChange: handle,
    required: true,
    disabled: submitting
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn-submit",
    disabled: submitting
  }, submitting ? "Submitting…" : "Request Demo")))));
}
window.DemoForm = DemoForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/DemoForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/FinalCTA.jsx
try { (() => {
function FinalCTA({
  onDemo
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "final-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "hero-title"
  }, "Stop drowning in DMs. Start closing faster."), /*#__PURE__*/React.createElement("p", {
    className: "hero-text"
  }, "Make every social conversation work for your business."), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: onDemo,
    style: {
      padding: "16px 32px"
    }
  }, "Start closing instantly ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 20
  }))));
}
window.FinalCTA = FinalCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/FinalCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/Footer.jsx
try { (() => {
function Footer({
  onCompany,
  onSupport
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "container footer"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 eko"), /*#__PURE__*/React.createElement("div", {
    className: "footer-links"
  }, /*#__PURE__*/React.createElement("a", {
    className: "footer-link",
    onClick: onCompany
  }, "Company"), /*#__PURE__*/React.createElement("a", {
    className: "footer-link",
    onClick: onSupport
  }, "Support"), /*#__PURE__*/React.createElement("a", {
    className: "footer-link"
  }, "Privacy policy"), /*#__PURE__*/React.createElement("a", {
    className: "footer-link"
  }, "Terms of use")), /*#__PURE__*/React.createElement("div", {
    className: "footer-links"
  }, /*#__PURE__*/React.createElement("a", {
    className: "footer-link"
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    className: "footer-link"
  }, "LinkedIn")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/Hero.jsx
try { (() => {
function Hero({
  onDemo
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow fade-in"
  }, "DON'T FORGET TO CHECK OUT OUR FREE DEMO \u2192"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title fade-in d1"
  }, "Turn your Instagram DMs into a revenue-driving CRM."), /*#__PURE__*/React.createElement("p", {
    className: "hero-text fade-in d2"
  }, "eko unifies your social channels, automates customer conversations, and turns your DM chaos into a smart sales pipeline."), /*#__PURE__*/React.createElement("div", {
    className: "fade-in d3"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: onDemo
  }, "See eko in Action ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mockup-fade-wrapper fade-in d4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-rings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ring ring-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ring ring-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ring ring-3"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mockup-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-phone-mockup"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-phone-final.png",
    alt: "eko AI chat mockup"
  }))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Tiny inline icon set — matches lucide stroke/style.
// Provides: ArrowRight, ArrowLeft, TrendingUp, Sparkles, MessageSquare, Zap.
const Icon = ({
  children,
  size = 20,
  ...rest
}) => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, rest), children);
const ArrowRight = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 5 19 12 12 19"
}));
const ArrowLeft = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "19",
  y1: "12",
  x2: "5",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 19 5 12 12 5"
}));
const TrendingUp = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polyline", {
  points: "22 7 13.5 15.5 8.5 10.5 2 17"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "16 7 22 7 22 13"
}));
const Sparkles = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 17l.6 1.8L21.5 19.5l-1.9.7L19 22l-.6-1.8L16.5 19.5l1.9-.7z"
}));
const MessageSquare = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}));
const Zap = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("polygon", {
  points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
}));
Object.assign(window, {
  Icon,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Sparkles,
  MessageSquare,
  Zap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/IntroCard.jsx
try { (() => {
function IntroCard({
  onExplore
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "intro-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "intro-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "intro-content"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "intro-headline"
  }, "INTRODUCING ", /*#__PURE__*/React.createElement("span", {
    className: "brand-eko"
  }, "eko")), /*#__PURE__*/React.createElement("p", {
    className: "intro-description"
  }, "The AI-Powered OS for Social Commerce. eko unifies all your social DM channels, extracts deep customer context, and empowers your team with a proactive RAG agent to close sales, automate sizing advice, and track purchase intent from WhatsApp to Instagram."), /*#__PURE__*/React.createElement("button", {
    className: "btn-gradient",
    onClick: onExplore
  }, "Explore eko features ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "intro-asset"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/hero-phone-final.png",
    alt: "eko mockup"
  })))));
}
window.IntroCard = IntroCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/IntroCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/Navbar.jsx
try { (() => {
function Navbar({
  onLogo,
  onDemo,
  onCompany,
  onSupport
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-logo",
    onClick: onLogo,
    role: "button",
    "aria-label": "eko home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "eko"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onCompany && onCompany();
    }
  }, "Company"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSupport && onSupport();
    }
  }, "Support")), /*#__PURE__*/React.createElement("button", {
    className: "nav-cta-btn",
    onClick: onDemo
  }, "Try Free Demo ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 16
  }))));
}
window.Navbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/StickyScroll.jsx
try { (() => {
function StickyScroll() {
  const [active, setActive] = React.useState(1);
  const refs = [React.useRef(null), React.useRef(null), React.useRef(null)];
  const steps = [{
    n: 1,
    title: "Unify every channel.",
    body: "Connect Instagram, WhatsApp, TikTok, and SMS. Your team stops jumping between apps and manages every DM from one unified, lightning-fast inbox.",
    img: "../../assets/unified-channel.png"
  }, {
    n: 2,
    title: "Deploy the RAG Agent.",
    body: "eko doesn't just send automated replies. It reads your business data, understands inventory, references past chats, and executes consultative selling just like your best employee.",
    img: "../../assets/second-step.png"
  }, {
    n: 3,
    title: "Scale your operations.",
    body: "Automatically tag leads, track purchase intent, and view your entire social commerce pipeline in a single dashboard built for high-volume sales.",
    img: "../../assets/third-step.png"
  }];

  // Watch each step. When it crosses the center band of the viewport,
  // make it active. This mirrors the live site's scroll-driven swap.
  React.useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = Number(e.target.dataset.idx);
          setActive(idx);
        }
      });
    }, {
      // The "active band" is the middle 20% of the viewport.
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0
    });
    refs.forEach(r => {
      if (r.current) io.observe(r.current);
    });
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky-scroll-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky-scroll-left"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    ref: refs[i],
    "data-idx": s.n,
    className: "sticky-step " + (active === s.n ? "" : "inactive")
  }, /*#__PURE__*/React.createElement("h3", null, s.n, ". ", s.title), /*#__PURE__*/React.createElement("p", null, s.body)))), /*#__PURE__*/React.createElement("div", {
    className: "sticky-scroll-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky-container"
  }, steps.map(s => /*#__PURE__*/React.createElement("img", {
    key: s.n,
    src: s.img,
    alt: s.title,
    style: {
      position: "absolute",
      opacity: active === s.n ? 1 : 0,
      width: "calc(100% - 64px)",
      height: "calc(100% - 64px)",
      objectFit: "contain",
      transition: "opacity 0.4s ease"
    }
  }))))));
}
window.StickyScroll = StickyScroll;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/StickyScroll.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/ThankYou.jsx
try { (() => {
function ThankYou({
  onHome
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "thank-you-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "thank-you-title fade-in"
  }, "Thank you!"), /*#__PURE__*/React.createElement("p", {
    className: "thank-you-body fade-in d1"
  }, "Your submission has been received. We appreciate you taking the time to share your details and interest in our demo onboarding process. We will contact you on WhatsApp shortly."), /*#__PURE__*/React.createElement("div", {
    className: "fade-in d2",
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "thank-you-mascot",
    src: "../../assets/mascot.png",
    alt: "eko mascot"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fade-in d3",
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    onClick: onHome
  }, "Back to home ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18
  })))));
}
window.ThankYou = ThankYou;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/ThankYou.jsx", error: String((e && e.message) || e) }); }

})();
