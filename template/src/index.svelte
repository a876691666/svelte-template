<script>
  import * as echarts from "echarts";
  let container;
  import { onMount } from "svelte";

  onMount(() => {
    const chart = echarts.init(container);
    chart.setOption({
      title: { text: "ECharts 入门示例" },
      tooltip: {},
      xAxis: { data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"] },
      yAxis: {},
      series: [{ name: "销量", type: "bar", data: [5, 20, 36, 10, 10, 20] }],
    });
  });
  export let name;
</script>

<main>
  <div bind:this={container} />
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte
    apps.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
