---
theme: mrtnvh
routerMode: 'hash'
layout: cover

fonts:
  sans: Inter
  weights: '400,700,800'
  mono: "IBM Plex Mono"

# the image source
background: ./images/frontend-at-scale-mar-22.jpg
---

# Container Queries

The next step towards a truly modular CSS.

<div class="text-xs uppercase mt-4 text-gray-400">9 March 2022 <span class="mx-2">\\</span> Frontend@Scale by Rabobank <span class="mx-2">\\</span> <a href="https://mrtnvh.com" target="_blank" rel="nofollow noopener">mrtnvh</a> </div>

<!-- Photo by <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pawel Czerwinski</a> on <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> -->

---
layout: blocks
---

<ul>
  <li>Reusable components?</li>
  <li v-click>Most optimal responsive layout?</li>
  <li v-click>Media queries \\\\ config options?</li>
</ul>

---
layout: image-right
image: https://res.cloudinary.com/mrtnvh/image/upload/c_scale/dpr_1.0/f_auto/q_auto/w_2400/h_1350/e_grayscale/e_tint:100:6366f1:0p:f5f3ff:100p/t_noise/v1642454529/mrtnvh.com/mrtnvh-portrait-2021.jpg
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

Developer Advocate \\\\ Senior Front-end

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
  class="h-160"
  src="/images/dashboard-default.svg"
/>

<style>
  .center {
    background-color: #EEEEEE;
  }
</style>

---
layout: center
---

<img
  class="h-160"
  src="/images/dashboard-transparent.svg"
/>

<style>
  .center {
    background-color: #EEEEEE;
  }
</style>

---
layout: image-right
image: /images/dashboard-transparent.svg
---


# Goals

As a user:
- I should be able to customize my dashboard by resizing widgets. 
- I want to less or more information depending on size.

---
layout: image-right
image: /images/dashboard-weather-bigger.svg
---

# Goals

As a user:
- I should be able to customize my dashboard by resizing widgets. 
- I want to less or more information depending on size.

---
layout: image-right
image: /images/dashboard-global-highlight.svg
---

# Media queries?

- Query the viewport
- Insufficient flexibility

---
layout: image-right
image: /images/dashboard-weather-highlighted.svg
---

# Custom classes?

```html
<internal-dashboard>
  <external-widget type="bar" />
  <external-widget type="pie"/>
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

---
layout: image-right
image: /images/dashboard-weather-highlighted.svg
---

# Custom classes?

- End user is responsible for styling
- Not automatically provided
- End-user has to implement own layout logic

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

---
layout: center
---

<h1 class="text-32">CSS</h1>

---
layout: center
---

<img
  class="h-160"
  src="/images/dashboard-weather-highlighted.svg"
/>

<style>
  .center {
    background-color: #EEEEEE;
  }
</style>

---
layout: browser
---
<div v-click-hide class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://codepen.io/vanhoofmaarten/full/vYWYKLP" />
    </div>
</div>
<div v-after class="browser-wrapper" style="width: 54%;">
    <div class="browser-body">
        <iframe src="https://codepen.io/vanhoofmaarten/full/vYWYKLP" />
    </div>
</div>

---

# CSS Containment

- Improves rendering performance
- DOM subtree isolation
- Enables container queries

<br>

```css 
.container {
  contain: size layout style paint;
}
```

---

# Container Queries

Enable containment for container query

```css 
.product {
  contain: size layout style;
}
```

---

# Container Queries

Enable containment for container query

```css 
.product {
  container: product / size;

  /* Shorthand for */
  container-name: product;
  container-type: size;
}
```

---

# Container Queries

Enable containment for container query

```css 
.product {
  /* Target specific containers*/
  container-name: product;

  /* inline-size, size, style */
  container-type: size;
}
```

---

# Size container features

Single condition

```css 
@container (inline-size > 400px) {
  .product-body {} 
}
```

---

# Size container features

Multiple conditions

```css 
@container (inline-size > 400px) and (block-size > 200px) { 
  .product-body {}
}
```

---

# Size container features

Target multiple containers

```css {all|3,11-13|8,15-17}
.product-list {
  container-type: size;
  container-name: list;
}

