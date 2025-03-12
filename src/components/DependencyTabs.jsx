import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function DependencyTabs({groupId, artifactId, version}) {
    return (
        <Tabs>
            <TabItem value="gradle-kotlin" label="Gradle (Kotlin)" default>
        <pre>
          <code className="language-kotlin">
{`implementation("${groupId}:${artifactId}:${version}")`}
          </code>
        </pre>
            </TabItem>

            <TabItem value="gradle-groovy" label="Gradle (Groovy)">
        <pre>
          <code className="language-groovy">
{`implementation '${groupId}:${artifactId}:${version}'`}
          </code>
        </pre>
            </TabItem>

            <TabItem value="maven" label="Maven">
        <pre>
          <code className="language-xml">
{`<dependency>
  <groupId>${groupId}</groupId>
  <artifactId>${artifactId}</artifactId>
  <version>${version}</version>
</dependency>`}
          </code>
        </pre>
            </TabItem>
        </Tabs>
    );
}
