/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

// @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'intro',
    'intro-replicated',

    {
      type: 'category',
      label: 'Vendor',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Getting started',
          items: [
            'vendor/getting-started-how-to-use-replicated',
            'vendor/getting-started-creating-vendor-account',
          ],
        },
        {
          type: 'category',
          label: 'Planning your deployment',
          items: [
            'vendor/packaging-planning-checklist',
            'vendor/planning-questionnaire',
            'vendor/packaging-an-app',
            'vendor/packaging-private-images',
            'vendor/packaging-custom-resources',
            'vendor/packaging-template-functions',
            'vendor/packaging-include-resources',
            'vendor/packaging-ingress',
            'vendor/packaging-using-tls-certs',
            'vendor/packaging-cleaning-up-jobs',
            'vendor/packaging-rbac',
            'vendor/identity-service-configuring',
            {
                type: 'category',
                label: 'Snapshots',
                items: [
                  'vendor/snapshots-overview',
                  'vendor/snapshots-configuring-backups',
                  'vendor/snapshots-backup-hooks',
              ],
            },
            'vendor/preflight-support-bundle-creating',
            {
              type: 'category',
              label: 'Customizing the admin console and download portal',
              items: [
                'vendor/admin-console-customize-app-icon',
                'vendor/admin-console-display-app-status',
                'vendor/admin-console-adding-buttons-links',
                'vendor/admin-console-prometheus-monitoring',
                'vendor/admin-console-customize-config-screen',
              ],
            },
            {
              type: 'category',
              label: 'Packaging an application using Helm charts',
              items: [
                'vendor/helm-overview',
                'vendor/helm-chart-components',
                'vendor/helm-applications',
                'vendor/helm-optional-charts',
                'vendor/helm-optional-value-keys',
                'vendor/helm-airgap-builder',
                'vendor/helm-installing-native-helm',
                'vendor/helm-native-helm-install-order',
                'vendor/helm-installing-replicated-helm',
                'vendor/helm-processing',
                'vendor/helm-mapping-example',
              ],
            },
            {
              type: 'category',
              label: 'Packaging a Kubernetes Operator application',
              items: [
                'vendor/operator-packaging-about',
                'vendor/operator-defining-additional-images',
                'vendor/operator-referencing-images',
                'vendor/operator-defining-additional-namespaces',
              ],
            },
            'vendor/packaging-embedded-kubernetes',
            ],
          },
        {
          type: 'category',
          label: 'Distributing Your Application',
          items: [
            'vendor/releases-workflow',
            {
              type: 'category',
              label: 'Creating and managing channels',
              items: [
                'vendor/releases-creating-channels',
                'vendor/releases-about-channels',
              ],
            },
            {
              type: 'category',
              label: 'Creating and managing releases',
              items: [
                'vendor/releases-understanding',
                'vendor/releases-creating-releases',
                'vendor/releases-promoting',
                'vendor/releases-updating',
              ],
            },
            {
              type: 'category',
              label: 'Creating a customer',
              items: [
                'vendor/releases-creating-customer',
                'vendor/licenses-about',
                'vendor/licenses-about-types',
                'vendor/licenses-using-builtin-fields',
                'vendor/licenses-adding-custom-fields',
                'vendor/licenses-referencing-fields',
              ],
            },

            'vendor/releases-sharing-license-install-script',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'vendor/tutorial-installing-without-existing-cluster',
            'vendor/tutorial-installing-with-existing-cluster',
            'vendor/tutorial-installing-with-cli',
            'vendor/tutorial-installing-air-gap',
            'vendor/tutorial-installing-air-gap-existing-cluster-gcp',
            'vendor/tutorial-ecr-private-images',
            'vendor/tutorial-ha-cluster-deploying',
            'vendor/tutorial-ci-cd-integration',
            'vendor/tutorial-adding-db-config',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Enterprise',
      items: [
        {
          type: 'category',
          label: 'Installing an application',
          items: [
            'enterprise/installing-overview',
            'enterprise/installing-general-requirements',
            'enterprise/installing-stateful-component-requirements',
            {
              type: 'category',
              label: 'Installing on an existing cluster',
              items: [
                'enterprise/installing-existing-cluster-requirements',
                'enterprise/installing-existing-cluster-online',
                'enterprise/installing-existing-cluster-airgapped',
                'enterprise/installing-existing-cluster-automation',
              ],
            },
            {
              type: 'category',
              label: 'Installing without an existing cluster',
              items: [
                'enterprise/installing-embedded-cluster-requirements',
                'enterprise/installing-embedded-cluster',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Using self-hosted image registries',
          items: [
            'enterprise/image-registry-airgap',
            'enterprise/image-registry-embedded-cluster',
            'enterprise/image-registry-rate-limits',
          ],
        },
        {
          type: 'category',
          label: 'Updating',
          items: [
            'enterprise/updating-apps',
            'enterprise/updating-existing-cluster',
            'enterprise/updating-embedded-cluster',
            'enterprise/updating-patching-with-kustomize',
            'enterprise/updating-licenses',
          ],
        },
        {
          type: 'category',
          label: 'GitOps',
          items: [
            'enterprise/gitops-single-app-workflow',
            'enterprise/gitops-multi-app-workflow',
            'enterprise/gitops-managing-secrets',
          ],
        },
        {
          type: 'category',
          label: 'Managing user access',
          items: [
            'enterprise/auth-identity-provider',
            'enterprise/auth-configuring-rbac',
          ],
        },
        {
          type: 'doc',
          id: 'enterprise/monitoring-applications'
        },
        {
          type: 'category',
          label: 'Snapshots',
          items: [
            'enterprise/snapshots-understanding',
            'enterprise/snapshots-storage-destinations',
            'enterprise/snapshots-configuring-nfs',
            'enterprise/snapshots-configuring-hostpath',
            'enterprise/snapshots-scheduling',
            'enterprise/snapshots-restoring-full',
            'enterprise/snapshots-restoring-partial',
            'enterprise/snapshots-troubleshooting-backup-restore',
          ],
        },
        {
          type: 'doc',
          id: 'enterprise/troubleshooting-an-app'
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'category',
          label: 'Custom resources',
          items: [
            'reference/custom-resource-about',
            'reference/custom-resource-application',
            'reference/custom-resource-config',
            'reference/custom-resource-preflight',
            'reference/custom-resource-redactor',
            'reference/custom-resource-support-bundle',
            'reference/custom-resource-sig-application',
            'reference/custom-resource-helmchart',
            'reference/custom-resource-backup',
            'reference/custom-resource-identity',
          ],
        },
        {
          type: 'category',
          label: 'Template functions',
          items: [
            'reference/template-functions-about',
            'reference/template-functions-static-context',
            'reference/template-functions-config-context',
            'reference/template-functions-kurl-context',
            'reference/template-functions-license-context',
            'reference/template-functions-identity-context',
          ],
        },
        {
          type: 'category',
          label: 'kots CLI',
          items: [
            'reference/kots-cli-getting-started',
            'reference/kots-cli-global-flags',
            {
                type: 'category',
                label: 'admin console',
                items: [
                  'reference/kots-cli-admin-console-index',
                  'reference/kots-cli-admin-console-upgrade',
                  'reference/kots-cli-admin-console-push-images',
                  'reference/kots-cli-admin-console-garbage-collect-images',
                  'reference/kots-cli-admin-console-generate-manifests',
              ],
            },
            'reference/kots-cli-install',
            'reference/kots-cli-pull',
            'reference/kots-cli-remove',
            'reference/kots-cli-download',
            'reference/kots-cli-upload',
            'reference/kots-cli-reset-tls',
            'reference/kots-cli-reset-password',
            'reference/kots-cli-upstream',
            {
                type: 'category',
                label: 'get',
                items: [
                  'reference/kots-cli-get-index',
                  'reference/kots-cli-get-apps',
                  'reference/kots-cli-get-backups',
                  'reference/kots-cli-get-config',
                  'reference/kots-cli-get-versions',
                  'reference/kots-cli-get-restores',
              ],
            },
            {
                type: 'category',
                label: 'set',
                items: [
                  'reference/kots-cli-set-index',
                  'reference/kots-cli-set-config',
              ],
            },
            {
                type: 'category',
                label: 'backup',
                items: [
                  'reference/kots-cli-backup-index',
                  'reference/kots-cli-backup-ls',
              ],
            },
            {
                type: 'category',
                label: 'restore',
                items: [
                  'reference/kots-cli-restore-index',
                  'reference/kots-cli-restore-ls',
              ],
            },
            {
                type: 'category',
                label: 'velero',
                items: [
                  'reference/kots-cli-velero-index',
                  'reference/kots-cli-velero-configure-aws-s3',
                  'reference/kots-cli-velero-configure-azure',
                  'reference/kots-cli-velero-configure-gcp',
                  'reference/kots-cli-velero-configure-internal',
                  'reference/kots-cli-velero-configure-other-s3',
                  'reference/kots-cli-velero-configure-nfs',
                  'reference/kots-cli-velero-configure-hostpath',
                  'reference/kots-cli-velero-print-fs-instructions',
                  'reference/kots-cli-velero-ensure-permissions',
              ],
            },
            {
                type: 'category',
                label: 'identity-service',
                items: [
                  'reference/kots-cli-identity-service-index',
                  'reference/kots-cli-identity-service-enable-shared-password',
              ],
            },
            {
                type: 'category',
                label: 'docker',
                items: [
                  'reference/kots-cli-docker-index',
                  'reference/kots-cli-docker-ensure-secret',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'replicated CLI',
          items: [
            'reference/replicated-cli-installing',
            'reference/replicated-cli-tokens',
            'reference/replicated-cli-app-create',
            'reference/replicated-cli-app-delete',
            'reference/replicated-cli-app-ls',
            'reference/replicated-cli-channel-create',
            'reference/replicated-cli-channel-delete',
            'reference/replicated-cli-channel-inspect',
            'reference/replicated-cli-channel-ls',
            'reference/replicated-cli-customer-create',
            'reference/replicated-cli-customer-download-license',
            'reference/replicated-cli-customer-ls',
            'reference/replicated-cli-installer-create',
            'reference/replicated-cli-installer-ls',
            'reference/replicated-cli-release-create',
            'reference/replicated-cli-release-download',
            'reference/replicated-cli-release-lint',
            'reference/replicated-cli-release-ls',
            'reference/replicated-cli-release-promote',
            'reference/replicated-cli-release-update',
          ],
        },
        {
          type: 'category',
          label: 'Vendor API v3',
          items: [
            {
              type: 'doc',
              id: 'reference/vendor-api-using'
            },
            {
              type: 'link',
              label: 'Vendor API v3 Documentation',
              href: 'https://replicated-vendor-api.readme.io/v3/'
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Policies',
      items: [
            'vendor/policies-vulnerability-patch',
            'vendor/policies-data-transmission',
             ],
    },
    {
      type: 'category',
      label: 'Release notes',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'release-notes/rn-whats-new',
        },
        {
          type: 'link',
          label: 'App manager release notes',
          href: 'https://kots.io/release-notes/',
        },
        {
          type: 'link',
          label: 'Kubernetes installer release notes',
          href: 'https://kurl.sh/release-notes',
        },
      ],
    },
  ],
};

module.exports = sidebars;
