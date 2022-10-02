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
layout: center
---

<h1 class="text-18xl">CSS</h1>

<!--
Before I start, does anyone here still remembers this? 
CSS?

Let’s take a trip down memory lane. In 2015 the number of new features in JavaScript started to boom. 

Thanks to tools like Babel and browser polyfills, we can use things like modern array methods, map, filter, reduce, and things like the spread operator and so on. Features that matured the idea of web-applications.
-->

---
layout: two-columns
centered: true
---

<template v-slot:default>
  
  # Compat 2021
  - Flexbox & Grid
  - CSS tranforms
  - aspect-ratio

</template>
<template v-slot:second>
  
  # Interop 2022

- Cascade Layers
- Dynamic viewport units
- Subgrid
- Color spaces & functions

</template>

<!--
Browser vendors got together in the Compat, or now the Interop workgroup to increase interoperability across browsers in key technical areas that are of high priority to web developers and end users.

Thanks to the efforts of the Interop workgroup, in 2021 we’ve gained aspect-ratio support as a new feature and better cross-browser compatibility for Flexbox (e.g. the gap property, no more margins or paddings, thank you!), Grid, Transforms, etc.

This year, we already gained support for
- Cascade Layers
- More Viewport units

And better cross-browser compatibility for subgrid, color spaces and functions is on the horizon.
-->

---
layout: center
---

<h1 class="text-18xl">CSS</h1>

<!--
Truly, we are in the renaissance of CSS, don’t you agree?

So, now that I hopefully have you a bit excited for CSS, let’s have a little crowd participation. Can we light up the audience for a minute?

Ok. I’m going to count to three, and then we’re all going to shout C-S-S.

One, two, three. C – S — S!

[React to people shouting CSS or a room of utter silence]

Nice! Give you yourself a round of applause. Great!

On to the subject of the day.
-->

---
layout: blocks
---

<ul>
  <li>Reusable components?</li>
  <li v-click>Most optimal responsive layout?</li>
  <li v-click>Media queries \\\\ config options?</li>
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
layout: center
---

<div class="flex flex-col items-center justify-center h-full text-center text-2xl">
  <a href="https://iodigital.com" class="mb-12" target="_blank" rel="nofollow noopener">
    <img
      class="h-48"
      src="/images/io-logo.svg"
    />
  </a>
  Developer Advocate <br/> Front-end
</div>

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

---
layout: center
---

<img
  class="h-160"
  src="/images/dashboard-transparent.svg"
/>

<style>
  .center {
    background-color: #fbdfd4;
  }
</style>

<!--
If we take out of account the header and the sidebar for a second and look at the page's main content, we see a handful of widgets. A pie-chart showing our favourite bars, a bar graph showing our favourite pies, a weather widget and user list widget.
 -->

---
layout: image-right
image: /images/dashboard-transparent.svg
---

# Goals

As a user:

- I should be able to customize my dashboard by resizing widgets.
- I want to less or more information depending on size.

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

- I should be able to customize my dashboard by resizing widgets.
- I want to less or more information depending on size.

<!--
For instance. If we choose a prioritize the weather widget, next to only show todays weather, we could show additional information like the expected precipitation or the expected temperature for upcoming days.
Also, think about other possible factors that could come in to play. Additional customizations options like a collapsible sidebar, for instance. What if we want to reuse these widgets or make them available to other teams or projects where we can't author the parent or the final result these widgets will be part of?
How would we translate these requirements, with possible side-effects, to code?
 -->

---
layout: image-right
image: /images/dashboard-global-highlight.svg
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
image: /images/dashboard-weather-highlighted.svg
---

# Custom classes?

```html
<internal-dashboard>
  <external-widget type="bar" />
  <external-widget type="pie" />
  <external-widget type="weather" />
  <external-widget type="users" />
</internal-dashboard>
```

```css
internal-dashboard {}

external-widget {}

external-widget[type="gauge"] {}
external-widget[type="pie"] {}
external-widget[type="weather"] {}
external-widget[type="users"] {}
```

<!--
We could create custom classes per size.  .component--large, .component--small.
 -->

---
layout: image-right
image: /images/dashboard-weather-highlighted.svg
---

# Custom classes?

- End user is responsible for styling
- Not automatically provided
- End-user has to implement own layout logic

<!--
With this solution however, the final application is responsible for declaring the correct styling of the widget. We have to create extra styling in the dashboard application.	  It's still not possible to automatically provide the most optimal layout to the end-user. The end-user has to implement their own logic to handle this.
 -->

---

# ResizeObserver?

