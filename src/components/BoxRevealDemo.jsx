import BoxReveal from "./ui/box-reveal";

export function BoxRevealDemo({ headline = 'UI library for'
  , subheadline = 'Design Engineers' }) {
  return (
    <div className="
     overflow-hidden pt-8 gap-2 flex flex-col">
      <BoxReveal boxColor={"#ef233c"} duration={0.5}>
        <h2 className="mt-[.5rem] text-5xl max-sm:text-2xl
         font-bold font-montserrat text-slate-200
         max-sm:text-left">
          {headline}
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#c1121f"} duration={0.8}>
        <p className="text-red-500 max-sm:text-md
        leading-relaxed
        text-justify font-montserrat ">{subheadline}</p>
      </BoxReveal>

    </div>
  );
}
