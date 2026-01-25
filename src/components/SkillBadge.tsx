interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-card/50 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/30 hover:bg-card">
      {icon && <span className="text-accent">{icon}</span>}
      {name}
    </div>
  );
}
