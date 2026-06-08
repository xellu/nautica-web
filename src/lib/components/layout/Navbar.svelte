<script lang="ts">
    import Button from "../ui/button/button.svelte";

    import { onMount } from "svelte";
    import { fade, scale, slide } from "svelte/transition";

    import { scrollY } from "$lib/scripts/Scroll";
    
    
    let y: number = $state(0)
    scrollY.subscribe((value) => { y = value })

    let { padding }: {padding?: boolean} = $props();

    let openDrawer: string | null = $state(null);
    let prevDrawer: string | null = $state(null);
    let hideDrawer: boolean = $state(false);

    const LINKS = [
        {
            url: "#",
            name: "Why Nautica",
            id: "why"
        },
        {
            url: "#",
            name: "Product",
            id: "product"
        },
        {
            url: "#",
            name: "Developers",
            id: "devs"
        }
    ]

    const USE_CASES = [
        { url: "#", name: "Rest APIs" },
        { url: "#", name: "Microservices" },
        { url: "#", name: "Data Pipelines" },
        { url: "#", name: "Bots" },
    ]

    const COMPARISONS = [
        {url: "#", name: "Nautica vs FastAPI"},
        {url: "#", name: "Nautica vs Flask"},
        {url: "#", name: "Nautica vs Django"}
    ]

    const FEATURES_1 = [
        {url: "#", name: "Plugins"},
        {url: "#", name: "HTTP Server"},
        {url: "#", name: "Logging"},
        {url: "#", name: "Scheduling"},
    ]

    const FEATURES_2 = [
        {url: "#", name: "Runtime Management"},
        {url: "#", name: "Web Sockets"},
        {url: "#", name: "Config System"},
        {url: "#", name: "Interface"},
    ]

    const RESOURCES = [
        {url: "#", name: "Documentation"},
        {url: "#", name: "Releases"},
        {url: "#", name: "Github"},    
    ]

    const QUICK_REF = [
        {url: "#", name: "Get Started"},
        {url: "#", name: "Installation"},
        {url: "https://napm.xellu.xyz/", name: "Package Registry"},
    ]

    onMount(() => {
        document.body.addEventListener("mouseover", (event) => {
            if (event.target) {
                let target: HTMLElement = event.target as HTMLElement;
                let id = target.id;
                let found = false;
                
                if (target.classList.contains("prevent-close")) { return; }
                
                console.log(id)

                LINKS.forEach((l) => {
                    if (`${l.id}-control` == id || l.id == id) {
                        found = true
                        return
                    }
                })

                prevDrawer = openDrawer;
                openDrawer = found ? id.replace("-control", "") : null

                if (prevDrawer != null && openDrawer != prevDrawer && !hideDrawer) {
                    hideDrawer = true;
                    setTimeout(() => { hideDrawer = false }, 150)
                }
            }
        })
    })
</script>

