export default function WrapperContainer({
  children,
  classes = "",
  id,
  isSection = true,
}) {
  const className = `w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-24 ${classes}`;
  const Tag = isSection ? "section" : "div";

  return (
    <Tag className={className} id={id || undefined}>
      {children}
    </Tag>
  );
}
