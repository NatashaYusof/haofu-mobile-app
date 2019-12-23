import { Component, ViewChild, Renderer, OnInit } from '@angular/core';
import { NavController, Platform, IonContent, ToastController } from '@ionic/angular';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { JobcardService } from '../../../../src/app/services/jobcard.service';

const STORAGE_KEY = 'IMAGE_LIST';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.page.html',
  styleUrls: ['./canvas.page.scss'],
})
export class CanvasPage implements OnInit {

  @ViewChild('imageCanvas', { static: true }) canvas: any;
  @ViewChild('Canvas', { static: true }) canvas1: any;
  @ViewChild('Shape', { static: true }) canvas2: any;

  // @ViewChild('input', { static: false }) myInput:any ;
  canvasElement: any;
  canvasElement1: any;
  canvasElement2: any;

  saveX2: number;
  saveY2: number;
  saveX1: number;
  saveY1: number;

  storedImages = [];

  // Make Canvas sticky at the top stuff
  @ViewChild(IonContent, { static: true }) content: IonContent;
  @ViewChild('fixedContainer', { static: true }) fixedContainer: any;

  // Color Stuff
  selectedColor = '#222428';

  colors = ['#222428','#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
  brushSize: number = 5;
  action: String;
  private startX1: number;
  private startY1: number;
  private startX2: number;
  private startY2: number;
  radius: number;
  endX: number;
  endY:number;
  moveCoordinate=[];
  text : any;
  private dx: number;
  private dy: number;
  private lX: number;
  private lY: number;
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  htmlText: any;
  sanitizer: any;
  pattern: any;
  arrowX: number;
  arrowTopY: number;
  arrowBottomY: number;
  headlen: number;
  angle: number;
  PI: any;
  degreesInRadians225: number;
  degreesInRadians135: number;
  x225: any;
  y225: any;
  y135: any;
  x135: any;
  scale: any;
  img: any;
 
 constructor(
    private webview: WebView,
    private file: File,
    private storage: Storage,
    public renderer: Renderer,
    private plt: Platform,
    public toastController: ToastController,
    public navCtrl: NavController,
    public JobcardService: JobcardService,
    
    ) {
    this.storage.ready().then(() => {
      this.storage.get(STORAGE_KEY).then(data => {
        if (data != undefined) {
          this.storedImages = data;
        }
      });
    });
  }

  async ionViewDidEnter() {
    // https://github.com/ionic-team/ionic/issues/9071#issuecomment-362920591
    // Get the height of the fixed item
    let itemHeight = this.fixedContainer.nativeElement.offsetHeight;
    let scroll = this.content.getScrollElement();

    // Add preexisting scroll margin to fixed container size
    itemHeight = Number.parseFloat((await (scroll)).style.marginTop.replace("px", "")) + itemHeight;
    (await (scroll)).style.marginTop = itemHeight + 'px';
  }

  ngOnInit() {
    // Set the Canvas Element and its size
  
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement1 = this.canvas1.nativeElement;
    this.canvasElement2 = this.canvas2.nativeElement;
    let ctx = this.canvasElement.getContext('2d');
    let ctx1 = this.canvasElement1.getContext('2d');
    let ctx2 = this.canvasElement2.getContext('2d');
    this.canvasElement.width = window.innerWidth;
    this.canvasElement.height = 460;   
    this.canvasElement1.width = window.innerWidth;
    this.canvasElement1.height = 460;   
    this.canvasElement2.width = window.innerWidth;
    this.canvasElement2.height = 460;   
   
    const img = new Image()
    this.img=this.JobcardService.imageLists;
    this.img.onload = () => {
      ctx.drawImage(this.img,(this.canvasElement.width-this.img.width)/2, (this.canvasElement.height-this.img.height)/2);
    }

    

    setInterval(()=>{
      this.onPaint();
    },17)
    
  }

  selectColor(color) {
    this.selectedColor = color;
  }

  changeSize(size){
    this.brushSize = size;
}

  startDrawing(ev) {
    // var canvasPosition = this.canvasElement.getBoundingClientRect();
    var canvasPosition1 = this.canvasElement1.getBoundingClientRect();
    var canvasPosition2 = this.canvasElement2.getBoundingClientRect();
    this.saveX1= ev.touches[0].pageX - canvasPosition1.x;
    this.saveY1= ev.touches[0].pageY - canvasPosition1.y;
    this.startX1= ev.touches[0].pageX - canvasPosition1.x;
    this.startY1 = ev.touches[0].pageY - canvasPosition1.y;
    this.saveX2 = ev.touches[0].pageX - canvasPosition2.x;
    this.saveY2 = ev.touches[0].pageY - canvasPosition2.y;
    this.startX2 = ev.touches[0].pageX - canvasPosition2.x;
    this.startY2 = ev.touches[0].pageY - canvasPosition2.y;
    console.log('lalu')
  }

 
  moved(ev) {
    // var canvasPosition = this.canvasElement.getBoundingClientRect();
    var canvasPosition1 = this.canvasElement1.getBoundingClientRect();
    var canvasPosition2 = this.canvasElement2.getBoundingClientRect();

    // let ctx = this.canvasElement.getContext('2d');
    let ctx1 = this.canvasElement1.getContext('2d');
    let currentX1 = ev.touches[0].pageX - canvasPosition1.x;
    let currentY1 = ev.touches[0].pageY - canvasPosition1.y;
    let currentX2 = ev.touches[0].pageX - canvasPosition2.x;
    let currentY2 = ev.touches[0].pageY - canvasPosition2.y;


  if (this.action =="handdraw"){
    this.handDraw(ctx1,currentX1,currentY1);

    }else if(this.action =="drawline"){
      // this.drawLine(ctx,currentX,currentY);
      this.moveCoordinate.push({
        x: currentX2 ,y:currentY2
      })
   
    }else if(this.action =="drawsquare"){
      // this.drawSquare(ctx,currentX,currentY);
      this.moveCoordinate.push({
        x: currentX2 ,y:currentY2
      })
   
    }else if(this.action =="drawarrow"){
      // this.drawSquare(ctx,currentX,currentY);
      this.moveCoordinate.push({
        x: currentX2 ,y:currentY2
      })
   
    }else if(this.action =="addtext"){
       this.addText(ctx1,currentX1,currentY1);
      // this.moveCoordinate.push({
      //   x: currentX1 ,y:currentY1
      // })


    }
    else if(this.action =="drawcircle"){
      // this.drawCircle(ctx,currentX,currentY);
      this.moveCoordinate.push({
        x: currentX2 ,y:currentY2
      })

    }
    else if(this.action =="eraser"){
      this.eraser(ctx1,currentX1,currentY1);
   }
  
    this.saveX1 = currentX1;
    this.saveY1 = currentY1;
    this.saveX2 = currentX2;
    this.saveY2 = currentY2;  
  }



  touchend(ev){
    var canvasPosition = this.canvasElement.getBoundingClientRect();
    var canvasPosition1 = this.canvasElement1.getBoundingClientRect();
    var canvasPosition2 = this.canvasElement2.getBoundingClientRect();
    let ctx = this.canvasElement.getContext('2d');
    let ctx1 = this.canvasElement1.getContext('2d');
    let ctx2 = this.canvasElement2.getContext('2d');
    console.log(ev)
    console.log(this.moveCoordinate.length-1)
    console.log(this.moveCoordinate)
    let currentX1= this.moveCoordinate.length > 0 ? this.moveCoordinate[this.moveCoordinate.length-1].x : 0;
    let currentY1= this.moveCoordinate.length > 0 ? this.moveCoordinate[this.moveCoordinate.length-1].y : 0;
    let currentX2= this.moveCoordinate.length > 0 ? this.moveCoordinate[this.moveCoordinate.length-1].x : 0;
    let currentY2= this.moveCoordinate.length > 0 ? this.moveCoordinate[this.moveCoordinate.length-1].y : 0;
 
 


    if(this.action=="drawline"){
    this.drawLine(ctx2,currentX2,currentY2)
    }
    else if(this.action=="drawcircle"){
      this.drawCircle(ctx2,currentX2,currentY2)
    }
    else if(this.action=="drawsquare"){
      this.drawSquare(ctx2,currentX2,currentY2)
    
    }
    else if(this.action=="drawarrow"){
      this.drawArrow(ctx2,currentX2,currentY2)
    
    }
    // else if(this.action=="addtext"){
    //   this.addText(ctx1,currentX1,currentY1)
    
    // }
  
    this.moveCoordinate = []
  }


  touchmove(){
  }
  handDraw(ctx1,currentX1,currentY1){
    ctx1.lineJoin = 'round';
    ctx1.strokeStyle = this.selectedColor;
    ctx1.lineWidth = 5;

    console.log('lalu')

    ctx1.beginPath();
    ctx1.moveTo(this.saveX1, this.saveY1);
    ctx1.lineTo(currentX1, currentY1);
    ctx1.closePath();
    ctx1.lineWidth = this.brushSize;

    ctx1.stroke();
  }

  drawLine(ctx1,currentX1,currentY1){
    ctx1.lineJoin = 'round';
    ctx1.strokeStyle = this.selectedColor;
    ctx1.lineWidth = 5;
    ctx1.beginPath();
    console.log(this.startX1,this.startY1)
    ctx1.moveTo(this.startX1, this.startY1);
    ctx1.lineTo(currentX1, currentY1);
    ctx1.closePath();
    ctx1.lineWidth = this.brushSize;

    ctx1.stroke();
  }

   drawSquare(ctx2,currentX2,currentY2)
  {   
    // const img1 = new Image()
    // img1.src = "../assets/icon/line2.png"  ;
    this.dx=currentX2 -this.startX2;
    this.dy=currentY2- this.startY2;
    this.scale=5;
    this.x=this.startX2 + this.dx * 0.5;
    this.y=this.startY2 + this.dy * 0.5;
    this.width=this.dx;
    this.height=this.dy;
    ctx2.lineWidth = 5;
    ctx2.lineJoin = 'round';
    ctx2.strokeStyle = this.selectedColor;
    ctx2.lineWidth = this.brushSize;
    ctx2.beginPath();
    ctx2.rect(this.startX2,this.startY2,this.width,this.height);
    // ctx2.fillStyle='green';
    // this.pattern= ctx2.createPattern(img1,"repeat");
    // console.log("lorek")
    // ctx2.fillStyle=this.pattern;
    ctx2.closePath();

    ctx2.stroke();

  }

  drawCircle(ctx2,currentX2,currentY2){
    this.dx=currentX2 -this.startX2;
    this.dy=currentY2- this.startY2;
    this.radius = Math.sqrt(this.dx*this.dx + this.dy*this.dy);
    // this.scale=5;
    ctx2.lineJoin = 'round';
    ctx2.strokeStyle = this.selectedColor;
    ctx2.lineWidth = 5;
    ctx2.lineWidth = this.brushSize;
    ctx2.beginPath();
    ctx2.save();
    console.log(this.startX2,this.startY2)
    ctx2.arc(this.startX2,this.startY2,this.radius,0, Math.PI*2)
  
    ctx2.closePath();
    ctx2.stroke();
  }

  drawArrow(ctx2,currentX2,currentY2){
    this.headlen = 20; // length of head in pixels
    this.dx = currentX2 - this.startX2;
    this.dy = currentY2 - this.startY2;
    this.angle = Math.atan2(this.dy,this.dx);
    ctx2.strokeStyle = this.selectedColor;
    ctx2.lineWidth = 3;
    // ctx2.lineWidth = this.brushSize;
    ctx2.beginPath();
    ctx2.moveTo( this.startX2,this.startY2);
    ctx2.lineTo(currentX2, currentY2);
    ctx2.lineTo(currentX2 -this. headlen * Math.cos(this.angle - Math.PI / 6), currentY2 - this.headlen * Math.sin(this.angle - Math.PI / 6));
    ctx2.moveTo(currentX2, currentY2);
    ctx2.lineTo(currentX2 -this. headlen * Math.cos(this.angle + Math.PI / 6), currentY2 - this.headlen * Math.sin(this.angle + Math.PI / 6));
    ctx2.closePath();
    ctx2.stroke();

    // ctx2.beginPath();
    // this.PI=Math.PI;
    // this.degreesInRadians225=225*this.PI/180;
    // this.degreesInRadians135=135*this.PI/180;
    // this.headlen = 30;
    // this.dx = currentX2 - this.startX2;
    // this.dy = currentY2 - this.startY2;
    // this.angle=Math.atan2(this.dx,this.dy);
    // this.x225=currentX2+this.headlen*Math.cos(this.angle+this.degreesInRadians225);
    // this.y225=currentY2+this.headlen*Math.sin(this.angle+this.degreesInRadians225);
    // this.x135=currentX2+this.headlen*Math.cos(this.angle+this.degreesInRadians135);
    // this.y135=currentY2+this.headlen*Math.sin(this.angle+this.degreesInRadians135);
    // ctx2.moveTo(this.startX2,this.startY2);
    // ctx2.lineTo(currentX2,currentY2);
    // ctx2.lineWidth = 5;
    // ctx2.lineWidth = this.brushSize;
    // ctx2.moveTo(currentX2,currentY2);
    // ctx2.lineTo(this.x225,this.y225);
    // ctx2.moveTo(currentX2,currentY2);
    // ctx2.lineTo(this.x135,this.y135);
    // ctx2.closePath();
    // ctx2.stroke();

  }
    
  addText(ctx1,currentX1,currentY1){
    ctx1.beginPath();
    ctx1.this.myInput.setFocus();
    console.log(ctx1.this.myInput)
    console.log('tulis')
    ctx1.font = "14px Times New Roman";
    ctx1.textAlign = 'center';
    ctx1.fillStyle = 'black';
    ctx1.fillText('htmlText' );
    
    ctx1.stroke();
  }

  eraser(ctx1,currentX1,currentY1){
    ctx1.lineJoin = 'round';
    ctx1.beginPath();
    ctx1.globalCompositeOperation="destination-out"
    ctx1.strokeStyle = "rgba(0,0,0,1)";
    ctx1.moveTo(this.saveX1, this.saveY1);
    ctx1.lineTo(currentX1, currentY1);
    ctx1.closePath();
    ctx1.lineWidth = this.brushSize;

    ctx1.stroke();
     console.log('padam')
    // draw it
  }

  changeAction(action){
    this.action=action;
    console.log(this.action)
  }

  saveCanvasImage() {
    var dataUrl = this.canvasElement.toDataURL();

    let name = new Date().getTime() + '.png';
    let path = this.file.dataDirectory;
    let options: IWriteOptions = { replace: true };

    var data = dataUrl.split(',')[1];
    let blob = this.b64toBlob(data, 'image/png');

    this.file.writeFile(path, name, blob, options).then(async res => {
      this.storeImage(name);
      let toast = await this.toastController.create({ message: "Image saved", duration: 2000 })
      toast.present()
    }, err => {
      console.log('error: ', err);
    });
  }

  async clearCanvasImage() {
    let ctx = this.canvasElement1.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let toast = await this.toastController.create({ message: "Clear image", duration: 1500 })
    toast.present()
    this.canvasElement1 = this.canvas1.nativeElement;
    this.canvasElement1.width = window.innerWidth;
    this.canvasElement1.height = 460;   
    this.canvasElement2 = this.canvas2.nativeElement;
    this.canvasElement2.width = window.innerWidth;
    this.canvasElement2.height = 460;   
    }

  onPaint(){
    if(this.action != "handdraw"){
      // this.clearCanvasImage();
    }
  }

  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  storeImage(imageName) {
    let saveObj = { img: imageName };
    this.storedImages.push(saveObj);
    this.storage.set(STORAGE_KEY, this.storedImages).then(() => {
      setTimeout(() => {
        this.content.scrollToBottom();
      }, 500);
    });
  }

  removeImageAtIndex(index) {
    let removed = this.storedImages.splice(index, 1);
    this.file.removeFile(this.file.dataDirectory, removed[0].img).then(async res => {
      let toast = await this.toastController.create({ message: "Image deleted", duration: 2000 })
      toast.present()
    }, err => {
      console.log('remove err; ', err);
    });
    this.storage.set(STORAGE_KEY, this.storedImages);
  }

  getImagePath(imageName) {
    let path = this.file.dataDirectory + imageName;
    // https://ionicframework.com/docs/wkwebview/#my-local-resources-do-not-load
    path = this.webview.convertFileSrc(path);
    return path;
  }



}