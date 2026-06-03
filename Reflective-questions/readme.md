# REFLECTION JOURNAL

## Class One - The 2026 Web Ecosystem
- Question 1: Draw (on paper or digitally) how a browser takes your HTML and turns it into what you see on screen. Label: DOM Tree, Render Tree, Layout, Paint. Explain in your own words why understanding this matters for a web developer.
* Answer: 
1. DOM Tree (Document Object Model) is a programming interface, it represent a tree of nodes that our web page structure is built on. 
![DOM TREE](./diagram1.svg).
It is like a map that a web browser use to understand and display a website. each nodes contains a elements that has attribute and can have different child, the content of the head is not displayed on the web browser except for the title what is displayed on the screen is the content in the body element.
2. Render Tree: is the structure the browser need to display it run the CSS file and show all the visible elements. Example: <div style="dispaly: none"></div> wouldnot be rendered on the web browser it assumed invisible.
3. Layout: After the browser displayed the render tree then it calculate the sizes of the rendered elements according to the given height, width, postion, padding, margins as stated in the CSS.
4. Paint: Ones the elements have been positioned appropraitely then it been decorated. the text styling, colors, borders, images shadows are displayed appropraitely and heirarchically.
#### standard browser rendering process
![Browser rendering process](./diagram2.svg).
