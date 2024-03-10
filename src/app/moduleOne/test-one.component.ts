import { Component } from '@angular/core';
import {ascending, select, range} from 'd3';
@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html'
})
export class TestOneComponent {
    width:number=innerWidth;
    height:number= innerHeight;
  constructor() {}
  entries:any =[
    {key:'A',value:'apple'},
    {key:'C',value:'cat'},
    {key:'B',value:'ball'},
  ];
svg:any;
  ngOnInit(){
    console.log(this.entries.sort((a:any,b:any)=>ascending(a.key,b.key)));

    /* D3 selection exploration */
    this.svg = select('#d3')
    .append('svg')
    .attr('width',this.width)
    .attr('height', this.height);
let t =0;
setInterval(()=>{
//    const data = range(15);
    /*const data = range(15).map((d)=>({
        x:d*60+50,
        y:250+Math.sin(d*0.5)*220
    })); 
    svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('r',10)
    .attr('cx',(d)=>d*60+50)
    .attr('cy',(d)=>250+Math.sin(d*0.5)*220)
*/

/*const circles = svg.selectAll('circle').data(data);
circles.enter().append('circle').attr('r',10)
circles.attr('cx',(d)=>d*60+50)
circles.attr('cy',(d)=>250+Math.sin(d*0.5+t)*220) */

const n = 10+ Math.sin(t) * 5;
const data = this.makeData(n,t);
this.vizData(data)
t = t + 0.01;

},1000/60)
    
  }

makeData(n:number,t:number){
    return range(n).map((d)=>({
        x:d*60+50,
        y:250+Math.sin(d*0.5+t)*220,
        r:10+Math.sin(d*0.5+t*2)*10
    }));
}
vizData(data:any){
    return this.svg
    .selectAll('circle')
    .data(data)
    .join('circle') // enter and update, exyt nad remove
    .attr('r',(d:any)=>d.r)
    .attr('cx',(d:any)=>d.x)
    .attr('cy',(d:any)=>d.y);
}
}
