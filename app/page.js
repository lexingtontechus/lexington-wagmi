"use client";
import Link from "next/link";
import Image from "next/image";
//import Profile from "./components/profilesolana";
//import ButtonSolana from "./components/buttonsolana";
import Profile from "./components/profilewagmi";

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
            <LogoWagmi
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
              <Profile />
            </div>
            <div className="py-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function LogoWagmi() {
  return (
  <svg viewBox="0 0 561 132" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-current h-full w-auto"><title>wagmi logo</title><path d="M561 12C561 18.6274 555.627 24 549 24C542.373 24 537 18.6274 537 12C537 5.37259 542.373 0 549 0C555.627 0 561 5.37259 561 12Z" fill="inherit"></path><path d="M414 105C418.971 105 423 100.971 423 96V60C423 55.0294 427.029 51 432 51H450C454.971 51 459 55.0294 459 60V96C459 100.971 463.029 105 468 105C472.971 105 477 100.971 477 96V60C477 55.0294 481.029 51 486 51H504C508.971 51 513 55.0294 513 60V96C513 100.971 517.029 105 522 105H549C553.971 105 558 100.971 558 96V42C558 37.0294 553.971 33 549 33C544.029 33 540 37.0294 540 42V82.5C540 84.9853 537.985 87 535.5 87C533.015 87 531 84.9853 531 82.5V42C531 37.0294 526.971 33 522 33H414C409.029 33 405 37.0294 405 42V96C405 100.971 409.029 105 414 105Z" fill="inherit"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M27 87C22.0294 87 18 82.9706 18 78V42C18 37.0294 13.9706 33 9 33C4.02943 33 0 37.0294 0 42V96C0 100.971 4.02943 105 9 105H117C121.971 105 126 100.971 126 96V60C126 55.0294 130.029 51 135 51H238.5C240.985 51 243 53.0147 243 55.5C243 57.9853 240.985 60 238.5 60H144C139.029 60 135 64.0294 135 69V96C135 100.971 139.029 105 144 105H252C256.971 105 261 100.971 261 96V42C261 37.0294 256.971 33 252 33H117C112.029 33 108 37.0294 108 42V78C108 82.9706 103.971 87 99 87H81C76.0294 87 72 82.9706 72 78V42C72 37.0294 67.9706 33 63 33C58.0294 33 54 37.0294 54 42V78C54 82.9706 49.9706 87 45 87H27ZM243 82.5C243 84.9853 240.985 87 238.5 87H157.5C155.015 87 153 84.9853 153 82.5C153 80.0147 155.015 78 157.5 78H238.5C240.985 78 243 80.0147 243 82.5Z" fill="inherit"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M270 96C270 100.971 274.029 105 279 105H373.5C375.985 105 378 107.015 378 109.5C378 111.985 375.985 114 373.5 114H279C274.029 114 270 118.029 270 123C270 127.971 274.029 132 279 132H387C391.971 132 396 127.971 396 123V42C396 37.0294 391.971 33 387 33H279C274.029 33 270 37.0294 270 42V96ZM297 51C292.029 51 288 55.0294 288 60V78C288 82.9706 292.029 87 297 87H369C373.971 87 378 82.9706 378 78V60C378 55.0294 373.971 51 369 51H297Z" fill="inherit"></path></svg>
  );
}
