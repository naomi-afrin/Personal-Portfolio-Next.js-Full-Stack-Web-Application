const skills = [
  {
    category: "Web",
    items: ["JavaScript", "TypeScript", "Node.js", "Next.js", "React", "HTML","Tailwind CSS"],
  },
  {
    category: "Android",
    items: ["Kotlin", "Jetpack Compose"],
  },
  {
    category: "ML/AI",
    items: ["Python", "PyTorch", "TensorFlow", "Edge computing"],
  },
  {
    category: "Tools",
    items: ["Git", "Linux", "Postman"],
  },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-10 px-8 md:px-16">
      <h2 className="text-white text-4xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-white/10 bg-black/60 p-6"
          >
            <h3 className="text-white text-xl font-semibold mb-4">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-200 border border-purple-400/30 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
