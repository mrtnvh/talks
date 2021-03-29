Hello there, fellow ethousiasts of all things tech.

I have a question for you.

What's the first thing what pops up in your mind when starting a new project?

Oh what fancy new framework am I going to use for this one?
Or, ...

One of the things that keeps my stress levels at bay, is knowing exactly what data the project needs, if that data is available and how it's available.

Maybe a visual interface is required, maybe a well thought out sitemap structure or there might be the need for captivating interactive functionalities. How does the User Interface relate to the Data management aspect of the project?

Should the content be available and maintained through Markdown files or a GraphQL API connected to a Content Management System? Perhaps a RESTful API is at your disposal to source the data from. 

There is a plethora of ways of sending and recieving data to ones project and multiple environment contraints that will influence those possibilities.

Today, I'll be sharing with you one example of biggest revelations and improvements to my development workflow. Something I am convinced of you also should have in your mental backpack when roaming the lands of enterprise software and large teams.

The OpenAPI Specification.

Let's go.

`Intro playing with snippet of 'Better Days', performed by the band ROYCE (roycetheband.com)`

My name is Maarten. I'm a Senior Front End Developer, OpenAPI & Open Source Advocate at ISAAC, now part of the Intracto Group, based in Eindhoven, in the South of the Netherlands.

At ISAAC we specialise in providing integration, identity and acces management services for large bussinesess in the e-finance and e-commerce landscape. We're not shy of taking on large projects, that's why our slogan is 'We love .complexity'.

<!-- We believe, that for every project that we take on, the right specialists should be part of that project team. We believe that every teammember should be able to  -->

-- going headless

this means, splitting up the classic monolith application in to a front end  and a back end project. This is know as the 'headless' approach. Here, the front end is a entirely seperate view layer for the backend, which contains all the data and bussiness logic. This allows the view layer to be optimized for the target platform. Think of Progressive Web Apps with offline capabilities for browsers or mobile native apps. Maybe you might considered making your services available to other services.

Starting with the headless approach already gives your team an advantage in making sure that every specialist can optimize for their targets.

In the front end paradigm, there are two major approaches to communicate data. Very popular these days is, GraphQL, which we are not going to discuss today, where an webapp can request it's data needs through single endpoint with a query syntax or a RESTful API, in which we will use the architecture HTTP provides us with. Think of URLs, Verbs (GET, POST, PUT), request body, response bodies, headers, ...

So we've split up our team in to multiple parts, each specialised in their domain, but with access to the same data. This dataflow is the common denominator in the entire project team. We need to make sure that everyone has easy access to what data is available and how to let each part of the project talk to each other.

How, documentation, JIRA or a Slack channel?

Why not a platform-agnostic, version controllable file, written in a easy to understand syntax? A contract, a single source of truth for communication?

And that's where the OpenAPI scheme comes in.



## OpenAPI
The OpenAPI Specification (OAS) defines a standard, programming language-agnostic interface description for REST APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic.

It's basically YML or JSON files which you format in pre-described way by the OpenAPI Specification.

Let's take a high level view of what kind information you can put in to an OpenAPI document.

I'm not going to go all that deep in to the details. If you have specific question, put in the chat, reach out to me via Twitter @mrtnvh or visit https://spec.openapis.org to view or contribute to the OpenAPI Specification.

Let's take a very RESTful API.
```yml
openapi:
  # Version of the used OpenAPI spec.
info:
  # General information about
  # version of the API

servers:
  # API BaseURLs
  # Different BaseURLs per environment
security:
  # State our security mechanisms
  # - JWT tokens
  # - API keys
  # - Basic authentication
  # - OAuth or OpenIDConnect mechanism
paths:
  # URL paths
  # HTTP methods (GET, POST, PUT, ...)
  # Operation = path + method
    # operationId
    # parameters
      # part of URL
      # query string
      # headers
    # requestBody
    # responses
      # status
      # content-type
      # data

components:
  # reusable datamodels

webhooks:
  # NEW since
  # Equal the paths, only API provider instantiates webhook request
```

## Data
### Types
integer, number, string

### Schemas
arrays
object


JSON schema format modifiers
  int32
  int64
  email

object properties
  required properties


---

## Reusability
Reuse or combine components in to other components

Very generic specification to be compatible with as much use cases as possible, without having to state businesslogic.

---

## Workflow

2 general workflows for using the OpenAPI Specification.

### Code first
Existing API -> OpenAPI doc.
OpenAPI doc. is generated from codebase API.
  - Java: springdoc-openapi
  - .NET: SwashBuckle, Nswag
  - NodeJS: @nestjs/swagger

### Design first
OpenAPI doc -> 
Entire team can be involved in developing the communication layer.
 - Providers
 - Consumers
 - Project owner: future implementation, roadmap considerations
 
---

## Tooling

Because it's a specification, just like HTML, JavaScript, ... We can build tooling on that specification. We can enhance our workflows.

### Document generation
Because OpenAPI doc. contains all the nessecary information, its merely mapping the information of the OpenAPI doc. to a visual interface.

This way members that don't wan't to stare at a JSON or YML file, can have a more visually pleasing representation of what your APIs are capable of.

- Swagger UI
- ReDoc

### SDK Generation
OpenAPI doc is easily translatable to a typed set of 

### Mock server
Independently from API dependencies

### Version control
File in GIT
Reference to a specific snapshot (commit SHA) 

---

## Code demo
- openapi document
- SDK
- mocking server
- front end


---
 
OpenAPI specification
  Contract for providers and consumers of RESTful APIs
  Tooling

  Enhanced workflow

