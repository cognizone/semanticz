---
sidebar_position: 3
---
import DependencyTabs from '@site/src/components/DependencyTabs';

# Example Usage


1. Add the dependency to your project:

<DependencyTabs
groupId="zone.cogni.semanticz"
artifactId="semanticz-connectors-spring"
version="2.0.0"
/>


2. Configure connectors: `src/main/resources/application.yml`
```yaml
endpoint:
  fuseki:
    type: fuseki
    url: http://localhost:3030
    user: admin
    password: adminpass
```

3. Enable connectors: `src/main/java/…/App.java`
```java
@EnableSparqlServer("endpoint")
@SpringBootApplication
public class App {
```

4. Use the unified API: `src/main/java/…/Service.java`
```java
@Service
public class Service {
  private SparqlServiceProvider sparqlServiceProvider;
  private SparqlService sparqlService;

  public Service(SparqlServiceProvider sparqlServiceProvider) {
    this.sparqlServiceProvider = sparqlServiceProvider;
    this.sparqlService = sparqlServiceProvider.createSparqlService("fuseki"); }

  public void doSomeFancyUpdate() {
    sparqlService.executeUpdateQuery("BASE <https://data.cogni.zone/r/> INSERT DATA <cognizone> <helps> <you> .");}
```