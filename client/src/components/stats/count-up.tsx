"use client";

import ReactCountUp from "react-countup";

const toBanglaNumerals = (number: number) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  const formattedNumber = new Intl.NumberFormat("en-US").format(number);

  return formattedNumber
    .split("")
    .map((char) => {
      if (char === ",") return ",";
      return banglaDigits[Number(char)] || char;
    })
    .join("");
};

type CountUpProps = {
  number: number;
};

export function CountUp({ number }: Readonly<CountUpProps>) {
  return (
    <ReactCountUp
      className="count text-2xl font-semibold md:mb-[14px] md:text-[56px] md:leading-[44px]"
      duration={6}
      formattingFn={(val) => `${toBanglaNumerals(val)}+`}
      end={number}
    />
  );
}
