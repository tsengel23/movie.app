"use client";

import { Film, Mail, Phone } from "lucide-react";
import Link from "next/link";

type FooterProps = {};
export const Footer = (props: FooterProps) => {
  return (
    <div className="bg-indigo-700 flex justify-center items-center px-20 py-10 w-full h-fit mt-[51px]">
      <div className="flex gap-30 ">
        <div className="w-[247px] h-50 ">
          <Link href="#" className="">
            <h1 className="flex gap-2 text-[#FAFAFA] italic font-semibold text-base">
              <Film /> Movie Z
            </h1>
          </Link>
          <p className="text-[#FAFAFA] text-sm font-normal leading-5 regular mt-3">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>
        <div className="w-[913px] h-50  flex ">
          <div className=" w-fit ml-[369px]">
            <p className="mb-3 text-[#FAFAFA] text-sm font-normal leading-5 regular">
              Contact Information
            </p>
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-[#FAFAFA]" />
              <div className="flex flex-col">
                <p className="text-[#FAFAFA] text-sm font-medium leading-5 regular">
                  Email:
                </p>
                <p className="text-[#FAFAFA] text-sm font-normal leading-5 regular">
                  support@movieZ.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-[64px]">
              <Phone className="text-[#FAFAFA]" />
              <div className="flex flex-col">
                <p className="text-[#FAFAFA] text-sm font-medium leading-5 regular">
                  Phone:
                </p>
                <p className="text-[#FAFAFA] text-sm font-normal leading-5 regular">
                  +976 (11) 123-4567
                </p>
              </div>
            </div>
          </div>
          <div className="ml-[96px]">
            <p className="text-[#FAFAFA] text-sm font-normal leading-5 regular mb-3">
              Follow us
            </p>
            <div className="flex gap-3">
              <div className="text-[#FAFAFA] text-sm font-medium leading-5 regular">
                Facebook
              </div>
              <div className="text-[#FAFAFA] text-sm font-medium leading-5 regular">
                Instagram
              </div>
              <div className="text-[#FAFAFA] text-sm font-medium leading-5 regular">
                Twitter
              </div>
              <div className="text-[#FAFAFA] text-sm font-medium leading-5 regular">
                Youtube
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
