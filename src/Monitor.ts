const COLS:number =64;
const ROWS: number = 32;
const SCALE:number=15;

class Monitor{
    private cols:number;
    private rows:number;
    private display: Array<number>;
    private scale:number;
    private canvas:HTMLCanvasElement;
    private canvasCtx;







    constructor(canvas:HTMLCanvasElement)
    {
        this.cols=COLS;
        this.rows=ROWS;
        this.display=new Array(this.cols*this.rows);

        this.scale=SCALE;
        this.canvas=canvas;

        this.canvas.width=this.cols*this.scale;
        this.canvas.height=this.rows*this.scale;

        this.canvasCtx=this.canvas.getContext('2d');
        

    }

    setPixel(x:number,y:number):boolean
    {


        if(x>this.cols)
        {
            x-=this.cols;
        }
        else if(x<0)
        {
            x+=this.cols;
        }


        if(y>this.rows)
        {
            y-=this.rows;
        }
        else if(y<0)
        {
            y+=this.rows;
        }



        this.display[x+(y*this.cols)]^=1;

        return this.display[x+(y*this.cols)]!=1;



    }


    clear()
    {
        this.display=new Array(this.cols*this.rows);

    }

    paint()
    {
        this.canvasCtx.fillStyle='#000';

        this.canvasCtx.fillRect(0,0,this.canvas.width,this.canvas.height);

        for(let i=0;i<this.cols*this.rows;i++)
        {
            let x = (i%this.cols)*this.scale;
            let y =Math.floor(i/this.cols)*this.scale;

            if(this.display[i]==1)
            {
                this.canvasCtx.fillStyle='#FFF';

                this.canvasCtx.fillRect(x,y,this.scale,this.scale);
            }

        }
    }

    testRender()
    {
        this.setPixel(0,0);
        this.setPixel(5,2);
        this.paint();
    }





}

export default Monitor;