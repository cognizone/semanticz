import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Tested and Documented',
        Svg: require('@site/static/img/undraw_certification_i2m0.svg').default,
        description: (
            <>
                SemantiCZ is a set of lean, tested and documented open-source libraries and tools to speed up your
                semantic web projects.
            </>
        ),
    },
    {
        title: 'Production-ready',
        Svg: require('@site/static/img/undraw_factory_4d61.svg').default,
        description: (
            <>
                SemantiCZ has been used in commercial applications and projects.
            </>
        ),
    },
    {
        title: 'Powered by Java, Spring and Jena',
        Svg: require('@site/static/img/undraw_programming_65t2.svg').default,
        description: (
            <>
                SemantiCZ builds on proven technologies, like Java, Spring and Jena.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
