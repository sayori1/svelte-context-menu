#	Context menu svelte

A svelte component designed for effortless creation of context menus.

# Installation
`npm install --save-dev context-menu-svelte`

## Example
```html
<script>
import {ContextMenu, MenuOption } from "context-menu-svelte";
</script>

<ContextMenu showMenu={true}>
<MenuOption on:click={console.log} text="Add"  />
<MenuDivider />
<MenuOption isDisabled={true} on:click={console.log} text="Go to"  />
</ContextMenu>
```
Additionally, you can customize the context menu's position and enable auto-hide functionality (when clicking outside the menu).

## Usage

To utilize the context menu in a more authentic manner, use like this:
```html
<script>
	let showMenu = false;
	let x = 0;
	let y = 0;
	function requestShowMenu(e){
		showMenu = true;
		x = e.clientX;
		y = e.clientY;
	}
</script>
<div on:contextmenu={requestShowMenu}>Text</div>
<ContextMenu bind:showMenu {x} {y}>
	<MenuOption on:click={console.log} text="Hello world!"/>
</ContextMenu>
```