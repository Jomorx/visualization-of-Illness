export interface ChinaTotal {
	highRiskAreaNum: number;
	localConfirm: number;
	dead: number;
	showLocalConfirm: number;
	showlocalinfeciton: number;
	importedCase: number;
	local_acc_confirm: number;
	localWzzAdd: number;
	confirmAdd: number;
	deadAdd: number;
	mtime: string;
	suspect: number;
	noInfectH5: number;
	localConfirmH5: number;
	mediumRiskAreaNum: number;
	nowConfirm: number;
	mRiskTime: string;
	noInfect: number;
	nowLocalWzz: number;
	localConfirmAdd: number;
	confirm: number;
	heal: number;
	nowSevere: number;
}

export interface ChinaAdd {
	confirm: number;
	nowConfirm: number;
	importedCase: number;
	noInfect: number;
	localConfirm: number;
	heal: number;
	dead: number;
	suspect: number;
	nowSevere: number;
	noInfectH5: number;
	localConfirmH5: number;
}

export interface ShowAddSwitch {
	confirm: boolean;
	nowConfirm: boolean;
	nowSevere: boolean;
	localConfirm: boolean;
	localinfeciton: boolean;
	all: boolean;
	dead: boolean;
	heal: boolean;
	importedCase: boolean;
	noInfect: boolean;
	suspect: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	showRate: boolean;
	provinceLocalConfirm: number;
	nowConfirm: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	mtime: string;
	confirm: number;
	wzz: number;
	continueDayZeroLocalConfirmAdd: number;
	dead: number;
	heal: number;
	showHeal: boolean;
	continueDayZeroLocalConfirm: number;
	adcode: string;
}

export interface Today {
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
}

export interface Total {
	dead: number;
	heal: number;
	provinceLocalConfirm: number;
	showHeal: boolean;
	mediumRiskAreaNum: number;
	continueDayZeroConfirm: number;
	mtime: string;
	nowConfirm: number;
	showRate: boolean;
	wzz: number;
	adcode: string;
	confirm: number;
	highRiskAreaNum: number;
	continueDayZeroConfirmAdd: number;
	continueDayZeroLocalConfirmAdd: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	// wzz_add: string;
	wzz_add: number;
	local_confirm_add: number;
}	

export interface Total {
	confirm: number;
	heal: number;
	wzz: number;
	continueDayZeroLocalConfirm: number;
	mtime: string;
	showRate: boolean;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	adcode: string;
	showHeal: boolean;
	nowConfirm: number;
	dead: number;
	provinceLocalConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	adcode: string;
	date: string;
	today: Today;
	total: Total;
	children: Children[];
	name: string;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface Diseaseh5Shelf {
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
}

export interface LocalCityNCOVDataList {
	local_wzz_add: string;
	mediumRiskAreaNum: number;
	isSpecialCity: boolean;
	city: string;
	date: string;
	local_confirm_add: number;
	mtime: string;
	highRiskAreaNum: number;
	province: string;
	adcode: string;
	isUpdated: boolean;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	localCityNCOVDataList: LocalCityNCOVDataList[];
}