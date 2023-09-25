---
theme: mrtnvh
routerMode: 'hash'
layout: cover

fonts:
  sans: Inter Tight
  weights: '400,700,800'
  mono: "IBM Plex Mono"

# the image source
background: ./images/distinct-mind-Js9auX5_9R8-unsplash-edited.jpg
backgroundCredits: 'Original photo by Distinct Mind on Unsplash (https://unsplash.com/photos/Js9auX5_9R8)'
---

---
layout: center
---

<h1 class="text-15xl text-center">CSS</h1>

---
layout: center
---
<div class="text-center">
  <h1 class="text-9xl">Abstractions</h1>
  (eg. Tailwind, Bootstrap, Sass, …)
</div>

---
layout: center
---

<h1 class="text-12xl text-center">Expert</h1>

---
layout: black
---


---
layout: cover
background: ./images/photo-1511936606692-5e0d73f6b638.avif
backgroundCredits: 'Original photo by Nathan Ziemanski on Unsplash (https://unsplash.com/photos/hjW4o5XfCzc)'
---

---
layout: cover
background: ./images/photo-1619266465172-02a857c3556d.avif
backgroundCredits: 'Original photo by Tetiana Grypachevska on Unsplash (https://unsplash.com/photos/80x3QULJDN4)'
---

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

---
layout: cover
background: ./images/io-roles.svg
---

---
layout: cover
background: ./images/cascade-og.svg
---

---
layout: cover
background: ./images/cascade-origin-importance.svg
---

---

screenshot devtools font size

---
layout: cover
background: ./images/cascade-element-attached.svg
---

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

---
layout: cover
background: ./images/cascade-selector-specificity.svg
---

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

:where(.component) {}

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

---
layout: cover
background: ./images/cascade-order-of-appearance.svg
---

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

---
layout: cover
background: ./images/cascade-og.svg
---

---
layout: cover
background: ./images/spongebob-anxious.gif
---

---
layout: cover
background: ./images/patrick-thinking.png
---

---
layout: center
---

<h1 class="text-9xl text-center">OOCSS</h1>

---
layout: center
---

<h1 class="text-9xl text-center">SMACSS</h1>



---
layout: code
---

```css
/* BEM */

.component {}
.component__descendent {}
.component--modifier {}
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
/* SMACSS */

.MyComponent {}
.MyComponent--modifier {}
.MyComponent-descendent {}
.MyComponent.is-state {}
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
/* CSS Modules */
.3j5Qdsdfi39 {
  color: red;
}

/* Vue */
[data-v-2259250b].card {
  font-family: fantasy;
}

/* Astro */
.layout:where(.astro-5HCE7SGA) {
  color: rebeccapurple;
}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
    font-size: 1.25rem;
    line-height: 1.5;
    }
  }
</style>

---
layout: code
---

```html
<!-- Tailwind -->
<div class="flex items-center space-x-2 text-base">
  <h4 class="font-semibold text-slate-900">Contributors</h4>
  <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
</div>
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
layout: center
---

<h1 class="text-7xl text-center">Keep specificity <span style="color:#0065ff">low</span></h1>

---
layout: cover
background: ./images/spongebob-new-pants.jpg
---

---
layout: cover
background: ./images/cascade-is-where.svg
---

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

---
layout: code
---

```css
/* 1,1,1 */
button:is(#action, :hover):disabled {}

/* 0,1,1 */
button:where(#action, :hover):disabled {}
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
layout: cover
background: ./images/cascade-cascade-layers.svg
---

---
layout: code
---

```css
.table { table-layout: fixed; }

@layer reset {
  body { font-family: serif; }
}

@layer components {
  .card { background-color: white; }
}

@layer utility {
  .flex { display: flex; }
}

```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
    font-size: 1.2rem;
    line-height: 1.5;
    }
  }
</style>

---
layout: code
---

```css
/* Unlayered: Highest priority */
.table { table-layout: fixed; }

/* Lowest priority */
@layer reset {
  body { font-family: serif; }
}

/* 3rd highest priority */
@layer components {
  .card { background-color: white; }
}

/* 2nd highest priority */
@layer utility {
  .flex { display: flex; }
}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
    font-size: 1.2rem;
    line-height: 1.5;
    }
  }
</style>

---
layout: code
---

```css
@layer reset, components, utility;
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

---
layout: code
---

```css
@layer utility, reset, components;
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

---
layout: code
---

```css
@layer utility, components, reset;

/* Unlayered: Highest priority */
.table { table-layout: fixed; }

/* 2nd highest priority */
@layer reset {
  body { font-family: serif; }
}

/* 3rd highest priority */
@layer components {
  .card { background-color: white; }
}

/* Lowest priority */
@layer utility {
  .flex { display: flex; }
}
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
    font-size: 1.05rem;
    line-height: 1.5;
    }
  }
</style>

---
layout: cover
background: ./images/cascade-cascade-layers.svg
---

---
layout: cover
background: ./images/cascade-encapsulation.svg
---

---
layout: center
---

<h1 class="text-8xl text-center">Web Components</h1>

---
layout: center
---

<h1 class="text-8xl text-center line-through">Web Components</h1>

---
layout: center
---

- **Encapsulation** of cascade & specificity.
- **Inheritance** just works.
- **::part** pseudo-element, we can target Shadow DOM parts from the Light DOM.
- **::slotted** pseudo-element, we can target the first layer slotted elements from within the Shadow DOM.

---
layout: cover
background: ./images/cascade-encapsulation.svg
---

---
layout: center
---

<h1 class="text-8xl text-center line-through">Web Components</h1>

---
layout: center
---

<h1 class="text-9xl text-center" style="line-height: 0.8">Web Components!</h1>

---
layout: cover
background: ./images/lucien.jpg
---

---
layout: cover
background: ./images/cascade-scope.svg
---

---
layout: code
---

```html
<div>
  <style scoped>
    .table { table-layout: fixed; }
  </style>

  <!-- Fixed table-layout -->
  <table class="table"></table>
</div>

<!-- No fixed table-layout -->
<table class="table"></table>
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
<div>
  <style scoped>
    .table { table-layout: fixed; }
  </style>

  <!-- Fixed table-layout -->
  <table class="table"></table>
</div>

<!-- No fixed table-layout -->
<table class="table"></table>
```

<style>
  .slidev-layout.code {
    align-items: center;

    pre code {
      font-size: 1.5rem;
      line-height: 1.5;
      text-decoration: line-through;
    }
  }
</style>

---
layout: cover
background: ./images/neuralyzer.jpeg
---

---
layout: cover
background: ./images/cascade-scope.svg
---

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


---
layout: cover
background: ./images/cascade-scope.svg
---

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

---
layout: cover
background: ./images/scope-browser-support.svg
---

---
layout: cover
background: ./images/golden-era-css.jpg
---


---
layout: black
---

---
layout: black
---

<video autoplay controls>
  <source src="/videos/unlimited-power_1.mp4" type="video/mp4">
</video>

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

<h1 class="text-15xl text-center">✌️</h1>