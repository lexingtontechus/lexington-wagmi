"use client";
import Link from "next/link";
import Image from "next/image";
import Profile from "./components/profilesolana";
import ButtonSolana from "./components/buttonsolana";

const logoImage = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`;
};

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen justify-center">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold uppercase py-4">
              Lexington Tech Solana Demo
            </h1>
            <Image
              loader={logoImage}
              src="logo_solana.svg"
              width={240}
              height={40}
              className="mx-auto"
              alt="logo"
            />
            <h2 className="text-3xl font-bold uppercase py-4">
              WEB3 infrastructure & integration for gaming, NFTs, Defi, payments & DAOS.
            </h2>
            <p>
              It's time to join the thousands of creators, artists, and
              developers using Solana.
            </p>
            <ul className="list-disc list-inside">
              <li>eCommerce & Payments</li>
              <li>Gaming & Entertainment</li>
              <li>Artists & Creators</li>
            </ul>
            <div className="py-4">
              <ButtonSolana />
            </div>
            <div className="py-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function LogoSolana() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-[600px] h-12"
      fill="none"
    >
      <g clip-path="url(#a)">
        <path
          fill="url(#b)"
          d="m108.53 75.69-17.72 19a4.099 4.099 0 0 1-3 1.31h-84a2.06 2.06 0 0 1-1.51-3.46l17.7-19a4.1 4.1 0 0 1 3-1.31h84a2.05 2.05 0 0 1 1.53 3.46ZM90.81 37.42a4.14 4.14 0 0 0-3-1.31h-84a2.06 2.06 0 0 0-1.51 3.46L20 58.58a4.14 4.14 0 0 0 3 1.31h84a2.06 2.06 0 0 0 1.5-3.46L90.81 37.42Zm-87-13.65h84a4.098 4.098 0 0 0 3-1.31l17.72-19a2.052 2.052 0 0 0-.387-3.14A2.05 2.05 0 0 0 107 0H23a4.1 4.1 0 0 0-3 1.31l-17.7 19a2.06 2.06 0 0 0 1.51 3.46Z"
        />
        <path
          fill="#fff"
          d="M210.94 40.6H166V25.8h56.62V11h-56.77A14.768 14.768 0 0 0 151 25.69v15a14.768 14.768 0 0 0 14.85 14.71h45v14.8h-58.78V85h58.87a14.766 14.766 0 0 0 13.695-9.044 14.76 14.76 0 0 0 1.155-5.646v-15a14.769 14.769 0 0 0-14.85-14.71ZM298 11h-45.11a14.773 14.773 0 0 0-13.731 9.035A14.752 14.752 0 0 0 238 25.69v44.62c.01 1.943.404 3.865 1.159 5.656A14.77 14.77 0 0 0 252.89 85H298a14.768 14.768 0 0 0 14.85-14.69V25.69a14.76 14.76 0 0 0-4.383-10.42A14.76 14.76 0 0 0 298 11Zm-.11 59.2H253V25.8h44.87l.02 44.4ZM456 11h-44a14.768 14.768 0 0 0-14.85 14.69V85h15V60.69h43.8V85h15V25.69A14.766 14.766 0 0 0 456 11Zm-.11 34.89h-43.8V25.8h43.8v20.09ZM631.15 11h-44a14.768 14.768 0 0 0-14.85 14.69V85h15V60.69H631V85h15V25.69a14.76 14.76 0 0 0-4.383-10.42A14.771 14.771 0 0 0 631.15 11ZM631 45.89h-43.8V25.8H631v20.09ZM544 70.2h-6l-21.45-53a9.887 9.887 0 0 0-9.16-6.2h-13.31a9.845 9.845 0 0 0-9.131 6.035 9.86 9.86 0 0 0-.769 3.765V85h15V25.8h6l21.44 53a9.915 9.915 0 0 0 9.2 6.16h13.31a9.843 9.843 0 0 0 6.98-2.85 9.853 9.853 0 0 0 2.92-6.95V11H544v59.2ZM341.1 11h-15v59.31a14.763 14.763 0 0 0 4.4 10.438A14.775 14.775 0 0 0 341 85h45V70.2h-44.9V11Z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="10.81"
          x2="98.89"
          y1="98.29"
          y2="-1.01"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".08" stop-color="#9945FF" />
          <stop offset=".3" stop-color="#8752F3" />
          <stop offset=".5" stop-color="#5497D5" />
          <stop offset=".6" stop-color="#43B4CA" />
          <stop offset=".72" stop-color="#28E0B9" />
          <stop offset=".97" stop-color="#19FB9B" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h646v96H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