.page {
  container-type: size;
  container-name: folio;
}

@container list (inline-size > 800px) {
  .product {}
}

@container folio (inline-size > 400px) and (block-size > 200px) {
  .product {}
}
```

---

# Size container features

<carbon-warning-alt class='mr-2' /> Containment always has to be set on an ancestor.

```css 
.ancestor {
  /* container-type values: `inline-size`, `size`, `style` */
  /* Size allows querying `block-size`, `aspect-ratio`, and `orientation` */
  container-type: size;
}

@container (inline-size > 800px) {
  .ancestor {
    /* NOPE */
  }
}
```

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

@container (inline-size > 500px) {
  .widget-body {} 
}
```

---

# Style container features

```css 
.product {
  container-type: style;
}

@container style(background: red) {
  .product-body {}
}
```

---

# State container features

```css 
header {
  container: is-stuck is-visible / header;
  position: sticky;
  top: 0;
}

@container header state(is-stuck) { /* … */ }
@container header state(is-visible) { /* … */ }
```
<carbon-information class='mr-1' /> Proposition style container has been deferred https://github.com/w3c/csswg-drafts/issues/6402

---

# Container relative units

<div class="flex gap-12">
  <div class="flex-grow">

```css 
.product {
  container-type: style;
}


.product-grandchild {
  height: 75cqi;
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

---

# Experiment!

- Chrome Canary: [chrome://flags/#enable-container-queries](chrome://flags/#enable-container-queries)
- Polyfill: https://github.com/GoogleChromeLabs/container-query-polyfill

<br>

<carbon-warning-alt class='mr-1' /> Spec. in active development <br>
<carbon-warning-alt class='mr-1' /> Syntax bound to change <br>
<carbon-warning-alt class='mr-1' /> Not ready for production

---

# Participate!

- [CSS Working Group discussions on Github](https://github.com/w3c/csswg-drafts/projects/18)
- [Awesome Container Queries](https://github.com/sturobson/Awesome-Container-Queries) by Stu Robson

---
layout: browser
---
<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://codepen.io/vanhoofmaarten/full/mdWBMGb" />
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

---

# #TIL

**Container queries**

- Encapsulate adaptive styles
  - Modular front-end architecture
- Not limited to querying size
  - Size
  - Style
  - State
  - Container Relative units
- Specification is under active development
  - Experiment with [Chrome Canary](chrome://flags/#enable-container-queries) or [polyfill](chrome://flags/#enable-container-queries)
  - Not ready for production


---
layout: center
---

<div class="text-center">

  # Share!

  <mdi-twitter class='mr-1 mb-1 inline-block' /> <br/> [@mrtnvh](https://twitter.com/mrtnvh)

</div>

---
layout: center
---

<div class="text-center">

  <h1 class="mb-6">Credits</h1>

  [Miriam Suzanne](https://www.miriamsuzanne.com/) <br>
  [Una Kravets](https://una.im/) <br> <br>
  Everyone championing container queries!

</div>


---
layout: center
---

<div class="text-center text-12">
  
  Me <mdi-arrow-right class='h-8 inline-block' /> [mrtnvh.com](https://mrtnvh.com) <br>
  Team-up <mdi-arrow-right class='h-8 inline-block' /> [iodigital.com/careers](https://iodigital.com/careers)

</div>


---
layout: center
---

<mdi-peace class='w-24 h-24' />



---
layout: center
---

<div class="text-center">

# Resources

[CSSWG Specification](https://drafts.csswg.org/css-contain-3/) <br>
[CSS Working Group discussions on Github](https://github.com/w3c/csswg-drafts/projects/18) <br>
[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) <br>
[awesome-container-queries](https://github.com/sturobson/Awesome-Container-Queries)


</div>
