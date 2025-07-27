import * as gd from 'aws-cdk-lib/aws-guardduty';
import { Construct } from 'constructs';

/**
 * Properties for configuring {@link GuardDutyConstruct}.
 */
export interface GuardDutyConstructProps {
  /**
   * Whether to enable GuardDuty.
   * @default true
   */
  readonly enableGuardDuty?: boolean;

  /**
   * Whether to enable Kubernetes audit logs as a GuardDuty data source.
   * @default true
   */
  readonly kubernetesAuditLogs?: boolean;

  /**
   * Whether to enable malware protection (EC2 EBS volume scanning).
   * @default true
   */
  readonly malwareProtection?: boolean;

  /**
   * Whether to enable S3 logs as a GuardDuty data source.
   * @default true
   */
  readonly s3Logs?: boolean;

  // /**
  //  * Whether to enable runtime monitoring.
  //  * @default true
  //  */
  // readonly runtimeMonitoring?: boolean;
}

/**
 * A CDK construct that sets up AWS GuardDuty with configurable data sources and features.
 *
 * Example:
 * ```ts
 * new GuardDutyConstruct(this, 'GuardDuty', {
 *   enableGuardDuty: true,
 *   kubernetesAuditLogs: true,
 *   malwareProtection: true,
 *   s3Logs: true,
 * });
 * ```
 */
export class GuardDutyConstruct extends Construct {
  /**
   * The ID of the created GuardDuty detector.
   */
  public detectorId: string;

  /**
   * Creates a new GuardDutyConstruct.
   * @param scope The parent construct.
   * @param id The construct ID.
   * @param props GuardDuty configuration properties.
   */
  constructor(scope: Construct, id: string, props?: GuardDutyConstructProps) {
    super(scope, id);
    const enableGuardDuty: boolean = props?.enableGuardDuty ?? true;
    const kubernetesAuditLogs: boolean = props?.kubernetesAuditLogs ?? true;
    const malwareProtection: boolean = props?.malwareProtection ?? true;
    const s3Logs: boolean = props?.s3Logs ?? true;
    // const runtimeMonitoring: boolean = props?.runtimeMonitoring ?? true;

    const guardDuty = new gd.CfnDetector(this, 'GuardDutyDetector', {
      enable: enableGuardDuty,
      dataSources: {
        kubernetes: {
          auditLogs: {
            enable: kubernetesAuditLogs,
          },
        },
        malwareProtection: {
          scanEc2InstanceWithFindings: {
            ebsVolumes: malwareProtection,
          },
        },
        s3Logs: {
          enable: s3Logs,
        },
      },
      features: [
        {
          name: 'RUNTIME_MONITORING',
          status: 'ENABLED',
        },
      ],
    });
    this.detectorId = guardDuty.attrId;
  }
}