<script lang="ts">
	import CharacterCard from "./components/CharacterCard.svelte";
	import { Character, Emote, Gender } from "./classes";
	import {
		FASTDesignSystemProvider,
		FASTButton,
		FASTTabs,
		FASTTab,
		FASTTabPanel,
		FASTDivider,
	} from "@microsoft/fast-components";

	{
		FASTDesignSystemProvider;
		FASTButton;
		FASTTabs;
		FASTTab;
		FASTTabPanel;
		FASTDivider;
	}

	let randomCharacter = new Character();
	randomCharacter.id = "maya-fey";
	randomCharacter.name = "Maya Fey";
	randomCharacter.gender = Gender.Female;
	randomCharacter.description = "Mia Fey's sister. A spirit medium in training.";
	randomCharacter.profile_picture = "https://static.wikia.nocookie.net/aceattorney/images/3/38/Maya_Fey_Mugshot_SD.png";

	let randomCharacter2 = new Character();
	randomCharacter2.id = "mia-fey";
	randomCharacter2.name = "Mia Fey";
	randomCharacter2.gender = Gender.Female;
	randomCharacter2.description = "Chief Attorney at Fey & Co.. My boss, and a very good defense attorney.";
	randomCharacter2.profile_picture="https://static.wikia.nocookie.net/aceattorney/images/3/36/Mia_Fey_Mugshot_SD.png"

	let characters: {[id: string]: Character} = {};
	characters[randomCharacter.id] = randomCharacter;
	characters[randomCharacter2.id] = randomCharacter2;
	
	var intervalId = window.setInterval(function(){
		console.log(characters);
	}, 5000);

	var i = 0;

</script>

<fast-design-system-provider use-defaults>
	<fast-tabs>
		<fast-tab slot="tab">Characters</fast-tab>
		<fast-tab-panel slot="tabpanel">
			{#each Object.entries(characters) as [key, _]}
				<CharacterCard bind:character={characters[key]} bind:characterMap={characters}></CharacterCard>
			{/each}
		</fast-tab-panel>

		<fast-tab slot="tab">Evidences</fast-tab>
		<fast-tab-panel slot="tabpanel">Tab panel 2</fast-tab-panel>

		<fast-tab slot="tab">Locations</fast-tab>
		<fast-tab-panel slot="tabpanel">Tab panel 3</fast-tab-panel>

		<fast-tab slot="tab">Popups</fast-tab>
		<fast-tab-panel slot="tabpanel">Tab panel 4</fast-tab-panel>

		<fast-tab slot="tab">Music</fast-tab>
		<fast-tab-panel slot="tabpanel">Tab panel 5</fast-tab-panel>

		<fast-tab slot="tab">Sounds</fast-tab>
		<fast-tab-panel slot="tabpanel">Tab panel 6</fast-tab-panel>
	</fast-tabs>
</fast-design-system-provider>

<style>
	/* main {
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
	*/

	fast-design-system-provider {
		height: 100%;
	}

	/*
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}*/
</style>
