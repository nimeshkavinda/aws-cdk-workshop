#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkWorkshopStack } from "../lib/cdk-workshop-stack";
import { DefaultStackSynthesizer } from "aws-cdk-lib";

const app = new cdk.App();
new CdkWorkshopStack(app, "CdkWorkshopStack", {
  synthesizer: new DefaultStackSynthesizer({
    generateBootstrapVersionRule: false,
  }),
});
