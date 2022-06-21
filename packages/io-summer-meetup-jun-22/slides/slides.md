---
theme: mrtnvh
routerMode: 'hash'
layout: cover

fonts:
  sans: Inter
  weights: '400,700,800'
  mono: "IBM Plex Mono"

# the image source
background: ./images/io-summer-meetup-jun-22.jpg
---

<div class="text-gray-50">
  <h1 class="text-gray-50">Cascade Layers</h1>
  Putting the C in CSS
  <div class="text-xs uppercase mt-4">
    2022-06-23 <span class="mx-2">\\</span> iO Summer Meetup '22 <span class="mx-2">\\</span>
    <a href="https://mrtnvh.com" target="_blank" rel="nofollow noopener" class="text-gray-50">mrtnvh</a>
  </div>
</div>

---
layout: cover
background: /images/tlc.png
---
---
layout: cover
background: /images/disney.jpg
---
---
layout: cover
background: /images/cascade.jpg
---

---
layout: center
---

<h1 class="text-8xl text-center">CSS</h1>


---
layout: center
---

<h1 class="text-8xl text-center"><span style="color:#0065ff">C</span>ascading <span style="color:#0065ff">S</span>tyle<span style="color:#0065ff">s</span>heets</h1>

---
layout: center
---

<h1 class="text-8xl text-center">What is the <span style="color:#0065ff">Cascade</span>?</h1>

---
layout: center
---

# What is the CSS cascade ?

The **cascade** is an algorithm that defines how user agents combine property values originating from different sources. The cascade defines the origin and layer that takes precedence when declarations in more than one origin or cascade layer set a value for a property on an element.

**TL;DR;** Chooses the priority of CSS properties.

---
layout: center
---

<h1 class="text-8xl text-center">How<span style="color:#0065ff">?</span>!</h1>

---
layout: image-right
image: https://res.cloudinary.com/mrtnvh/image/upload/c_scale/dpr_1.0/f_auto/q_auto/w_2400/h_1350/e_grayscale/e_tint:100:334155:0p:f8fafc:100p/t_noise/v1642454529/mrtnvh.com/mrtnvh-portrait-2021.jpg
---

<div class="flex flex-col items-center justify-center h-full text-center">

<h1>
  <a href="https://mrtnvh.com" target="_blank" rel="nofollow noopener">
    <img
      class="h-12"
      src="/images/mrtnvh-logo.svg"
    />
  </a>
</h1>

Developer Advocate \\\\ Front-end

<a href="https://iodigital.com" class="mt-6" target="_blank" rel="nofollow noopener">
  <img
    class="h-12"
    src="/images/io-logo.svg"
  />
</a>

</div>

---
layout: center
---

<img
  class="h-100"
  src="/images/cascade-layers-pre-march-2022.svg"
  alt="The CSS Cascade before March 2022"
/>

---
layout: center
---

<img
  class="h-100"
  src="/images/cascade-layers-pre-march-2022-origin.svg"
  alt="The CSS Cascade before March 2022"
/>

---
layout: center
---

# Origin & importance

<img class="w-80 mx-auto" src="/images/origin-without-animations.svg" />

---
layout: image-right
image: /images/devtools.png
---

# Origin & importance

<img src="/images/origin-without-animations.svg" />

---
layout: center
---

# Origin & importance

<img class="w-80 mx-auto" src="/images/origin-without-animations.svg" />


---
layout: center
---

# Origin & importance

<img class="w-80 mx-auto" src="/images/origin.svg" />

---
layout: center
---

<img
  class="h-100"
  src="/images/pre march 2022 - shadow context.svg"
  alt="The CSS Cascade before March 2022"
/>

---
layout: center
---

# (Shadow) Context

