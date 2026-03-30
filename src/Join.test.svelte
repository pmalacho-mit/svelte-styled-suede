<script lang="ts">
  import { enumify } from "../typescript-utils-suede/enum.js";
  import { Sweater } from "./sweater-vest-suede";
  import Join, { variants } from "../release/Join.svelte";
</script>

{#each enumify(variants)._values as decoration}
  {#each [false, true] as condition}
    <Sweater body={async () => {}}>
      {#snippet vest(pocket: {})}
        <Join {...{ [decoration]: condition }}>
          <div class="px-4 py-2 bg-gray-200">A ({decoration}: {condition})</div>
          <div class="px-4 py-2 bg-gray-200">B ({decoration}: {condition})</div>
          <div class="px-4 py-2 bg-gray-200">C ({decoration}: {condition})</div>
        </Join>
      {/snippet}
    </Sweater>
  {/each}
{/each}
