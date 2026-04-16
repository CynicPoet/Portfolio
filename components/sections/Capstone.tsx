"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { CheckCircle, BookOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  capstoneMetrics,
  terraformModules,
  testCases,
  findingsTable,
  references,
} from "@/lib/data/capstone";

const BarChartBlock = dynamic(() => import("@/components/ui/CapstoneChart"), {
  ssr: false,
  loading: () => (
    <div style={{ height: "220px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: "14px" }}>
      Loading chart…
    </div>
  ),
});

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "methodology", label: "Methodology" },
  { id: "implementation", label: "Implementation" },
  { id: "results", label: "Results" },
  { id: "testing", label: "Testing" },
  { id: "future", label: "Future Scope" },
];

const pipelineSteps = [
  {
    num: "01",
    icon: "🔍",
    title: "Detection",
    desc: "AWS Security Hub continuously evaluates resources against AWS Foundational Security Best Practices (FSBP), CIS, and PCI DSS standards. Findings are generated for S3, IAM, VPC, and EC2 misconfigurations.",
  },
  {
    num: "02",
    icon: "⚡",
    title: "Event Routing",
    desc: "Amazon EventBridge captures Security Hub findings in real-time and routes them to the Step Functions state machine using pattern-based rules filtered by severity and compliance type.",
  },
  {
    num: "03",
    icon: "🤖",
    title: "AI Triage",
    desc: "Amazon Bedrock (Claude) classifies each finding as Category A (auto-remediate) or Category B (human-in-the-loop alert). The Step Functions orchestrator branches accordingly.",
  },
  {
    num: "04",
    icon: "🔧",
    title: "Remediation",
    desc: "For Cat A findings, Lambda functions invoke SSM Automation runbooks to execute Python/boto3 remediations — blocking S3 public access, deactivating IAM keys, revoking VPC SG rules.",
  },
  {
    num: "05",
    icon: "📊",
    title: "Logging & Feedback",
    desc: "All actions are logged to DynamoDB audit table. Security Hub finding status is updated to RESOLVED. CloudWatch dashboards display real-time MTTR metrics. SNS sends notifications.",
  },
];

const futureRoadmap = [
  {
    icon: "☁️",
    title: "Multi-Cloud Extension",
    desc: "Extend remediation coverage to Azure Security Center and GCP Security Command Center findings.",
  },
  {
    icon: "🧠",
    title: "ML-Based Triage",
    desc: "Train a custom SageMaker model on historical findings data to replace/augment Bedrock triage with fine-tuned predictions.",
  },
  {
    icon: "📈",
    title: "Unified SIEM Dashboard",
    desc: "Integrate with Splunk and IBM QRadar to surface automated remediations in enterprise SOC dashboards.",
  },
  {
    icon: "🔗",
    title: "Threat Intelligence",
    desc: "Pull IOC feeds (Cybersixgill, MISP) to enrich findings with attacker context before triage decisions.",
  },
  {
    icon: "📋",
    title: "Compliance Reporting",
    desc: "Auto-generate SOC 2 / ISO 27001 compliance reports from Security Hub finding resolution history.",
  },
];

