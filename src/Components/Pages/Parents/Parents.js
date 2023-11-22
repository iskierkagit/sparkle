import React from 'react';
import '../../Styles/BaseBackground.css'
import FirstSteps from "./FirstSteps"
import DisabilityCertificate from "./DisabilityCertificate"
import EarlySupport from "./EarlySupport"
import ProLife from "./ProLife"
import Rehabilitation from "./Rehabilitation"
import Declarations from "./Declarations"
import '../../Styles/Parents.css'
import VideoBg from '../../../Assets/video/sand_2.mp4'

const Parents = () => {
  return (
    <div className="base">
      <FirstSteps />
      <DisabilityCertificate />
      <EarlySupport />
      <ProLife />
      <Rehabilitation />
      <Declarations />
      <video src={VideoBg} autoPlay loop muted/>
    </div>
  );
}
export default Parents;
