---
theme: mrtnvh
routerMode: "hash"
layout: cover

title: Container Queries
titleTemplate: "%s - mrtnvh"

fonts:
  sans: Inter
  weights: "400,700,800"
  mono: "IBM Plex Mono"

# the image source
background: ./images/hero.svg
---

---
layout: blocks
---

<ul>
  <li>Reusable components</li>
  <li><span v-click>Optimize responsive layout</span></li>
  <li><span v-click>Media queries \ config options \ other</span></li>
</ul>

<!--
Anyone here developing reusable components or a design system? If you developed those or are planning to develop those, how did you ensure that the components were able to have the most optimal layout across different viewport sizes, across applications. Applications that might not be in your or your team’s control?

How should people who implement those components integrate them and make them responsive in their application? Should they use media queries to create custom styling, or did you provide configuration options?

If my former questions are not ringing any bells: No worries. For the next 30 minutes, I'll share with you, how in the near future, you can develop robust, reusable, responsive component styles with something that I personally have been waiting for since I started developing responsive websites and – applications: Container Queries.
-->

---
layout: center
---

<div class="flex flex-col items-center justify-center h-full text-center">
  <h1>
    <a href="https://mrtnvh.com" target="_blank" rel="nofollow noopener">
      <img
        class="h-32"
        src="/images/mrtnvh-logo.svg"
      />
    </a>
  </h1>
</div>

<!--
My name is Maarten.
 -->

---
layout: cover
background: ./images/io-roles.svg
---

<!--
I am a Developer Advocate and Front-ender at iO at the Campus Eindhoven in the Netherlands. 

iO is a digital-first full-service company or as we say it ourselves, we work end-to-end. This means that if a company needs help in advancing digitally, in the broadest sense of the word digital, we have the talent in house to do so.

iO is a pan-European player, with campuses in the Netherlands, I myself have Eindhoven as my home base, shoutout Eindhoven, also Belgium, Sweden, Denmark, and Bulgaria. Working at such a company I have had the opportunity to work for some pretty large clients, and for frontend, that often means working on some sort of component library or having to use a design system.

The goal of component libraries is that you can easily hand off components to other teams, perhaps even external developers, people you would never touch base with on a work basis.

Typically, the question we have as developers is how to optimize responsive styling for these components.
-->

---
layout: center
---
<div class="text-center">
  <h1 class="text-9xl">Expert<span style="color: #ED7F53;">?</span></h1>
</div>


---
layout: center
---
<div class="text-center">
  <h1 class="text-9xl">Exper<span style="color: #ED7F53;">imen</span>t<span style="color: #ED7F53;">!</span></h1>
</div>

---
layout: center
---

<img
  class="h-160"
  src="/images/dashboard-default.svg"
/>

<style>
  .center {
    background-color: #fbdfd4;
  }
</style>

<!--
Let me give you an example.
Let's say we're part of a project and our goal is to build this dashboard-page.
 -->

<!--
If we take out of account the header and the sidebar for a second and look at the page's main content, we see a handful of widgets. A pie-chart showing our favourite bars, a bar graph showing our favourite pies, a weather widget and user list widget.
 -->

---
layout: image-right
image: /images/dashboard-transparent.svg
---

# Goals

As a user:

- I want to less or more information depending on the size of the widget.
- On the dashboard page, I want to choose the size of the widget.

As a developer:

- I want to reuse the same component throughout different layouts.

<!--
The following user stories have to be implemented in this page.
As a user, I should be able to customize my dashboard by resizing widgets.
As a user, I want to see more information in larger widgets and less in smaller widgets. They should contain more or less information, depending on their available internal space.
 -->

---
layout: image-right
image: /images/dashboard-weather-bigger.svg
---

# Goals

As a user:

- I want to less or more information depending on the size of the widget.
- On the dashboard page, I want to choose the size of the widget.

As a developer:

- I want to reuse the same component throughout different layouts.

