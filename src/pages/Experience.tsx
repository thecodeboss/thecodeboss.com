import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <main>
      <h2>Skills</h2>
      <p>
        If you're looking for a more detailed list of my skills, here's a list.
        They aren't ordered by profiency, so if you have questions about
        specific projects/experience with these technologies,{" "}
        <Link className="underline" to="/contact">
          contact me
        </Link>
        .
      </p>
      <p>
        Kubernetes, Helm, Pulumi, Docker, AWS, TypeScript/JavaScript, C/C++,
        Python, Rust, Elixir, React/React Native, GraphQL, Elasticsearch, Redis,
        PostgreSQL, HTML/CSS, CI/CD React, Next.js, Express, Lodash, Zod, Ant
        Design, Prisma, Moment.js, Styled Components, Webpack, Storybook,
        Cypress, SWC, Jest, Husky, Datadog, Sentry, PagerDuty, Sendgrid, Apache
        Superset, LaunchDarkly, CircleCI, GitHub, Depot, Figma, Retool,
        Spinnaker, Apache Thrift, Azure Document Intelligence, Windows/Linux/Mac
      </p>
      <h2>AWS</h2>
      <p>
        Since AWS in particular is such a broad category, here are specific AWS
        products I've worked with:
      </p>
      <p>
        S3, EC2 (Instances, Load Balancers, Security Groups, EBS Volumes, Custom
        AMIs), RDS (Aurora, PostgreSQL), Lambda, API Gateway, CloudFront,
        CloudWatch, Route 53, IAM, Cognito, SES, SQS, DynamoDB, Elastic
        Beanstalk, ECR, EKS, ECS, Fargate, Secrets Manager, WAF, CloudTrail,
        Amplify, VPCs/Subnets, OpenSearch/Elasticsearch, ElastiCache (Redis),
        Glue, Athena, Redshift, Certificate Manager
      </p>
      <h2>Experience</h2>
      <p>Kojo Jan 2019 - Current</p>
      <p>Pinterest Jan 2017 - Jan 2019</p>
      <p>Facebook (Intern) Sep 2015 - Dec 2015</p>
      <p>Pinterest (Intern) May 2015 - Sep 2015</p>
      <p>LinkedIn (Intern) Aug 2014 - Dec 2015</p>
      <p>The Coalition (Microsoft Game Studios) (Intern) Jan 2014 - Apr 2014</p>
      <p>The Coalition (Microsoft Game Studios) (Intern) May 2013 - Aug 2013</p>
      <h2>Education</h2>
      <p>
        Bachelor of Mathematics, Computer Science and Applied Mathematics, with
        Physics Minor University of Waterloo, Canada 2011-2016
      </p>
    </main>
  );
}
