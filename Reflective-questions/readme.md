# REFLECTION JOURNAL

## Class One - The 2026 Web Ecosystem
### Question 1: Draw (on paper or digitally) how a browser takes your HTML and turns it into what you see on screen. Label: DOM Tree, Render Tree, Layout, Paint. Explain in your own words why understanding this matters for a web developer.
* Answer: 
1. DOM Tree (Document Object Model) is a programming interface, it represent a tree of nodes that our web page structure is built on. 
![DOM TREE](./diagram1.svg).
It is like a map that a web browser use to understand and display a website. each nodes contains a elements that has attribute and can have different child, the content of the head is not displayed on the web browser except for the title what is displayed on the screen is the content in the body element.
2. Render Tree: is the structure the browser need to display it run the CSS file and show all the visible elements. Example: <div style="dispaly: none"></div> wouldnot be rendered on the web browser it assumed invisible.
3. Layout: After the browser displayed the render tree then it calculate the sizes of the rendered elements according to the given height, width, postion, padding, margins as stated in the CSS.
4. Paint: Ones the elements have been positioned appropraitely then it been decorated. the text styling, colors, borders, images shadows are displayed appropraitely and heirarchically.
#### Standard Browser Rendering Process
![Browser rendering process](./diagram2.svg).

### Question 2: HTTP/3 uses QUIC instead of TCP. Explain in simple terms what problem QUIC solves and why it matters for users in 2026.
* Answer: QUIC (Quick UDP Internet Connection) is able to solve the issue of speed, reliability and secure connection.
TCP requires multi-stage processes- a TCP handshake followed by TLC but QUIC combines and encrypt both steps enabling secure connection in one round trip.
In TCP a single lost packet stops all data streams until the packet is re-sent while in QUIC If a packet drops on one stream, only that specific stream halts thereby avoiding head-of-line blocking.
QUIC identifies connections using unique IDs rather than IP addresses. This means your video calls or downloads won't drop when you switch from Wi-Fi to cellular data on your mobile device.

### Question 3: From your own experience as an internet user, identify ONE website that does not use semantic HTML properly. What clues tell you this? (e.g., accessibility, screen reader compatibility)
* Answer: I cannot think of anyone for now

## Product Thinking
### Question1 : You're building a blog for a famous chef who wants "more traffic." How does semantic HTML — especially <article>, <header>, <main>, <aside> — help search engines understand and rank their content? Be specific.
* Answer:
<article>: It helps understand and isolate the main subject of the page. it also help indicate to search engines what content is most relevant on the page. For example for a chef company an article element content can be on the important of the product the chef is producing.
<header>: It helps the search engine identifies the site name, primary logo and essential navigation link, so the site would be easily assessed and reached.
<main>: It can only be one on a page and its the primary focus of the web page, making it significantly easier for algorithms to determine exactly what keyword queries the page should be ranked for, and also help to find information quickly.
<aside>: It provide relevant links or secondary references.

### Question2: Edge computing moves processing closer to users. Imagine you're designing a real-time multiplayer game. What edge computing benefits would matter most, and why?
* Answer: Edge Node Layer

## Engineering Best Practice
### Question1: A junior developer says "I just use divs everywhere, it works fine." Write a 150+ word response explaining why you agree or disagree — touching on: accessibility, SEO, code maintainability, and developer collaboration.
* Answer: Yes, if you use divs everywhere it works fine but its not the best practice. Using Sematic element is the best for a good web developer, it makes your code easily accessiblle to screen reader, search engine and anyone with disability. Semantics SEO focuses on optimizing web content to align with the search intent of users and the semantic understanding of the search engines. Google, the most widely used search engine, considers semantic HTML as a ranking factor, as it helps search engine bots understand the main content of a webpage, its relevance, and hierarchy. By using semantic HTML, web developers can ensure that search engines recognize the importance of the content, leading to higher visibility and better ranking in search results. Code becomes more readeable and developers can quickly identify the purpose of each sections. Team members can understand the page structure at a glance and lastly it improves communication among developers, designers and testers.

---



