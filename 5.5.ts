class HanoiTower<T = number>{
	private rods:{[key:string]:T[]} = {};
	constructor(
		private fromRod : string = "First",
	 	private toRod : string = "Second",
	  	private tempRod : string = "Third"){
			this.rods[fromRod] = [];
			this.rods[toRod] = [];
			this.rods[tempRod] = [];
	}
	addDisks(disks:T[]):void {
		this.rods[this.fromRod] = disks;
	}
	solve():void {
		const numberOfDisks = this.rods[this.fromRod].length;
		this.move(numberOfDisks,this.fromRod,this.toRod,this.tempRod)
	}

	private move(n:number,from:string,to:string,temp:string):void{
		if(n===0){
			return;
		}
		this.move(n - 1, from, temp, to);

        const disk = this.rods[from].pop();
        if (disk !== undefined) {
            this.rods[to].push(disk);
            console.log(`Переместить диск ${disk} с ${from} на ${to}`);
        }

        this.move(n - 1, temp, to, from);
	}
}
