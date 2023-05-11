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
background: ./images/comms-restful.svg
---

---
layout: center
---
<h1 class="text-12xl text-center leading-none">OpenAPI</h1>
<div class="text-center -mt-5">or the specification formerly known as Swagger</div>

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
background: ./images/io-brands.svg
---

---
layout: cover
background: ./images/io-langs.svg
---

---
layout: cover
background: ./images/langs-schemas.svg
---

---
layout: cover
background: ./images/langs-schemas-openapi.svg
---


---

# OpenAPI

The OpenAPI Specification (OAS) defines a <u>standard, language-agnostic interface to RESTful APIs</u> which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection.

When properly defined, a consumer can <u>understand</u> and <u>interact</u> with the remote service with a <u>minimal amount of implementation logic</u>.

<br /><br /><br /><br /><br /><br /><br /><br />

<small><a href="https://github.com/OAI/OpenAPI-Specification/">https://github.com/OAI/OpenAPI-Specification/</a></small>

---
layout: center
---
<h1 class="text-12xl text-center leading-none">Code</h1>

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

```yml{6-9}
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
      
      # description
      # requestBody
      # security
      # ...

      responses:
        #...

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
layout: center
---
<h1 class="text-10xl text-center leading-none">Workflows</h1>

---
layout: background
background: ./images/code-first.svg
---

# Code first

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
layout: center
---
<h1 class="text-10xl text-center leading-none">Tools</h1>


---
layout: background
background: ./images/tools-openapi.svg
---

---
layout: background
background: ./images/tools.svg
---

---
layout: background
background: ./images/tools-docs.svg
---

# Documentation

---
layout: browser
---

<div class="browser-wrapper">
    <div class="browser-body">
        <iframe src="https://petstore.swagger.io/" />
    </div>
</div>


# Documentation

- Generate entire API documentation
- Less technical representation

**Tools:**

- [Swagger UI](https://swagger.io/tools/swagger-ui/) 
- [ReDoc](https://redoc.ly/redoc/)
- [Elements (by Stoplight)](https://stoplight.io/open-source/elements)


---
layout: background
background: ./images/tools-sdk.svg
---

# Code generation

---
layout: background
background: ./images/tools-sdk-langs.svg
---

# Code generation


---

# Code generation

<table>
  <tbody>
    <tr>
      <td style="width: 18rem;">
        <a href="https://openapi.tools/#sdk">openapi.tools</a>
      </td>
      <td>List of OpenAPI code generators </td>
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

<div class="browser-wrapper no-zoom">
    <div class="browser-body">
        <iframe src="https://openapi-generator.tech/docs/generators" />
    </div>
</div>

<style>
  .browser-wrapper.no-zoom iframe {
    transform: translate(-17.5%, -17.5%) scale(.66);
    width: 152.75%;
    height: 152.75%;
  }
</style>

---
layout: background
background: ./images/tools-mocking.svg
---

# Mocking

---

# Mocking

- Develop against non-existing dependency
- Parallel development
- Independence

---

# Mocking

[Prism (by Stoplight)](https://github.com/stoplightio/prism) turns OpenAPI files into a API server.

- Mocking
  - Random data
  - Examples
- Data transformations
- Input / output validations
- ...


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
                    tag:
                      type: string

```

---
layout: code
---

```yml{14,17-25}
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
                    tag:
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

[0:00:00 PM] › [CLI] …  awaiting  Starting Prism…
[0:00:00 PM] › [CLI] ℹ  info      GET        http://127.0.0.1:4010/pets
[0:00:00 PM] › [CLI] ℹ  info      POST       http://127.0.0.1:4010/pets
[0:00:00 PM] › [CLI] ℹ  info      GET        http://127.0.0.1:4010/pets/lorem
[0:00:00 PM] › [CLI] ▶  start     Prism is listening on http://127.0.0.1:4010

```

---
layout: code
---

```bash

# Perform request
curl https://localhost:4010/pets | json_pp

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

- Develop against non-existing dependency
- Parallel development
- Independence

[Prism (by Stoplight)](https://github.com/stoplightio/prism)

---
layout: background
background: ./images/tools.svg
---

# Automation

---
layout: background
background: ./images/tools-automation.svg
---

# Automation

---

# Automation

<div>Versioning</div>

  - **git submodules**
  - **language agnostic** dependency management

<br/>

<div>CI/CD</div>

  - Instant documentation updates
  - API contract style linting

<br/>

<div>Development environments</div> 

  - SDK generation at startup
  - Mocking server auto-update

---
layout: center
---

<div class="text-center text-3xl">
OpenAPI doc as Single Source Truth <br />
+ <br />
automation <br />
= <br />
happy teams
</div>

---
layout: center
---
<h1 class="text-12xl text-center leading-none">Demo</h1>

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

<a href="https://mrtnvh.com" target="_blank" rel="nofollow noopener">
  <img
    class="h-96"
    src="/images/peace.svg"
  />
</a>
---
layout: center
---

<a href="https://mrtnvh.com" target="_blank" rel="nofollow noopener">
  <img
    class="h-96"
    src="/images/peace-qr.svg"
  />
</a>

