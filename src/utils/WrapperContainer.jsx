export default function WrapperContainer({
  children,
  classes,
  id,
  isSection = true,
}) {
  return isSection ? (
    <section
      className={`w-full max-w-[1600px] mx-auto px-5 md:px-10 lg:px-20 xl:px-40 ${classes}`}
      id={id || ""}
    >
      {children}
    </section>
  ) : (
    <div
      className={`w-full max-w-[1600px] mx-auto px-5 md:px-10 lg:px-20 xl:px-40 ${classes}`}
      id={id || ""}
    >
      {children}
    </div>
  );
}