<!--
For instance. If we choose a prioritize the weather widget, next to only show todays weather, we could show additional information like the expected precipitation or the expected temperature for upcoming days.
Also, think about other possible factors that could come in to play. Additional customizations options like a collapsible sidebar, for instance. What if we want to reuse these widgets or make them available to other teams or projects where we can't author the parent or the final result these widgets will be part of?
How would we translate these requirements, with possible side-effects, to code?
 -->

---
layout: image-right
image: /images/dashboard-weather-bigger.svg
---

# Media queries?

```css
.widget { width: 100%; }

@media (inline-size >= 480px) {
  .widget { width: 100%; }
}

@media (inline-size >= 768px) {
  .widget { width: 50%; }
}

@media (inline-size >= 1024px) {
  .widget { width: 33.33%; }
}
```

---
layout: image-right
image: /images/article.svg
---

# Media queries?

```css
.widget { width: 100%; }

@media (inline-size >= 480px) {
  .widget { width: 50%; }
}

@media (inline-size >= 768px) {
  .widget { width: 33.33%; }
}
```

---
layout: image-right
image: /images/article-dashboard.svg
---

# Media queries?

```css
.widget { width: 100%; }

@media (inline-size >= 480px) {
  .widget.page-article { width: 50%; }
}

@media (inline-size >= 768px) {
  .widget { width: 50%; }
  .widget.page-article { width: 33.33%; }
}

@media (inline-size >= 1024px) {
  .widget { width: 33.33%; }
}
```

---
layout: image-right
image: /images/article-dashboard-form.svg
---

# Media queries?

```css
.widget { width: 100%; }

@media (inline-size >= 480px) {
  .widget.page-article { width: 50%; }
  .widget.page-contact-form { width: 89%; }
}

@media (inline-size >= 768px) {
  .widget { width: 50%; }
  .widget.page-article { width: 33.33%; }
  .widget.page-contact-form { width: 12.78%; }
}

@media (inline-size >= 1024px) {
  .widget { width: 33.33%; }
  .widget.page-contact-form { width: 52%; }
}
```

---
layout: image-right
image: /images/article-dashboard-form-other.svg
---

# Media queries?

```css
.widget { width: 100%; }

@media (inline-size >= 480px) { /* ... */ }

@media (inline-size >= 661px) {
  .page-whateva { width: 651%; }
}

@media (inline-size >= 768px) { /* ... */ }

@media (inline-size >= 678px) {
  .page-whateva { width: 56%; }
}

```

<!--
First thing to we'd might take into consideration is using media queries. However, media queries give us the ability to style responsively according to the viewport and doesn’t offer us enough flexibility to create modular styling.
What could be possible solutions then?
 -->

---
layout: image-right
image: /images/article-dashboard-form-other.svg
---

# Media queries?

- Query the viewport
- Insufficient flexibility

<!--
First thing to we'd might take into consideration is using media queries. However, media queries give us the ability to style responsively according to the viewport and doesn’t offer us enough flexibility to create modular styling.
What could be possible solutions then?
 -->

---
layout: image-right
image: /images/dashboard-default-weather-bigger.svg
---

# Config options?

```html
<internal-dashboard>
  <bar-widget />
  <pie-widget />
  <weather-widget size="large" />
  <users-widget />
</internal-dashboard>
```

```css
internal-dashboard {}

weather-widget {}
weather-widget[size="large"] {}
weather-widget[size="small"] {}
```

<!--
We could create custom classes per size.  .component--large, .component--small. or pass down properties.
-->

---
layout: image-right
image: /images/dashboard-default-weather-bigger.svg
---


# Config options?

```css
weather-widget {}

@media (inline-size >= 480px) {
  weather-widget[size="large"] {}
  weather-widget[size="small"] {}
}

@media (inline-size >= 768px) {
  weather-widget[size="large"] {}
  weather-widget[size="small"] {}
}

@media (inline-size >= 1024px) {
  weather-widget[size="large"] {}
  weather-widget[size="small"] {}
}
```

---
layout: image-right
image: /images/article-dashboard-form-other.svg
---

