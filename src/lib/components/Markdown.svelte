<script lang="ts">
    import { parseMarkdown } from '$lib/scripts/Markdown'
    import { onMount } from 'svelte'

    let { content, className }: { content: string, className?: string } = $props()
    let html = $state('')

    onMount(async () => {
        html = await parseMarkdown(content)
    })
</script>

<div class="prose prose-invert {className}">
    {@html html}
</div>