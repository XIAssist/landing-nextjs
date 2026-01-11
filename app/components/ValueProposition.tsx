import { layout, typography, tailwindColors } from "@/lib/theme";

export default function ValueProposition() {
  return (
    <section className={`${layout.valueProposition.section} ${tailwindColors.background}`}>
      <div className={layout.container}>
        <div className={layout.valueProposition.content}>
          <h3 className={layout.valueProposition.subtitle}>
            XIAssist Vision
          </h3>
          <h2 className={layout.valueProposition.title}>
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

