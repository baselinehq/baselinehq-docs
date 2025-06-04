---
sidebar_position: 1
title: CostGraph Operator
---

# v0.1.0 (Jun 3, 2025)
- Deployment of a new pricing infrastructure bringing improved operator performance with lower latency 
- Updates to the savings dashboard to show more than 5 entries previously causing customers to miss relatively smaller container resources
- Improved pricing updates supporting newer cloud instance types and various usage types such as spot and reserved
- Addition of per-CPU and per-Memory pricing for all cloud providers improving the Cost Driver dashboard experience
- Support for newer GCP instance types and their upcoming Sweden region release
- Addition of liveness and readiness probe endpoints for customer visibility on failed instance deployments
- Hotfix for GCP custom instance types deviating from standard pricing obtained from cloud providers
- Hotfix for AZ based AWS spot pricing on Opt-In regions 
- Support for all regional DigitalOcean pricing information providing customers more value for this provider
- Future support for resource pricing updates in Storage, Network, GPUs and related resource types


# v0.0.1 (Mar 5, 2025)
- Initial release
- Supported all major kubernetes cloud providers such as AWS, GCP, Azure
- Dashboards iterations with customers for their internal use cases
- API key support for multiple clusters within a single account
- RBAC and invitation support for organizations
- Clusters can now be viewed on the parent dashboard

