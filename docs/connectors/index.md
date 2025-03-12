---
title: Connectors
slug: /connectors
---

[Connectors](https://github.com/cognizone/semanticz-connectors) serve to unify access to RDF stores from JVM languages. 
The goal of this project is to offer a consistent and easy-to-use interface for accessing multiple RDF stores, 
while allowing optimizations specific to each store (Fuseki, GraphDB, Stardog, Virtuoso, etc.). This library is designed 
to be flexible, extensible, and integrable with Spring applications.

```mermaid
graph TD
    subgraph backend["Java backend"]
        bl["Business Logic (Spring)"] --> api["Unified API"]

        subgraph connectors["Connectors"]
            api --> graphdbApi["GraphDB Connector"]
            api --> virtuosoApi["Virtuoso Connector"]
            api --> stardogApi["Stardog Connector"]
            api --> fusekiApi["Fuseki Connector"]
            api --> inmemoryApi["In-memory Connector"]
            inmemoryApi --> inmemory["Jena in-memory dataset"]
        end
    end

    graphdbApi ---> graphdb[("GraphDB")]
    virtuosoApi ---> virtuoso[("Virtuoso")]
    stardogApi ---> stardog[("Stardog")]
    fusekiApi ---> fuseki[("Fuseki")]
```