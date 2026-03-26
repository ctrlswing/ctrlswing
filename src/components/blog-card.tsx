import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-darkgray border border-sage/10 rounded-xl overflow-hidden hover:border-yellow transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,225,124,0.05)]"
    >
      <div className="aspect-[16/9] bg-charcoal relative overflow-hidden p-6 border-b border-sage/10 flex items-center justify-center">
        <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] opacity-20" />
        <span className="font-anton text-5xl text-sage/10 uppercase relative z-10 group-hover:text-sage/20 transition-colors duration-500">
          {post.category}
        </span>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
      <div className="p-6 lg:p-8 flex-1 flex flex-col">
        <div className="text-xs font-bold tracking-widest uppercase text-yellow mb-4 border border-yellow/30 px-2 py-1 rounded inline-block w-max">
          {post.category}
        </div>
        <h3 className="font-anton text-2xl lg:text-3xl uppercase text-white mb-4 group-hover:text-yellow transition-colors leading-[0.9]">
          {post.title}
        </h3>
        <p className="font-satoshi text-sage/70 mb-6 line-clamp-2">
          {post.description}
        </p>
        <div className="mt-auto pt-6 border-t border-sage/10 flex items-center justify-between text-sm">
          <span className="text-white font-medium font-satoshi">
            J. Dean
          </span>
          <span className="text-sage/60 uppercase tracking-widest text-xs font-satoshi">
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
