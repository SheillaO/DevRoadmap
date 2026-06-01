// 1. Data library containing the full written pieces for all 8 topics
const technicalArticles = {
  1: {
    title: "Why Your Responsive Design Strategy is Backwards",
    metaDescription:
      "Why responsive design strategy matters more than mobile-first constraints.",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    level: "Beginner to Intermediate",
    toc: [
      { anchor: "#problem", label: "The Problem" },
      { anchor: "#solution", label: "Component-First" },
      { anchor: "#example", label: "Card Example" },
      { anchor: "#containers", label: "CSS Containers" },
      { anchor: "#takeaway", label: "Key Takeaways" },
    ],
    bodyHtml: `
            <header class="article-header">
                <h1>Why Your Responsive Design Strategy is Backwards</h1>
                <div class="article-meta-full">
                    <span>📅 Jan 15, 2025</span>
                    <span class="reading-time">8 min read</span>
                    <span>✍️ Beginner to Intermediate</span>
                </div>
            </header>
            <section>
                <h2 id="problem">The Problem With "Mobile-First"</h2>
                <p>Everyone says "build mobile-first." It's the conventional wisdom. Design for the smallest screen, then scale up. I did this for 2 years.</p>
                <p>Then I shipped a project for a client, and the desktop experience was... wrong. Not broken. Just wrong.</p>
                <p>The layout worked. The buttons clicked. The forms submitted. But something felt off. It felt like I was looking at a mobile design stretched to 1440px. Because I was.</p>
                <blockquote>"Mobile-first is a constraint-based mindset. It forces you to prioritize. But it also forces you to think small first, then extrapolate. That's backwards."</blockquote>
                
                <h2 id="solution">What I Should Have Done: Component-First</h2>
                <p>Instead of "mobile-first," think "component-first."</p>
                <p>A button is still a button. A card is still a card. A navigation menu is still a menu. But how that button, card, and menu respond to space — that's where strategy matters.</p>
                
                <h3 id="example">Example: The Card Component</h3>
                <p>Here's what I used to do in a reactive, mobile-first approach:</p>
                <pre><code>.card {
  width: 100%;
  padding: 1rem;
}
@media (min-width: 768px) {
  .card { width: 48%; display: inline-block; }
}</code></pre>
                <p>Here's what I do now with a proactive component approach. The card asks: "What space do I have?" and the parent handles layout cleanly:</p>
                <pre><code>.card {
  padding: 1.5rem;
  width: 100%;
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}</code></pre>
                <p>The layout adapts cleanly based on content density thresholds, not arbitrary hardware metrics.</p>
 
                <h2 id="containers">The Real Shift: From Breakpoints to Containers</h2>
                <p>CSS Container Queries change the dynamic entirely. The item controls its own inner appearance rules based on parent element widths rather than global screen viewports.</p>
                <pre><code>@container (min-width: 500px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}</code></pre>
                
                <h2 id="takeaway">What I'm Taking Away</h2>
                <ul>
                    <li><strong>Forget standard viewports:</strong> Plan inside micro-bounding layouts.</li>
                    <li><strong>Lean on auto-fit mechanisms:</strong> Grid tracks provide fluid flexibility effortlessly.</li>
                    <li><strong>Adopt container metrics early:</strong> This is the future of modular systems design.</li>
                </ul>
            </section>
        `,
  },
  2: {
    title: "The Single JavaScript Skill That Separates Juniors from Seniors",
    metaDescription:
      "Mastering the event loop, execution stack, and runtime mechanics.",
    date: "Jan 22, 2025",
    readTime: "12 min read",
    level: "Intermediate to Advanced",
    toc: [
      { anchor: "#eventloop", label: "The Event Loop" },
      { anchor: "#confusion", label: "Async Confusion" },
      { anchor: "#mechanics", label: "Microtasks" },
    ],
    bodyHtml: `
            <header class="article-header">
                <h1>The Single JavaScript Skill That Separates Juniors from Seniors</h1>
                <div class="article-meta-full">
                    <span>📅 Jan 22, 2025</span>
                    <span class="reading-time">12 min read</span>
                    <span>✍️ Intermediate to Advanced</span>
                </div>
            </header>
            <section>
                <h2 id="eventloop">The Fallacy of 'Magic' Frameworks</h2>
                <p>Junior engineers run straight to modern web UI libraries or framework tools. Senior engineers master the underlying single-threaded execution context of the browser runtime itself. Understanding the Call Stack, Macro-task engine queue, and Web APIs transforms your debugging capabilities entirely.</p>
                
                <h2 id="confusion">Real Examples of Async/Await Confusion</h2>
                <p>Many developers assume that calling <code>async/await</code> transforms synchronous blocking sequences into magic concurrent operations running threads in the background. In reality, it is purely cleaner syntax formatting built to handle non-blocking asynchronous events natively.</p>
                <pre><code>console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');</code></pre>
                <p>A junior engineer struggles to map out the exact code sequence printed here. A senior knows the native engine structure prioritizes micro-task executions (Promises) above general structural timelines (setTimeout) every single run.</p>
                <p>Output:</p>
                <pre><code>Start
End
Promise
Timeout</code></pre>
                <p>Why? Because:</p>
                <ol style="color: #555; line-height: 1.8;">
                    <li>Synchronous code runs first (Start, End)</li>
                    <li>Microtasks (Promises) run after synchronous, before macrotasks</li>
                    <li>Macrotasks (setTimeout) run last</li>
                </ol>
 
                <h2 id="mechanics">Understanding the Microtask Queue</h2>
                <p>When you master the underlying mechanics of how engine ticks operate, your architecture becomes clean, resilient, and ready to digest massive amounts of real-time application events without choking UI interactions.</p>
                <blockquote>The event loop is not magic. It's a predictable, well-defined sequence. Master it, and debugging becomes deduction.</blockquote>
                <p>Learn this ONE thing, and you'll debug async problems 10x faster than your peers.</p>
            </section>
        `,
  },
  3: {
    title: "I Built 5 Projects in 6 Months. Here's What Broke Me",
    metaDescription:
      "A personal retrospective on portfolio strategy vs shallow production shipping.",
    date: "Dec 05, 2024",
    readTime: "10 min read",
    level: "Beginner to Intermediate",
    toc: [
      { anchor: "#burnout", label: "The Grind Trap" },
      { anchor: "#failures", label: "What Actually Broke" },
      { anchor: "#refactor", label: "The True Lesson" },
    ],
    bodyHtml: `
            <header class="article-header">
                <h1>I Built 5 Projects in 6 Months. Here's What Broke Me</h1>
                <div class="article-meta-full">
                    <span>📅 Dec 05, 2024</span>
                    <span class="reading-time">10 min read</span>
                    <span>✍️ Beginner to Intermediate</span>
                </div>
            </header>
            <section>
                <h2 id="burnout">The Grind Trap</h2>
                <p>Tutorial culture dictates that code speed and repository quantity prove competence. I challenged myself to build 5 major applications inside six months. The resulting data wasn't an impressive software catalog—it was classic burnout.</p>
                
                <h2 id="failures">What Actually Broke</h2>
                <p>By jumping from project to project, I completely skipped real architectural challenges. I rushed through simple boilerplate steps, avoided difficult schema integrations, and hardcoded authentication hooks. The moment those apps had to support high-throughput operations or advanced relational models, they shattered under deep technical debt.</p>
                <blockquote>"Building five shallow cloned code bases proves you can copy instructional materials. It does not prove you are ready to engineer robust production applications."</blockquote>
                <p>What I learned: quantity is a vanity metric. Depth is what matters.</p>
 
                <h2 id="refactor">The True Lesson</h2>
                <p>I stopped building new, superficial apps. Instead, I took a single existing project and spent three full months refactoring its inner database configurations, testing error boundaries, and decoupling brittle utilities. That single structural refactor taught me more about genuine system scaling than all previous build tasks combined.</p>
                <p>Now, when I build something, I build it once—and I build it right.</p>
            </section>
        `,
  },
  4: {
    title: "Debugging Responsive Design Without DevTools",
    metaDescription:
      "How to think about interface issues systematically like a detective.",
    date: "Dec 18, 2024",
    readTime: "9 min read",
    level: "Intermediate",
    toc: [
      { anchor: "#detective", label: "Detective Mindset" },
      { anchor: "#overflow", label: "Hunting Horizontal Scroll" },
      { anchor: "#hardware", label: "Hardware Isolation" },
    ],
    bodyHtml: `
            <header class="article-header">
                <h1>Debugging Responsive Design Without DevTools</h1>
                <div class="article-meta-full">
                    <span>📅 Dec 18, 2024</span>
                    <span class="reading-time">9 min read</span>
                    <span>✍️ Intermediate</span>
                </div>
            </header>
            <section>
                <h2 id="detective">The Simulated Viewport Crutch</h2>
                <p>Relying exclusively on the artificial phone emulator in browser tools creates a false sense of interface safety. It hides hardware processing quirks, browser layout rendering bugs, and interaction friction points that real devices expose immediately.</p>
                <p>The DevTools phone simulator is a lie. It tells you things "work" when they actually break on real hardware.</p>
 
                <h2 id="overflow">Hunting Horizontal Scroll Layout Pests</h2>
                <p>When unexpected horizontal page breaks ruin your screen layout bounds, do not apply random styles blindly. Transition into a structural detective and use precise diagnostic rules to isolate overflowing elements instantly:</p>
                <pre><code>/* The ultimate layout diagnostic rule */
* {
  background: rgba(255, 0, 0, 0.1) !important;
  outline: 1px solid red !important;
}</code></pre>
                <p>This colors and outlines every single layout container on your board, making overflowing components visually obvious right away.</p>
                <p>Once you see the red outline extending past your viewport edge, you've found the culprit. Then you can ask: is it padding? Is it a fixed width? Is it a margin? The outline shows you exactly what's wrong.</p>
 
                <h2 id="hardware">Testing Reality</h2>
                <p>True interface robustness is achieved by sizing viewports iteratively across physical test environments and studying real interactions to ensure rendering engines process structural tracks identically.</p>
                <p>Borrow a friend's phone. Test on an older device. Test on a tablet. Test with slow 3G network speeds. The DevTools simulator can't replicate what real hardware does under pressure.</p>
                <p>That's where real bugs live.</p>
            </section>
        `,
  },
  5: {
    title: "CSS Grid Taught Me How to Think",
    metaDescription:
      "How layout rules function as architectural metaphors for system software engineering.",
    date: "Nov 12, 2024",
    readTime: "11 min read",
    level: "Advanced",
    toc: [
      { anchor: "#metaphor", label: "The Grid Metaphor" },
      { anchor: "#predictability", label: "Predictable Frameworks" },
      { anchor: "#architecture", label: "System Architectures" },
    ],
    bodyHtml: `
            <header class="article-header">
                <h1>CSS Grid Taught Me How to Think</h1>
                <div class="article-meta-full">
                    <span>📅 Nov 12, 2024</span>
                    <span class="reading-time">11 min read</span>
                    <span>✍️ Advanced</span>
                </div>
            </header>
            <section>
                <h2 id="metaphor">Layout Rules as Architectural Paradigms</h2>
                <p>Before grid properties emerged, styling web elements felt like wrestling with broken float paths and loose positioning. CSS Grid introduced structural, declarative design thinking. You map space dimensions up front, and structural tracks align themselves cleanly.</p>
                <p>This is not just a layout trick. This is a way of thinking that applies everywhere in software.</p>
 
                <h2 id="predictability">Embracing Matrix-Based Predictability</h2>
                <p>When you build explicit templates through properties like <code>grid-template-areas</code>, you write code that mirrors reliable system software routing. It introduces a reliable structural framework where editing layouts happens in one central blueprint place.</p>
                <pre><code>grid-template-areas:
  "header header header"
  "sidebar main main"
  "footer footer footer";</code></pre>
                <p>Look at that. The entire layout structure, visualized. One place to understand the whole system. Change the template, everything updates.</p>
                <blockquote>"Grid taught me that constraints enable clarity. When you define boundaries upfront, everything that happens inside becomes predictable."</blockquote>
 
                <h2 id="architecture">Software Engineering Crossover Lessons</h2>
                <p>This layout methodology completely changed how I organize backend data pipelines. Clean engineering requires setting up explicit structures and contracts early, enabling dynamic contents to travel through smoothly without side effects.</p>
                <p>It's the same principle: define your grid, define your schema, define your API contract. Then everything else is just data flowing through a structure you've already thought through.</p>
                <p>Grid didn't teach me CSS. Grid taught me systems thinking.</p>
            </section>
        `,
  },
  6: {
    title: "Why We Should Teach Beginners Systems Thinking Before Syntax",
    metaDescription:
      "Learning the constraints before learning the abstractions changes everything.",
    date: "Jan 08, 2025",
    readTime: "10 min read",
    level: "Beginner to Intermediate",
    toc: [
      { anchor: "#problem", label: "The Wrong Sequence" },
      { anchor: "#constraints", label: "Constraints First" },
      { anchor: "#browser", label: "Understanding the Browser" },
      { anchor: "#why", label: "Why This Matters" },
    ],
    bodyHtml: `
            <header class="article-header">
                <h1>Why We Should Teach Beginners Systems Thinking Before Syntax</h1>
                <div class="article-meta-full">
                    <span>📅 Jan 08, 2025</span>
                    <span class="reading-time">10 min read</span>
                    <span>✍️ Beginner to Intermediate</span>
                </div>
            </header>
            <section>
                <h2 id="problem">The Current Teaching Sequence is Backwards</h2>
                <p>Here's how most people learn web development:</p>
                <ol style="color: #555; line-height: 1.9;">
                    <li>Learn JavaScript syntax: variables, functions, loops</li>
                    <li>Learn a framework: React, Vue, Svelte</li>
                    <li>Build something with it</li>
                    <li>Pray it works</li>
                </ol>
                <p>This sequence assumes the framework is transparent. It's not.</p>
                <p>What actually happens is you spend months writing code that feels magical. You don't understand why <code>useEffect</code> runs twice in development. You don't know why your CSS breaks on mobile. You don't comprehend how the browser actually renders HTML.</p>
                <p>You become fluent in syntax before you understand systems. That's backwards.</p>
 
                <h2 id="constraints">Learning Through Constraints</h2>
                <p>Here's a better sequence:</p>
                <ol style="color: #555; line-height: 1.9;">
                    <li><strong>Understand HTTP:</strong> How does data actually travel from server to browser?</li>
                    <li><strong>Understand the DOM:</strong> What is HTML? What happens when the browser parses it?</li>
                    <li><strong>Understand the rendering pipeline:</strong> Paint, layout, composite—what actually happens on screen?</li>
                    <li><strong>Understand event loops:</strong> How does JavaScript execute? When does it block?</li>
                    <li><strong>THEN</strong> learn a framework</li>
                </ol>
                <p>When you understand the constraints first, the framework isn't magic anymore. It's a tool that works *with* those constraints.</p>
 
                <h2 id="browser">A Concrete Example: The Browser Rendering Pipeline</h2>
                <p>Most beginners don't know that when they write CSS, they're triggering specific browser operations:</p>
                <pre><code>// This triggers a full layout recalculation
element.style.width = '100%';
 
// This triggers a repaint
element.style.color = 'red';
 
// This is cheap
element.style.transform = 'translate(10px)';
</code></pre>
                <p>Understanding *why* the third line is faster changes how you write everything after. You stop cargo-culting performance patterns and start understanding trade-offs.</p>
                <blockquote>"When you learn the system first, you write code that works *with* the constraints, not against them."</blockquote>
 
                <h2 id="why">Why Most Teaching Gets This Wrong</h2>
                <p>Frameworks are fun. Seeing something appear on screen is gratifying. So teachers lead with the fun part—the framework—and save the "boring" systems stuff for later.</p>
                <p>But that's like teaching someone to drive by putting them in a Formula 1 car on a racetrack before they understand how steering works.</p>
                <p>Start with boring. Start with constraints. Start with understanding how the system actually works.</p>
                <p>That's when coding becomes engineering.</p>
            </section>
        `,
  },
  7: {
    title: "What My Previous Career Taught Me About Technical Debt",
    metaDescription:
      "Systems thinking from outside tech applies directly to software architecture.",
    date: "Jan 01, 2025",
    readTime: "11 min read",
    level: "Intermediate to Advanced",
    toc: [
      { anchor: "#parallel", label: "The Parallel" },
      { anchor: "#examples", label: "Real Examples" },
      { anchor: "#wisdom", label: "The Wisdom Transfer" },
    ],
    bodyHtml: `
            <header class="article-header">
                <h1>What My Previous Career Taught Me About Technical Debt</h1>
                <div class="article-meta-full">
                    <span>📅 Jan 01, 2025</span>
                    <span class="reading-time">11 min read</span>
                    <span>✍️ Intermediate to Advanced</span>
                </div>
            </header>
            <section>
                <h2 id="parallel">The Parallel Nobody Talks About</h2>
                <p>Coming into tech from a non-technical background gives you an unusual advantage: you've already mastered systems thinking in another domain.</p>
                <p>Technical debt feels like a software problem. But it's actually an organizational problem—the same kind every complex system faces.</p>
                <p>My previous field taught me that.</p>
 
                <h2 id="examples">When Systems Break (Real Examples)</h2>
                <p>In [YOUR PREVIOUS FIELD]:</p>
                <ul style="color: #555; line-height: 1.9;">
                    <li>Organizations that ignore maintenance end up with catastrophic failures</li>
                    <li>Cutting corners today costs 10x more tomorrow</li>
                    <li>Shortcuts that seem fast initially become anchors</li>
                    <li>The cost compounds—you pay interest, not just principal</li>
                </ul>
                <p>The same dynamics exist in codebases.</p>
                <p>When you hardcode authentication hooks (shortcut), you think you've saved 2 hours. But when the API changes, every module breaks. You've just created a hidden dependency that costs 20 hours to refactor.</p>
                <blockquote>"Technical debt is called 'debt' because it has interest. Every day you carry it, the cost grows."</blockquote>
 
                <h2 id="wisdom">The Wisdom That Transfers</h2>
                <p>My previous field taught me three principles that apply perfectly to software:</p>
                
                <h3>1. Small consistent maintenance beats emergency repairs</h3>
                <p>In [YOUR FIELD], the systems that survived were the ones maintained regularly. The ones that cut corners on upkeep failed suddenly and catastrophically.</p>
                <p>Same with code. A codebase that refactors continuously stays healthy. One that ignores tech debt eventually becomes unmaintainable.</p>
 
                <h3>2. Transparency about shortcuts creates accountability</h3>
                <p>The best organizations I worked with were transparent: "We're taking this shortcut to hit deadline X, but we're documenting it and committing to fix it by date Y."</p>
                <p>Teams that hide shortcuts, or pretend they don't exist, are the ones buried in unmaintainable code.</p>
 
                <h3>3. Invest in the foundation, not the decoration</h3>
                <p>Resources follow visibility. The visible features get attention. The unsexy foundation work gets deferred.</p>
                <p>But the foundation determines whether the whole thing survives.</p>
 
                <p>Teams that invest in their foundational architecture—testing, documentation, clean dependencies—compound over time. Ones that chase features become fragile.</p>
 
                <h2>The Real Takeaway</h2>
                <p>Coming from another field isn't a liability. It's a lens. You've already seen how complex systems break. You know what healthy systems look like. You understand that shortcuts have costs.</p>
                <p>Apply that knowledge to code, and you'll write software that lasts.</p>
            </section>
        `,
  },
  8: {
    title: "The Portfolio Myth: Why Project Count Doesn't Matter",
    metaDescription:
      "Recruiters don't count your GitHub repos. They care about what you think.",
    date: "Dec 28, 2024",
    readTime: "9 min read",
    level: "Beginner to Intermediate",
    toc: [
      { anchor: "#myth", label: "The Myth" },
      { anchor: "#reality", label: "What Recruiters Actually Care About" },
      { anchor: "#proof", label: "Proof is in Thinking" },
      { anchor: "#actionable", label: "What To Do Instead" },
    ],
    bodyHtml: `
            <header class="article-header">
                <h1>The Portfolio Myth: Why Project Count Doesn't Matter</h1>
                <div class="article-meta-full">
                    <span>📅 Dec 28, 2024</span>
                    <span class="reading-time">9 min read</span>
                    <span>✍️ Beginner to Intermediate</span>
                </div>
            </header>
            <section>
                <h2 id="myth">The Lie We Tell Junior Developers</h2>
                <p>Build more projects. Quantity builds your portfolio. Make 10 projects and you'll get hired.</p>
                <p>This is a lie.</p>
                <p>I've seen junior developers with 15 GitHub repos get rejected, and juniors with 2 repos get offers from FAANG companies.</p>
                <p>The difference? One person had *opinions about their code*. The other had code that followed tutorials.</p>
 
                <h2 id="reality">What Recruiters Are Actually Looking For</h2>
                <p>When a senior engineer looks at your portfolio, they're asking:</p>
                <blockquote>"What does this person think about?"</blockquote>
                <p>Not: "How many things did they build?"</p>
                <p>Not: "Can they follow a tutorial?"</p>
                <p>Not: "How shiny is their GitHub?"</p>
                <p>They're asking: <strong>Does this person think differently?</strong></p>
 
                <h2 id="proof">Proof is in Thinking, Not Building</h2>
                <p>A 50-line article about why mobile-first design is incomplete tells a recruiter more than 5 GitHub repos with boilerplate code.</p>
                <p>Why?</p>
                <ol style="color: #555; line-height: 1.9;">
                    <li>It shows you *notice* problems most people miss</li>
                    <li>It shows you can *articulate* complex ideas</li>
                    <li>It shows you have *conviction*—you believe something and can defend it</li>
                    <li>It shows you *think*, not just execute</li>
                </ol>
                <p>A recruiter reading that article thinks: "This person understands systems. This person would be good in a code review. This person asks 'why?' instead of just accepting convention."</p>
                <p>Those are the people they hire.</p>
 
                <h2 id="actionable">What To Do Instead</h2>
                <p>Stop counting projects. Start collecting insights.</p>
                <p>For every project you build, ask yourself:</p>
                <ul style="color: #555; line-height: 1.9;">
                    <li>What did I learn that surprised me?</li>
                    <li>What broke my assumptions?</li>
                    <li>What would I do differently next time?</li>
                    <li>What problem did this solve in an unusual way?</li>
                </ul>
                <p>Write about those insights. Share them. Defend them.</p>
                <p>That's a portfolio that gets you hired.</p>
                <p>Not the project count. The thinking.</p>
            </section>
        `,
  },
};