<div class="w-screen grid grid-cols-3 lg:grid-cols-6 fixed top-0 {y > 1 ? 'backdrop-blur-2xl' : ''} {openDrawer ? 'bg-background' : (y > 1 ? 'bg-sidebar/90' : '')} duration-500 z-40 max-lg:px-5 {openDrawer ? 'border-b border-border' : ''}">

    <div class="absolute w-full inset-0 grid grid-cols-3 lg:grid-cols-6 max-lg:border-x border-border {y > 1 ? 'opacity-0' : ''} duration-500 mt-16 max-lg:hidden">
        <div class="lg:col-span-1"></div>
        <div class="col-span-4 h-px bg-linear-to-r from-transparent from-10% via-border to-90% to-transparent {openDrawer ? 'scale-0' : ''} duration-300"></div>
        <div></div>
    </div>

    <div class="col-span-1 max-lg:hidden prevent-close"></div>

    <div class="col-span-4 max-lg:col-span-3 flex h-16 items-center justify-between prevent-close">
        <!-- branding -->
        <a href="/" data-sveltekit-preload-data class="flex gap-2 items-center group" title="Nautica API">
            <img src="/brand/icon{y <= 1 || openDrawer ? '' : '-mono'}.svg" alt="" draggable="false" class="h-8 group-hover:rotate-180 group-hover:scale-125 duration-750 {openDrawer ? 'rotate-359' : ''}">
            <img src="/brand/text{y <= 1 || openDrawer ? '' : '-mono'}.svg" alt="" draggable="false" class="h-5">
        </a>

        <!-- links -->
        <div class="flex hover:text-ring duration-300 max-lg:hidden">
            {#each LINKS as l}
                <a href="{l.url}" class="p-8 hover:text-white duration-150" id="{l.id}-control">{l.name}</a>
            {/each}
        </div>

        <div class="flex items-center gap-3">
            <a href="/docs/get-started" data-sveltekit-preload-data> <Button>Get Started</Button> </a>
        </div>
    </div>

        
    <div class="col-span-1 max-lg:hidden"></div>
</div>
{#if padding}
    <div class="pb-16"></div>
{/if}

{#if openDrawer}
<div class="w-screen grid grid-cols-3 lg:grid-cols-6 fixed top-16 bg-background duration-500 z-30 max-lg:hidden" in:slide out:slide={{delay: 50}}>

    <div class="absolute w-full inset-0 grid grid-cols-3 lg:grid-cols-6 max-lg:border-x border-border mt-64" in:fade>
        <div class="col-span-6 h-px bg-linear-to-r from-transparent from-10% via-border to-90% to-transparent"></div>
    </div>

    <div class="col-span-1 prevent-close h-64"></div>

    
    <div class="col-span-1 flex justify-end items-center pr-4 text-2xl font-thin prevent-close {hideDrawer ? 'scale-90 text-chart-1' : ''} duration-300" in:slide={{delay: 150}} out:slide>
        {#if openDrawer == "why"}
            <p class="prevent-close">Stop assembling from scratch. Build on top of something that's already wired together.</p>
        {:else if openDrawer == "product"}
            <p class="prevent-close">A backend platform that handles the runtime, so you can focus on building.</p>
        {:else if openDrawer == "devs"}
            <p class="prevent-close">Open source, well documented, and built to be extended.</p>

        {/if}
    </div>


    <div class="pl-8 col-span-4 flex gap-16 h-64 prevent-close pt-10 {hideDrawer ? 'opacity-20' : ''} overflow-hidden duration-150" in:fade={{delay: 150}} out:fade>
        
        <!-- why -->
        {#if openDrawer == "why"}
            <div class="flex flex-col gap-1 prevent-close">
                <h3 class="font-serif italic mb-3 prevent-close text-white/70">Compare Nautica</h3>
                {#each COMPARISONS as l}
                    <a href="{l.url}" class="hover:underline prevent-close text-xl font-semibold">{l.name}</a>
                {/each}
            </div>
           
             <div class="prevent-close max-w-64">
                <h3 class="font-serif italic mb-3 prevent-close text-white/70">See Nautica in Action</h3>
                <img src="/brand/registry.svg" alt="" class="h-12 prevent-close">
                <p class="mt-3 text-sm prevent-close italic text-chart-2">Our Package registry is built on top of Nautica itself.</p>

                <div class="flex gap-3 prevent-close mt-3">
                    <a href="https://napm.xellu.xyz/" target="_blank" class="prevent-close hover:underline">Website</a>
                    <span class="prevent-close">•</span>
                    <a href="https://github.com/xellu/nautica-package-manager" target="_blank" class="prevent-close hover:underline">Source Code</a>
                </div>
            </div>

            <div class="prevent-close">
                <h3 class="font-serif italic mb-3 prevent-close text-white/70">Let's talk numbers</h3>

                <div class="flex gap-3 border-b border-chart-4 p-2 prevent-close">
                    <p class="prevent-close font-bold w-24">Nautica 3</p>
                    <p class="w-32 prevent-close">2271 reqs/sec</p>
                    <p class="w-24 prevent-close">4.4ms ping</p>
                    <p class="prevent-close italic opacity-20">Baseline</p>
                </div>
                
                <div class="flex gap-3 border-b border-chart-4 p-2 prevent-close opacity-80">
                    <p class="prevent-close font-bold w-24">FastAPI</p>
                    <p class="w-32 prevent-close">2259 reqs/sec</p>
                    <p class="w-24 prevent-close">4.4ms ping</p>
                    <p class="prevent-close italic">0.5% Slower</p>
                </div>
                
                <div class="flex gap-3 p-2 prevent-close opacity-80">
                    <p class="prevent-close font-bold w-24">Flask</p>
                    <p class="w-32 prevent-close">75 reqs/sec</p>
                    <p class="w-24 prevent-close">132ms ping</p>
                    <p class="prevent-close italic">96% Slower</p>
                </div>

            </div>
            
        <!-- product -->
        {:else if openDrawer == "product"}
            <div class="flex flex-col gap-1 prevent-close">
                <h3 class="font-serif italic mb-3 prevent-close text-white/70">Use Cases</h3>
                {#each USE_CASES as l}
                    <a href="{l.url}" class="hover:underline prevent-close text-xl">{l.name}</a>
                {/each}
            </div>

            <div class="flex flex-col gap-1 prevent-close">
                <h3 class="font-serif italic mb-3 prevent-close text-white/70">Features</h3>
                <div class="flex gap-8 prevent-close">
                    <div class="flex flex-col gap-1 prevent-close">
                        {#each FEATURES_1 as l}
                            <a href="{l.url}" class="hover:underline prevent-close text-xl">{l.name}</a>
                        {/each}
                    </div>
                    <div class="flex flex-col gap-1 prevent-close">
                        {#each FEATURES_2 as l}
                            <a href="{l.url}" class="hover:underline prevent-close text-xl">{l.name}</a>
                        {/each}
                    </div>
                </div>
            </div>

            
        {:else if openDrawer == "devs"}
            <div class="flex flex-col gap-1 prevent-close">
                <h3 class="font-serif italic mb-3 prevent-close text-white/70">Resources</h3>
                {#each RESOURCES as l}
                    <a href="{l.url}" class="hover:underline prevent-close text-xl">{l.name}</a>
                {/each}
            </div>

            <div class="flex flex-col gap-1 prevent-close">
                <h3 class="font-serif italic mb-3 prevent-close text-white/70">Quick References</h3>
                {#each QUICK_REF as l}
                    <a href="{l.url}" class="hover:underline prevent-close text-xl">{l.name}</a>
                {/each}
            </div>
        {/if}
    </div>

        
</div>

<div class="z-10 fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm" in:fade out:fade={{duration: 150}}></div>
{/if}

<!-- <p>Drawer: {openDrawer}</p> -->