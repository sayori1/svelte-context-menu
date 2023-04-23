<script lang="ts">
  import Menu from "./Menu.svelte";

  export let x = 0;
  export let y = 0;
  export let showMenu = false;
  export let auto = true;

  function closeMenu() {
    if (!auto) return;
    showMenu = false;
  }
</script>

{#if showMenu}
  <div>
    <Menu {x} {y} on:click={closeMenu} on:clickoutside={closeMenu}>
      <slot />
    </Menu>
  </div>
{/if}
