<script lang="ts">
  import { enumify } from "../typescript-utils-suede/enum.js";
  import { Sweater } from "./sweater-vest-suede";
  import Badge, { variants } from "../release/Badge.svelte";
</script>

{#each enumify(variants)._values as variant}
  <Sweater body={async () => {}}>
    {#snippet vest(pocket: {})}
      <Badge {...{ [variant]: true }}>{variant}</Badge>
    {/snippet}
  </Sweater>
{/each}
