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
	13
]

export const defaultStartingArray= [
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
			opponents: {
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
	},

	2001: {
		title: "Abandoned Plot",
		type: "field",
		picture: "https://image.ibb.co/gWHSfz/Abandoned_Plot.png",
		cost: 0,
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
		cost: 0,
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
		cost: 0,
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
		cost: 0,
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
		cost: 0,
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
		cost: 0,
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
		cost: 0,
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
		cost: 0,
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