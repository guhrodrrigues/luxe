import { ButtonGlitchBrightness } from "@/app/_components/ButtonGlitchBrightness";
import { AnimateEnter } from "../AnimateEnter";
import { GetStartedButton } from "./GetStartedButton";

export function SloganSection() {
  return (
    <section className="w-full h-full overflow-hidden">
      <div className="flex flex-col gap-8 lg:gap-10 items-center justify-center relative pb-20 md:pb-40 pt-14 mt-28 md:mt-44">
        <BlurBackground />
        <AnimateEnter className="flex flex-col items-center" delay={0.2}>
          <h1 className="max-w-lg mx-auto text-center text-4xl md:text-5xl font-display leading-tight font-semibold text-gradient">
            Illuminate your apps. Fast and easy.
          </h1>
        </AnimateEnter>
        <AnimateEnter
          className="flex flex-wrap items-center justify-center gap-4"
          delay={0.2}
        >
          <GetStartedButton />
          <ButtonGlitchBrightness href="/ui" text="Explore Gallery" />
        </AnimateEnter>
      </div>
    </section>
  );
}

function BlurBackground() {
  return (
    <svg
      className="absolute -z-[1] inset-x-0 w-full mx-auto pointer-events-none -bottom-[420px] md:-bottom-96"
      width="944"
      height="1033"
      viewBox="0 0 944 1033"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <g
          style={{
            mixBlendMode: "lighten",
            filter: "url(#filter0_f_2076_3208)",
          }}
        >
          <ellipse
            cx="574.307"
            cy="568.208"
            rx="32.7783"
            ry="293.346"
            transform="rotate(-164.946 574.307 568.208)"
            fill="url(#paint0_linear_2076_3208)"
            fillOpacity="0.5"
          ></ellipse>
        </g>
        <g
          style={{ mixBlendMode: "color-dodge" }}
          filter="url(#filter1_f_2076_3208)"
        >
          <ellipse
            cx="468.5"
            cy="589.25"
            rx="26.5"
            ry="293.25"
            transform="rotate(180 468.5 589.25)"
            fill="url(#paint1_linear_2076_3208)"
            fillOpacity="0.5"
          ></ellipse>
        </g>
        <g
          style={{ mixBlendMode: "lighten" }}
          filter="url(#filter2_f_2076_3208)"
        >
          <ellipse
            cx="365.16"
            cy="517.917"
            rx="22.3794"
            ry="381.284"
            transform="rotate(165 365.16 517.917)"
            fill="url(#paint2_linear_2076_3208)"
            fillOpacity="0.5"
          ></ellipse>
        </g>
        <g
          style={{ mixBlendMode: "lighten" }}
          filter="url(#filter3_f_2076_3208)"
        >
          <ellipse
            cx="417.083"
            cy="711.695"
            rx="22.3794"
            ry="180.667"
            transform="rotate(165 417.083 711.695)"
            fill="url(#paint3_linear_2076_3208)"
            fillOpacity="0.5"
          ></ellipse>
        </g>
        <g
          style={{ mixBlendMode: "lighten" }}
          filter="url(#filter4_f_2076_3208)"
        >
          <ellipse
            cx="471.75"
            cy="470.5"
            rx="22.25"
            ry="381.5"
            transform="rotate(180 471.75 470.5)"
            fill="url(#paint4_linear_2076_3208)"
            fillOpacity="0.5"
          ></ellipse>
        </g>
        <g
          style={{ mixBlendMode: "lighten" }}
          filter="url(#filter5_f_2076_3208)"
        >
          <ellipse
            cx="472"
            cy="695"
            rx="321.5"
            ry="187.5"
            transform="rotate(180 472 695)"
            fill="url(#paint5_linear_2076_3208)"
            fillOpacity="0.5"
          ></ellipse>
        </g>
        <g
          style={{ mixBlendMode: "lighten" }}
          filter="url(#filter6_f_2076_3208)"
        >
          <ellipse
            cx="472"
            cy="787"
            rx="160.5"
            ry="95.5"
            transform="rotate(180 472 787)"
            fill="url(#paint6_linear_2076_3208)"
            fillOpacity="0.5"
          ></ellipse>
        </g>
        <g
          style={{ mixBlendMode: "lighten" }}
          filter="url(#filter7_f_2076_3208)"
        >
          <ellipse
            cx="472"
            cy="779.75"
            rx="135"
            ry="80.25"
            transform="rotate(180 472 779.75)"
            fill="url(#paint7_linear_2076_3208)"
            fillOpacity="0.5"
          ></ellipse>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_2076_3208"
          x="402.782"
          y="195.799"
          width="343.05"
          height="744.818"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="44.5"
            result="effect1_foregroundBlur_2076_3208"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1_f_2076_3208"
          x="353"
          y="207"
          width="231"
          height="764.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="44.5"
            result="effect1_foregroundBlur_2076_3208"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter2_f_2076_3208"
          x="175.115"
          y="60.5783"
          width="380.089"
          height="914.677"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="44.5"
            result="effect1_foregroundBlur_2076_3208"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter3_f_2076_3208"
          x="276.556"
          y="448.086"
          width="281.055"
          height="527.218"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="44.5"
            result="effect1_foregroundBlur_2076_3208"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter4_f_2076_3208"
          x="360.5"
          y="0"
          width="222.5"
          height="941"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="44.5"
            result="effect1_foregroundBlur_2076_3208"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter5_f_2076_3208"
          x="0.499939"
          y="357.5"
          width="943"
          height="675"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="75"
            result="effect1_foregroundBlur_2076_3208"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter6_f_2076_3208"
          x="161.5"
          y="541.5"
          width="621"
          height="491"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="75"
            result="effect1_foregroundBlur_2076_3208"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter7_f_2076_3208"
          x="187"
          y="549.5"
          width="570"
          height="460.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="75"
            result="effect1_foregroundBlur_2076_3208"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_2076_3208"
          x1="574.307"
          y1="274.862"
          x2="574.307"
          y2="861.554"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_2076_3208"
          x1="468.5"
          y1="296"
          x2="468.5"
          y2="882.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_2076_3208"
          x1="365.16"
          y1="136.633"
          x2="365.16"
          y2="899.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_2076_3208"
          x1="417.083"
          y1="531.028"
          x2="417.083"
          y2="892.362"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_2076_3208"
          x1="471.75"
          y1="88.9999"
          x2="471.75"
          y2="852"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_2076_3208"
          x1="472"
          y1="507.5"
          x2="472"
          y2="882.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_2076_3208"
          x1="472"
          y1="691.5"
          x2="472"
          y2="882.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_2076_3208"
          x1="472"
          y1="699.5"
          x2="472"
          y2="860"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
