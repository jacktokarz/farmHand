import {fromMatch} from '../actions'
import {} from '../utils'


const initState= 
	{
		cardModalActions: ["Example"],
		cardModalVis: "none",
		cardModalData: {},
		cardModalId: 0,
		choiceModalOptions: ["Example"],
		choiceModalParentInfo: "",
		choiceModalRequired: false,
		choiceModalTitle: "",
		choiceModalVis: "none",
		communityField: {id: 1997, crops: [], available: true},
		currentPlayerNumber: 1,
		marketArray: [0,0,0,0,0,0],
		matchLog: [],
		matchPath: "/matches/0",
		numberOfPlayers: 3,
		playerOne:
			{
				user: "",
				color: "floralwhite",
				activatedFactions: [],
				counters: {plenty: 0, coin: 0, plant: 0, harvest: 0, scrap: 0, marketScrap: 0},
				deck: [0],
				discard: [0],
				fields: [{id: 0, crops: [], available: true}, {id: 0, crops: [], available: true}],
				hand: [0,0,0,0,0]
			},
		playerTwo:
			{
				user: "",
				color: "floralwhite",
				activatedFactions: [],
				counters: {plenty: 0, coin: 0, plant: 0, harvest: 0, scrap: 0, marketScrap: 0},
				deck: [0],
				discard: [0],
				fields: [{id: 0, crops: [], available: true}, {id: 0, crops: [], available: true}],
				hand: [0,0,0,0,0]
			},
		playerThree:
			{
				user: "",
				color: "floralwhite",
				activatedFactions: [],
				counters: {plenty: 0, coin: 0, plant: 0, harvest: 0, scrap: 0, marketScrap: 0},
				deck: [0],
				discard: [0],
				fields: [{id: 0, crops: [], available: true}, {id: 0, crops: [], available: true}],
				hand: [0,0,0,0,0]
			},
		playArea: [],
		turnCount: 1,
		userPlayerNumber: 0,
	};

export default (state=initState, action) => {
	switch(action.type) {
		case fromMatch.actionTypes.CLOSECARDMODAL:
			return {...state,
				cardModalVis: "none",
			};
		case fromMatch.actionTypes.CLOSECHOICEMODAL:
			console.log("closing the choice modal");
			return {...state,
				choiceModalVis: "none",
			};
		case fromMatch.actionTypes.DISCARDHAND:
			console.log("discard action: "+JSON.stringify(action));
			return {...state,
				userDiscard: action.discard,
				userHand: action.hand,
			};
		case fromMatch.actionTypes.DRAWHAND:
			console.log("draw action: "+JSON.stringify(action));
			return {...state,
				userDeck: action.deck,
				userDiscard: action.discard,
				userHand: action.hand,
			};
		case fromMatch.actionTypes.OPENCARDMODAL:
			return {...state, 
				cardModalActions: action.actions,
				cardModalData: action.data,
				cardModalId: action.id,
				cardModalVis: "block",
			};
		case fromMatch.actionTypes.OPENCHOICEMODAL:
			console.log("opening the choice modal");
			return {...state, 
				choiceModalOptions: action.options,
				choiceModalParentInfo: action.parentInfo,
				choiceModalRequired: action.required,
				choiceModalTitle: action.title,
				choiceModalVis: "block",
			};
		case fromMatch.actionTypes.SAVECOMMUNITYFIELD:
			return {...state,
				communityField: action.payload,
			}
		case fromMatch.actionTypes.SAVEMARKETARRAY:
			console.log("updating market array with: "+action.payload.toString());
			return {...state, 
				marketArray: action.payload,
			};
		case fromMatch.actionTypes.SAVE_MATCH_LOG:
			return {...state,
				matchLog: action.matchLog,
			}
		case fromMatch.actionTypes.SAVEMATCHPATH:
			return {...state, 
				matchPath: action.payload,
			};
		case fromMatch.actionTypes.SAVENUMBEROFPLAYERS:
			return {...state,
				numberOfPlayers: action.payload,
			}
		case fromMatch.actionTypes.SAVEPLAYERONE:
			return {...state, 
				playerOne: action.player,
			};
		case fromMatch.actionTypes.SAVEPLAYERTWO:
			return {...state, 
				playerTwo: action.player,
			};
		case fromMatch.actionTypes.SAVEPLAYERTHREE:
			return {...state, 
				playerThree: action.player,
			};
		case fromMatch.actionTypes.SAVETRASHARRAY:
			return {...state, 
				trashArray: action.trashArray,
			};
		case fromMatch.actionTypes.SAVEUSERPLAYERNUMBER:
			console.log("saving user player number as: "+action.payload);
			return {...state,
				userPlayerNumber: action.payload,
			};
		case fromMatch.actionTypes.UPDATEACTIVATEDFACTIONS:
			return {...state,
				activatedFactions: action.payload,
			};
		case fromMatch.actionTypes.UPDATECURRENTPLAYERNUMBER:
			return {...state,
				currentPlayerNumber: action.payload,
			};
		case fromMatch.actionTypes.UPDATEPLAYAREA:
			return {...state,
				playArea: action.payload,
			};
		case fromMatch.actionTypes.UPDATETURNCOUNT:
			return {...state,
				turnCount: action.payload,
			};
	}
	return state;
}