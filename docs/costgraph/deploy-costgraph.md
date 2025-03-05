---
sidebar_position: 2
---

# Deploy Costgraph

Get started on running Costgraph on your infrastructure.


## Dependencies

### prometheus / kube-state-metrics

If you do not have prometheus-server installed on your cluster, you can use the installation guide below:

```shell
helm repo add prometheus-community https //prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/prometheus --namespace prometheus-system --create-namespace
kubectl wait --for=condition=available --timeout=10m -n prometheus-system deploy/prometheus-server
```

### Obtain an API Key

To run the costgraph operator, you must create an account on [costgraph.baselinehq.cloud](https://costgraph.baselinehq.cloud/) to obtain an API key.  

### Helm configuration 
In deploying the costgraph operator, the charts are available in the GitHub repository [costgraph-charts](https://github.com/BaselineHQ/costgraph-charts)

Run the helm command below to import the charts into the repository to begin deploying the operator.

```shell
helm repo add costgraph https://baselinehq.github.io/costgraph-charts/
helm repo update
```


## Configuration

### Costgraph
Create a configuration file with the helm updates that are required in deploying the package

```yaml
domain: <your-company-subdomain>
costgraph:
  config:
    costgraph_instance_name: <instance_name>
    expected_utilisation_percent: 75
    prometheus_endpoint: <prometheus-address>
    fortknox_organisation_api_key: <your-api-key>
```

If you have an existing costgraph instance, you can configure replication to that cost center by appending the configuration.

:::tip[Using Multiple Cost Centers]

You can append multiple clusters to the configuration, this is the `costgraph_instance_name` of the instance you want to view costs from.

:::


```yaml
costgraph:
  config:
    costgraph_instance_master_domains:
      - name: "<cluster-to-replicate-to>"
```

### Superset
To configure the superset credentials, update the configuration for the superset setting.

```yaml
costgraph:
  config:
    superset_admin_username: admin
    superset_admin_password: admin
```

### Postgres
If you want to use an existing database instance, add in this configuration

```yaml
postgres:
  enabled: false
  config:
    postgres_db: postgres
    postgres_user: username
    postgres_password: password
    pg_data_directory: /var/lib/postgresql/data
    postgres_host: db_hostname
    postgres_port: db_port
```

## Deployment
Finally deploy the configuration with the updated settings for your costgraph instance 

```shell
helm install costgraph costgraph/costgraph -f <values-file>
```

Once deployed, data will be available on the instance in 5 minutes and you can visit the service on the following domains:

:::tip[Superset Credentials]

Unless modified, the username and password for the superset instance is `admin` and `admin`

:::

- costgraph.$domain




