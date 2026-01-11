import { layout, typography, tailwindColors } from "@/lib/theme";

export default function ValueProposition() {
  return (
    <section className={`flex items-center ${tailwindColors.background} py-0 pt-12 lg:pt-0 lg:pb-32`}>
      <div className={layout.container}>
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="mb-8 text-2xl font-bold text-gray-400 md:text-3xl lg:text-4xl">
            XIAssist Vision
          </h3>
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-[1.6]">
            <span className="block mb-5">
              <span className={tailwindColors.secondary.text}>진단</span>을 하는 AI가 아닌
            </span>
            <span className="block mb-5">
              <span className={tailwindColors.primary.text}>Assist</span>를 하는 <span className={tailwindColors.secondary.text}>도구</span>로
            </span>
            <span className="block">
              의료진의 <span className={tailwindColors.primary.text}>가치를 입증</span>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

