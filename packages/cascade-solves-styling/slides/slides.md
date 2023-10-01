---
title: Cascade Solves Styling - @mrtnvh

theme: mrtnvh
routerMode: 'hash'
layout: cover

css: windicss

fonts:
  sans: Inter Tight
  weights: '400,700,800'
  mono: "IBM Plex Mono"

# the image source
background: ./images/underwater-cascades-edit.jpg
---

---
layout: center
---

<h1 class="text-center">CSS</h1>

<style>
  h1 {
    font-size: 18rem;
  }
</style>

<!-- Have you written any CSS lately? -->

---
layout: center
---
<div class="text-center">
  <h1 class="text-9xl">Abstractions</h1>
  (eg. Tailwind, Bootstrap, Sass, …)
</div>

<!-- Have you written any Bootstrap, Tailwind or some other abstraction lately? -->

---
layout: center
---

<h1 class="text-12xl text-center">Expert</h1>

<style>
  h1 {
    font-size: 12rem;
  }
</style>

<!--
Would you consider yourself an expert in CSS? Or rather, an expert in an abstraction?
-->

---
layout: black
---

.

<!--
As front-end developers, it's our duty to build beautiful UIs and create the most user-friendly experience possible within the given constraints. Time constraints by our team members in operations. Technical limitations by the history of the code.

With abstractions, we aim to make complexity more manageable within those constraints.

Abstractions are a great way to tailor code to the most common usage. One could create or generate a RESTful API client because who wants to handwrite lengthy fetch requests day in day out? That's one of the reasons why abstractions exist.

But due to constant stress of those constraints, our community often takes a popular opinion for truth, and we eventually forget what's under the hood.

And more so is the case with CSS.
-->

---
layout: cover
background: ./images/island-spongebob.png
---

.

<!--
To some, CSS is the most beautiful language they have ever written, like a gentle stream flowing over your markup and letting it burst into invigorating, saturated life.
-->

---
layout: cover
background: ./images/squidward-hell.gif
---

.

<!--
To others, CSS is the bane of their existence. An impossible game of whack-a-mole where changing one thing inevitably leads to unwanted side effects on totally unrelated places.
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
My name is Maarten Van Hoof
-->

---
layout: cover
background: ./images/io-roles.svg
---

.

<!--
I am a Lead Front-end Developer and Developer Advocate at iO in Eindhoven in the Netherlands. 

For the next 30 minutes, I am here to take you through some of the struggles we've had and still have with CSS, but also share the new possibilities in browsers now and in development to ease our pain. All this is to send y'all home with a spark to rethink how you write CSS in the future. 

Let me point out the biggest problem developers have with CSS. Or better said, the thing that developers struggle to understand.
-->

---
layout: cover
background: ./images/cascade-og.svg
---

.

<!--
To whom does this look familiar?

This is the cascade. The C in CSS. Together with inheritance and specificity, it turns CSS into a super powerful styling and layout language. 

These fundamental concepts of CSS are how you control which styling is applied to an HTML element.

CSS is a language in which you can layer styling rules. Through inheritance, specific rules are able to trickle down, like text colour, for instance, and through the cascade and specificity algorithms, conflicting rules will be resolved.

The keen eye might be missing a few parts. This is the cascade from when I first started developing CSS. 

The current state is much more fun and exciting, but I want to save all your ohs and ahs for the end of the talk, right?

Let's quickly recap the items shown here so everyone is up to speed.

To save time, I will read this part from my notes so we have plenty of time for the shiny, new parts. Alright? Let's go.
-->

---
layout: cover
background: ./images/cascade-origin-importance.svg
---

.

<!--
First up, origin and importance. 
-->

---
layout: center
---

<img src="/images/origin.svg" style="height: 30rem;" />

<!--
With origin, the browser asks: Who has defined the CSS? Did the website's author have custom styling? Has the browser's user configured custom styling via an extension to improve their personal user experience? What does the browser or user-agent have configured for default styling?