```css
weather-widget {}

@media (inline-size >= 480px) {
  weather-widget[size="large"] {}
  weather-widget[size="small"] {}
  .page-whateva weather-widget[size="large"] {}
  .page-whateva weather-widget[size="small"] {}
}

@media (inline-size >= 768px) {
  weather-widget[size="large"] {}
  weather-widget[size="small"] {}
  .page-whateva weather-widget[size="large"] {}
  .page-whateva weather-widget[size="small"] {}
}

@media (inline-size >= 1024px) {
  weather-widget[size="large"] {}
  weather-widget[size="small"] {}
  .page-whateva weather-widget[size="large"] {}
  .page-whateva weather-widget[size="small"] {}
}
```

---
layout: image-right
image: /images/dashboard-default-weather-bigger.svg
---

# Config options?

- End user is responsible for styling
- End-user has to implement own layout logic
- Not automatically provided

<!--
With this solution however, the final application is responsible for declaring the correct styling of the widget. We have to create extra styling in the dashboard application.	  It's still not possible to automatically provide the most optimal layout to the end-user. The end-user has to implement their own logic to handle this.
 -->

---

# ResizeObserver?

```js
const $widget = document.querySelector(".widget");

const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.target.width > 640) {
      entry.target.classList.add("widget--large");
    } else {
      entry.target.classList.remove("widget--large");
    }
  }
});

resizeObserver.observe($widget);
```

<div v-click class='mt-3'>
  <carbon-warning-alt class='mr-3' /> Flash Of Unstyled Content
</div>

<!--
Or we could use ResizeObserver API, a browser API that through JavaScript can take an elements size into account and act accordingly. But, with this solution, we have to wait until the JavaScript is evaluated. Without the proper measures, like some form of loading screen and making sure this solution is loaded before every other piece of JavaScript is ready, it can cause a Flash of Unstyled Content.
 -->

---
layout: center
---

<div class="text-center">

<img
  class="h-150"
  src="/images/empty.svg"
/>

  <div class="-mt-24 mb-24">
    Flash Of Unstyled Content - 1 - Empty
  </div>
</div>

<style>
  .center {
    background-color: #fbdfd4;
  }
</style>

---
layout: center
---

<div class="text-center">

<img
  class="h-150"
  src="/images/dashboard-default.svg"
/>

  <div class="-mt-24 mb-24">
    Flash Of Unstyled Content - 2 - CSS ready
  </div>
</div>

<style>
  .center {
    background-color: #fbdfd4;
  }
</style>

---
layout: center
---

<div class="text-center">

<img
  class="h-150"
  src="/images/dashboard-default-weather-bigger.svg"
/>

  <div class="-mt-24 mb-24">
    Flash Of Unstyled Content - 3 - JS ready
  </div>
</div>

<style>
  .center {
    background-color: #fbdfd4;
  }
</style>

---
layout: center
---

<h1 class="text-18xl">CSS</h1>

<!--
A CSS solution however, that is if we use the recommendation of loading critical styles upfront and avoiding render-blocking JavaScript on page load, is evaluated before JavaScript. Therefore, we'll receive the correct layout on first paint.
Luckily for us, something’s landed in a few major stable browsers!
 -->

---
layout: center
---

<img
  class="h-160"
  src="/images/article-dashboard-form-other.svg"
/>

<style>
  .center {
    background-color: #fbdfd4;
  }
</style>

---
layout: center
---

<img
  class="h-160"
  src="/images/weather-widget.svg"
/>

<style>
  .center {
    background-color: #fbdfd4;
  }
</style>

---
layout: center
---

<h1 class="text-10xl text-center leading-none">Container <br/> Queries</h1>

<!--
It splits up responsibilities for styling our layout. For example, the larger parts of your webpage, things where a media query makes more sense, will be responsible for the larger layout, like grids and the smaller parts, like individual components will have their own responsibility for their own layout based on the available space they will have in the larger layout.
 -->

---
layout: blocks
---

<ul>
  <li><span class="text-6xl">Size</span></li>
  <li><span class="text-6xl">Units</span></li>
  <li><span class="text-6xl">Style</span></li>
</ul>

---
layout: blocks
---

