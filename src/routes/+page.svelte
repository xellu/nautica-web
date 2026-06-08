<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import Markdown from "$lib/components/Markdown.svelte";
    import Navbar from "$lib/components/layout/Navbar.svelte";
    import Glyph from "$lib/components/Glyph.svelte";

    import { CODE_FLASK, CODE_NAUTICA } from "$lib/static/Landing";
    
    let copied: boolean = $state(false);
</script>

<div class="fixed -z-50 w-screen overflow-hidden opacity-30">
<div class="w-[500%]">
    <video src="/landing/vista.mp4" autoplay loop muted class="max-lg:ml-[-20%] lg:w-screen max-lg:h-screen" preload="auto" onclick={(e: Event) => { 
        let vid: HTMLVideoElement = e.target as HTMLVideoElement;
        vid.play()
    }}>
        <track kind="captions">
    </video>
</div>
</div>

<Navbar padding={true} />

<div class="h-32 lg:hidden mx-5 border-x border-border"></div>
<div class="grid grid-cols-3 lg:grid-cols-6 min-h-screen relative lg:pt-[20%] max-lg:p-5">
    
    <!-- lines -->
    <div class="absolute inset-0 grid grid-cols-3 lg:grid-cols-6 pointer-events-none -z-10 max-lg:mx-5 max-lg:border-x border-border">
        <div></div>
        <div class="w-px h-full bg-linear-to-b from-transparent to-30% to-border"></div>
        <div class="w-px h-full bg-linear-to-b from-transparent to-30% to-border"></div>
        <div class="w-px h-full bg-linear-to-b from-transparent to-30% to-border max-lg:hidden"></div>
        <div class="w-px h-full bg-linear-to-b from-transparent to-30% to-border max-lg:hidden"></div>
        <div class="w-px h-full bg-linear-to-b from-transparent to-30% to-border max-lg:hidden"></div>
    </div>

    <!-- page content -->
    <div class="col-span-1 max-lg:hidden"></div>
    <div class="col-span-2">
        <img src="/brand/banner-mono.svg" alt="" class="h-5 mb-3 select-none" draggable="false">
        <h1 class="h1 2xl:text-5xl text-2xl font-bold">Build Systems, <br>Don't Assemble.</h1>

        <div class="mt-8 font-serif px-2 lg:w-1/2">
            Build backend systems with managed services, lifecycle hooks, routing and 3rd-party plugins.
        </div>

        <div class="mt-16 lg:w-1/2">
            <button class="h-16 group overflow-hidden flex flex-col w-full mb-2.5" onclick={() => {
                navigator.clipboard.writeText("pip install nautica")
                copied = true;
                setTimeout(() => { copied = false }, 1000)    
            }}>
                <Button variant="default" class="rounded-none font-mono w-full p-5 h-16 hover:bg-white! {copied ? 'mt-0' : '-mt-16 group-hover:mt-0'}">{copied ? 'Copied to clipboard' : '$ pip install nautica'}</Button>
                <Button variant="outline" class="rounded-none border-x-transparent! bg-transparent! font-mono w-full p-5 h-16 px-px bg-[url(/asset/mesh-diagonal.png)] bg-repeat">$ pip install nautica</Button>
            </button>

            <a href="/docs/get-started" class="w-full">
                <Button variant="link" class="w-full font-inter">Get Started <Glyph text="->" /></Button>
            </a>
            <div class="w-full bg-border h-px mt-2.5"></div>
        </div>
    </div>

    <!-- <div class="col-span-1 max-lg:hidden"></div> -->

    <div class="col-span-2 max-lg:col-span-3 max-lg:mt-16">
        <div class="p-3 border border-border rounded-2xl backdrop-blur-lg bg-border/30 mx-4 max-lg:right-7 relative">
            <!-- <img src="/landing/code2.png" alt="" class="rounded-lg border border-ring/20" draggable="false"> -->
            <span class="font-mono bg-foreground/10 py-0.5 px-2 rounded-md text-sm text-chart-1">main.py</span>
            <Markdown content={CODE_FLASK} className="max-w-6xl w-full opacity-50 mt-3" />
        </div>
        <div class="p-3 border border-border rounded-2xl backdrop-blur-lg bg-border/30 relative top-[-10vw] lg:top-[-5vw] lg:left-16 left-3 w-full">
            <span class="font-mono bg-foreground/10 py-0.5 px-2 rounded-md text-sm text-chart-1">src/http/api/auth/+root.py</span>
            <span class="text-sm text-chart-2">// Less wiring, more logic.</span>
            <Markdown content={CODE_NAUTICA} className="max-w-6xl w-full mt-3" />
            
        </div>
        
    </div>
    <div class="col-span-1 max-lg:hidden"></div>
</div>

<div class="h-screen"></div>