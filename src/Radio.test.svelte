<script lang="ts">
  import { enumify, type Enumified } from "../typescript-utils-suede/enum.js";
  import { Sweater } from "./sweater-vest-suede";
  import Radio, { variants } from "../release/Radio.svelte";
  const decs = enumify(variants);
  type Decoration = Enumified<typeof decs>;

  let group: Decoration = $state("blue600");
</script>

<Sweater body={async () => {}}>
  {#snippet vest(pocket: {})}
    {#each enumify(variants)._values as variant}
      <label class="flex items-center gap-2">
        <Radio
          {...{ [variant]: true }}
          bind:group
          name={variant}
          value={variant}
          custom={{
            /** how to */
            xxx: "blue",
          }}
        />
        {variant}
      </label>
    {/each}
  {/snippet}
</Sweater>
