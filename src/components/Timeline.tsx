import { check, rocket } from "@/utils/icons";
import Image from "next/image";

export default function Timeline() {
  const items = [
    {
      quarter: "Q1 2024",
      title: "GENESIS",
      points: [
        "Token Launch & DEX Listing",
        "Community Building",
        "Partnership Development",
        "Marketing Strategy Implementation",
      ],
      icon: rocket,
      color: "#00C950",
      border_color: "#7BF1A8",
    },
    {
      quarter: "Q2 2024",
      title: "EXPANSION",
      points: [
        "Platform Scaling",
        "New Integrations",
        "Strategic Partnerships",
        "Global Outreach",
      ],
      icon: rocket,
      color: "#F0B100",
      border_color: "#FFDF20",
    },
    {
      quarter: "Q3 2024",
      title: "GROWTH",
      points: [
        "Ecosystem Development",
        "Governance Launch",
        "Liquidity Programs",
        "User Incentives",
      ],
      icon: rocket,
      color: "#A184C4",
      border_color: "#99A1AF",
    },
    {
      quarter: "Q4 2024",
      title: "MATURITY",
      points: [
        "Full Product Release",
        "Enterprise Partnerships",
        "Mainstream Adoption",
        "Advanced Features",
      ],
      icon: rocket,
      color: "#2962FF",
      border_color: "#77B7DF",
    },
  ];

  return (
    <div className="relative w-10/12 mx-auto mt-16">
      {/* central line */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-r from-[#FDC700] via-[#FF6900] to-[#FB2C36] transform -translate-x-1/2 opacity-20"></div>

      <div className="space-y-10 md:space-y-16">
        {items.map((item, i) => (
          <div
            key={i}
            className={`relative flex items-start ${
              i % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* content */}
            <div
              className={`md:w-5/12 flex items-center gap-4 ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <Image src={item.icon} alt="rocket" />
              <div className="bg-black p-6 rounded-2xl shadow-lg text-white">
                <h3 className="text-[30px] font-bold font-heading">
                  {item.quarter}
                </h3>
                <h4
                  style={{ color: item.color }}
                  className="text-[30px] font-bold font-heading"
                >
                  {item.title}
                </h4>
                <div className="mt-3 space-y-2 text-white font-normal font-body flex flex-col">
                  {item.points.map((p, j) => (
                    <div className="flex items-center gap-3" key={j}>
                      <Image src={check} alt="check" />
                      <p>{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* circle indicator */}
            <div
              className={`hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-black ${item.color}`}
              style={{ background: item.color, borderColor: item.border_color }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
