<script lang="ts">
  import { enumify } from "../typescript-utils-suede/enum.js";
  import { Sweater } from "./sweater-vest-suede";
  import Button, { variants } from "../release/Button.svelte";
</script>

{#each enumify(variants)._values as variant}
  <Sweater body={async () => {}}>
    {#snippet vest(pocket: {})}
      <Button {...{ [variant]: true }}>{variant}</Button>
    {/snippet}
  </Sweater>
{/each}