We already see a pattern that will return throughout all cascade sections. !important inverts the priority of the rules. So, browser rules set with importance will always have a higher priority than user-defined rules without priority.

That's why, for instance, it's considered an accessibility best practice to author font sizes with relative units to ensure the user-preferred font size, configured in the browser settings, which will end up at the origin with the least priority, is the base of the authored font-size.
-->

---
layout: cover
background: ./images/cascade-element-attached.svg
---

-

<!--
The next part of the cascade
-->

---
layout: code
---

```html
<h1 style="font-size: 6rem;">
  Heading
</h1>
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
      font-size: 2rem;
      line-height: 1.5;
    }
  }
</style>

<!--
This is where we add styling directly onto the HTML element via the style attribute.
-->

---
layout: code
---

```html
<h1 style="font-size: 6rem;">
  Heading
</h1>

<!-- Does not equal -->

<h1 class="text-18xl">
  Heading
</h1>

```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
      font-size: 2rem;
      line-height: 1.5;
    }
  }
</style>

<!--
This might look familiar to people using atomic libraries, like Tailwind. Although this almost looks the same, the main difference is that, with atomic libraries, we declare rules using selectors. And those, by default without importance, have less priority.
-->

---
layout: cover
background: ./images/cascade-selector-specificity.svg
---

.

<!--
That brings us to the next part of the cascade, the one we all know the most: Selector specificity. 
-->

---
layout: code
---

```css
#app {}

::after {}

h1 {}

:empty {}

.component {}

[data-reset] {}

* {}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
</style>

<!--
We have different ways to target HTML elements:
- ID selectors
- Pseudo-elements, which you can recognize by the double colon
- Type selectors, also known as tag selectors
- Pseudo-classes, which you can recognize by the single colon.
- Class selectors
- Attribute selectors
- Universal selectors

With specificity, it isn't just that the shown topmost selector is the one with the highest priority. It's a slightly more complex algorithm. 
-->

---
layout: center
---

<div class="text-center">


<p class="text-8xl font-extrabold">
(
<span style="color:#0065ff">A</span>,
<span style="color:#ff00e6">B</span>,
<span style="color:#ff0000">C</span>
)
</p>

(
<span style="color:#0065ff">ids</span>,
<span style="color:#ff00e6">(pseudo-)classes and attributes</span>,
<span style="color:#ff0000">(pseudo-)elements</span>
)

<br/>

