import React, { useState } from "react";
import { staticText } from "../../constants";
import Modal from "../Modal";
import "./styles.css";
import aadhar from "../../assests/aadhar.png";

export default function Aadhar() {
  const [showModal, setShowModal] = useState(true);
  const [aadharVal, setAadharVal] = useState("");
  const [aadharError, setAadharError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpVal, setOtpVal] = useState("");
  const [signed, setSigned] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [verified, isVerified] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleSignedModal = () => {
    setSigned(!signed);
    setShowModal(false);
    setHideButton(true);
  };

  const validateNumbers = value => {
    const re = /^[0-9]*$/;
    return re.test(value);
  };

  const validateAadhar = value => {
    const re = /^[0-9]*$/;
    return re.test(value);
  };

  const validateOTP = value => {
    const re = /^[0-9]*$/;
    return re.test(value);
  };

  const handleAadhar = value => {
    if (!validateNumbers(value)) {
      setAadharError("Please enter a valid aadhar id");
    } else {
      setAadharError("");
    }
    setAadharVal(value);
    buttonCheck();
  };

  const handleOTP = value => {
    if (!validateNumbers(value)) {
      setOtpError("Please enter a valid aadhar id");
    } else {
      setOtpError("");
    }
    setOtpVal(value);
    buttonCheck();
  };

  const buttonCheck = () => {
    if (
      otpError.length > 0 &&
      aadharError.length > 0 &&
      aadharVal.length < 12 &&
      otpVal.length < 6 &&
      validateOTP(otpVal) &&
      validateAadhar(aadharVal)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleAgreement = () => {
    setAgreement(!agreement);
  };

  return (
    <>
      <div className="aadharWrapper">
        <img
          src="https://i1.rgstatic.net/publication/216792811_Browsing_through_High_Quality_Document_Images_with_DjVu/links/00b7d514af9ed110f4000000/largepreview.png"
          style={{ height: "80vh" }}
        />
        {!hideButton && (
          <div className="authenticationStepsWrapper">
            <button onClick={() => handleModal()}>REQUEST OTP TO SIGN</button>
          </div>
        )}
      </div>
      {showModal && (
        <Modal
          isVisible={showModal && !signed}
          handleClose={handleModal}
          title="Register Aadhar"
        >
          <div className="flex">
            <img src={aadhar} height="30" />
            <div className="aadharInput">
              <div className="flexCol">
                <div className="flex gap-10">
                  <input
                    type="text"
                    value={aadharVal}
                    onChange={e => handleAadhar(e.target.value)}
                    maxLength={12}
                  />
                  <button
                    style={{ border: "none" }}
                    disabled={aadharVal.length < 12}
                    className={aadharVal.length === 12 ? "active" : "nonactive"}
                    onClick={() => isVerified(true)}
                  >
                    Verify
                  </button>
                </div>
                {aadharError && <p>{aadharError}</p>}
                <div>
                  <input
                    type="checkbox"
                    checked={agreement}
                    onChange={e => handleAgreement(e.target)}
                  />{" "}
                  I agree to eSign this KYC document to get started
                </div>
                {verified && (
                  <>
                    <div>
                      <input
                        type="text"
                        value={otpVal}
                        onChange={e => handleOTP(e.target.value)}
                        maxLength={6}
                        placeholder="Enter OTP here"
                      />
                      <button
                        style={{ border: "none" }}
                        disabled={!buttonCheck}
                        className={
                          otpVal.length === 6 && buttonCheck
                            ? "active"
                            : "nonactive"
                        }
                        onClick={() => setSigned(true)}
                      >
                        SUBMIT
                      </button>
                    </div>
                    {otpError && <p>{otpError}</p>}
                  </>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}

      {signed && (
        <Modal
          isVisible={signed}
          handleClose={handleSignedModal}
          title="Signing..."
          subtitle="Mutual Non-Disclosure Agreement"
          isSuccessfull={true}
          autoClose={true}
        >
          <p className="noMargin">Aadhar Verified Successfully</p>
        </Modal>
      )}
    </>
  );
}
