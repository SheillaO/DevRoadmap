// 1. Data library containing the full written pieces for all 5 topics
const technicalArticles = {
    "1": {
        title: "Why Your Responsive Design Strategy is Backwards",
        metaDescription: "Why responsive design strategy matters more than mobile-first constraints.",
        date: "Jan 15, 2025",
        readTime: "8 min read",
        level: "Beginner to Intermediate",
        toc: [
            { anchor: "#problem", label: "The Problem" },
            { anchor: "#solution", label: "Component-First" },
            { anchor: "#example", label: "Card Example" },
            { anchor: "#containers", label: "CSS Containers" },
            { anchor: "#takeaway", label: "Key Takeaways" }
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
        `
    },
    "2": {
        title: "The Single JavaScript Skill That Separates Juniors from Seniors",
        metaDescription: "Mastering the event loop, execution stack, and runtime mechanics.",
        date: "Jan 22, 2025",
        readTime: "12 min read",
        level: "Intermediate to Advanced",
        toc: [
            { anchor: "#eventloop", label: "The Event Loop" },
            { anchor: "#confusion", label: "Async Confusion" },
            { anchor: "#mechanics", label: "Microtasks" }
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
                <p>Junior engineers run straight to modern web UI libraries or framework tools. Senior engineers master the underlying single-threaded execution context of the browser runtime itself. Understanding the Call Stack, Macro-task engine queue, and Web APIs transforms your debugging capabilities.</p>
                
                <h2 id="confusion">Real Examples of Async/Await Confusion</h2>
                <p>Many developers assume that calling <code>async/await</code> transforms synchronous blocking sequences into magic concurrent operations running threads in the background. In reality, it is purely cleaner syntax formatting built to handle non-blocking asynchronous events natively.</p>
                <pre><code>console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');</code></pre>
                <p>A junior engineer struggles to map out the exact code sequence printed here. A senior knows the native engine structure prioritize micro-task executions (Promises) above general structural timelines (setTimeout) every single run.</p>

                <h2 id="mechanics">Understanding the Microtask Queue</h2>
                <p>When you master the underlying mechanics of how engine ticks operate, your architecture becomes clean, resilient, and ready to digest massive amounts of real-time application events without choking UI interactions.</p>
            </section>
        `
    },
    "3": {
        title: "I Built 5 Projects in 6 Months. Here's What Broke Me",
        metaDescription: "A personal retrospective on portfolio strategy vs shallow production shipping.",
        date: "Dec 05, 2024",
        readTime: "10 min read",
        level: "Beginner to Intermediate",
        toc: [
            { anchor: "#burnout", label: "The Grind Trap" },
            { anchor: "#failures", label: "What Actually Broke" },
            { anchor: "#refactor", label: "The True Lesson" }
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

                <h2 id="refactor">The True Lesson</h2>
                <p>I stopped building new, superficial apps. Instead, I took a single existing project and spent three full months refactoring its inner database configurations, testing error boundaries, and decoupling brittle utilities. That single structural refactor taught me more about genuine system scaling than all previous build tasks combined.</p>
            </section>
        `
    },
    "4": {
        title: "Debugging Responsive Design Without DevTools",
        metaDescription: "How to think about interface issues systematically like a detective.",
        date: "Dec 18, 2024",
        readTime: "9 min read",
        level: "Intermediate",
        toc: [
            { anchor: "#detective", label: "Detective Mindset" },
            { anchor: "#overflow", label: "Hunting Horizontal Scroll" },
            { anchor: "#hardware", label: "Hardware Isolation" }
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
Relying exclusively on the artificial phone emulator in browser tools creates a false sense of interface safety. It hides hardware processing quirks, browser layout rendering bugs, and interaction friction points.Hunting Horizontal Scroll Layout PestsWhen unexpected horizontal page breaks ruin your screen layout bounds, do not apply random styles blindly. Transition into a structural detective and use precise diagnostic rules to isolate overflowing elements instantly:/* The ultimate layout diagnostic rule */{background: rgba(255, 0, 0, 0.1) !important;outline: 1px solid red !important;}This colors and outlines every single layout container on your board, making overflowing components visually obvious right away.Testing RealityTrue interface robustness is achieved by sizing viewports iteratively across physical test environments and studying real interactions to ensure rendering engines process structural tracks identically.}, "5": { title: "CSS Grid Taught Me How to Think", metaDescription: "How layout rules function as architectural metaphors for system software engineering.", date: "Nov 12, 2024", readTime: "11 min read", level: "Advanced", toc: [ { anchor: "#metaphor", label: "The Grid Metaphor" }, { anchor: "#predictability", label: "Predictable Frameworks" }, { anchor: "#architecture", label: "System Architectures" } ], bodyHtml:CSS Grid Taught Me How to Think📅 Nov 12, 202411 min read✍️ AdvancedLayout Rules as Architectural ParadigmsBefore grid properties emerged, styling web elements felt like wrestling with broken float paths and loose positioning. CSS Grid introduced structural, declarative design thinking. You map space dimensions up front, and structural tracks align themselves cleanly.Embracing Matrix-Based PredictabilityWhen you build explicit templates through properties like grid-template-areas, you write code that mirrors reliable system software routing. It introduces a reliable structural framework where editing layouts happens in one central blueprint place.Software Engineering Crossover LessonsThis layout methodology completely changed how I organize backend data pipelines. Clean engineering requires setting up explicit structures and contracts early, enabling dynamic contents to travel through smoothly without side effects.`}};// 2. Extract current page parameter route ID (e.g., article.html?id=2)const urlParams = new URLSearchParams(window.location.search);const articleId = urlParams.get('id');// 3. Locate target DOM injection nodesconst contentTarget = document.getElementById('article-content-target');const tocTarget = document.getElementById('article-toc');const titleTarget = document.getElementById('page-title');const metaTarget = document.getElementById('meta-description');// 4. Verification Check: Check if data entry existsif (articleId && technicalArticles[articleId]) {const article = technicalArticles[articleId];// Inject core contents, head title tags, and page metadata stringscontentTarget.innerHTML = article.bodyHtml;titleTarget.innerText = ${article.title} - DevRoadmap;metaTarget.setAttribute('content', article.metaDescription);// Dynamically build the page table of contents menutocTarget.innerHTML = ""; // Clear placeholdersarticle.toc.forEach(function(item) {const tocItemHtml = <li><a href="${item.anchor}">${item.label}</a></li>;tocTarget.innerHTML += tocItemHtml;});} else {// Graceful routing fallback error notice if articleId doesn't existcontentTarget.innerHTML = <header class="article-header"> <h1>Article Not Found</h1> <p>The post you are trying to view does not exist or has been relocated.</p> <p><a href="index.html">← Return to Homepage</a></p> </header>;document.getElementById('toc-title').innerText = "⚠️ Error";tocTarget.innerHTML = <li><a href="index.html">Back Home</a></li>;}
