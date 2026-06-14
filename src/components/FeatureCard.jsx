export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 surface hover:-translate-y-1 hover:shadow-card-hover">
      {/* hover glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-2xl text-primary ring-1 ring-inset ring-primary/10 transition-transform duration-300 group-hover:scale-110 dark:text-[#a59cff]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-neutral-50">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>

      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}
