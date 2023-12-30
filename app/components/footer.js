"use client";
import Link from "next/link";

export default function Footer(props) {
  return (
    <>
      {/*}  <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-primary-900 text-center mx-auto"
            : "relative bg-primary-900 text-center mx-auto") + " pb-6"
        }
      >*/}
      <div className="btm-nav py-4">
        <div className="container mx-auto px-4">
          <div className="mb-2 divider divider-accent" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full p-4">
              <div className="text-sm font-semibold text-center">
                Copyright © {new Date().getFullYear()} Powered by{" "}
                <Link
                  href="https://lexingtontech.us"
                  target="_blank"
                  className="font-bold text-accent uppercase"
                >
                  Lexington Tech
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
