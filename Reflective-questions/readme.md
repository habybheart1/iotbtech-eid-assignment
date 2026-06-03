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
### Question1 : You're building a blog for a famous chef who wants "more traffic." How does semantic HTML — especially ```<article>, <header>, <main>, <aside>``` — help search engines understand and rank their content? Be specific.
* Answer:
```<article>```: It helps understand and isolate the main subject of the page. it also help indicate to search engines what content is most relevant on the page. For example for a chef company an article element content can be on the important of the product the chef is producing.
```<header>```: It helps the search engine identifies the site name, primary logo and essential navigation link, so the site would be easily assessed and reached.
```<main>```: It can only be one on a page and its the primary focus of the web page, making it significantly easier for algorithms to determine exactly what keyword queries the page should be ranked for, and also help to find information quickly.
```<aside>```: It provide relevant links or secondary references.

### Question2: Edge computing moves processing closer to users. Imagine you're designing a real-time multiplayer game. What edge computing benefits would matter most, and why?
* Answer: Edge Node Layer

## Engineering Best Practice
### Question1: A junior developer says "I just use divs everywhere, it works fine." Write a 150+ word response explaining why you agree or disagree — touching on: accessibility, SEO, code maintainability, and developer collaboration.
* Answer: Yes, if you use divs everywhere it works fine but its not the best practice. Using Sematic element is the best for a good web developer, it makes your code easily accessiblle to screen reader, search engine and anyone with disability. Semantics SEO focuses on optimizing web content to align with the search intent of users and the semantic understanding of the search engines. Google, the most widely used search engine, considers semantic HTML as a ranking factor, as it helps search engine bots understand the main content of a webpage, its relevance, and hierarchy. By using semantic HTML, web developers can ensure that search engines recognize the importance of the content, leading to higher visibility and better ranking in search results. Code becomes more readeable and developers can quickly identify the purpose of each sections. Team members can understand the page structure at a glance and lastly it improves communication among developers, designers and testers.

---

## Class Two - Typography & Information Hierarchy
### Question1: Explain the difference between ```<em> and <i>```. When would you use each? Provide a real example from your own writing.
* Answer: em: em it means emphasis
          i: it means italic
          both elements italicize the text both their functionality differs.
Emphasis is used to place extra stress on the emphasized word, making it more accessible and show importance.
e.g ```<p>Here is the <em>rough sheet</em> for the assignment</p>```
Italics is to show difference in the word, maybe a scientific name, technical terms, foreign words etc which doesnot add any emphasis to the content, just appear as alternative voice, mood or style.
e.g ```<p><i>Cannabis sativa<i> is being smoked my most youth in Nigeria.</p>```
Example to combine the functionality
```<p><em>Everyone should take care of their mental health.</em> avoid burnout, maintain work-life balance and seek support when needed.The focus should be on creating a <i>environnement de soutien</i> for everyone.</p>```.

### Question2: Screen readers treat certain elements specially. List at least 3 HTML elements with special screen reader behaviour and explain why the browser handles them that way.
* Answer:
1. Anhcor Elements: Links provide navigation, so users need to distinguish them from ordinary text.
2. Button Elements: They are interactive controls used to perform actions, so screen readers need to identify them clearly for accessibility.
3. Input Elements: it require user input,so browser exposes their purpose and state to assistive technologies.
4. Main Elements: users can skip some content and go directly to the primary content.

### Question3: ARIA labels can save bad HTML, but they're not a substitute for semantic tags. Give an example of when you'd USE an aria-label — and when you should FIX YOUR HTML instead.
* Answer: 
1. arial-label is used when a semantic element like button has an svg element inside it without a text, so for screen reader to understand it better arial-label would be used 
E.g ```<button aria-label="Click">
        <icon>...</icon> <!-- A cart image to pick an item -->
    </button>```
Excerpt from  MDN: Use aria-label when an interactive element relies entirely on visuals (like an icon or SVG) and has no visible text to announce to screen readers.
2. When HTML needs to be fix is when non-sematic HTML is used like *div* or *span*
E.g ```<div class="submit-btn" aria-label="Submit Form">
        Click Me
    </div>```
    instead use a semantic element 
    ```<button type="submit">Submit</button>```

## Accessibility Reflection
### Question1 : Find a public website (government, bank, or similar) and test its accessibility. Can you tab through the page? Are form labels visible? Do buttons have clear focus states? Document your findings with specific examples.
* Answer: Couldnot get any.

## Product Thinking
### Question1: You're designing a technical documentation page for an API — users are developers who need to scan quickly. How would you structure the information hierarchy? Describe what your ```<h1> / <h2> / <h3>``` hierarchy would look like (describe actual content, not just tags).
* Answer: For a technical documentation page for an API. 
```<h1>```: It is the heading, it will be the API name e.g Weather Forecast
```<h2>```: It is the sub-heading, it will have the functional heading e.g the form that take the input label.
```<h3>```: It is the sub- sub-heading, it will contain the authentication part.

---

## Class 3 - Modern Assets & Linking
### Question1: A designer gives you a 5 MB PNG for a hero image. Explain step-by-step how you would optimize this for a production website in 2026. Include: formats, tools, and reasoning behind each choice.
* Answer: For good result the image will need to be resized into different width for responsive designs. 
picture element will be used it will tell the browser to pick the best image for different screen sizes.
```<picture>
    <source></source>
    <source></source>
    <img>
</picture>```
It will fetch image with the highest priority. Thou i didnot fully understand it.

### Question2: Explain srcset and when you'd use it. Create a scenario where srcset prevents a problem for mobile users.
* Answer: srcset is an attribute on img element, it gives the browsers different options to download the image best fit for different screen sizes.
e.g <img src="image-800.jpg"
    srcset="image-400.jpg 400w,
            image-800.jpg 800w,
            image-1200.jpg 1200w"
            sizes="(max-width:600px) 100vw, 50vw"
            alt="Responsible images"/>
    FRom the code snippet for mobile screen, it should display full screen(100vw) while other screen sizes it should take half screen.

### Question3: Why is rel="noopener" important when using target="_blank"? What security vulnerability does it prevent? Explain in terms a non-technical person would understand.
* Answer: rel="noopener" is important for security purpose. It prevent malicious site (hackers) from hijacking your website and data.
## Engineering Thinking
### Question1: You need to display 50 product images on a page. What's your optimization strategy? Consider: lazy loading, format choice, CDN, and responsive sizing.
* Answer: I will resize the image to reduce the size preferably use AVIF images. Not sure of the response.

---

