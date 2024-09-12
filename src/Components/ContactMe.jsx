import { useState } from "react";

export default function ContactMe() {
  const [numbereCopied, setNumberCopied] = useState(false);

  function copyPhoneNumber() {
    navigator.clipboard.writeText("+923400961779").then(() => {
      setNumberCopied(true);
      setTimeout(() => setNumberCopied(false), 2000);
    });
  }
  return (
    <div className="contact-me" id="contact-me">
      <h2>Contact Me</h2>
      <div className="contact-icons-contact-me">
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ali-jawad-9b6a1020a/",
              "_blank"
            )
          }
          className="contact-me-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="25"
            viewBox="0,0,256,256"
          >
            <g
              fill="white"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(8,8)">
                <path d="M8.64258,4c-1.459,0 -2.64258,1.18163 -2.64258,2.64063c0,1.459 1.18262,2.66797 2.64063,2.66797c1.458,0 2.64258,-1.20897 2.64258,-2.66797c0,-1.458 -1.18163,-2.64062 -2.64062,-2.64062zM21.53516,11c-2.219,0 -3.48866,1.16045 -4.09766,2.31445h-0.06445v-2.00391h-4.37305v14.68945h4.55664v-7.27148c0,-1.916 0.14463,-3.76758 2.51563,-3.76758c2.337,0 2.37109,2.18467 2.37109,3.88867v7.15039h4.55078h0.00586v-8.06836c0,-3.948 -0.84884,-6.93164 -5.46484,-6.93164zM6.36328,11.31055v14.68945h4.56055v-14.68945z"></path>
              </g>
            </g>
          </svg>
        </div>
        <div
          onClick={() => window.open("mailto:alijawad04@gmail.com", "_blank")}
          className="contact-me-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="white"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
        </div>
        <div
          onClick={() =>
            window.innerWidth <= 767
              ? window.open("tel:+923400961779")
              : copyPhoneNumber()
          }
          className="contact-me-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#FFFFFF"
          >
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
          {numbereCopied ? (
            <p className="tooltip">Copied to clipboard</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
