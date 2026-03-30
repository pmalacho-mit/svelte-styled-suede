<script lang="ts">
  import { enumify } from "../typescript-utils-suede/enum.js";
  import { Sweater } from "./sweater-vest-suede";
  import Textarea, { variants } from "../release/TextArea.svelte";
</script>

<Sweater body={async () => {}}>
  {#snippet vest(pocket: {})}
    <Textarea placeholder="default" />
  {/snippet}
</Sweater>
{#each enumify(variants)._values as variant}
  <Sweater body={async () => {}}>
    {#snippet vest(pocket: {})}
      <Textarea {...{ [variant]: true }} placeholder={variant} />
    {/snippet}
  </Sweater>
{/each}
