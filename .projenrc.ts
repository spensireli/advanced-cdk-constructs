import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'spensireli',
  authorAddress: '5614310+spensireli@users.noreply.github.com',
  cdkVersion: '2.1.0',
  github: false,
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'advanced-cdk-constructs',
  projenrcTs: true,
  stability: 'experimental',
  dependabot: true,
  codeCov: true,
  releaseToNpm: true,
  minNodeVersion: '22.0.0',
  workflowNodeVersion: '22.0.0',
  keywords: ['aws', 'cdk', 'aws-cdk', 'guardduty', 'guard', 'duty', 'security', 'advanced', 'constructs', 'advanced-cdk-constructs', 'organizations', 'landing-zone', 'landingzone', 'landing-zone-constructs', 'landingzoneconstructs', 'landing-zone-construct', 'landingzoneconstruct', 'control-tower', 'control', 'tower'],
  packageManager: javascript.NodePackageManager.NPM,
  npmAccess: javascript.NpmAccess.PUBLIC,
  repositoryUrl: 'https://github.com/spensireli/advanced-cdk-constructs.git',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 17 * * 0']),
    },
  },
  deps: [
    'aws-cdk-lib',
    'constructs',
  ],
  devDeps: [
    'esbuild',
    'typescript',
    'ts-jest',
  ],
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['spensireli'],
  },
  publishToPypi: {
    distName: 'spensireli.advanced-cdk-constructs',
    module: 'spensireli.advanced_cdk_constructs',
  },
  jestOptions: {
    coverage: true,
  },
  gitignore: [
    'node_modules/',
    '.DS_Store',
    '.vscode',
  ],
});

project.addTask('minor', {
  exec: 'npm version minor',
});

project.addTask('major', {
  exec: 'npm version major',
});

project.addTask('patch', {
  exec: 'npm version patch',
});
project.synth();