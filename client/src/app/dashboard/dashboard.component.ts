import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Topic } from '../topic';
import { ApiclientService } from '../apiclient.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input() topic!:Topic
  @Output() deleteEvent=new EventEmitter


  constructor(private apiclient:ApiclientService){}

  ngOnInit():void{

  }

  deleteTopic() : void {
    this.apiclient.deleteTopic(this.topic._id).subscribe(() => this.deleteEvent.emit(this.topic._id));
  }

  updateVote(id:String,score:Number):void{
    this.apiclient.UpdateScore(id,score).subscribe(()=>console.log('voting done'))
  }

}
