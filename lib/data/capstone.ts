export interface CapstoneMetric {
  label: string;
  value: string;
  subtext: string;
  before?: string;
  after?: string;
}

export interface TerraformModule {
  name: string;
  description: string;
}

export interface TestCase {
  id: string;
  scenario: string;
  input: string;
  expected: string;
  result: "Pass";
}

export interface FindingRow {
  category: string;
  count: number;
  automated: number;
  accuracy: string;
}

export const capstoneMetrics: CapstoneMetric[] = [
  {
    label: "MTTR Reduction",
    value: "88%",
    subtext: "100 min → ~20 seconds",
    before: "~100 min",
    after: "~20 sec",
  },
  {
    label: "Monthly AWS Cost",
    value: "$0.02",
    subtext: "Serverless architecture",
  },
  {
    label: "Remediation Accuracy",
    value: "100%",
    subtext: "45 of 45 findings resolved",
  },
  {
    label: "Terraform Modules",
    value: "14",
    subtext: "Fully automated IaC deployment",
  },
];

export const terraformModules: TerraformModule[] = [
  { name: "security_hub", description: "Enables & configures AWS Security Hub standards" },
  { name: "eventbridge", description: "Routes Security Hub findings to Step Functions" },
  { name: "step_functions", description: "Orchestrates AI triage and remediation workflow" },
  { name: "bedrock_integration", description: "Amazon Bedrock AI triage Lambda configuration" },
  { name: "lambda_remediator", description: "Auto-remediation Lambda functions (S3/IAM/VPC)" },
  { name: "ssm_runbooks", description: "SSM Automation documents for remediation actions" },
  { name: "dynamodb_audit", description: "Audit trail table for all remediation actions" },
  { name: "sns_notifications", description: "Email/SMS alerts on Cat A and Cat B findings" },
  { name: "api_gateway", description: "REST API for manual override and status queries" },
  { name: "cloudwatch_dashboards", description: "Real-time metrics and alarm dashboards" },
  { name: "iam_roles", description: "Least-privilege IAM roles for all Lambda functions" },
  { name: "checkov_pipeline", description: "GitHub Actions CI with Checkov IaC scanning" },
  { name: "react_dashboard", description: "Frontend dashboard CloudFront + S3 hosting" },
  { name: "vpc_config", description: "VPC, subnets, security groups for Lambda execution" },
];

export const testCases: TestCase[] = [
  {
    id: "TC-001",
    scenario: "S3 Public Access Block",
    input: "S3 bucket with public ACL enabled",
    expected: "Block all public access enabled automatically",
    result: "Pass",
  },
  {
    id: "TC-002",
    scenario: "IAM Root Key Deactivation",
    input: "Active root account access key detected",
    expected: "Key deactivated + SNS alert sent",
    result: "Pass",
  },
  {
    id: "TC-003",
    scenario: "VPC Default Security Group",
    input: "VPC default SG with open 0.0.0.0/0 ingress",
    expected: "All rules revoked from default SG",
    result: "Pass",
  },
  {
    id: "TC-004",
    scenario: "AI Triage — Cat A Finding",
    input: "CRITICAL S3 finding sent to Bedrock",
    expected: "Bedrock classifies as Cat A; auto-remediation triggered",
    result: "Pass",
  },
  {
    id: "TC-005",
    scenario: "AI Triage — Cat B Finding",
    input: "LOW IAM finding sent to Bedrock",
    expected: "Bedrock classifies as Cat B; SNS alert, no auto-action",
    result: "Pass",
  },
  {
    id: "TC-006",
    scenario: "Step Functions Orchestration",
    input: "EventBridge event triggers state machine",
    expected: "All states execute: Triage → Remediate → Log → Update",
    result: "Pass",
  },
  {
    id: "TC-007",
    scenario: "DynamoDB Audit Trail",
    input: "Remediation action executed",
    expected: "Audit record written with timestamp, finding ID, action taken",
    result: "Pass",
  },
  {
    id: "TC-008",
    scenario: "Security Hub Status Update",
    input: "Lambda remediation completes",
    expected: "Finding status updated to RESOLVED in Security Hub",
    result: "Pass",
  },
  {
    id: "TC-009",
    scenario: "Checkov IaC Scan",
    input: "Terraform code pushed to GitHub",
    expected: "GitHub Actions runs Checkov; misconfigured IaC blocked",
    result: "Pass",
  },
  {
    id: "TC-010",
    scenario: "API Gateway Manual Override",
    input: "POST /override with finding ID",
    expected: "Manual remediation triggered; DynamoDB log updated",
    result: "Pass",
  },
];

export const findingsTable: FindingRow[] = [
  { category: "S3 Misconfiguration", count: 15, automated: 15, accuracy: "100%" },
  { category: "IAM Policy Violation", count: 12, automated: 12, accuracy: "100%" },
  { category: "VPC Security Group", count: 10, automated: 10, accuracy: "100%" },
  { category: "Cat B (Alert Only)", count: 8, automated: 8, accuracy: "100%" },
];

export const references: string[] = [
  "Verizon (2023). Data Breach Investigations Report. https://www.verizon.com/business/resources/reports/dbir/",
  "IBM Security (2023). Cost of a Data Breach Report. https://www.ibm.com/security/data-breach",
  "Amazon Web Services. AWS Security Hub Developer Guide. https://docs.aws.amazon.com/securityhub/",
  "Amazon Web Services. AWS Step Functions Developer Guide. https://docs.aws.amazon.com/step-functions/",
  "Amazon Web Services. Amazon Bedrock User Guide. https://docs.aws.amazon.com/bedrock/",
  "HashiCorp. Terraform Documentation — AWS Provider. https://registry.terraform.io/providers/hashicorp/aws/",
  "Bridgecrew. Checkov Open Source IaC Scanner. https://www.checkov.io/",
  "NIST. Framework for Improving Critical Infrastructure Cybersecurity. https://www.nist.gov/cyberframework",
  "MITRE ATT&CK. Cloud Matrix. https://attack.mitre.org/matrices/enterprise/cloud/",
];
