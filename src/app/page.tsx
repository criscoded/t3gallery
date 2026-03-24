import {SignInButton} from "@clerk/nextjs";
import {auth} from "@clerk/nextjs/server";
import {getUserImages} from "~/server/queries";
import {getDefaultImages} from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function HomePage() {
    const { userId } = await auth();

    return (
        <main className="max-w-7xl mx-auto pb-20">
            {userId === null ? (
                <>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-20 px-6 mb-12 bg-card rounded-[3rem] overflow-hidden">
                        <div className="flex-1 space-y-6">
                            <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-accent-foreground text-xs font-bold tracking-widest uppercase">
                                Cloud Spark
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                                Capture, Create, and <span className="italic">Inspire</span>.
                            </h1>
                            <p className="text-lg text-foreground/60 max-w-lg">
                                Build your own experience. A high-performance gallery for your digital assets, guided by a spark of inspiration.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <SignInButton mode="modal">
                                    <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all">
                                        Get Started
                                    </button>
                                </SignInButton>
                                <button className="bg-foreground/5 hover:bg-foreground/10 px-8 py-4 rounded-full font-semibold transition-all">
                                    Explore
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-md">
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-2">
                                <Image 
                                    src="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1000" 
                                    fill 
                                    className="object-cover" 
                                    alt="Inspiration"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="px-6">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold tracking-tight">Featured Collections</h2>
                            <div className="w-20 h-px bg-foreground/20"></div>
                        </div>
                        <ImageGrid type="default" />
                    </div>
                </>
            ) : (
                <div className="px-6 pt-10">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight mb-2">My Gallery</h2>
                            <p className="text-foreground/50">Your curated collection of moments.</p>
                        </div>
                        <div className="hidden md:block w-1/3 h-px bg-foreground/10"></div>
                    </div>
                    <ImageGrid type="user" />
                </div>
            )}
        </main>
    );
}

async function ImageGrid({ type }: { type: 'default' | 'user' }) {
    const images = type === 'default' ? await getDefaultImages() : await getUserImages();

    if (images.length === 0) {
        return (
            <div className="text-center py-20 bg-card rounded-3xl border-2 border-dashed border-foreground/10">
                <p className="font-serif text-2xl text-foreground/50">Your gallery is empty. Start by uploading some photos.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {images.map((image: { id: number; url: string; name: string }) => (
                <div key={image.id} className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-md transition-all">
                    <Link href={`/photos/${image.id}`}>
                        <div className="aspect-[4/5] relative">
                            <Image
                                src={image.url}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                alt={image.name}
                            />
                        </div>
                    </Link>
                    <div className="p-4 bg-card/80 backdrop-blur-sm absolute bottom-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform">
                        <div className="font-serif text-lg font-semibold truncate">{image.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
