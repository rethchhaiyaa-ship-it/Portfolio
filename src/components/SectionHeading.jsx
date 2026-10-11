export default function SectionHeading({ label, title }) {
  return (
    <div>
      <p className="text-sm text-accent">{label}</p>
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
    </div>
  )
}