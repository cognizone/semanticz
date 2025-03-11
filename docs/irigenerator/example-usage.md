---
sidebar_position: 2
---
import DependencyTabs from '@site/src/components/DependencyTabs';

# Example Usage

1. Add the dependency to your project:

<DependencyTabs
groupId="zone.cogni.semanticz"
artifactId="semanticz-connectors-spring"
version="2.0.0"
/>

2. Use the `IriGeneratorCalculator` to convert the model with temporary IRIs into the model with permanent IRIs by implementing

```java
    final IriGeneratorCalculator sut = new IriGeneratorCalculator(
            "https://example.org/person/tempid/",     // base IRI of the temporary resources
            new SpelService(),                        // SpEL interpreter for IRI template
            uriGeneratorsResource,                    // URL of the file/resource with generators configuration
            format                                    // JSON-LD or JSON5
    );

    final Model originalModel = ... // the original Jena Model to transform

    final Model convertedModel = sut.convert(
            originalModel, 
            ImmutableMap.of("baseUri", "https://data.cogni.zone/person/") // constant variables for IRI construction
    );
```

and the configuring (loaded as `uriGeneratorsResource`)

```json
{
    "@context": { ... }, // context omitted for brevity, see https://github.com/cognizone/semanticz-irigenerator/blob/develop/src/main/resources/context.json
    "prefixes": [{
        "prefix-name": "eczm",
        "namespace": "https://example.cogni.zone/model#"
    }],
    "generators": [
        {
            "uriSelector": "select ?uri { ?uri a eczm:Person }",
            "variableSelector": "select ?id where { <#{[uri]}> eczm:id ?id }",
            "uriTemplate": "#{[baseUri]}/#{[id]}"
        }
    ]
}
``` 

3. Upon running this setup will transform the model

```
@prefix eczm: <https://example.cogni.zone/model#> .

<https://example.org/person/tempid/1> a eczm:Person ;
                    eczm:ssn "123-456-789" .
```

into

```
@prefix eczm: <https://example.cogni.zone/model#> .

<https://data.cogni.zone/person/123-456-789> a eczm:Person ;
                    eczm:ssn "123-456-789" .
```