<script lang="ts">
  import { enumify } from "../typescript-utils-suede/enum.js";
  import { Sweater } from "./sweater-vest-suede";
  import Kbd, { variants } from "../release/Kbd.svelte";
</script>

{#each enumify(variants)._values as variant}
  <Sweater body={async () => {}}>
    {#snippet vest(pocket: {})}
      <Kbd {...{ [variant]: true }}>{variant}</Kbd>
    {/snippet}
  </Sweater>
{/each}
