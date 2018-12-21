export const cardBackSrc= "https://image.ibb.co/eoVC8o/cardBack.png"
export const cropPicture= "https://image.ibb.co/kLAVWU/cropBack.png"
export const grayBoxImg= "https://i.ibb.co/dWSDsZ3/gray-news-box.png"
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

export const communityFields= [
	1997,
	1998,
	1999
]


export const choosableColors= [
	"blanchedalmond",
	"cadetblue",
	"coral",
	"cornflowerblue",
	"darkgoldenrod",
	"darkgreen",
	"darkkhaki",
	"darkorange",
	"darkorchid",
	"darksalmon",
	"darktorquise",
	"deeppink",
	"deepskyblue",
	"lightcyan",
	"lightgoldenrodyellow",
	"lightpink",
	"lightsteelblue",
	"mediumseagreen",
	"mediumslateblue",
	"yellow"
]


export const cardMap= {
	666: {
		title: "Waste",
		type: "tool",
		picture: "https://image.ibb.co/cEoG0z/Waste-Template1.png",
		cost: 0,
		faction: "",
		primary: {},
		secondary: {}
	},
	0: {
		title: "card back",
		picture: "",
		cost: 100,
		primary: {},
		secondary: {}
	},
	1: {
		title: "Sturdy Plow",
		type: "tool",
		picture: "https://i.ibb.co/t4SXwvm/Sturdy-Plow.png",
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
		picture: "https://i.ibb.co/4TGcffs/Sweet-Clover.png",
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
		picture: "https://i.ibb.co/16Nvn4n/Tractor.png",
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
		picture: "https://i.ibb.co/Bqc3NXx/Tulip-Seed.png",
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
		picture: "https://i.ibb.co/rGJRDh6/Sound-Management.png",
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
		picture: "https://i.ibb.co/xGTc6SL/Altered-Eggplant.png",
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
		picture: "https://i.ibb.co/kh1jdQ9/A-Rye.png",
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
		picture: "https://i.ibb.co/WDT9Bm7/Avocado-Seed.png",
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
		picture: "https://i.ibb.co/pQ2Gpc4/Compost.png",
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
		picture: "https://i.ibb.co/6RybQ6n/Cool-Cucumber.png",
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
		picture: "https://i.ibb.co/Rpw2rcm/Corn-Seed.png",
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
		picture: "https://i.ibb.co/51M8JhL/All-Natural-Farm.png",
		cost: 6,
		faction: "G",
		primary: {
			plenty: 2,
			plant: 1
		},
		secondary: {
			plenty: 2,
			draw: 1
		}
	},
	13: {
		title: "Historical Plot",
		type: "field",
		picture: "https://i.ibb.co/GpwpxMM/Historical-Plot.png",
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
		picture: "https://i.ibb.co/mJ2VQPy/Fertilizer-2.png",
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
		picture: "https://i.ibb.co/Bff3WB0/Flatbed.png",
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
		picture: "https://i.ibb.co/z4kCq53/Gardening-Shears.png",
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
		picture: "https://i.ibb.co/c6y4TX5/Hack-n-Slash.png",
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
		picture: "https://i.ibb.co/tpnDZKL/Honeycrisp.png",
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
		picture: "https://i.ibb.co/FxGnpTG/Modest-Plot.png",
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
		picture: "https://i.ibb.co/HNqr5RV/Vineyard.png",
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
		picture: "https://i.ibb.co/FB7fzLL/Laser-Scythe.png",
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
		picture: "https://i.ibb.co/8jNmFy6/Massive-Mint.png",
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
		picture: "https://i.ibb.co/cgrVSdh/Picking-Party.png",
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
		picture: "https://i.ibb.co/cxtFH5Z/Potato-Seed.png",
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
		picture: "https://i.ibb.co/ysVR5yz/Robot-Farmhand.png",
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
		picture: "https://i.ibb.co/CKYQwdm/Sharp-Scythe.png",
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
		picture: "https://i.ibb.co/02G29Ht/Sandwich-Tomatoes.png",
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
		picture: "https://i.ibb.co/1zj5Wvz/Pine-Apple-Pear.png",
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
		picture: "https://i.ibb.co/fH0syhL/Wild-Wild-Wetlands.png",
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
	30: {
		title: "Industrial Field",
		type: "field",
		picture: "https://i.ibb.co/QdMqZRg/Industrial-Field.png",
		cost: 3,
		faction: "T",
		primary: {
			or: {
				left: {
					plenty: 2
				},
				right: {
					plenty: 3,
					waste: 1
				}
			}
		},
		secondary: {
			plant: 1
		}
	},
	31: {
		title: "Pesticide-Free Field",
		type: "field",
		picture: "https://i.ibb.co/jTDLFhp/Pesticide-Free-Field.png",
		cost: 4,
		faction: "G",
		primary: {
			plenty: 4,
			cropDiscard: 1
		},
		secondary: {
			plant: 1
		}
	},
	32: {
		title: "Refinery",
		type: "field",
		picture: "https://i.ibb.co/2ZnpGkB/Refinery.png",
		cost: 4,
		faction: "O",
		primary: {
			special: "Refinery"
		},
		secondary: {
		}
	},
	34: {
		title: "Nature Provides",
		type: "tool",
		picture: "https://i.ibb.co/h8wTnr6/Nature-Provides.png",
		cost: 5,
		faction: "G",
		primary: {
			special: "Nature Provides"
		},
		secondary: {
			marketScrap: 1
		}
	},
	35: {
		title: "Black Market Seed",
		type: "seed",
		picture: "https://i.ibb.co/R0Z6GKM/Black-Market-Seed.png",
		cost: 2,
		faction: "C",
		primary: {
			special: "Black Market Seed"
		},
		secondary: {
			special: "Black Market Seed"
		}
	},
	36: {
		title: "Recycle",
		type: "tool",
		picture: "https://i.ibb.co/FxfYhWq/Recycle.png",
		cost: 3,
		faction: "G",
		primary: {
			special: "Recycle"
		},
		secondary: {
			scrap: 1
		}
	},
	37: {
		title: "Wildflower",
		type: "seed",
		picture: "https://i.ibb.co/h2B1yC8/Wildflower.png",
		cost: 3,
		faction: "C",
		primary: {
			or: {
				left: {
					coin: 2,
					draw: 1
				},
				right: {
					draw: 2
				}
			}
		},
		secondary: {
			special: "Wildflower"
		}
	},



	1001: {
		title: "Basic Seed",
		type: "seed",
		picture: "https://i.ibb.co/bgPqk1p/Basic-Seed-1.png",
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
		picture: "https://i.ibb.co/vsKxSWY/Basic-Seed-2.png",
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
		picture: "https://i.ibb.co/GckbqBx/Basic-Seed-3.png",
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
		picture: "https://i.ibb.co/qd8BR1R/Wagon-1.png",
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
		picture: "https://i.ibb.co/pdQkxdT/Innovation-1.png",
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
		picture: "https://i.ibb.co/VYTNmj9/Clean-Up-1.png",
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
		picture: "https://i.ibb.co/wyvFS2J/Shovel-1.png",
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
		picture: "https://i.ibb.co/rGXhbKv/Rusty-Scythe-1.png",
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
		picture: "https://i.ibb.co/1zqmfTB/Dull-Scythe-1.png",
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
		picture: "https://i.ibb.co/9v9cVZz/Fortune-1.png",
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
		picture: "https://i.ibb.co/HY61xVn/Basic-Seed-4.png",
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
		picture: "https://i.ibb.co/qmF2Yk9/Basic-Seed-5.png",
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
		picture: "https://i.ibb.co/grqY4WD/Basic-Seed-6.png",
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
		picture: "https://i.ibb.co/2v6H8Fd/Wagon-2.png",
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
		picture: "https://i.ibb.co/4YqDDwS/Innovation-2.png",
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
		picture: "https://i.ibb.co/9H0xsjs/Clean-Up-2.png",
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
		picture: "https://i.ibb.co/NTb13jr/Shovel-2.png",
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
		picture: "https://i.ibb.co/ygrzrjn/Rusty-Scythe-2.png",
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
		picture: "https://i.ibb.co/CtLsth3/Dull-Scythe-2.png",
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
		picture: "https://i.ibb.co/MsYfMP4/Fortune-2.png",
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
		picture: "https://i.ibb.co/q9xVYXH/Basic-Seed-7.png",
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
		picture: "https://i.ibb.co/Bt8CydN/Basic-Seed-8.png",
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
		picture: "https://i.ibb.co/SK0vp3m/Basic-Seed-9.png",
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
		picture: "https://i.ibb.co/TcHYFh7/Wagon-3.png",
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
		picture: "https://i.ibb.co/X8qHyWW/Innovation-3.png",
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
		picture: "https://i.ibb.co/BjZzYSj/Clean-Up-3.png",
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
		picture: "https://i.ibb.co/SJsjyxp/Shovel-3.png",
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
		picture: "https://i.ibb.co/6XfV2R9/Rusty-Scythe-3.png",
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
		picture: "https://i.ibb.co/6vbBx2N/Dull-Scythe-3.png",
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
		picture: "https://i.ibb.co/QHQDvc6/Fortune-3.png",
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

	1997: {
		title: "Neighborhood Field",
		type: "field",
		picture: "https://i.ibb.co/MBP2Kxh/Neighborhood-Field.png",
		cost: 0,
		faction: "N",
		primary: {
			special: "Neighborhood Field"
		},
		secondary: {
		}
	},
	1998: {
		title: "Local Graveyard",
		type: "field",
		picture: "https://i.ibb.co/Z1B4qqf/Local-Graveyard.png",
		cost: 0,
		faction: "N",
		primary: {
			special: "Local Graveyard"
		},
		secondary: {
		}
	},
	1999: {
		title: "Treasure Trove",
		type: "field",
		picture: "https://i.ibb.co/D89jZt8/Treasure-Trove.png",
		cost: 0,
		faction: "N",
		primary: {
			special: "Treasure Trove"
		},
		secondary: {
		}
	},

	2001: {
		title: "Abandoned Plot",
		type: "field",
		picture: "https://i.ibb.co/X8gTChm/Abandoned-Plot.png",
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
		picture: "https://i.ibb.co/D1gnCPC/Makeshift-Field.png",
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
		picture: "https://i.ibb.co/kKrxdpM/Botanical-Facilities.png",
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
		picture: "https://i.ibb.co/JBf7vvx/Experimental-Field.png",
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
		picture: "https://i.ibb.co/h7kJDdK/Hilltop-Field.png",
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
		picture: "https://i.ibb.co/bLSNTvz/Quaint-Field.png",
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
		picture: "https://i.ibb.co/zVsf8Ng/Verdant-Field.png",
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
		picture: "https://i.ibb.co/Fq9ddsN/Green-Field.png",
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