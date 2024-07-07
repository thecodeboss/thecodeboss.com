import { Link } from "react-router-dom";

import Experience from "@/components/Experience";
import { educationExperiences, workExperiences } from "@/constants";

export default function ExperiencePage() {
  return (
    <main>
      <h2>Work Experience</h2>
      <Experience experiences={workExperiences} />
      <h2>Skills</h2>
      <p>
        If you're looking for a detailed list of my skills, here's a list. They
        aren't ordered by profiency, so if you have questions about specific
        projects/experience with these technologies,{" "}
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
      <h2>Education</h2>
      <Experience experiences={educationExperiences} />
    </main>
  );
}