[Polypane CSS specificity calculator](https://polypane.app/css-specificity-calculator)

</div>

<!--
Specificity is calculated by using 3 weight categories. We can visualize this as a tuple of numbers.

The first weight category is the number of IDs in the selector. The second category is the number of classes, pseudo-classes and attributes in the selector. The third category is the selector's number of types or tags and pseudo-elements. Universal selectors, like the asterisk; combinators, like the plus sign; child or sibling selectors, like the tilde; and values of the pseudo-class ':where', more on that later, are not counted when calculating specificity.

With this tuple, each weight category has a different priority. In this example, from left to right, we go from more priority to less priority. So, the ID column has the highest priority, followed by the class column and, lastly, the type column.

Kilian Valkhof, the creator of Polypane, has an excellent tool for visualizing specificity. Just fill in your selectors, and it will show you the specificity of each selector, the total of each weight category, from which you can then calculate the specificity of the entire selector.

Also, Chrome Devtools now has a specificity calculator built in. Just click on the element you want to inspect, go to the styles pane and hover over the selector of your choice.

But back to Kilian's tool. Let's take his first example. We have a header type selector. Within the header, we target an h1 with the id site title, and within that h1, we want to select the direct child with a class of logo. This results in a specificity of 1, 1, 2. The first weight is one because of the id site title, the second weight is one because of the class logo, and the third weight is two because of both the type selector h1 and the type selector header.

What would happen if I were to remove the id selector?

And if I were to add more classes, maybe a hundred, make it one humongous list of selectors, would this selector become more specific than our first example with the id selector? 

No.

Because a single value in a higher level is more important than all levels below it. For example, you can have 1000 class names, and a selector with a single ID would still be more specific.

Is everybody still following along? Yes? Good. Let's continue.
-->

---
layout: cover
background: ./images/cascade-order-of-appearance.svg
---

.

<!--
On to the last part of the cascade, the order of appearance. If multiple selectors have the same weight in all other parts of the cascade, the order in which they appear in the CSS file will finally determine which rule is applied.
-->

---
layout: code
---

```css
a {
  color: aqua;
}

a {
  color: chocolate;
}

a {
  color: peachpuff;
}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
</style>

<!-- Of these 3 rules, targeting anchor tags, the last one will prevail, and all our anchor tags have a peachpuff colour. -->

---
layout: cover
background: ./images/cascade-og.svg
---
.

<!-- There you have it, kids, the basics of the cascade. Easy right? -->
---
layout: cover
background: ./images/spongebob-anxious.gif
---

.

<!--
Not really. If you are unfamiliar with the cascade, you might feel uncomfortable, perhaps a bit anxious. 

[Jeremy Keith imperative/declarative quote]

We now better understand why this is a significant problem developers have with CSS. It is complex for the ones not familiar with it. It's vastly different compared to other programming languages.
-->

---
layout: cover
background: ./images/patrick-thinking.png
---

.

<!--
That's why we sought ways to make things easier for ourselves and newcomers.

How did we try to circumvent the complexity? Over the years, we've tried many things.
-->

---
layout: cover
background: ./images/abstractions.svg
---

.

<!--
Concepts like OOCSS, Object Oriented CSS, or SMACSS made us think about organising our CSS. Naming conventions like BEM or SUITCSS tried to make sure we didn't have any naming collisions.

They advocated using clear, unambiguous naming, just like in every other possible programming language. They try to avoid complex and lengthy selectors with too much specificity.

CSS Modules or build time scoping, like the ones built into Vue or Astro, give you local scoping of CSS rules and try to keep the specificity within a module by adding a random class to all selectors.

With atomic classes or utility classes, like Tailwind or UnoCSS, we do away with trying to come up with names entirely and compose our styling in the DOM. Pretty much each selector in these libraries corresponds to a single CSS rule.
-->

---
layout: center
---

<h1 class="text-7xl text-center">CSS couldn't keep up</h1>

<!--
Regardless of your preferred solution, you might've noticed a pattern here. All of these methodologies are based on the fact that CSS could not keep up with the demands of the web ecosystem.
-->

---
layout: center
---

<h1 class="text-7xl text-center line-through">CSS couldn't keep up</h1>

---
layout: cover
background: ./images/spongebob-new-pants.jpg
---

.

<!-- Well, perhaps the following new and up-and-coming features can help us. -->

---
layout: cover
background: ./images/cascade-is-where.svg
---

.

<!--
We saw the introduction of the ':is' and ':where' pseudo-classes. Both allow us to finally easily use a list of selectors.
-->

---
layout: code
---

```css
button:hover:disabled,
button:focus-visible:disabled, 
button:active:disabled {}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
    font-size: 1.5rem;
    line-height: 1.5;
    }
  }
</style>

---
layout: code
---

```css
/* 0,2,1 */
button:is(:hover, :focus-visible, :active):disabled {}

/* 0,1,1 */
button:where(:hover, :focus-visible, :active):disabled {}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
    font-size: 1.5rem;
    line-height: 1.5;
    }
  }
</style>

<!--
For instance, we see two examples here.
-->

---
layout: cover
background: ./images/cascade-cascade-layers.svg
---

.


<!--
Since the 14th of March 2022, all major browsers have supported a new part of the cascade called Cascade Layers. Cascade Layers priority sits between the Element Attached and Selector Specificity part of the cascade.
-->

---
layout: code
---

```html
<section class="flex card table">
  What color do I have?
