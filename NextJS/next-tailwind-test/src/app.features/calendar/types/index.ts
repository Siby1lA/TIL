export interface IDumy {
	year: number;
	month: number;
	schedule: { [x: string]: string[] };
}

export interface IMakeCal {
	year: number;
	month: number;
	firstDay: number;
	lastDate: number;
	todo: { [x: string]: string[] };
	modalOpenFun: any;
}
