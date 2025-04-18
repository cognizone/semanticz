import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function DependencyTabs({ children }) {
    // Convert children into an array of dependency objects
    const dependencies = React.Children.toArray(children)
        .filter(child => React.isValidElement(child) && child.type === Dependency)
        .map(child => child.props);

    const renderKotlin = () =>
        dependencies.map(dep => `implementation("${dep.groupId}:${dep.artifactId}:${dep.version}")`).join('\n');

    const renderGroovy = () =>
        dependencies.map(dep => `implementation '${dep.groupId}:${dep.artifactId}:${dep.version}'`).join('\n');

    const renderMaven = () =>
        dependencies.map(dep => `<dependency>
  <groupId>${dep.groupId}</groupId>
  <artifactId>${dep.artifactId}</artifactId>
  <version>${dep.version}</version>
</dependency>`).join('\n\n');

    return (
        <Tabs>
            <TabItem value="gradle-kotlin" label="Gradle (Kotlin)" default>
                <pre>
                    <code className="language-kotlin">
                        {renderKotlin()}
                    </code>
                </pre>
            </TabItem>

            <TabItem value="gradle-groovy" label="Gradle (Groovy)">
                <pre>
                    <code className="language-groovy">
                        {renderGroovy()}
                    </code>
                </pre>
            </TabItem>

            <TabItem value="maven" label="Maven">
                <pre>
                    <code className="language-xml">
                        {renderMaven()}
                    </code>
                </pre>
            </TabItem>
        </Tabs>
    );
}

// Stub component so JSX usage like <Dependency ... /> is valid
export function Dependency() {
    return null;
}