</section>

<!-- khaki -->
```

```css
.table {
  color: crimson;
}

section {
  color: cornflowerblue;
}

.card {
  color: deeppink;
}

.flex {
  color: khaki;
}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
    font-size: .9rem;
    line-height: 1.5;
    }
  }
</style>

---
layout: code
---

```html
<section class="flex card table">
  What color do I have?
</section>

<!-- khaki -->
```

```css
@layer table {
  .table {
    color: crimson;
  }
}

@layer reset {
  section {
    color: cornflowerblue;
  }
}

@layer components {
  .card {
    color: deeppink;
  }
}

@layer utility {
  .flex {
    color: khaki;
  }
}

```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
    font-size: .9rem;
    line-height: 1.5;
    }
  }
</style>

<!--
It allows you to define a layer for your CSS rules. This layer is then used to determine the priority of the rule. We can namespace our CSS rules and define each layer's priority.

For instance, we can define a reset layer that contains all our reset rules. Next, we can define a base layer containing all our base styling. And lastly, we can define a components layer with all our component styling.
-->

<!--
Without defining the order of the layers, each layer's priority is determined by the order in which they appear in the CSS file, just like the order of appearance. All unlayered rules will have the highest priority to ensure backwards compatibility.

So, in this case, the reset layer will have the lowest priority, followed by the components layer and lastly, the utility
layer.
-->

---
layout: code
---

```css
@layer table, reset, components, utility;
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
    font-size: 2rem;
    line-height: 1.5;
    }
  }
</style>

<!--
But, by defining the order up front, we can change the priority of the layers. Priority is read from low to high. So in this case, the utility layer has the highest priority, followed by the components layer and the reset layer
-->

---
layout: code
---

```css
@layer utility, reset, table, components;
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
    font-size: 2rem;
    line-height: 1.5;
    }
  }
</style>

<!--
For instance, we can declare that the components layer has the highest priority, followed by the reset and then the utility reset layer. If we have rules with the same specificity in both the base and components layers, the rules in the base layer will prevail.
-->

---
layout: code
---

```html
<section class="flex card table">
  What color do I have?
</section>

<!-- cornflowerblue -->
```

```css
@layer utility, table, components, reset;

@layer table {
  .table {
    color: crimson;
  }
}

@layer reset {
  section {
    color: cornflowerblue;
  }
}

@layer components {
  .card {
    color: deeppink;
  }
}

@layer utility {
  .flex {
    color: khaki;
  }
}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
    font-size: .8rem;
    line-height: 1.5;
    }
  }
</style>

<!--
This means that Cascade Layers enable us to no longer to look at the order of loading.
-->

---
layout: code
---

```html
<section class="flex card table">
  What color do I have?
</section>

<!-- The one from the reset file / layer -->
```

```css
@layer utility, table, components, reset;

@import ("/styles/table.css") layer(table);
@import ("/styles/reset.css") layer(reset);
@import ("/styles/components.css") layer(components);
@import ("/styles/utility.css") layer(utility);
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
    font-size: .8rem;
    line-height: 1.5;
    }
  }
</style>

---
layout: code
---

```html
<section class="flex card table">
  What color do I have?
</section>

<!-- forestgreen -->
```