<ul>
  <li><span class="text-6xl">Size</span></li>
  <li><span class="text-6xl text-gray-300">Units</span></li>
  <li><span class="text-6xl text-gray-300">Style</span></li>
</ul>

---

# Size container queries

Which container can be queried for it's size?

<br/>

```css
.product {
  container-type: size;
}
```

<br/>

<table>
  <tr>
    <td colspan="3">
      <strong>container-type values</strong>
    </td>
  </tr>
  <tr>
    <td>size</td>
    <td>x- and y-axis</td>
  </tr>
  <tr>
    <td>inline-size</td>
    <td>x-axis</td>
  </tr>
  <tr>
    <td>normal</td>
    <td>Disable element as query container for container size queries</td>
  </tr>
</table>

<!-- 
There a several types of container-types. One of them is already in the browsers, because of its significant impact. The others are still being hashed out by the working group.
Let’s look at the most obvious type, size container queries. Size container queries allow us to query the dimensions of an element.
With the container-type you can establish an element as a query container.
Values can be size, that target both width and height or inline-size and block-size if we were to use logical properties, just inline-size, or you can reset or disable containment on an element by using the normal container type property.
 -->

---

# Size container queries

For what condition should we query?

<br/>

```css
@container (inline-size >= 400px) {}
```

<br/>
<br/>

<div class="flex gap-24">
  <div>
    <strong>container-type: size</strong>
    <div class="flex gap-12">
      <ul>
        <li>width</li>
        <li>height</li>
        <li>inline-size</li>
      </ul>
      <ul>
        <li>block-size</li>
        <li>aspect-ratio</li>
        <li>orientation (landscape, portrait)</li>
      </ul>
    </div>
  </div>
  
  <div>
    <strong>container-type: inline-size</strong>
    <div class="flex gap-12">
      <ul>
        <li>width</li>
        <li>inline-size</li>
      </ul>
    </div>
  </div>
</div>

---

# Size container queries

Single condition

```css
.product {
  container-type: inline-size;
}

.product-body {
  @container (inline-size >= 400px) { 
    /* ... */ 
  }
}
```

<br />

<!-- 
The actual container query is declared using the @container rule, which has a similar syntax to the @media rule or media query.
In this example, the query will match if the inline-size, the logical property of width, is larger than 400 pixels.
-->

---

# Size container queries

Multiple conditions

```css
.product {
  container-type: size;
}

.product-body {
  @container (inline-size >= 400px) and (block-size >= 200px) {
    /* ... */  
  }
}
```

<!--
Like media queries, we can use multiple conditions. Here, the query will match if the inline-size exceeds 400 pixels and block-size exceeds 200 pixels.
-->

---

# Size container queries

Target multiple containers

```css {all|3,12|8,13}
.page {
  container-type: size;
  container-name: folio;
}

.product-list {
  container-type: inline-size;
  container-name: list;
}

.product {
  @container folio (inline-size >= 400px) and (block-size >= 200px) { /* ... */  }
  @container list (inline-size >= 800px) { /* ... */ }
}
```
<!--
An additional feature to container queries has compared to media queries, is the addition of container-name. This way we can filter queries to a specific ancestor. Here, the product could change depending on the inline-size of our product-list element on the one hand and on both the inline-size and block-size of the page element on the other hand.
-->

---

# Size container queries

<code>container</code> shorthand

```css {all|2,10|6,11}
.page {
  container: folio / size;
}

.product-list {
  container: list / inline-size;
}

.product {
  @container folio (inline-size >= 400px) and (block-size >= 200px) { /* ... */  }
  @container list (inline-size >= 800px) { /* ... */ }
}
```
<!--
An additional feature to container queries has compared to media queries, is the addition of container-name. This way we can filter queries to a specific ancestor. Here, the product could change depending on the inline-size of our product-list element on the one hand and on both the inline-size and block-size of the page element on the other hand.
-->

---

# Size container queries

<carbon-warning-alt class='mr-2' /> Containment always has to be set on an ancestor.

```css
.ancestor {
  container-type: inline-size;
}

@container (inline-size >= 800px) {
  .ancestor {
    /* NOPE */
  }
}
```

