// 1. Structural information array for the 8 article previews
const articlesSummaryList = [
  {
    id: "1",
    date: "Jan 20, 2025",
    time: "10 min read",
    title: "Why Technical Founders Fail to Explain Their Products",
    excerpt:
      "How engineers think vs. how buyers think. The gap that kills good products — and how to bridge it.",
  },
  {
    id: "2",
    date: "Jan 15, 2025",
    time: "11 min read",
    title: "Building Value Propositions for Technical Audiences",
    excerpt:
      "The CFO, CTO, and end user all want different things. Here's how to win with one value proposition.",
  },
  {
    id: "3",
    date: "Jan 10, 2025",
    time: "12 min read",
    title: "The GTM Playbook for Emerging Technologies",
    excerpt:
      "How to go-to-market when you're selling something nobody understands yet. (Spoiler: educate before you sell.)",
  },
  {
    id: "4",
    date: "Jan 05, 2025",
    time: "9 min read",
    title: "Why Your Competitive Analysis is Useless",
    excerpt:
      "Your customers aren't comparing you to competitors. They're comparing you to the status quo. Here's why that changes everything.",
  },
  {
    id: "5",
    date: "Dec 30, 2024",
    time: "10 min read",
    title: "Pricing is Positioning",
    excerpt:
      "Your pricing strategy reveals your value proposition. Make sure they align, or watch your deals collapse.",
  },
  {
    id: "6",
    date: "Dec 25, 2024",
    time: "11 min read",
    title: "The Hidden Economics of Customer Success",
    excerpt:
      "Why your post-sale positioning matters more than your pre-sale messaging. And how it impacts expansion revenue.",
  },
  {
    id: "7",
    date: "Dec 20, 2024",
    time: "12 min read",
    title: "When Your GTM Strategy Breaks (And What To Do)",
    excerpt:
      "Real examples of campaigns that failed. Why they failed. How to fix it and iterate toward product-market fit.",
  },
  {
    id: "8",
    date: "Dec 15, 2024",
    time: "10 min read",
    title: "The PM/Marketing Relationship Nobody Talks About",
    excerpt:
      "How product and marketing teams break alignment — and how to build trust so you actually ship great products together.",
  },
];

// 2. Fetch the target layout injection elements
const articlesGridElement = document.getElementById("articles-grid");
const sidebarMenuElement = document.getElementById("sidebar-menu");

// 3. Educational execution loop to build up strings on the page container
articlesSummaryList.forEach(function (post) {
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
