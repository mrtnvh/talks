---
theme: mrtnvh
routerMode: "hash"
layout: cover

title: OpenAPI
titleTemplate: "%s - mrtnvh"

fonts:
  sans: Inter
  weights: "400,700,800"
  mono: "IBM Plex Mono"

# the image source
background: ./images/mrtnvh_a_group_of_developers_wirelessly_interconnected_through__a51ba34f-f250-46df-b7e7-ce8334a6f996.jpg
---

---
layout: cover
background: ./images/law-of-communication.svg
---

---
layout: cover
background: ./images/comms-server.svg
---

---
layout: cover
background: ./images/comms-languages.svg
---

---
layout: cover
background: ./images/langs.svg
---

---
layout: cover
background: ./images/langs-question.svg
---

---
layout: cover
background: ./images/langs-io.svg
---

---
layout: center
---
<h1 class="text-12xl text-center leading-none">OpenAPI</h1>

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
background: ./images/io-center.svg
---

---
layout: cover
background: ./images/io-campus.svg
---

---
layout: cover
background: ./images/io-campus-brands.svg
---

---
layout: cover
background: ./images/io-brands.svg
---

---
layout: cover
background: ./images/io-langs.svg
---

---
layout: cover
background: ./images/law-of-communication.svg
---

---
layout: cover
background: ./images/comms-server.svg
---

---
layout: cover
background: ./images/comms-languages.svg
---

---
layout: cover
background: ./images/langs-io.svg
---

---
layout: cover
background: ./images/langs-io-openapi.svg
---


---

The OpenAPI Specification (OAS) defines a <u>standard, language-agnostic interface to RESTful APIs</u> which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection.

When properly defined, a consumer can <u>understand</u> and <u>interact</u> with the remote service with a <u>minimal amount of implementation logic</u>.

<br /><br /><br /><br /><br /><br /><br /><br />

<small><a href="https://github.com/OAI/OpenAPI-Specification/">https://github.com/OAI/OpenAPI-Specification/</a></small>

---
layout: code
---

```yml
openapi: # Specification version

info: # General API metadata

servers: # Server information. BaseURLs, environments, ...

paths: # Available paths & operations

components: # Datamodel abstraction

security: # Security mechanisms can be used across the API

tags: # Grouping of paths & components

external docs: # Additional external documentation

webhooks: # Webhook operations, similar to paths, only API is now a consumer.
```

---
layout: code
---

```yml
paths:

  /pets:
    get:
      summary: List all pets
      #...
    post:
      summary: Create a pet
      #...

  /pets/{petId}:
    get:
      summary: Info for a specific pet
      #...
```

---
layout: code
---

```yml
paths:

  /pets:
    get:
      summary: List all pets
      operationId: listPets
      tags:
        - pets
      parameters:
        - name: limit
          in: query
          description: How many items to return at one time
          required: false
          schema:
            type: integer
            format: int32
      responses:
        #...

      # description
      # requestBody
      # externalDocs
      # deprecated
      # security
      # servers
      # ...

```

---
layout: code
---

``` yml
paths:

  /pets:
    get:
      #...
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Pets"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
```

---
layout: code
---

```yml
components:

  schemas:
    Pet:
    Pets:

  responses:
    ErrorResponse:

  requestBodies:
    NewPet:

  headers:
    Limit:
    Offset:
    Pagination:


```

---
layout: code
---

```yml
components:

  schemas:

    Pet:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        image:
          type: string
        tag:
          type: string
      required:
        - id
        - name

    Pets:
      type: array
      items:
        $ref: "#/components/schemas/Pet"
```

---
layout: background
background: ./images/code-first.svg
---

# Code first

---

# Code first

Generate OpenAPI document from API framework

<table>
  <tbody>
    <tr>
      <td style="width: 4.5rem;">Java</td>
      <td>springdoc-openapi, ...</td>
    </tr>
    <tr>
      <td>.NET</td>
      <td>SwashBuckle, Nswag, ...</td>
    </tr>
    <tr>
      <td>NodeJS</td>
      <td>@nestjs/swagger, ...</td>
    </tr>
  </tbody>
</table>

---
layout: background
background: ./images/code-first.svg
---

# Code first

---
layout: background
background: ./images/design-first.svg
---

# Design first

---

# Design first

**OpenAPI document = single source of truth**

Entire team can be involved in developing the communication layer.

- Providers
- Consumers
- Project owner: future implementation, roadmap considerations

