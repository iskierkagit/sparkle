import React from 'react';
import '../../Styles/BaseBackground.css'
import FirstSteps from "./FirstSteps"
import DisabilityCertificate from "./DisabilityCertificate"
import EarlySupport from "./EarlySupport"
import ProLife from "./ProLife"
import Rehabilitation from "./Rehabilitation"
import Declarations from "./Declarations"
import '../../Styles/Parents.css'

const Parents = () => {
  return (
    <div className="base">
      <FirstSteps />
      <DisabilityCertificate />
      <EarlySupport />
      <ProLife />
      <Rehabilitation />
      <Declarations />
    </div>
  );
}
export default Parents;