```js
const $widget = document.querySelector(".widget");

const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.target.width > entry.contentBoxSize.inlineSize) {
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

<h1 class="text-18xl">CSS</h1>

<!--
A CSS solution however, that is if we use the recommendation of loading critical styles upfront and avoiding render-blocking JavaScript on page load, is evaluated before JavaScript. Therefore, we'll receive the correct layout on first paint.
Luckily for us, something’s landed in a few major stable browsers!
 -->

---
layout: center
---

<h1 class="text-10xl text-center leading-none">Container <br/> Queries</h1>

<!--
Container Queries, element queries, … The possibility of querying each element its own dimensions is something we've been looking for since modular front-end architecture met responsive web design, and has been on the discussion radar for over almost a decade now.

Thanks to recent improvements to browser rendering engines and the advent of the CSS containment specification, container queries, which can lead to heavy layout calculations, can finally be implemented in a performant way without sacrificing anything of the user experience.

With container queries, the component itself owns all of its responsive styles. It's the optimal solution for responsive component-based architectures, like design systems and component libraries.
-->

---
layout: center
---

<img
  class="h-160"
  src="/images/dashboard-weather-highlighted.svg"
/>

<style>
  .center {
    background-color: #fbdfd4;
  }
</style>

<!--
It splits up responsibilities for styling our layout. For example, the larger parts of your webpage, things where a media query makes more sense, will be responsible for the larger layout, like grids and the smaller parts, like individual components will have their own responsibility for their own layout based on the available space they will have in the larger layout.
 -->

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://codepen.io/una/full/mdOgyVL" />
    </div>
</div>

<!--
In this example, created by Una Kravets, we see a page of an ecommerce platform where we can order several kinds of plants to spruce up our home offices. Each product component is implemented using the same CSS class. Using Container Queries, each product component will adapt to its most optimal layout according to the space available.
-->

---

# CSS Containment

- Improves rendering performance
- DOM subtree isolation
- Enables container queries

<br/>

```css
.product {
  contain: size layout style;
}
```

<!--
Container Queries are a part of the CSS Containment Module Level 3, and the specification is currently a Working Draft, which means that the CSS working group is actively working on the feature. A basis has already been set and details are being ironed out as we speak.
CSS containment allows us to improve rendering performance by isolation of a DOM subtree or in other words indicating that an element and its contents rendering should be handled independently of the rest of the document tree.
That isolation is what enables us to query elements using container queries.
-->

---

# Container Queries

Enable containment for container query

```css
.product {
  container: product / size;

  /* Shorthand for */
  container-name: product; /* Target specific containers*/
  container-type: size; /* Type of values you want to query */
}
```

<!--
After some back and forth on how we should declare container queries, specification now defines a distinct property container, which is a shorthand for container-type and container-name.
The container-name property enables us to implement multi-level container queries. With container names you can target specific containers to query. More on that later.
-->

---

# Size container features

```css
.product {
  container-type: size; /* inline-size, normal */
}
```

<br />

- **Size**
  - inline-size
  - block-size
  - aspect-ratio
  - orientation
- **Inline-size**
- **Normal**: remove containment, disable container queries

<!-- 
There a several types of container-types. One of them is already in the browsers, because of its significant impact. The others are still being hashed out by the working group.
Let’s look at the most obvious type, size container queries. Size container queries allow us to query the dimensions of an element.
With the container-type you can establish an element as a query container.
Values can be size, that target both width and height or inline-size and block-size if we were to use logical properties, just inline-size, or you can reset or disable containment on an element by using the normal container type property.
 -->

---

# Size container features

Single condition

```css
.product {
  container-type: inline-size;
}

@container (min-inline-size: 400px) {
  .product-body {}
}
```

<!-- 
The actual container query is declared using the @container rule, which has a similar syntax to the @media rule or media query.
In this example, the query will match if the inline-size, the logical property of width, is larger than 400 pixels.
-->

---

# Size container features

Multiple conditions

```css
.product {
  container-type: size;
}

@container (min-inline-size: 400px) and (min-block-size: 200px) {
  .product-body {}
}
```

<!--
Like media queries, we can use multiple conditions. Here, the query will match if the inline-size exceeds 400 pixels and block-size exceeds 200 pixels.
-->

---

# Size container features

Target multiple containers

```css {all|3,11-13|8,15-17}
.product-list {
  container-type: inline-size;
  container-name: list;
}

.page {
  container-type: size;
  container-name: folio;
}

@container list (min-inline-size: 800px) {
  .product {}
}

@container folio (min-inline-size: 400px) and (min-block-size: 200px) {
  .product {}
}
```
<!--
An additional feature to container queries has compared to media queries, is the addition of container-name. This way we can filter queries to a specific ancestor. Here, the product could change depending on the inline-size of our product-list element on the one hand and on both the inline-size and block-size of the page element on the other hand.
-->

---

# Size container features

<carbon-warning-alt class='mr-2' /> Containment always has to be set on an ancestor.

```css
.ancestor {
  container-type: size;
}

