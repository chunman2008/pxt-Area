//% weight=0 color=#3CB371 icon="\uf0ad" block="Area"
namespace Area {
    /**
    * calculate the area of rectangle and return 
    */
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=2 weight=1 blockExternalInputs=true 
    export function areaOfRectangle(length: number, width:number): number {
        return length*width
    }
  
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=4 weight=0
    export function ledOfRectangle(length: number, width:number): void {
        basic.showNumber(length *width )
    }
	 //% blockId="ledOfTriangle " block="show area of rectangle base %base|height %height"
    //% blockGap=3 weight=3
	export function LEDofTriangle(base:number,height:number):void{
		basic.showNumber(0.5*base*height)
	}
	
	//% block 
}
