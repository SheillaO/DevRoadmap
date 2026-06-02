// 1. Structural information array for the 8 article previews
const articlesSummaryList = [
  {
    id: "1",
    date: "May 20, 2026",
    time: "10 min read",
    title: "Why Technical Founders Fail to Explain Their Products",
    image: "images/future.png",
    excerpt:
      "How engineers think vs. how buyers think. The gap that kills good products — and how to bridge it.",
  },
  {
    id: "2",
    date: "April 15, 2026",
    time: "11 min read",
    title: "Building Value Propositions for Technical Audiences",
    image: "images/value.png",
    excerpt:
      "The CFO, CTO, and end user all want different things. Here's how to win with one value proposition.",
  },
  {
    id: "3",
    date: "March 10, 2026",
    time: "12 min read",
    title: "The GTM Playbook for Emerging Technologies",
    image: "images/gtm.png",
    excerpt:
      "How to go-to-market when you're selling something nobody understands yet. (Spoiler: educate before you sell.)",
  },
  {
    id: "4",
    date: "February 05, 2026",
    time: "9 min read",
    title: "Why Your Competitive Analysis is Useless",
    image: "images/competition.png",
    excerpt:
      "Your customers aren't comparing you to competitors. They're comparing you to the status quo. Here's why that changes everything.",
  },
  {
    id: "5",
    date: "Dec 30, 2025",
    time: "10 min read",
    title: "Pricing is Positioning",
    image: "images/pricing.png",
    excerpt:
      "Your pricing strategy reveals your value proposition. Make sure they align, or watch your deals collapse.",
  },
  {
    id: "6",
    date: "November 25, 2025",
    time: "11 min read",
    title: "The Hidden Economics of Customer Success",
    image: "images/customer.png",
    excerpt:
      "Why your post-sale positioning matters more than your pre-sale messaging. And how it impacts expansion revenue.",
  },
  {
    id: "7",
    date: "October 20, 2025",
    time: "12 min read",
    title: "When Your GTM Strategy Breaks (And What To Do)",
    image: "images/break.png",
    excerpt:
      "Real examples of campaigns that failed. Why they failed. How to fix it and iterate toward product-market fit.",
  },
  {
    id: "8",
    date: "September 16, 2025",
    time: "10 min read",
    title: "The PM/Marketing Relationship Nobody Talks About",
    image: "images/relationship.png",
    excerpt:
      "How product and marketing teams break alignment — and how to build trust so you actually ship great products together.",
  },
];

// 2. Fetch the target layout injection elements
const articlesGridElement = document.getElementById("articles-grid");
const sidebarMenuElement = document.getElementById("sidebar-menu");

// 3. Educational execution loop to build up strings on the page container
articlesSummaryList.forEach(function (post) {
  // Create preview cards WITHOUT images for a ultra-clean, minimal index
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
