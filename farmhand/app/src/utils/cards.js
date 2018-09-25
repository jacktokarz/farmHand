export const cardBackSrc= "https://image.ibb.co/eoVC8o/cardBack.png"
export const cropPicture= "https://image.ibb.co/kLAVWU/cropBack.png"
export const wasteKey= 666

export const defaultMarketArray= [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29
]

export const oneStartingDeck= [
	1001,
	1002,
	1003,
	1004,
	1005,
	1006,
	1007,
	1008,
	1009,
	1010
]
export const twoStartingDeck= [
	1011,
	1012,
	1013,
	1014,
	1015,
	1016,
	1017,
	1018,
	1019,
	1020
]
export const threeStartingDeck= [
	1021,
	1022,
	1023,
	1024,
	1025,
	1026,
	1027,
	1028,
	1029,
	1030
]

export const starterFields= [
	2001,
	2002,
	2003,
	2004,
	2005,
	2006,
	2007,
	2008
]

export const cardMap= {
	666: {
		title: "waste",
		type: "tool",
		picture: "https://image.ibb.co/cEoG0z/Waste_Template1.png",
		cost: 0,
		faction: "",
		primary: {},
		secondary: {}
	},
	0: {
		title: "card back",
		picture: "",
		primary: {},
		secondary: {}
	},
	1: {
		title: "Sturdy Plow",
		type: "tool",
		picture: "https://image.ibb.co/haeqkz/Sturdy_Plow.png",
		cost: 3,
		faction: "O",
		primary: {
			plant: 2
		},
		secondary: {
			coin: 2		
		}
	},
	2: {
		title: "Sweet Clover",
		type: "seed",
		picture: "https://image.ibb.co/f2WWse/Sweet_Clover.png",
		cost: 5,
		faction: "G",
		primary: {
			plant: 1
		},
		secondary: {
			plenty: 3,
			plant: 1
		}	
	},
	3: {
		title: "Tractor",
		type: "tool",
		picture: "https://image.ibb.co/ipycXe/Tractor.png",
		cost: 3,
		faction: "T",
		primary: {
			waste: 1,
			harvest: 1,
			coin: 4
		},
		secondary: {
			harvest: 1
		}
	},
	4: {
		title: "Tulip Bulb",
		type: "seed",
		picture: "https://image.ibb.co/gxKUdK/Tulip_Seed.png",
		cost: 3,
		faction: "O",
		primary: {
			coin: 2
		},
		secondary: {
			plenty: 2		
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
	},
	6: {
		title: "Altered Eggplant",
		type: "seed",
		picture: "https://image.ibb.co/gV9Oqe/Altered_Eggplant.png",
		cost: 6,
		faction: "T",
		primary: {
			or: {
				left: {
					coin: 2
				},
				right: {
					coin: 4,
					discard: 1
				}
			}
		},
		secondary: {
			plenty: 4,
			waste: 2
		}
	},	
	7: {
		title: "A Rye",
		type: "seed",
		picture: "https://image.ibb.co/kYq4Ve/A_Rye.png",
		cost: 2,
		faction: "C",
		primary: {
			coin: 2
		},
		secondary: {
			plenty: 1,
			draw: 1,
			attack: {
				discard: 1
			}
		}
	},
	8: {
		title: "Avocado Seed",
		type: "seed",
		picture: "https://image.ibb.co/deTmbK/Avocado_Seed.png",
		cost: 3,
		faction: "G",
		primary: {
			coin: 2,
			harvest: 1
		},
		secondary: {
			plenty: 2,
			plant: 1
		}
	},
	9: {
		title: "Compost",
		type: "tool",
		picture: "https://image.ibb.co/cCTrAe/Compost.png",
		cost: 2,
		faction: "G",
		primary: {
			coin: 2,
			plant: 1
		},
		secondary: {
			plant: 1
		}
	},
	10: {
		title: "Cool Cucumber",
		type: "seed",
		picture: "https://image.ibb.co/fOyPVe/Cool_Cucumber.png",
		cost: 1,
		faction: "G",
		primary: {
			coin: 1,
			draw: 1
		},
		secondary: {
			plenty: 1,
			draw: 1
		}
	},
	11: {
		title: "Corn Seed",
		type: "seed",
		picture: "https://image.ibb.co/dDjbbK/Corn_Seed.png",
		cost: 1,
		faction: "T",
		primary: {
			or: {
				left: {
					coin: 1
				},
				right: {
					coin: 3,
					waste: 1
				}
			}
		},
		secondary: {
			plenty: 1,
			coin: 1,
			waste: 1
		}
	},
	12: {
		title: "All-Natural Farm",
		type: "field",
		picture: "https://image.ibb.co/jZiOo9/All_Natural_Farm.png",
		cost: 6,
		faction: "G",
		primary: {
			plenty: 2,
			plant: 1
		},
		secondary: {
			plenty: 2,
			discard: 1
		}
	},
	13: {
		title: "Historical Plot",
		type: "field",
		picture: "https://image.ibb.co/kb3jT9/Historical_Plot.png",
		cost: 3,
		faction: "C",
		primary: {
			plenty: 1,
			draw: 2
		},
		secondary: {
			plenty: 1
		}
	},
	14: {
		title: "Fertilizer",
		type: "tool",
		picture: "https://image.ibb.co/fZzHFz/Fertilizer_2.png",
		cost: 2,
		faction: "T",
		primary: {
			plenty: 2,
			coin: 1,
			waste: 1
		},
		secondary: {
			coin: 1
		}
	},
	15: {
		title: "Flatbed",
		type: "tool",
		picture: "https://image.ibb.co/bS0M8K/Flatbed.png",
		cost: 2,
		faction: "O",
		primary: {
			draw: 1,
			coin: 3,
			waste: 1
		},
		secondary: {
			coin: 1
		}
	},
	16: {
		title: "Gardening Shears",
		type: "tool",
		picture: "https://image.ibb.co/gEzL2e/Gardening_Shears.png",
		cost: 2,
		faction: "G",
		primary: {
			plant: 1,
			harvest: 1
		},
		secondary: {
			harvest: 1
		}
	},
	17: {
		title: "Hack-N-Slash",
		type: "tool",
		picture: "https://image.ibb.co/gNd8oK/Hack_n_Slash.png",
		cost: 2,
		faction: "C",
		primary: {
			waste: 1,
			harvest: 2
		},
		secondary: {
			harvest: 1
		}
	},
	18: {
		title: "Honeycrisp",
		type: "seed",
		picture: "https://image.ibb.co/bvU9vz/Honeycrisp.png",
		cost: 2,
		faction: "O",
		primary: {
			coin: 2
		},
		secondary: {
			plenty: 1,
			coin: 3
		}
	},
	19: {
		title: "Modest Plot",
		type: "field",
		picture: "https://image.ibb.co/bMHq2e/Modest_Plot.png",
		cost: 3,
		faction: "O",
		primary: {
			coin: 1,
			plenty: 2
		},
		secondary: {
			harvest: 1
		}
	},
	20: {
		title: "Vineyard",
		type: "field",
		picture: "https://image.ibb.co/jhppTK/Vineyard.png",
		cost: 6,
		faction: "O",
		primary: {
			coin: 3,
			plenty: 3
		},
		secondary: {
			coin: 1
		}
	},
	21: {
		title: "Lazer Scythe",
		type: "tool",
		picture: "https://image.ibb.co/mOAJNe/Laser_Scythe.png",
		cost: 4,
		faction: "T",
		primary: {
			harvest: 1,
			plenty: 1
		},
		secondary: {
			coin: 1
		}
	},
	22: {
		title: "Massive Mint",
		type: "seed",
		picture: "https://image.ibb.co/na4jvz/Massive_Mint.png",
		cost: 3,
		faction: "T",
		primary: {
			plenty: 1
		},
		secondary: {
			plenty: 3
		}
	},
	23: {
		title: "Picking Party",
		type: "tool",
		picture: "https://image.ibb.co/n4c9TK/Picking_Party.png",
		cost: 2,
		faction: "G",
		primary: {
			harvest: 1,
			draw: 1
		},
		secondary: {
			coin: 2
		}
	},
	24: {
		title: "Potato Seed",
		type: "seed",
		picture: "https://image.ibb.co/h3nhhe/Potato_Seed.png",
		cost: 1,
		faction: "O",
		primary: {
			coin: 1
		},
		secondary: {
			plenty: 1
		}
	},
	25: {
		title: "Robot Farmhand",
		type: "tool",
		picture: "https://image.ibb.co/iWkPvz/Robot_Farmhand.png",
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
	26: {
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
	27: {
		title: "Sandwich Tomatoes",
		type: "seed",
		picture: "https://image.ibb.co/fvZpTK/Sandwich_Tomatoes.png",
		cost: 4,
		faction: "O",
		primary: {
			coin: 2,
			plenty: 1,
			waste: 1
		},
		secondary: {
			plenty: 3,
			waste: 1
		}
	},
	28: {
		title: "Pine-Apple-Pair",
		type: "seed",
		picture: "https://image.ibb.co/idh18K/Pine_Apple_Pair.png",
		cost: 4,
		faction: "T",
		primary: {
			coin: 3,
			plenty: 2,
			waste: 1
		},
		secondary: {
			plenty: 3,
			waste: 1,
			coin: 1
		}
	},
	29: {
		title: "Wild, Wild Wetlands",
		type: "field",
		picture: "https://image.ibb.co/iJyxyK/Wild_Wild_Wetlands.png",
		cost: 5,
		faction: "C",
		primary: {
			plenty: 3,
			discard: 1
		},
		secondary: {
			plenty: 1,
			attack: {
				discard: 1
			}
		}
	},


	1001: {
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
	1002: {
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
	1003: {
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
	1004: {
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
	1005: {
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
	1006: {
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
	1007: {
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
	1008: {
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
	1009: {
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
	1010: {
		title: "Fortune",
		type: "tool",
		picture: "https://image.ibb.co/ebpEMK/Fortune_1.png",
		cost: 0,
		faction: "C",
		primary: {
			or: {
				left: {
					draw: 1
				},
				right: {
					attack: {
						discard: 1
					}
				}
			}
		},
		secondary: {
			draw: 1
		}
	},
	1011: {
		title: "Basic Seed",
		type: "seed",
		picture: "https://image.ibb.co/jkPEMK/Basic_Seed_6.png",
		cost: 0,
		faction: "N",
		primary: {
		},
		secondary: {
			plenty: 1		
		}
	},
	1012: {
		title: "Basic Seed",
		type: "seed",
		picture: "https://image.ibb.co/ns3Koz/Basic_Seed_4.png",
		cost: 0,
		faction: "N",
		primary: {
		},
		secondary: {
			plenty: 1		
		}
	},
	1013: {
		title: "Basic Seed",
		type: "seed",
		picture: "https://image.ibb.co/mVb5Tz/Basic_Seed_5.png",
		cost: 0,
		faction: "N",
		primary: {
		},
		secondary: {
			plenty: 1		
		}
	},
	1014: {
		title: "Wagon",
		type: "tool",
		picture: "https://image.ibb.co/f0xvTz/Wagon_2.png",
		cost: 0,
		faction: "O",
		primary: {
			coin: 2
		},
		secondary: {
			coin: 1		
		}
	},
	1015: {
		title: "Innovation",
		type: "tool",
		picture: "https://image.ibb.co/fg3fve/Innovation_3.png",
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
	1016: {
		title: "Cleanup",
		type: "tool",
		picture: "https://image.ibb.co/gfJkTz/Clean_Up_3.png",
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
	1017: {
		title: "Shovel",
		type: "tool",
		picture: "https://image.ibb.co/cCMN8z/Shovel_1.png",
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
	1018: {
		title: "Rusty Scythe",
		type: "tool",
		picture: "https://image.ibb.co/bDnJgK/Rusty_Scythe_3.png",
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
	1019: {
		title: "Dull Scythe",
		type: "tool",
		picture: "https://image.ibb.co/epGB1K/Dull_Scythe_3.png",
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
	1020: {
		title: "Fortune",
		type: "tool",
		picture: "https://image.ibb.co/jKkh8z/Fortune_3.png",
		cost: 0,
		faction: "C",
		primary: {
			or: {
				left: {
					draw: 1
				},
				right: {
					attack: {
						discard: 1
					}
				}
			}
		},
		secondary: {
			draw: 1
		}
	},
	1021: {
		title: "Basic Seed",
		type: "seed",
		picture: "https://image.ibb.co/kQFhFz/Basic_Seed_9.png",
		cost: 0,
		faction: "N",
		primary: {
		},
		secondary: {
			plenty: 1		
		}
	},
	1022: {
		title: "Basic Seed",
		type: "seed",
		picture: "https://image.ibb.co/k0YDNe/Basic_Seed_8.png",
		cost: 0,
		faction: "N",
		primary: {
		},
		secondary: {
			plenty: 1		
		}
	},
	1023: {
		title: "Basic Seed",
		type: "seed",
		picture: "https://image.ibb.co/eLGYNe/Basic_Seed_7.png",
		cost: 0,
		faction: "N",
		primary: {
		},
		secondary: {
			plenty: 1		
		}
	},
	1024: {
		title: "Wagon",
		type: "tool",
		picture: "https://image.ibb.co/fnMYNe/Wagon_1.png",
		cost: 0,
		faction: "O",
		primary: {
			coin: 2
		},
		secondary: {
			coin: 1		
		}
	},
	1025: {
		title: "Innovation",
		type: "tool",
		picture: "https://image.ibb.co/bTCUvz/Innovation_2.png",
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
	1026: {
		title: "Cleanup",
		type: "tool",
		picture: "https://image.ibb.co/gwxJoK/Clean_Up_2.png",
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
	1027: {
		title: "Shovel",
		type: "tool",
		picture: "https://image.ibb.co/ce5Gaz/Shovel_2.png",
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
	1028: {
		title: "Rusty Scythe",
		type: "tool",
		picture: "https://image.ibb.co/ioqGaz/Rusty_Scythe_2.png",
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
	1029: {
		title: "Dull Scythe",
		type: "tool",
		picture: "https://image.ibb.co/fv0tNe/Dull_Scythe_2.png",
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
	1030: {
		title: "Fortune",
		type: "tool",
		picture: "https://image.ibb.co/eQuL2e/Fortune_2.png",
		cost: 0,
		faction: "C",
		primary: {
			or: {
				left: {
					draw: 1
				},
				right: {
					attack: {
						discard: 1
					}
				}
			}
		},
		secondary: {
			draw: 1
		}
	},

	1998: {
		title: "Neighborhood Field",
		type: "field",
		picture: "https://image.ibb.co/gq2XU9/Neighborhood_Field.png",
		cost: 0,
		faction: "N",
		primary: {
			special: "Neighborhood Field"
		},
		secondary: {
		}
	},

	2001: {
		title: "Abandoned Plot",
		type: "field",
		picture: "https://image.ibb.co/gWHSfz/Abandoned_Plot.png",
		cost: 2,
		faction: "C",
		primary: {
			plenty: 1,
			draw: 1,
			discard: 1
		},
		secondary: {
			attack: {
				discard: 2
			}
		}
	},
	2002: {
		title: "Makeshift Field",
		type: "field",
		picture: "https://image.ibb.co/gwLDLz/Makeshift_Field.png",
		cost: 2,
		faction: "C",
		primary: {
			plenty: 1,
			draw: 1,
			discard: 1
		},
		secondary: {
			attack: {
				discard: 2
			}
		}
	},
	2003: {
		title: "Botanical Facilities",
		type: "field",
		picture: "https://image.ibb.co/ivKetK/Botanical_Facilities.png",
		cost: 2,
		faction: "T",
		primary: {
			plenty: 2,
			waste: 1
		},
		secondary: {
			coin: 4
		}
	},
	2004: {
		title: "Experimental Field",
		type: "field",
		picture: "https://image.ibb.co/fv0f0z/Experimental_Field.png",
		cost: 2,
		faction: "T",
		primary: {
			plenty: 2,
			waste: 1
		},
		secondary: {
			coin: 4
		}
	},
	2005: {
		title: "Hilltop Field",
		type: "field",
		picture: "https://image.ibb.co/e3kPSe/Hilltop_Field.png",
		cost: 2,
		faction: "O",
		primary: {
			plenty: 1,
			coin: 1
		},
		secondary: {
			plenty: 1,
			plant: 1
		}
	},
	2006: {
		title: "Quaint Field",
		type: "field",
		picture: "https://image.ibb.co/h0X4Se/Quaint_Field.png",
		cost: 2,
		faction: "O",
		primary: {
			plenty: 1,
			coin: 1
		},
		secondary: {
			plenty: 1,
			plant: 1
		}
	},
	2007: {
		title: "Verdant Field",
		type: "field",
		picture: "https://image.ibb.co/bQ3uSe/Verdant_Field.png",
		cost: 2,
		faction: "G",
		primary: {
			cropCount: 2,
			lower: {
				plenty: 1
			},
			higher: {
				plenty: 2,
				coin: 2
			}
		},
		secondary: {
			plenty: 1
		}
	},
	2008: {
		title: "Green Field",
		type: "field",
		picture: "https://image.ibb.co/gD0DLz/Green_Field.png",
		cost: 2,
		faction: "G",
		primary: {
			cropCount: 2,
			lower: {
				plenty: 1
			},
			higher: {
				plenty: 2,
				coin: 2
			}
		},
		secondary: {
			plenty: 1
		}
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