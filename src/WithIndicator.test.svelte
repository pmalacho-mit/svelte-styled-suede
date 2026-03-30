<script lang="ts">
  import { Sweater } from "./sweater-vest-suede";
  import WithIndicator from "../release/WithIndicator.svelte";
  import Badge from "../release/Badge.svelte";

  const horizontal = ["start", "center", "end"] as const;
  const vertical = ["top", "middle", "bottom"] as const;

  const combinations = horizontal.flatMap((h) =>
    vertical.map((v) => ({ [h]: true, [v]: true })),
  );
</script>

<Sweater config orientation="vertical" />
{#each combinations as setting}
  <Sweater body={async () => {}}>
    {#snippet vest(pocket: {})}
      <div class="m-auto w-max">
        <WithIndicator {...setting}>
          {#snippet indicator()}
            <Badge xs>{Object.keys(setting).join(", ")}</Badge>
          {/snippet}
          <div class="bg-gray-200 rounded-lg w-16 h-16"></div>
        </WithIndicator>
      </div>
    {/snippet}
  </Sweater>
{/each}
