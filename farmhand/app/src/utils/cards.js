export const cardBackSrc= "https://image.ibb.co/eoVC8o/cardBack.png"

export let defaultMarketArray= [
	1,
	2,
	3,
	4,
	5
]

export const marketMap= {
	0: {
		title: "card back",
		picture: cardBackSrc
	},
	1: {
		title: "Massive Mint",
		type: "seed",
		picture: "https://image.ibb.co/jLgfBK/Massive_Mint.png",
		cost: 3,
		faction: "T",
		primary: {
			plenty: 1
		},
		secondary: {
			plenty: 3		
		}
	},
	2: {
		title: "Pine-Apple-Pear",
		type: "seed",
		picture: "https://image.ibb.co/fOVMke/Pine_Apple_Pair.png",
		cost: 4,
		faction: "T",
		primary: {
			plenty: 2,
			coin: 3,
			waste: 1
		},
		secondary: {
			plenty: 3,
			coin: 1,
			waste: 1		
		}	
	},
	3: {
		title: "Robot Farmhand",
		type: "tool",
		picture: "https://image.ibb.co/eBRGJz/Robot_Farmhand.png",
		cost: 3,
		faction: "T",
		primary: {
			plant: 2,
			harvest: 1,
			waste: 1
		},
		secondary: {		
		}
	},
	4: {
		title: "Sharp Scythe",
		type: "tool",
		picture: "https://image.ibb.co/kxa45e/Sharp_Scythe.png",
		cost: 2,
		faction: "O",
		primary: {
			coin: 1,
			harvest: 1
		},
		secondary: {
			marketScrap: 1		
		}
	},
	5: {
		title: "Sound Management",
		type: "tool",
		picture: "https://image.ibb.co/eiaFBK/Sound_Management.png",
		cost: 4,
		faction: "G",
		primary: {
			coin: 2,
			draw: 1
		},
		secondary: {
			scrap: 1		
		}
	}
}


export const oneStartingHandMap= {
	1: {
		title: "Basic Seed",
		type: "seed",
		picture: "https://image.ibb.co/jmcC8z/Basic_Seed_3.png",
		cost: 0,
		faction: "N",
		primary: {
		},
		secondary: {
			plenty: 1		
		}
	},
	2: {
		title: "Basic Seed",
		type: "seed",
		picture: "https://image.ibb.co/jeNC8z/Basic_Seed_2.png",
		cost: 0,
		faction: "N",
		primary: {
		},
		secondary: {
			plenty: 1		
		}
	},
	3: {
		title: "Basic Seed",
		type: "seed",
		picture: "https://image.ibb.co/dMhqve/Basic_Seed_1.png",
		cost: 0,
		faction: "N",
		primary: {
		},
		secondary: {
			plenty: 1		
		}
	},
	4: {
		title: "Wagon",
		type: "tool",
		picture: "https://image.ibb.co/cJftFe/Wagon_3.png",
		cost: 0,
		faction: "O",
		primary: {
			coin: 2
		},
		secondary: {
			coin: 1		
		}
	},
	5: {
		title: "Innovation",
		type: "tool",
		picture: "https://image.ibb.co/gzVcae/Innovation_1.png",
		cost: 0,
		faction: "T",
		primary: {
			coin: 1,
			marketScrap: 1
		},
		secondary: {
			coin: 1		
		}
	},
	6: {
		title: "Cleanup",
		type: "tool",
		picture: "https://image.ibb.co/m5MTgK/Clean_Up_1.png",
		cost: 0,
		faction: "G",
		primary: {
			coin: 1,
			scrap: 1
		},
		secondary: {
			plant: 1		
		}	
	},
	7: {
		title: "Shovel",
		type: "tool",
		picture: "https://image.ibb.co/dumYFe/Shovel_3.png",
		cost: 0,
		faction: "N",
		primary: {
			or: {
				left: {
					coin: 1 
				},
				right: {
					plant: 1
				}
			}
		},
		secondary: {}
	},
	8: {
		title: "Rusty Scythe",
		type: "tool",
		picture: "https://image.ibb.co/b3aFTz/Rusty_Scythe_1.png",
		cost: 0,
		faction: "N",
		primary: {
			or: {
				left: { 
					coin: 1 
				},
				right: {
					harvest: 1,
					waste: 1
				}
			}
		},
		secondary: {}
	},
	9: {
		title: "Dull Scythe",
		type: "tool",
		picture: "https://image.ibb.co/exGHae/Dull_Scythe_1.png",
		cost: 0,
		faction: "N",
		primary: {
			or: {
				left: {
					coin: 1
				},
				right: {
					harvest: 1,
					waste: 1
				}
			}
		},
		secondary: {}
	},
	10: {
		title: "Fortune",
		type: "tool",
		picture: "https://image.ibb.co/ebpEMK/Fortune_1.png",
		cost: 0,
		faction: "N",
		primary: {
			or: {
				left: {
					draw: 1
				},
				right: {
					opponents: {
						discard: 1
					}
				}
			}
		},
		secondary: {}
	}
}

/*
{
	title: "",
	type: "",
	picture: "",
	cost: ,
	faction: "",
	primary: {
		coin: ,
		plenty: ,
		plant: ,
		harvest: ,
		scrap: ,
		marketScrap: ,
		draw: ,
		discard: ,
		waste: ,

	},
	secondary: {
		coin: ,
		plenty: ,
		plant: ,
		harvest: ,
		scrap: ,
		marketScrap: ,
		draw: ,
		discard: ,
		waste: ,
		
	}
}
*/