```css
@layer utility, table, components, reset;

section {
  color: forestgreen;
}

@import ("/styles/table.css") layer(table);
@import ("/styles/reset.css") layer(reset);
@import ("/styles/components.css") layer(components);
@import ("/styles/utility.css") layer(utility);
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
    font-size: .8rem;
    line-height: 1.5;
    }
  }
</style>

<!--
This means that Cascade Layers enable us to no longer to look at the order of loading.
-->

---
layout: cover
background: ./images/cascade-cascade-layers.svg
---

<!-- 
Cascade Layers are a great way to organize your CSS. It allows you to create a clear separation of different types of rules. It gives you additional control over the priority of your rules without tinkering with the specificity of your selectors.
-->

---
layout: cover
background: ./images/cascade-encapsulation.svg
---

<!--
Another feature I've been cleverly hiding from you is the part of the cascade named the encapsulation contexts. It's not new; it's been in browsers for a while now, but this part of the cascade is gaining popularity thanks to the buzz around
s-->

---
layout: center
---

<h1 class="text-8xl text-center">Web Components</h1>

---
layout: center
---

<img src="/images/shadowdom.svg" style="height: 30rem;" />

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://codepen.io/mrtnvh/embed/jOXppav?default-tab=html%2Cresult&theme-id=dark" style="width: 125%;height: 125%;transform: translate(-10%, -10%) scale(0.80);" />
    </div>
</div>

<style>
  .browser {
    padding: 0rem;
  }

  .browser-wrapper {
    border: 0;
  }
</style>

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://codepen.io/mrtnvh/embed/mdajjoq?default-tab=html%2Cresult&theme-id=dark" style="width: 125%;height: 125%;transform: translate(-10%, -10%) scale(0.80);" />
    </div>
</div>

<style>
  .browser {
    padding: 0rem;
  }

  .browser-wrapper {
    border: 0;
  }
</style>

---
layout: center
---

- **Encapsulation** of cascade & specificity.
- **Inheritance** just works.
- **::part** pseudo-element, we can target Shadow DOM parts from the Light DOM.
- **::slotted** pseudo-element, we can target the first layer slotted elements from within the Shadow DOM.

<!--
But I want to mention the following features of Web Components that are relevant to the cascade.
- Encapsulation of cascade & specificity.
- Inheritance just works.
- ::part pseudo-element, we can target Shadow DOM parts from the Light DOM.
- ::slotted pseudo-element, we can target the first layer slotted elements from within the Shadow DOM.
-->

---
layout: cover
background: ./images/cascade-encapsulation.svg
---

.

<!--
Because we can cross shadow boundaries, we are changing encapsulation contexts. That has a whole other place within the cascade. When using the part pseudo-element, the shadow context has the lowest priority and the host context, the Light DOM context, has the highest context. This enables authors to overwrite Web Component styling when needed.
-->

---
layout: cover
background: ./images/cascade-scope.svg
---

.

<!--
The final thing I want to share with you today is CSS scoping. Actual scoped CSS as a standard.

The CSS working group is hashing out a new CSS at-rule, the @scope rule

Let's dive right in.
-->

---
layout: code
---

```css
@scope (.light-scheme) {
  /* Only match links inside a light-scheme */
  a {
    color: darkmagenta;
  }
}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
</style>

---
layout: code
---

```html
<div class="light-scheme">
  <!-- darkmagenta -->
  <a href="#">Link</a>
</div>

<!-- Not darkmagenta -->
<a href="#">Link</a>
```

```css
@scope (.light-scheme) {
  a {
    color: darkmagenta;
  }
}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
</style>


---
layout: code
---

```css
@scope (.media-object) to (.content > *) {
  img {
    border-radius: 50%;
  }
  .content {
    padding: 1em;
  }
}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
</style>

---
layout: code
---

```html
<div class="media-object">
  
  <!-- Border-radius -->
  <img src="red-mist-squidward.jpg" />

  <div class="content">
    <!-- No  border-radius -->
    <img src="red-mist-squidward.jpg" />
  </div>
</div>

<!-- No  border-radius -->
<img src="ramone-dinos.jpg" />
```

```css
@scope (.media-object) to (.content > *) {
  img {
    border-radius: 50%;
  }
}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
</style>

<!--
This means you can target a fragment of the DOM and apply styling to only that fragment.

It means you have additional power to stop the cascade!
-->

---
layout: code
---

```html
<!-- Local scoping with <style> -->
<div>
  <style>
    @scope {
      p { color: red; }
    }
  </style>
  <p>this is red</p>