<!-- 
An important note with using container queries is that container cannot query themselves.
Containment always has to be set on an ancestor, in order for container queries to match.
-->

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://codepen.io/shadeed/full/poRLxvO" />
    </div>
</div>

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://codepen.io/vanhoofmaarten/full/mdWBMGb" />
    </div>
</div>

<!-- 
A good use case for container queries, I believe, is a shopping cart component, where we have declared all our shopping cart business logic and styles in one single place, like the calculated subtotal of the quantity and price of a product and the calculation of the grand total.

With container queries, we can then re-use that single component, for example, on the actual shopping cart page or in the header as a mini cart. Depending on the size given to the component, it will adapt its styling. The larger desktop version of this component is, thanks to container queries, also immediately optimized for mobile devices.
-->

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://codepen.io/vanhoofmaarten/full/WNpJoGq" />
    </div>
</div>

<!-- 
We can even go as far as using container queries in our SVGs, and by extension SVG-sprites, a technique to reuse SVG images throughout a webpage by only having to declare it once. 

SVGs support CSS and also container queries. By declaring responsive styles in an SVG or SVG-sprite, we can create truly responsive SVG and SVG-sprites.
In this experiment, we see SVG images of a stegosaurs and a diplodocus, both are part of the same SVG-sprite, declared at the top of the document and are used in the main part of the document.

If I enlarge the image of the stegosaurus, we see the outline disappear and the same goes for the diplodocus, only at a larger size. Container queries tailored to each image declared once for in the SVG-sprite make this possible. Go check out the CodePen later on for more information.
-->

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://caniuse.com/css-container-queries" style="width: 100%; height: 100%; transform: scale(1);" />
    </div>
</div>

---
layout: blocks
---

<ul>
  <li><span class="text-6xl text-gray-300">Size</span></li>
  <li><span class="text-6xl">Units</span></li>
  <li><span class="text-6xl text-gray-300">Style</span></li>
</ul>

---

# Container relative units

<div class="flex gap-12">
  <div class="flex-grow">

```css
.product {
  container-type: size;
}

.product-grandchild {
  height: 100cqb;
}
```

  </div>
  <div class="flex-grow">
    <table class="mt-1">
      <thead>
        <tr>
          <th>unit</th>
          <th>relative to</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>cqw</td>
          <td>1% of a query container’s width</td>
        </tr>
        <tr>
          <td>cqh</td>
          <td>1% of aquery container’s height</td>
        </tr>
        <tr>
          <td>cqi</td>
          <td>1% of a query container’s inline size</td>
        </tr>
        <tr>
          <td>cqb</td>
          <td>1% of a query container’s block size</td>
        </tr>
        <tr>
          <td>cqmin</td>
          <td>The smaller value of cqi or cqb</td>
        </tr>
        <tr>
          <td>cqmax</td>
          <td>The larger value of cqi or cqb</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- 
Next to size container queries, we are also getting container relative units. Which are similar to viewport relative units. These will allow you to use dimensions of a container as a unit.
-->

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://codepen.io/scottkellum/full/jOwmOZE" />
    </div>
</div>

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://caniuse.com/css-container-query-units" style="width: 100%; height: 100%; transform: scale(1);" />
    </div>
</div>

---
layout: blocks
---

<ul>
  <li><span class="text-6xl text-gray-300">Size</span></li>
  <li><span class="text-6xl text-gray-300">Units</span></li>
  <li><span class="text-6xl">Style</span></li>
</ul>

---

# Style container queries

Query computed styles of query container.

```css
.product {
  container-type: normal;
}

.product-body {
  @container style(background: red) {
    /* ... */
  }
}
```

<!-- 
With style container features, we can query the container's computed values. For example, if the background-colour of the container is red, we can act and style appropriately.
-->

---

# Style container queries

= CSS conditionals

