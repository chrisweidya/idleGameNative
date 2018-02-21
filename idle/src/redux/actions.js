import store from './store';
import {articles} from './constants';
import {messagesEnum} from './constants';
import {locationsEnum} from './constants';
import FishCreator from '../fishCreator.js';

'use strict';

export const addArticle = article => ({ type: articles.ADD_ARTICLE, payload: article });

export const increaseStr = () => {
	let currState = store.getState();
	let gold = currState.stats.gold;
	let strCost = currState.stats.strCost;
	let messages;
	if(gold >= strCost) {
		gold -= strCost;
		strCost = Math.ceil(strCost * currState.settings.difficultyMultiplier);
		let str = currState.stats.str + 1;
		messages = addMessage(messagesEnum.INCREASE_STR).newMessages;
		return { 
			type: articles.INCREASE_STR, newStr: str, newStrCost: strCost, newGold: gold, newMessages: messages
		}
	}
	else
		return addMessage(messagesEnum.INSUFFICIENT_GOLD);
}

export const resetFish = () => {
	let currState = store.getState();
	let nextFish = FishCreator.getFish(currState.location.tier);
	return {
		type: articles.RESET_FISH, newFish: nextFish
	}
}

export const catchFish = () => {
	let currState = store.getState();
	let messages = addMessage("You received 1 " + currState.fish.name + ".").newMessages;
	let caughtFishes = {...currState.caughtFishes};
	let nextFish = FishCreator.getFish(currState.location.tier);
	let fish = currState.fish;
	if(!caughtFishes[fish.name])
		caughtFishes[fish.name] = 1;
	else
		caughtFishes[fish.name] += 1;
	return {
		type: articles.CATCH_FISH, caughtFishes: caughtFishes, newMessages: messages, nextFish: nextFish
	}
}

export const reelFish = isPassive => {
	let currState = store.getState();
	let str = currState.stats.str;
	if(isPassive)
		str = currState.stats.passiveStr;
	if(currState.fish.health <= 0) {
		return catchFish();
	}
	else {
		let health;
		health = Math.max(currState.fish.health - str, 0);
		return {
			type: articles.REEL_FISH, newHealth: health
		}
	}
}

export const sellFish = fishName => {
	let currState = store.getState();
	let caughtFishes = {...currState.caughtFishes};
	let count = caughtFishes[fishName];
	let value = count*FishCreator.getFishGold(fishName);
	let messages = addMessage("Sold " + count + " " + fishName + " for " + value + " gold.").newMessages;
	caughtFishes[fishName] = 0;
	return {
		type: articles.SELL_FISH, newCaughtFishes: caughtFishes, newGold: currState.stats.gold + value, newMessages: messages
	}
}

export const changeLocation = tier => {
	let location = FishCreator.getArea(tier);
	console.log(tier);
	return {
		type: articles.CHANGE_LOCATION, newLocation: location, newTier: tier
	}
}

export const addMessage = message => {
	let currState = store.getState();
	let messages = [...currState.messages];	
	if(messages.length >= currState.settings.messageSize) {
		messages.splice(0, 1);
	}
	messages.push(message);
	return {
		type: articles.ADD_MESSAGE, newMessages: messages
	}
}