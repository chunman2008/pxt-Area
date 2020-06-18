//% weight=0 color=#b3a23c icon="\uf780" block="Area"
namespace Area {
    /**
    * calculate the area of rectangle and return 
    */
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=2 weight=1 blockExternalInputs=true 
	/*   blockexternal = more than two blocks 
	*/
    export function areaOfRectangle(length: number, width:number): number {
        return length*width
    }
    /**
    *  calculate the area of rectangle and show it 
    */
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=4 weight=0
    export function ledOfRectangle(length: number, width:number): void {
        basic.showNumber(areaOfRectangle(length,width))
    }
	 //% blockId="ledOfTriangle " block="show area of rectangle base %base|height %height"
    //% blockGap=3 weight=3
	export function LEDofTriangle(base:number,height:number):void{
		basic.showNumber(0.5*base*height)
	}
	
	//% block 
}