<iframe height="350" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/mrtnvh/embed/preview/abRjjgL?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mrtnvh/pen/abRjjgL">
  Untitled</a> by Maarten Van Hoof (<a href="https://codepen.io/mrtnvh">@mrtnvh</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
      <iframe scrolling="no" title="Container Style Queries - View selector - Style container queries + HTML table" src="https://codepen.io/mrtnvh/embed/preview/KKxeLrX?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mrtnvh/pen/KKxeLrX">
  Container Style Queries - View selector - Style container queries + HTML table</a> by Maarten Van Hoof (<a href="https://codepen.io/mrtnvh">@mrtnvh</a>)
  on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </div>
</div>

---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://caniuse.com/css-container-queries-style" style="width: 100%; height: 100%; transform: scale(1);" />
    </div>
</div>

---
layout: center
---
<div class="text-center">

  <h1 class="text-8xl">W.I.I.F.U. ?</h1>
  What's in it for us?
</div>
---
layout: image-right
image: /images/article-dashboard-form-other.svg
---

```css
.dashboard {}
.page-whateva .dashboard {}
weather-widget {}
/* ... */

@media (inline-size >= 480px) {
  weather-widget[size="large"] {}
  weather-widget[size="small"] {}
  .page-whateva weather-widget[size="large"] {}
  .page-whateva weather-widget[size="small"] {}  
}

@media (inline-size >= 768px) {
  weather-widget[size="large"] {}
  weather-widget[size="small"] {}
  .page-whateva weather-widget[size="large"] {}
  .page-whateva weather-widget[size="small"] {}
}
@media (inline-size >= 1024px) { 
  /* ... */
}

/* ... */
```

---
layout: image-right
image: /images/article-dashboard-form-other.svg
---

```css
/* weather-widget.css */

.widget {
  container-type: inline-size;
}

.widget-body {
  @container (inline-size >= 480px) {}
  @container (inline-size >= 768px) {}
  @container (inline-size >= 1024px) {}
}
```

---
layout: image-right
image: /images/article-dashboard-form-other.svg
---

```css
/* weather-widget.css */

.widget {
  container-type: inline-size;

  --wdgt-feature-a: false;
}

.widget-body {
  @container (inline-size >= 480px) {
    --wdgt-feature-a: true;
  }
}

.widget-temperature {
  display: none;

  @container style(--wdgt-feature-a: true) {
    display: block;
  }
}
```

---
layout: browser
---

<div class="browser-wrapper" style="border: 0">
    <div class="browser-body">
        <iframe src="https://spontaneous-crepe-7edffa.netlify.app/" />
    </div>
</div>

---
layout: center
---

<h1 class="text-10xl text-center leading-none">Container <br/> Queries</h1>

---

# #TIL

**Container queries**
- Encapsulate adaptive styles
- Modular front-end architecture

<br/>

**Support in all major browser engines:**
- Size queries
- Container Relative units

<br/>

**Partial support** in Chrome
- Style queries

<br/>



<!--
Let's bring this to a close, shall we? What did we learn today?
With container queries, we can encapsulate adaptive styling in elements. It's the optimal solution for responsive component-based architectures, like design systems and component libraries. 

Size container queries and container relative units are available today in Chrome 105, Edge 105 and Safari 16. And there is a polyfill available, but keep in mind that this could lead to a Flash of unstyled Content when using SSR or Static Site Generation.

The Container Queries umbrella is not limited to only querying dimensions. Querying computed styles, certain element states, and several more features, are in under discussion with CSS Working Group.
-->

---
layout: center
---

<div class="text-center">

  <h1 class="text-15xl">Share</h1>

  <div class="flex align-center gap-2 justify-center text-2xl">
    <mdi-globe class="mt-1" />
    <a href="https://mrtnvh.com" target="_blank" rel="noopener">mrtnvh.com</a>
  </div>

</div>

<!-- 
I do hope I've managed to get you all siked for the future of CSS. Go play with container queries and do share your experiments with me. You can find me on twitter @mrtnvh. I would love to see them, and I will personally share each and every one of them. 
-->

---
layout: center
---

<mdi-peace class='w-48 h-48' />

<!-- 
Thank you for watching, I wish you all a lovely day. Peace.
-->
