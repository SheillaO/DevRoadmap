// 1. Data library containing the full written pieces for all 8 topics
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
        