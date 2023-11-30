const agents = [
    {
        name: "Raze",
        role: "Duelist",
        description: "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of 'boom'",
        image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6fef56a8182d0a81/5ebf2c2798f79d6925dbd6b4/V_AGENTS_587x900_ALL_Raze_2.png"
    },
    {
        name: "Brimstone",
        role: "Controller",
        description: "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.",
        image:"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png"
    },
    {
        name: "Phoenix",
        role: "Duelist",
        description: "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
        image:"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png"
    },
    {
        name: "Sage",
        role: "Sentinel",
        description: "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
        image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79f59cdf-39ad-4360-adf1-5ce480305c1c/ddyto5h-5911dd1e-b1a6-4bdb-98b7-450fd68c046d.png/v1/fit/w_587,h_900/valorant_agent_sage_by_nautox1x_ddyto5h-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNzlmNTljZGYtMzlhZC00MzYwLWFkZjEtNWNlNDgwMzA1YzFjXC9kZHl0bzVoLTU5MTFkZDFlLWIxYTYtNGJkYi05OGI3LTQ1MGZkNjhjMDQ2ZC5wbmciLCJ3aWR0aCI6Ijw9NTg3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9jzll3Zf7fY4wWZtzrSYcoqzU3emKG5AVfpYkQEfXoo"
    },
    {
        name: "Sova",
        role: "Initiator",
        description: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless precision. His custom bow and scouting abilities ensure that even if you run, you cannot hide.",
        image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79f59cdf-39ad-4360-adf1-5ce480305c1c/ddytnqb-bc9b42f3-988e-4d7a-8e57-505ae6fc0d91.png/v1/fit/w_587,h_900/valorant_agents_sova_by_nautox1x_ddytnqb-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNzlmNTljZGYtMzlhZC00MzYwLWFkZjEtNWNlNDgwMzA1YzFjXC9kZHl0bnFiLWJjOWI0MmYzLTk4OGUtNGQ3YS04ZTU3LTUwNWFlNmZjMGQ5MS5wbmciLCJ3aWR0aCI6Ijw9NTg3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ELjqbvGb8fg87Gpqz6G_6dElvunTt8LButXrih_nh3s"
    },
    {
        name: "Viper",
        role: "Controller",
        description: "The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey, her mindgames surely will.",
        image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79f59cdf-39ad-4360-adf1-5ce480305c1c/ddyto6r-5d4dd684-cf72-428f-abfb-c3e1fddef51d.png/v1/fit/w_587,h_900/valorant_agent_viper_by_nautox1x_ddyto6r-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNzlmNTljZGYtMzlhZC00MzYwLWFkZjEtNWNlNDgwMzA1YzFjXC9kZHl0bzZyLTVkNGRkNjg0LWNmNzItNDI4Zi1hYmZiLWMzZTFmZGRlZjUxZC5wbmciLCJ3aWR0aCI6Ijw9NTg3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.B4IQeaukBKw5bH-CFgA7BCrdHvIon-SKmikkCjMqeSw"
    },
    {
        name: "Cypher",
        role: "Sentinel",
        description: "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
        image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79f59cdf-39ad-4360-adf1-5ce480305c1c/ddytnx9-9049c862-16d0-48e3-85e2-034242a915f1.png/v1/fit/w_587,h_900/valorant_agent_cypher_by_nautox1x_ddytnx9-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNzlmNTljZGYtMzlhZC00MzYwLWFkZjEtNWNlNDgwMzA1YzFjXC9kZHl0bng5LTkwNDljODYyLTE2ZDAtNDhlMy04NWUyLTAzNDI0MmE5MTVmMS5wbmciLCJ3aWR0aCI6Ijw9NTg3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5upJIf9iYflcnYqyezn0fdJyIykRaB6seRHURnVwlys"
    },
    {
        name: "Reyna",
        role: "Duelist",
        description: "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.        ",
        image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79f59cdf-39ad-4360-adf1-5ce480305c1c/ddyto41-af55a363-f630-413d-8a61-da884b5d6028.png/v1/fit/w_587,h_900/valorant_agent_reyna_by_nautox1x_ddyto41-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNzlmNTljZGYtMzlhZC00MzYwLWFkZjEtNWNlNDgwMzA1YzFjXC9kZHl0bzQxLWFmNTVhMzYzLWY2MzAtNDEzZC04YTYxLWRhODg0YjVkNjAyOC5wbmciLCJ3aWR0aCI6Ijw9NTg3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.U3FDl-e0FbsNpriC7Vas24WRkjvBmzD7AfOcGHbHvU8"
    },
    {
        name: "Jett",
        role: "Duelist",
        description: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.        ",
        image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79f59cdf-39ad-4360-adf1-5ce480305c1c/ddytnyw-e9d9985c-fd87-4574-9b01-3b1fb4e52ad2.png/v1/fit/w_587,h_900/valorant_agent_jett_by_nautox1x_ddytnyw-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNzlmNTljZGYtMzlhZC00MzYwLWFkZjEtNWNlNDgwMzA1YzFjXC9kZHl0bnl3LWU5ZDk5ODVjLWZkODctNDU3NC05YjAxLTNiMWZiNGU1MmFkMi5wbmciLCJ3aWR0aCI6Ijw9NTg3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.U0Zx_aXMZ4Ej9T7BO5MWULM49RBu2xP7z49-o7-9v84"
    },
    {
        name: "Breach",
        role: "Initiator",
        description: "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground and make you have eye damage. The damage and disruption he inflicts ensures no fight is ever fair.",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79f59cdf-39ad-4360-adf1-5ce480305c1c/ddytnt5-5dbd5785-b1d1-444d-98ae-fe313af58b71.png/v1/fit/w_587,h_900/valorant_agent_breach_by_nautox1x_ddytnt5-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNzlmNTljZGYtMzlhZC00MzYwLWFkZjEtNWNlNDgwMzA1YzFjXC9kZHl0bnQ1LTVkYmQ1Nzg1LWIxZDEtNDQ0ZC05OGFlLWZlMzEzYWY1OGI3MS5wbmciLCJ3aWR0aCI6Ijw9NTg3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3W1f6A5ff-aJCgJWune_xxQHRg1k3DRdrDZmqPUHPu4",
    },
    {
        name: "Skye",
        role: "Initiator",
        description: "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, making them eye damage, and her power to heal others.",
        image:"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt302fcb2b9628c376/5f7fa6ff8db9ea0f149ece0a/V_AGENTS_587x900_ALL_Skye.png"
    },
    {
        name: "Astra",
        role: "Controller",
        description: "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move. Also good at sucky sucky       ",
        image:"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5599d0d810824279/6036ca30ce4a0d12c3ec1dfa/V_AGENTS_587x900_Astra.png"
    },
    {
        name: "Neon",
        role: "Duelist",
        description: "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
        image:"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8093ba7b5e84ed05/61d8a63ddea73a236fc56d12/Neon_KeyArt-Web.png",
    },
    {
        name: "Fade",
        role: "Initiator",
        description: "Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3a2f1c15-7be2-4b5b-8dc1-9f5b69794dd0/df3y2zm-aeb717be-c5c7-4801-8d71-1c8ddd41c872.png/v1/fill/w_683,h_1170/fade_valorant_agent_by_kanotwentyone_df3y2zm-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE5MiIsInBhdGgiOiJcL2ZcLzNhMmYxYzE1LTdiZTItNGI1Yi04ZGMxLTlmNWI2OTc5NGRkMFwvZGYzeTJ6bS1hZWI3MTdiZS1jNWM3LTQ4MDEtOGQ3MS0xYzhkZGQ0MWM4NzIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.y7KSWamNQSQH4S2AmjYnV7L8FhiXSOFPVNwf4oaEkhw",
    },
    {
        name: "Yoru",
        role: "Duelist",
        description: "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
        image:"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd4080f8efb365751/5ff5660bb47cdf7fc7d6c3dc/V_AGENTS_587x900_yoru.png",
    },
    {
        name: "KAYO",
        role: "Initiator",
        description: "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to Suppress enemy abilities dismantles his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
        image:"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5aefeb26bee12c8/60ca5aa30ece0255888d7faa/KAYO_KeyArt_587x900.png",
    },
    {
        name: "Harbor",
        role: "Controller",
        description: "Hailing from India’s coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies, or pummel those that oppose him.",
        image:"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt81e8a3e8c7beeaf3/634894a15e281916980f655b/Harbor_KeyArt-web.png",
    },
    {
        name: "Killjoy",
        role: "Sentinel",
        description: "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
        image:"https://i.imgur.com/l1tbc6R.png",
    },
    {
        name: "Chamber",
        role: "Sentinel",
        description: "Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold and pick off enemies from afar, contingency built for every plan.",
        image:"https://i.imgur.com/jLGvSqn.png",
    },
    {
        name: "Omen",
        role: "Controller",
        description: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
        image:"https://i.imgur.com/FUKpAru.png",
    },
]

export {agents};