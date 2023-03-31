import { Component } from '@angular/core';
import { Topic } from '../topic';
import { ApiclientService } from '../apiclient.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  topic:Topic[]=[]
  titleForm=this.fb.group({
    title:''
  })
  
  constructor(private api: ApiclientService, private fb: FormBuilder) { }

  ngOnInit():void{
    this.api.getAllTopics().subscribe(topics=>this.topic=topics)
  }

  postTopic():void{
    this.api.createTopic(this.titleForm.value.title!).subscribe(task => this.topic.push(task));

    this.titleForm.reset();
  
  }
  deleteTopic (id: String):void {
    const topic=this.topic.filter(topic=>topic._id!==id)
    this.topic=topic
  }
  
  
}