@container (min-inline-size: 800px) {
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

# Container relative units

<div class="flex gap-12">
  <div class="flex-grow">

```css
.product,
h2 {
  container-type: size;
}

.product-grandchild {
  height: 75cqi;
}

/* With fallback */
/* The fallback value does not rely on containment */
h2 {
  font-size: 1.2em;
}

@container (min-inline-size : 0px) {
  h2 {
    font-size: calc(1.2em + 1cqi);
  }
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
layout: image-right
image: /images/dashboard-weather-highlighted.svg
---

# Size container features

```html
<!-- external-widget-component -->
<div class="widget">
  <div class="widget-body">
    <!-- widget-content -->
  </div>
</div>
```

```css
.widget {
  container: inline-size;
}

@container (min-inline-size: 500px) {
  .widget-body {
  }
}
```

<!-- 
Let's go back to our widgets.
With the knowledge of container queries in our possession, we can refactor the use of custom classes or ResizeObserver to container queries. Keep in mind, we do have to add an extra wrapper if we want to style the base of the widget, as container queries can only query ancestors.
-->

---

Cromium
Chrome 105
Edge
Webkit
Safari 16

<carbon-warning-alt class='mr-1' /> Flash of Unstyled Content

<!--
Now, one of the show that makes me all gitty:

Container Queries are now supported in stable releases of 2 major browser engines. Chromium-based, Chrome 105 and Edge 105 and Webkit-based, Safari 16.

This means that if you’re targeting a mostly mobile audience and know that browser updates on Android are mostly automatic and that iOS user are pretty good at updating their devices, half of your user base probably has support for container queries by now. Firefox is actively working on their implementation.

And if you’d like to have more support, there is a polyfill available that uses the ResizeObserver solution we talked about earlier, to enable the Container Query functionality. But be aware, of that Flash of unstyled content.

But, this is not where are story ends,
As the dimensional parts of the specification are as good as fleshed out, the following features are currently still open for further development.
-->

---

# Style container features

```css
.product {
  container-type: style;
}

@container style(background: red) {
  .product-body {
  }
}
```

<!-- 
With style container features, we can query the container's computed values. For example, if the background-colour of the container is red, we can act and style appropriately.
-->

---

# State container features

```css
header {
  container: is-stuck is-visible / header;
  position: sticky;
  top: 0;
}

@container header (is-stuck) {
  /* … */
}
@container header (is-visible) {
  /* … */
}
```

<carbon-information class='mr-1' /> Proposition has [been deferred](https://github.com/w3c/csswg-drafts/issues/6402), might get replaced by [CSS toggle feature](https://css.oddbird.net/toggles/explainer/).

<!-- 
State container features will allow us to query certain states of container. One of the most obvious examples is querying if a container with the property position: sticky is in its sticky state. But there are already other propositions out there and the CSS working group is now looking into what is the most robust solution.
-->

---

# matchContainer

```js
const matchSixForty = element.matchContainer("(min-inline-size: 640px)");

if (matchSixForty.matches) {
  // Do something
}
```

<!-- 
Furthermore there are active discussions of creating a matchMedia equivalent, matchContainer, in which you can query containers in JavaScript and so on.
Look at all that power container queries throws into our lap. 
-->

---

# Participate!

- [CSSWG Specification](https://drafts.csswg.org/css-contain-3/) <br>
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) <br>
- [CSS Working Group discussions on Github](https://github.com/w3c/csswg-drafts/projects/18) <br>
- [awesome-container-queries](https://github.com/sturobson/Awesome-Container-Queries)

<!--
As always, the community is happy to accept your contribution. You, too, can contribute to the future of the web. If you have any special use cases or maybe not so everyday ideas concerning the use of Container Queries. 

Check out or give feedback on Container Queries conversation at the CSS Working Group issues project on GitHub or share your examples and experiments by opening a PR in the Awesome Container Queries repository.
-->

---
layout: center
---

<h1 class="text-8xl">Experiments</h1>

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
        <iframe src="https://codepen.io/scottkellum/full/jOwmOZE" />
    </div>
</div>

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

# #TIL

**Container queries** -> Encapsulate adaptive styles -> Modular front-end architecture

- Size queries
- Container Relative units

[]()

- Chrome 105
- Edge 105
- Safari 16
- container-query-polyfill (FOUC!)

Under active development

- Style queries
- State queries

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

  <div class="flex align-center gap-2 justify-center">
    <mdi-twitter />
    <a href="https://twitter.com/mrtnvh" target="_blank" rel="noopener">@mrtnvh</a>
  </div>

</div>

<!-- 
I do hope I've managed to get you all siked for the future of CSS. Go play with container queries and do share your experiments with me. You can find me on twitter @mrtnvh. I would love to see them, and I will personally share each and every one of them. 
-->

---
layout: center
---

<div class="text-center text-3xl">

  [mrtnvh.com](https://mrtnvh.com)

</div>

<!--
mrtnvh.com is the place I write stuff on and where I’ll the slides with links are available on. 

You know what’s also available? 
-->

---
layout: center
---

<div class="flex flex-col items-center justify-center h-full text-center text-2xl">
  <a href="https://iodigital.com" class="mb-4" target="_blank" rel="nofollow noopener">
    <img
      class="h-36"
      src="/images/io-logo.svg"
    />
  </a>
  
  [iodigital.com/careers](https://iodigital.com/careers)

</div>

<!-- 
Job opportunities at today’s sponsor, iO.
-->


---
layout: center
---

<h1 class="text-18xl">CSS</h1>

<!-- 
Just kidding, have to keep marketing on our good side, don't we?

To close off my talk, one more time, let's shout it all together.

1, 2, 3
C - S -S
-->

---
layout: center
---

<mdi-peace class='w-48 h-48' />

<!-- 
Thank you for watching, I wish you all a lovely day. Peace.
-->
