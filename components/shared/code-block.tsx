import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export function CodeBlock({ code, className }: CodeBlockProps) {
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-lg border border-border bg-black/35 p-4 text-xs leading-relaxed text-zinc-200",
        className,
      )}
    >
      <code>{code}</code>
    </pre>
  );
}