---
layout: background
background: ./images/design-first.svg
---

# Design first

---
layout: center
---
<h1 class="text-10xl text-center leading-none">Tooling</h1>

---

# Documentation

Generate entire API documentation
Less technical representation
Tools:

- [Swagger UI](https://swagger.io/tools/swagger-ui/) 
- [ReDoc](https://redoc.ly/redoc/)
- [Elements (by Stoplight)](https://stoplight.io/open-source/elements) 


---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://petstore.swagger.io/" />
    </div>
</div>

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://elements-demo.stoplight.io/?spec=https://petstore.swagger.io/v2/swagger.json" />
    </div>
</div>


---
layout: background
background: ./images/sdk-one.svg
---

# SDK Generation

---
layout: background
background: ./images/sdk-two.svg
---

# SDK Generation

---
layout: background
background: ./images/sdk-three.svg
---

# SDK Generation

---

# SDK Generation

<table>
  <tbody>
    <tr>
      <td style="width: 18rem;">
        <a href="https://openapi.tools/#sdk">openapi.tools</a>
      </td>
      <td>List of OpenAPI SDK generators </td>
    </tr>
    <tr>
      <td><a href="https://openapi-generator.tech/">openapi-generator.tech</a></td>
      <td>Java-based generator for dozens of programming languages <br /> <small>(Docker image available)</small></td>
    </tr>
    <tr>
      <td><a href="https://github.com/ferdikoomen/openapi-typescript-codegen/">openapi-typescript-codegen</a></td>
      <td>TypeScript-based generator</td>
    </tr>
  </tbody>
</table>

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://openapi-generator.tech/docs/generators" />
    </div>
</div>

---

# Mocking

[Prism (by Stoplight)](https://github.com/stoplightio/prism) turns OpenAPI files into a API server.

- Mocking
  - Random data
  - Examples
- Data transformations
- Input / output validations
- ...

<br />

- Parallel development
- Platform Indepencency


---
layout: code
---

```yml
# https://petstore.com/openapi.yaml
paths:

  /pets:
    get:
      operationId: listPets
      
      responses:
        "200":
          content:
            application/json:
              
              schema:
                type: array
                items:
                  
                  type: object
                  properties:
                    id:
                      type: integer
                      format: int64
                    name:
                      type: string

```

---
layout: code
---

```bash

# Start Prism
prism mock -d https://petstore.com/openapi.yaml

# OR run Prism in Docker
# docker run --init -p 4010:4010 stoplight/prism:4 mock -d -h 0.0.0.0 https://petstore.com/openapi.yaml

```

---
layout: code
---

```bash

# Perform request
curl https://petstore.swagger.io/v2/pet/1 | json_pp

```

---
layout: code
---

```json
[
  {
    "id": 7094252654184530000,
    "name": "proident consequat anim est elit",
    "tag": "eiu"
  },
  {
    "id": 2067454767236280300,
    "name": "nostrud cupidatat nisi f",
    "tag": "sed eiusmod"
  },
  {
    "id": 5983151522463482000,
    "name": "dolore id minim magna",
    "tag": "aute consectetur do"
  }
]
```
---


# Mocking

- Parallel development
- Platform Indepencency

[Prism (by Stoplight)](https://github.com/stoplightio/prism)

---

# Automation

OpenAPI doc = Single Source Truth

- Instant documentation updates
- SDK generation at new release/commit
- Mocking server updates

&nbsp;

---

<h1>#TIL</h1>
<strong>OpenAPI specification</strong>
<ul class="mb-3">
  <li class="my-0">Contract between services</li>
  <li class="my-0">Unified way of describing a REST API</li>
  <li class="my-0">Code first</li>
  <li class="my-0">Design first</li>
</ul>
<strong>Tools</strong>
<ul class="mb-3">
  <li class="my-0">Documentation generation</li>
  <li class="my-0">SDK generation</li>
  <li class="my-0">Mocking servers</li>
  <li class="my-0">Automation</li>
</ul>
<strong>Results</strong>
<ul>
  <li class="my-0">Single source of truth</li>
  <li class="my-0">Enhances workflow</li>
  <li class="my-0">Increases independence</li>
</ul>
  

---
layout: center
---

<div class="text-center text-5xl">

[mrtnvh.com](https://mrtnvh.com)

[iodigital.com](https://iodigital.com)

</div>

---
layout: center
---

<mdi-peace class='w-48 h-48' />
