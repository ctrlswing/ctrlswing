import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 pt-20 flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <h1 className="font-anton text-8xl md:text-9xl uppercase text-yellow mb-6">
            404
          </h1>
          <p className="font-satoshi text-xl text-charcoal/70 mb-10">
            This page doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary-inverse">
              Back Home
            </Button>
            <Button href="/resources" variant="primary">
              Browse Resources
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