export default function Capstone() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section
      id="capstone"
      className="grid-pattern"
      style={{ padding: "100px 24px", background: "var(--bg-primary)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header block */}
        <div
          style={{
            background: "linear-gradient(135deg, var(--navy) 0%, rgba(13,42,90,0.6) 100%)",
            border: "1px solid rgba(196,150,45,0.25)",
            borderRadius: "16px",
            padding: "clamp(24px, 4vw, 40px)",
            marginBottom: "48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(rgba(196,150,45,0.06) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div style={{ position: "relative" }}>
            <span className="badge-gold" style={{ marginBottom: "16px", display: "inline-flex" }}>
              Capstone Project 2025–26
            </span>
            <h2
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 800,
                fontSize: "clamp(1.3rem, 3vw, 2rem)",
                color: "var(--text-primary)",
                lineHeight: 1.3,
                marginBottom: "14px",
              }}
            >
              Automated Cloud Security Response System on AWS
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
              B.Tech Computer Engineering · MIT Academy of Engineering, Pune · Batch 2022–2026
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                fontSize: "13px",
                color: "var(--text-secondary)",
              }}
            >
              <span>
                <span style={{ color: "var(--accent-gold)", fontWeight: 600 }}>Guide:</span>{" "}
                Mrs. Mayura Kulkarni
              </span>
              <span>
                <span style={{ color: "var(--accent-gold)", fontWeight: 600 }}>Student:</span>{" "}
                Shivam Pokharkar
              </span>
              <span>
                <span style={{ color: "var(--accent-gold)", fontWeight: 600 }}>PRN:</span>{" "}
                202201040078
              </span>
            </div>
          </div>
        </div>

        <SectionHeading label="Research Project" title="Deep Dive" />

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "32px",
            marginBottom: "40px",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              aria-pressed={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "methodology" && <MethodologyTab />}
          {activeTab === "implementation" && <ImplementationTab />}
          {activeTab === "results" && <ResultsTab />}
          {activeTab === "testing" && <TestingTab />}
          {activeTab === "future" && <FutureTab />}
        </motion.div>

        {/* Bottom: GitHub + References */}
        <div
          style={{
            marginTop: "64px",
            paddingTop: "40px",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}>
            <a
              href="https://github.com/CynicPoet"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              aria-label="View capstone on GitHub"
            >
              <FaGithub size={16} /> View on GitHub
            </a>
          </div>

          <h4
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 700,
              color: "var(--text-primary)",
              fontSize: "1rem",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <BookOpen size={16} style={{ color: "var(--accent-gold)" }} />
            References
          </h4>
          <ol
            style={{
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {references.map((ref, i) => (
              <li
                key={i}
                style={{
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  fontFamily: "var(--font-mono)",
                }}
              >
                {ref}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function OverviewTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      <div className="card-glass" style={{ borderRadius: "14px", padding: "28px" }}>
        <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--accent-gold)", fontSize: "1rem", marginBottom: "14px" }}>
          Abstract
        </h3>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "14px" }}>
          This capstone project designs and implements an <strong style={{ color: "var(--text-primary)" }}>Automated Cloud Security Response System on AWS</strong> that leverages event-driven architecture to detect, classify, and remediate cloud security misconfigurations without human intervention. The system integrates AWS Security Hub, Amazon EventBridge, AWS Step Functions, Amazon Bedrock (AI), AWS Lambda, and SSM Automation to achieve a fully autonomous security remediation pipeline — reducing Mean Time to Remediate (MTTR) from ~100 minutes to ~20 seconds (88% reduction) at a monthly cost of $0.02.
        </p>
      </div>

      <div className="card-glass" style={{ borderRadius: "14px", padding: "28px" }}>
        <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--accent-gold)", fontSize: "1rem", marginBottom: "14px" }}>
          Problem Statement
        </h3>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "14px" }}>
          Cloud environments generate hundreds of security findings daily. Manual remediation by SOC analysts is slow, error-prone, and costly. Organizations using AWS Security Hub face a critical bottleneck: findings accumulate faster than teams can act on them, expanding the attack surface window. This project solves the remediation latency problem for high-frequency, well-defined cloud misconfigurations (S3 public access, IAM key violations, VPC security group misconfigurations) through full automation with AI-guided triage.
        </p>
      </div>

      <div className="card-glass" style={{ borderRadius: "14px", padding: "28px" }}>
        <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--accent-gold)", fontSize: "1rem", marginBottom: "14px" }}>
          Research Motivation
        </h3>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            "IBM Cost of a Data Breach Report 2023: Average breach cost $4.45M — 60% of breaches involve cloud misconfigurations that went unaddressed.",
            "Verizon DBIR 2023: Human error accounts for 74% of breaches — automated remediation directly eliminates this vector.",
            "Manual SOC remediation of a single S3 misconfiguration takes 45–120 minutes across ticket-create, assign, review, and execute stages.",
            "AWS Security Hub generates 30–200+ findings/day in typical enterprise environments — manual workflows are structurally incapable of keeping pace.",
          ].map((point, i) => (
            <li key={i} style={{ display: "flex", gap: "12px", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65 }}>
              <span style={{ color: "var(--accent-gold)", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>{i + 1}.</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MethodologyTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.8, marginBottom: "8px" }}>
        The system operates as a 5-stage automated pipeline triggered by Security Hub findings in real time.
      </p>
      {pipelineSteps.map((step, i) => (
        <div
          key={step.num}
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          {/* Connector line */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "var(--accent-gold-muted)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                flexShrink: 0,
              }}
            >
              {step.icon}
            </div>
            {i < pipelineSteps.length - 1 && (
              <div
                aria-hidden="true"
                style={{
                  width: "2px",
                  height: "32px",
                  background: "linear-gradient(to bottom, var(--accent-gold), transparent)",
                  margin: "4px 0",
                }}
              />
            )}
          </div>
          <div
            className="card-glass"
            style={{ borderRadius: "12px", padding: "20px", flex: 1 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-gold)", letterSpacing: "0.1em" }}>
                STEP {step.num}
              </span>
              <h4 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                {step.title}
              </h4>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ImplementationTab() {
  const layers = [
    { layer: "Detection", service: "AWS Security Hub (FSBP, CIS, PCI DSS)" },
    { layer: "Event Routing", service: "Amazon EventBridge (pattern rules)" },
    { layer: "Orchestration", service: "AWS Step Functions (state machine)" },
    { layer: "AI Triage", service: "Amazon Bedrock — Cat A / Cat B" },
    { layer: "Remediation", service: "AWS Lambda + SSM Automation Runbooks" },
    { layer: "Audit Trail", service: "Amazon DynamoDB" },
    { layer: "Notifications", service: "Amazon SNS (Email / SMS)" },
    { layer: "API", service: "Amazon API Gateway (manual override)" },
    { layer: "Observability", service: "CloudWatch Dashboards + Alarms" },
    { layer: "IaC", service: "Terraform (14 modules) + Checkov CI scan" },
    { layer: "CI/CD", service: "GitHub Actions pipeline" },
    { layer: "Frontend", service: "React dashboard (S3 + CloudFront)" },
  ];

  const codeSnippets = [
    {
      title: "S3 Public Access Block — Lambda Remediation",
      code: `def remediate_s3_public_access(bucket_name: str) -> dict:
    s3 = boto3.client("s3")
    s3.put_public_access_block(
        Bucket=bucket_name,
        PublicAccessBlockConfiguration={
            "BlockPublicAcls": True,
            "IgnorePublicAcls": True,
            "BlockPublicPolicy": True,
            "RestrictPublicBuckets": True,
        },
    )
    return {"status": "RESOLVED", "bucket": bucket_name}`,
    },
    {
      title: "IAM Root Key Deactivation — SSM Runbook",
      code: `def deactivate_root_access_key(key_id: str) -> dict:
    iam = boto3.client("iam")
    iam.update_access_key(
        AccessKeyId=key_id,
        Status="Inactive",
        UserName="root",
    )
    send_sns_alert(f"Root key {key_id} deactivated")
    return {"status": "RESOLVED", "key_id": key_id}`,
    },
    {
      title: "VPC Default SG — Revoke All Rules",
      code: `def remediate_vpc_default_sg(sg_id: str) -> dict:
    ec2 = boto3.client("ec2")
    sg = ec2.describe_security_groups(GroupIds=[sg_id])
    for rule in sg["SecurityGroups"][0]["IpPermissions"]:
        ec2.revoke_security_group_ingress(
            GroupId=sg_id, IpPermissions=[rule]
        )
    return {"status": "RESOLVED", "sg_id": sg_id}`,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {/* Stack table */}
      <div className="card-glass" style={{ borderRadius: "14px", overflow: "hidden" }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border-subtle)" }}>
          <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--accent-gold)", fontSize: "0.95rem" }}>
            Technology Stack (Layer → Service)
          </h3>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <thead>
              <tr style={{ background: "rgba(196,150,45,0.06)" }}>
                <th style={{ padding: "12px 20px", textAlign: "left", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.08em", fontSize: "11px", textTransform: "uppercase", whiteSpace: "nowrap" }}>Layer</th>
                <th style={{ padding: "12px 20px", textAlign: "left", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.08em", fontSize: "11px", textTransform: "uppercase" }}>Service / Tool</th>
              </tr>
            </thead>
            <tbody>
              {layers.map((row, i) => (
                <tr key={row.layer} style={{ borderTop: "1px solid var(--border-subtle)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                  <td style={{ padding: "12px 20px", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", fontWeight: 500, whiteSpace: "nowrap" }}>{row.layer}</td>
                  <td style={{ padding: "12px 20px", color: "var(--text-secondary)" }}>{row.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Terraform modules */}
      <div className="card-glass" style={{ borderRadius: "14px", padding: "24px" }}>
        <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--accent-gold)", fontSize: "0.95rem", marginBottom: "18px" }}>
          14 Terraform Modules
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px" }}>
          {terraformModules.map((mod) => (
            <div
              key={mod.name}
              style={{
                background: "rgba(0,0,0,0.3)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "8px",
                padding: "12px",
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-gold)", marginBottom: "6px" }}>
                {mod.name}
              </div>
              <div style={{ fontSize: "11px", color: "var(--text-muted)", lineHeight: 1.5 }}>
                {mod.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code snippets */}
      {codeSnippets.map((snippet) => (
        <div key={snippet.title}>
          <h4 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, color: "var(--text-primary)", fontSize: "0.9rem", marginBottom: "10px" }}>
            {snippet.title}
          </h4>
          <pre className="code-block">
            <code>{snippet.code}</code>
          </pre>
        </div>
      ))}
    </div>
  );
}

function ResultsTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {/* Metrics */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
        }}
        className="lg:grid-cols-4"
      >
        {capstoneMetrics.map((m) => (
          <div key={m.label} className="metric-card">
            <div style={{ fontFamily: "var(--font-sora)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "var(--accent-gold)", marginBottom: "8px" }}>
              {m.value}
            </div>
            <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "14px", marginBottom: "6px" }}>
              {m.label}
            </div>
            <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{m.subtext}</div>
          </div>
        ))}
      </div>

      {/* MTTR chart */}
      <div className="card-glass" style={{ borderRadius: "14px", padding: "24px" }}>
        <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--accent-gold)", fontSize: "0.95rem", marginBottom: "20px" }}>
          MTTR Comparison: Manual vs Automated (minutes)
        </h3>
        <BarChartBlock />
      </div>

      {/* Findings table */}
      <div className="card-glass" style={{ borderRadius: "14px", overflow: "hidden" }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border-subtle)" }}>
          <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--accent-gold)", fontSize: "0.95rem" }}>
            Remediation Results by Category
          </h3>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <thead>
              <tr style={{ background: "rgba(196,150,45,0.06)" }}>
                {["Category", "Total Findings", "Auto-Remediated", "Accuracy"].map((h) => (
                  <th key={h} style={{ padding: "12px 20px", textAlign: "left", color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.08em", fontSize: "11px", textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {findingsTable.map((row) => (
                <tr key={row.category} style={{ borderTop: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "12px 20px", color: "var(--text-primary)", fontWeight: 500 }}>{row.category}</td>
                  <td style={{ padding: "12px 20px", color: "var(--text-secondary)" }}>{row.count}</td>
                  <td style={{ padding: "12px 20px", color: "var(--text-secondary)" }}>{row.automated}</td>
                  <td style={{ padding: "12px 20px" }}>
                    <span className="badge-green">{row.accuracy}</span>
                  </td>
                </tr>
              ))}
              <tr style={{ borderTop: "2px solid var(--border)" }}>
                <td style={{ padding: "12px 20px", color: "var(--accent-gold)", fontWeight: 700 }}>Total</td>
                <td style={{ padding: "12px 20px", color: "var(--accent-gold)", fontWeight: 700 }}>45</td>
                <td style={{ padding: "12px 20px", color: "var(--accent-gold)", fontWeight: 700 }}>45</td>
                <td style={{ padding: "12px 20px" }}><span className="badge-green">100%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function TestingTab() {
  const testingTypes = [
    "Unit Testing — individual Lambda functions with mocked boto3 calls",
    "Integration Testing — end-to-end Step Functions execution on real AWS environment",
    "Security Testing — Checkov static IaC analysis in CI pipeline",
    "Performance Testing — measuring MTTR across 45 findings under load",
    "Regression Testing — verifying Security Hub status updates post-remediation",
    "Reliability Testing — Step Functions retry logic and error handling for partial failures",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      {/* Testing types */}
      <div className="card-glass" style={{ borderRadius: "14px", padding: "24px" }}>
        <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--accent-gold)", fontSize: "0.95rem", marginBottom: "16px" }}>
          Testing Strategy (6 Types)
        </h3>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          {testingTypes.map((t, i) => (
            <li key={i} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65 }}>
              <CheckCircle size={14} style={{ color: "var(--success)", flexShrink: 0, marginTop: "3px" }} />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Test cases table */}
      <div className="card-glass" style={{ borderRadius: "14px", overflow: "hidden" }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border-subtle)" }}>
          <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--accent-gold)", fontSize: "0.95rem" }}>
            Test Cases (10/10 Pass)
          </h3>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
            <thead>
              <tr style={{ background: "rgba(196,150,45,0.06)" }}>
                {["ID", "Scenario", "Input", "Expected", "Result"].map((h) => (
                  <th key={h} style={{ padding: "10px 16px", textAlign: "left", color: "var(--text-muted)", fontWeight: 600, fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {testCases.map((tc, i) => (
                <tr key={tc.id} style={{ borderTop: "1px solid var(--border-subtle)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                  <td style={{ padding: "10px 16px", fontFamily: "var(--font-mono)", color: "var(--accent-cyan)", whiteSpace: "nowrap" }}>{tc.id}</td>
                  <td style={{ padding: "10px 16px", color: "var(--text-primary)", fontWeight: 500, minWidth: "140px" }}>{tc.scenario}</td>
                  <td style={{ padding: "10px 16px", color: "var(--text-secondary)", minWidth: "160px" }}>{tc.input}</td>
                  <td style={{ padding: "10px 16px", color: "var(--text-secondary)", minWidth: "180px" }}>{tc.expected}</td>
                  <td style={{ padding: "10px 16px", whiteSpace: "nowrap" }}>
                    <span className="badge-green">✓ {tc.result}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function FutureTab() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.8 }}>
        The current system handles AWS S3, IAM, and VPC remediations. The following roadmap items represent planned extensions to increase scope, intelligence, and coverage.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "16px",
        }}
        className="sm:grid-cols-2 lg:grid-cols-3"
      >
        {futureRoadmap.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="card-glass"
            style={{ borderRadius: "12px", padding: "24px" }}
          >
            <div style={{ fontSize: "28px", marginBottom: "12px" }}>{item.icon}</div>
            <h4 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--accent-gold)", fontSize: "0.9rem", marginBottom: "10px" }}>
              {item.title}
            </h4>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.65 }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
