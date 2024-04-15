import "./style.scss";

function SectionHeader({ title }: { title: string }) {
  return <h6 className="section-header">{title}</h6>;
}

export default SectionHeader;