<img class="w-80 mx-auto" src="/images/shadow-context.svg" />

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">        
        <iframe scrolling="no" title="Important Shadow Context Demo" src="https://codepen.io/miriamsuzanne/embed/RwjRrEE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href="https://codepen.io/miriamsuzanne/pen/RwjRrEE">
          Important Shadow Context Demo</a> by Miriam Suzanne (<a href="https://codepen.io/miriamsuzanne">@miriamsuzanne</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>
    </div>
</div>

<style>
  .browser-body iframe {
    width: 150%;
    height: 150%;
    transform: translate(-16.7%, -16.7%) scale(0.66666);
  }
</style>

---
layout: center
---

<img
  class="h-100"
  src="/images/pre march 2022 - element attached.svg"
  alt="The CSS Cascade before March 2022"
/>

---
layout: center
---

<div class="text-center">

# Element attached
Inline-styles

</div>

```html
<div style="background: red;"></div>
```

---
layout: center
---

<img
  class="h-100"
  src="/images/pre march 2022 - selector specificity selector.svg"
  alt="The CSS Cascade before March 2022"
/>

---
layout: center
---

<div class="text-center">

# Selector specificity

```scss
#app {}

::after {}

h1 {}

:empty {}

.component {}

[data-reset] {}

:where(.component) {}

* {}
```
</div>

---
layout: center
---

<div class="text-center">

# Selector specificity

<br/>

<p class="text-8xl font-extrabold">
(
<span style="color:#0065ff">A</span>,
<span style="color:#ff00e6">B</span>,
<span style="color:#ff0000">C</span>
)
</p>

(
<span style="color:#0065ff">ids</span>,
<span style="color:#ff00e6">classes</span>,
<span style="color:#ff0000">elements</span>
)

<br/>

[Polypane CSS specificity calculator](https://polypane.app/css-specificity-calculator)

</div>

---
layout: center
---

<img
  class="h-100"
  src="/images/pre march 2022 - order of appearance.svg"
  alt="The CSS Cascade before March 2022"
/>

---
layout: center
---

# Order of appearance

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

---
layout: center
---

<h1 class="text-8xl text-center">March <span style="color:#0065ff">14</span><sup>th</sup>, 2022</h1>

---
layout: center
---

<img
  class="h-100"
  src="/images/pre march 2022.svg"
  alt="The CSS Cascade before March 2022"
/>

---
layout: center
---

<img
  class="h-100"
  src="/images/post march 2022.svg"
  alt="The CSS Cascade before March 2022"
/>

---
layout: center
---

<img
  class="h-100"
  src="/images/post march 2022 - cascade layers.svg"
  alt="The CSS Cascade after March 2022"
/>

---
layout: center
---
<div class="browser-wrapper">
    <div class="browser-body">        
        <iframe scrolling="no" title="CSS Cascade Layers - example 1" src="https://codepen.io/vanhoofmaarten/embed/RwQbQeQ?default-tab=css%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href="https://codepen.io/vanhoofmaarten/pen/RwQbQeQ">
          CSS Cascade Layers - example 1</a> by Maarten Van Hoof (<a href="https://codepen.io/vanhoofmaarten">@vanhoofmaarten</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>
    </div>
</div>

<style>
  .browser-body iframe {
    width: 150%;
    height: 150%;
    transform: translate(-16.7%, -16.7%) scale(0.66666);
  }
</style>

---
layout: center
---
<div class="browser-wrapper">
    <div class="browser-body">        
        <iframe scrolling="no" title="CSS Cascade Layers - example 1" src="https://codepen.io/vanhoofmaarten/embed/XWZrZvj?default-tab=css%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href="https://codepen.io/vanhoofmaarten/pen/XWZrZvj">
          CSS Cascade Layers - example 1</a> by Maarten Van Hoof (<a href="https://codepen.io/vanhoofmaarten">@vanhoofmaarten</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>
    </div>
</div>

<style>
  .browser-body iframe {
    width: 150%;
    height: 150%;
    transform: translate(-16.7%, -16.7%) scale(0.66666);
  }
</style>

---
layout: center
---

<div class="text-center">

# Cascade layers

<img
  class="h-100"
  src="/images/cascade-layers.svg"
  alt="Cascade layers priority"
/>

</div>

---

# Block @layer rules

```css
/* @layer <layer-name> */
@layer links {
  a:any-link { color: maroon; }
}

/* un-layered */
 a:any-link { color: maroon; }
```

---


# Priority

<div class="flex gap-12">
<div>

```css
@layer layer-1 { a { color: red !important; } }
@layer layer-2 { a { color: orange !important; } }
@layer layer-3 { a { color: yellow !important; } }
/* un-layered */ a { color: green !important; }

/* un-layered */ a { color: green; }
@layer layer-1 { a { color: red; } }
@layer layer-2 { a { color: orange; } }
@layer layer-3 { a { color: yellow; } }
```

</div>

<div>

- !important layer-1 (most powerful)
- !important layer-2
- !important layer-3
- !important un-layered styles
- normal un-layered styles
- normal layer-3
- normal layer-2
- normal layer-1 (least powerful)

</div>
</div>

---

# Order @layer blocks

```css
@layer reset, defaults, links;

@layer links {
  a { color: var(--link-color); }
}

@layer defaults {
  a { color: var(--brand-primary); }
}

@layer reset {
  a { color: blue; }
}
```

---

# Grouping (nested) layers

```css
@layer tailstrap {
  @layer components, utilities;

  @layer utilities {
   .mbe-0 { margin-block-end: 0; }
  }

  @layer components {
    album-art { margin-block-end: 1rem; }
  }
}
```

---

# Sorting nested layers

```css
/* sorting nested layers directly */
@layer tailstrap.components, tailstrap.utilities;

/* declaring nested layers directly */
@layer tailstrap.utilities {
 .mbe-0 { margin-block-end: 0; }
}
@layer tailstrap.components {
  album-art { margin-block-end: 1rem; }
}
```

---

# Nested layers and un-layered defaults

```css
@layer defaults {
  /* un-layered defaults (higher priority) */
  :any-link { color: rebeccapurple; }

  /* layered defaults (lower priority) */
  @layer reset {
    a[href] { color: blue; }
  }
}
```

---

# Layer order doesn’t intermix
```css
@layer reset.type, default.type, reset.media, default.media;
```
<br/>

- un-layered (most powerful)
- default group
  - default un-layered
  - default.media
  - default.type
- reset group
  - reset un-layered
  - reset.media
  - reset.type

---

# Layering stylesheets

```css
@import("/components.css") layer(components);
```

<br/>

* In development: layer attribute in the HTML <link> element


---

# Reverting styles

```css
@layer default {
  a { color: maroon; }
}

@layer theme {
  a { color: var(--brand-primary, purple); }

  .no-theme {
    color: revert-layer;
  }
}
```

---
layout: center
---

<div class="text-center">

<h1 class="text-8xl text-center">Triggered<span style="color:#0065ff">?</span>!</h1>

[A Complete Guide to CSS Cascade Layers](https://css-tricks.com/css-cascade-layers) by Miriam Suzanne

</div>

---
layout: center
---

<img
  class="h-100"
  src="/images/post march 2022.svg"
  alt="The CSS Cascade after March 2022"
/>

---
layout: center
---

<div class="text-center">

<h1 class="text-8xl text-center">Why<span style="color:#0065ff">?</span>!</h1>

</div>

---

# Why?!

<div class="flex gap-12">
<div class="flex-grow">

**Random stylesheet loading order**
- External styles
- Resets (normalize.css, …)
- Components style libraries (Bootstrap, …)
- Utilities (Tailwind, Bootstrap)

</div>
<div class="flex-grow">

**Complex CSS architectures**
- Atomic CSS
  - @layer atoms
  - @layer molecules
  - …

</div>
</div>

---

# Browser support

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-cascade-layers&periods=future_1,current,past_1,past_2&accessible-colours=true&image-base=none" frameborder="0" width="100%" height="400px"></iframe>

---
layout: center
---

<div class="text-center">

  <h1 class="mb-6">Resources</h1>

  [Miriam Suzanne](https://www.miriamsuzanne.com/) <br>
  [Bramus Van Damme](https://bram.us/) <br> <br>
  [A Complete Guide to CSS Cascade Layers](https://css-tricks.com/css-cascade-layers) <br> by Miriam Suzanne at CSS-Tricks <br> <br>
  [Introducing the CSS Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) at MDN Web Docs

</div>

---
layout: center
---

<mdi-peace class='w-24 h-24' />