</div>
<p>not red</p>
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
</style>

<!--
Some extra features with @scope.

When we use the @scope rule with styles defined within a style tag within a specific element, we don't need to write a scoping root. These styles will automagically be scoped to the parent element.
-->

---
layout: code
---

```css
@scope (.parent-scope) {
  @scope (:scope > .child-scope) to (:scope .limit) {
    :scope .content {
      color: red;
    }
  }
}

/* equals */

@scope (.parent-scope > .child-scope) to (.parent-scope > .child-scope .limit) {
  .parent-scope > .child-scope .content {
    color: red;
  }
}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
</style>

<!--
And we can nest scoping rules. Using the colon scope pseudo-class, we can reuse the parent-scope throughout the nested scope rules.
-->

---
layout: cover
background: ./images/cascade-scope.svg
---

.

<!--
Where does this scoping fit in the cascade? Right in between specificity and order of appearance.
-->

---
layout: code
---

```html
<header>
  <nav>
    <a href="/test">Test</a>
    <a href="/test">Test</a>
    <a href="/test">Test</a>
  </nav>
  <a href="/test">Test</a>
</header>
```

```css
@scope (nav) {
  /* (0,0,1) */
  a {
    color: lime;
  }
}

/* (0,0,2) */
header a { 
  color: hotpink;
}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
</style>

<!-- 
Because of this, we can use scoped are still able to be overwritten by rules with a higher specificity.

In this example, the anchors in the nav, not the whole header, will have a lime colour, but eventually be overwritten by the hotpink colour style defined in the first, more specific rule.
-->

---
layout: cover
background: ./images/scope-browser-support.svg
---

<!--
The CSS working group has set the base in the CSS specification and is hashing out the final details. Chrome will ship a first version in Chrome 118, scheduled for October 2023, and all other browser vendors have shown their support for their future implementation. It's coming, people!
-->

---
layout: cover
background: ./images/cascade-full.svg
---

.

<!--
So there you have it. The CSS cascade. Our worst enemy. Or perhaps your future best friend?

There is immense value in how the cascade, inheritance and specificity work. It's what makes CSS such a powerful language and, at the same time, what makes CSS so complex.

Just like you'll probably know what hoisting means in JavaScript or how a debounce function works, I, in my honest opinion, find it equally as vital that, if you want to call yourself a front-end expert, you should know how to wield the power of the cascade, inheritance and specificity.

But throughout the years, we have worked around the cascade by using naming methodologies and other abstractions. And that's fine; we needed something to make our lives easier as CSS evolved slower than our needs. But that's not the case anymore.
-->

---
layout: cover
background: ./images/golden-era-css.jpg
---

.

<!--
Una Kravets said it perfectly in her talk at CSSday 2023: We are now experiencing the golden age of Web UI. We have seen so many new features land over the course of the last years.

Standard committees, like the CSS working group, are welcoming more and more community contributors. Browser vendors are working together to their best abilities to launch new features at the same time as one another, like the yearly Interop effort. And everyone working on the Web is finally listening more and more to the needs of our community.

We now have the momentum to do away with the established ways of working and start anew. 

We now have the unique moment to rethink how we write and architecture CSS, with fewer tooling and abstractions.
-->

---
layout: black
---

.

<!--
Understanding what's under the hood of your abstraction will make you transcend into a better developer. It will make you resilient for what the future of our craft will bring.

Hypes come and go, but standards are here to stay.

In the end, understanding the cascade, inheritance, and specificity will give you
-->

---
layout: black
---

<SlidevVideo autoPlay="resume" autoReset="slide"  controls>
  <source src="/videos/maximum_power_1.mp4" type="video/mp4">
</SlidevVideo>

<style>
  video {
    position: absolute;
    inset: 0;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
  }
</style>

---
layout: center
---

<h1 class="text-center">✌️</h1>

<style>
  h1 {
    font-size: 15rem;
  }
</style>

<!--
Thank you!
-->
