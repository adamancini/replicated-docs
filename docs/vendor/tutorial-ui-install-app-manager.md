import VMRequirements from "../partials/getting-started/_vm-requirements.mdx"

# Step 4: Install the App Manager

The app manager can be installed either into an existing Kubernetes cluster, or as a Kubernetes installer provisioned cluster (embedded cluster). You can see the installation options at the bottom of each channel on the Channels page.

For this tutorial, use either installation option:
* [Install in an Existing Cluster](#existing)
* [Install in a Kubernetes Installer Cluster](#kubernetes-installer)

## Install in an Existing Cluster {#existing}

Installing the app manager on existing clusters is similar to using a Kubernetes installer provisioned cluster, except instead of bringing a plain virtual machine (VM), you will use a pre-built Kubernetes cluster and deploy your application into a namespace.

![Installation Methods](/images/guides/kots/installation-methods-existing.png)

To install the app manager:

1. Access the Kubernetes cluster that you created as part of [Set Up the Environment](tutorial-ui-setup#set-up-the-environment).

1. On the cluster, set the local kubectl context.

  For example, to set the local kubectl context on a GKE cluster, run the following command:

  ```shell
  gcloud container clusters get-credentials NAME
  ```
  Where `NAME` is the name of the cluster.

1. Run the following command to install the latest app manager version as a `kubectl` plugin:

  ```shell
  curl https://kots.io/install | bash
  ```

1. Install your application using the kots CLI. For more information about installing an application with the kots CLI, see [install](../reference/kots-cli-install/) in the kots CLI documentation.

  ```shell
  kubectl kots install <your-app-name-and-channel>

  Enter the namespace to deploy to: <your-app-name-and-channel>
    • Deploying Admin Console
      • Creating namespace ✓
      • Waiting for datastore to be ready ✓
  Enter a new password to be used for the Admin Console: ••••••••
    • Waiting for Admin Console to be ready ✓

    • Press Ctrl+C to exit
    • Go to http://localhost:8800 to access the Admin Console
  ```

1. Note the URL and password that you will use to access the Replicated admin console.

## Install in a Kubernetes Installer Cluster {#kubernetes-installer}

The app manager can be installed as a Kubernetes installer provisioned cluster (embedded cluster), which provisions a plain virtual machine (VM).

You can see the installation options at the bottom of each channel on the Channels page. For this tutorial, you can use the Kubernetes installer, or _embedded cluster_, option.

![Installation Methods](/images/guides/kots/installation-methods-embedded.png)

To install the app manager on a VM using the Kubernetes installer:

1. Use SSH to access the VM that you created as part of [Set Up the Environment](tutorial-ui-setup#set-up-the-environment).
1. On the VM, run the installation script:

  ```shell
  curl -sSL https://k8s.kurl.sh/<your-app-name-and-channel> | sudo bash
  ```

  This script installs Docker, Kubernetes, and the Replicated admin console containers (kotsadm).

  Installation takes approximately 5-10 minutes.

  After the installation script completes the initial installation, the output displays the connection URL and password that you must use in a later step of the installation process:

  ```text
  Kotsadm: http://[ip-address]:8800
  Login with password (will not be shown again): [password]
  ```

  :::note
  The login password displayed in the CLI output of the installation command is not shown again. Copy this password so that you can log in to the admin console in a later step of the installation process.
  :::

1. Reload your shell to access the cluster with `kubectl`:

  ```
  bash -l
  ```

1. Run a `kubectl` command to test that `kubectl` is working:

  ```bash
  kubectl get pods
  ```

  **Example output:**

  ```
  NAME                                  READY   STATUS    RESTARTS   AGE
  kotsadm-79dcb4dc7d-2xh85              1/1     Running   0          60m
  kotsadm-postgres-0                    1/1     Running   0          60m
  kurl-proxy-kotsadm-5f7fb75f47-b7jbz   1/1     Running   0          60m
  ```

At this point, Kubernetes and the Replicated admin console are running, but the application is not deployed yet.