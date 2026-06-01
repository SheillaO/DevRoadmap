// 1. Structural information array for the 5 dashboard previews
const articlesSummaryList = [
    {
        id: "1",
        date: "Jan 15, 2025",
        time: "8 min read",
        title: "Why Your Responsive Design Strategy is Backwards",
        excerpt: "Most developers learn mobile-first, but think component-first. Here's why that distinction matters and how it changed my entire approach to building interfaces."
    },
    {
        id: "2",
        date: "Jan 22, 2025",
        time: "12 min read",
        title: "The Single JavaScript Skill That Separates Juniors from Seniors",
        excerpt: "It's not frameworks. It's not libraries. It's understanding how JavaScript actually executes. This one concept changed my debugging forever."
    },
    {
        id: "3",
        date: "Dec 05, 2024",
        time: "10 min read",
        title: "I Built 5 Projects in 6 Months. Here's What Broke Me (And How I Fixed It)",
        excerpt: "Portfolio building isn't about quantity. It's about learning from each failure. Here's my framework for turning shipped projects into real growth."
    },
    {
        id: "4",
        date: "Dec 18, 2024",
        time: "9 min read",
        title: "Debugging Responsive Design Without DevTools",
        excerpt: "Your browser's DevTools is a crutch. Here's how to debug responsive issues like a detective, not a tool-user."
    },
    {
        id: "5",
        date: "Nov 12, 2024",
        time: "11 min read",
        title: "CSS Grid Taught Me How to Think",
        excerpt: "CSS Grid isn't just a layout tool. It's a mental model for problem-solving. How learning layout changed how I architect systems."
    }
];

// 2. Fetch the target layout injection elements
const articlesGridElement = document.getElementById('articles-grid');
const sidebarMenuElement = document.getElementById('sidebar-menu');

// 3. Educational execution loop to build up strings on the page container
articlesSummaryList.forEach(function(post) {
    
    // Create preview cards, routing explicitly through article.html?id=X
    const previewCardHtml = `
        <article class="article-preview">
            <div class="article-meta">
                <span>📅 ${post.date}</span>
                <span class="reading-time">⏱️ ${post.time}</span>
            </div>
            <h2>${post.title}</h2>
            <p>${post.excerpt}</p>
            <a href="article.html?id=${post.id}" class="read-more">Read Article →</a>
        </article>
    `;
    
    // Create matching scannable links for the landing index sidebar
    const quickNavLinkHtml = `
        <li><a href="article.html?id=${post.id}">${post.title}</a></li>
    `;
    
    // Append the text block segments into your DOM containers safely
    articlesGridElement.innerHTML += previewCardHtml;
    sidebarMenuElement.innerHTML += quickNavLinkHtml;
});