// 2. Extract current page parameter route ID (e.g., article.html?id=2)
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("id");

// 3. Locate target DOM injection nodes
const contentTarget = document.getElementById("article-content-target");
const tocTarget = document.getElementById("article-toc");
const titleTarget = document.getElementById("page-title");
const metaTarget = document.getElementById("meta-description");

// 4. Verification Check: Check if data entry exists
if (articleId && technicalArticles[articleId]) {
  const article = technicalArticles[articleId];

  // Inject core contents, head title tags, and page metadata strings
  contentTarget.innerHTML = article.bodyHtml;
  titleTarget.innerText = `${article.title} - DevRoadmap`;
  metaTarget.setAttribute("content", article.metaDescription);

  // Dynamically build the page table of contents menu
  tocTarget.innerHTML = ""; // Clear placeholders
  article.toc.forEach(function (item) {
    const tocItemHtml = `<li><a href="${item.anchor}">${item.label}</a></li>`;
    tocTarget.innerHTML += tocItemHtml;
  });
} else {
  // Graceful routing fallback error notice if articleId doesn't exist
  contentTarget.innerHTML = `
        <header class="article-header">
            <h1>Article Not Found</h1>
            <p>The post you are trying to view does not exist or has been relocated.</p>
            <p><a href="index.html">← Return to Homepage</a></p>
        </header>
    `;
  document.getElementById("toc-title").innerText = "⚠️ Error";
  tocTarget.innerHTML = `<li><a href="index.html">Back Home</a></li>`;
}