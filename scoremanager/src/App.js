import React, {Component} from 'react';
import NavBar from './Components/navbar';
import Counters from './Components/counters'
import {confirmAlert} from 'react-confirm-alert';
import axios from 'axios'
import {saveAs} from 'file-saver'
class App extends Component{
  state = {  
        counters:[],
        name:'',
        incrementBy:1,
        decrementBy:1,
        command:'',
        editname:''
    }
    handelIncrement=(counter)=>
    {
        const counters=[...this.state.counters]
        const index= counters.indexOf(counter)
        counters[index]={...counter}
        counters[index].value += this.state.incrementBy;
        this.setState({counters})
    }
    handelDecrement=(counter)=>
    {
        const counters=[...this.state.counters]
        const index= counters.indexOf(counter)
        counters[index]={...counter}
        counters[index].value -= this.state.decrementBy;
        this.setState({counters})
    }
    handelChangeName=(counter)=>{
      this.confirmChangeName(counter);
    }
    confirmChangeName(counter){
      confirmAlert({
        title: 'Name Editor',
        message:[<div id="edt" style={{'text-align':'left', 'color':'black'}}>
                    <b>Current Name:{" "}</b>{counter.Name}<br/><br/>
                    <label>Type <b>New Name</b> and hit ENTER</label> <br/>
                    <input id="edtnm" type='text' className='form-control' 
                      autoFocus={true} 
                      placeholder='New Name' 
                      onChange={this.onNameEdit}/>
                       </div>
                ],
                buttons:[
                {
                  label:'Proceed',
                  className:'green adj',
                  onClick: ()=> {
                    if(this.state.editname!==''){
                        const counters=[...this.state.counters]
                        const index= counters.indexOf(counter)
                        counters[index].Name=this.state.editname
                        this.setState({counters,editname:''})
                    }
                    else
                      alert('Type a Name before Proceeding!!\n\nNo changes made')
                  }
                },
                {
                  label:'Cancel',
                  className:'red adj',
                  onClick: ()=>{return false}
                }
              ]
      });
    }
    onNameEdit = (event)=>{ 
      this.setState({editname: event.target.value})
    }
    handelDelete=(counterId) =>
    {
        this.confirmDelete(counterId);
    }
    confirmDelete(counterId)
    {
      confirmAlert({
              title: "This will Delete this Record Permanently",
              message:"Do you want to proceed?",
              buttons:[
                {
                  label:'YES',
                  className:'green adj',
                  onClick: ()=> {
                        const counters=this.state.counters.filter(c => c.id !== counterId)
                        this.setState({counters})
                      }
                },
                {
                  label:'No',
                  className:'red adj',
                  onClick: ()=>{return false}
                }
              ]
            });
    }
    handelResetAll= () =>
    {
        this.confirmResetAll();
    }
    confirmResetAll()
    {
      confirmAlert({
              title: "Reset All will set all scores to 'Zero'",
              message:"Do you want to proceed?",
              buttons:[
                {
                  label:'YES',
                  className:'green adj',
                  onClick: ()=> {
                    const counters=this.state.counters.map(c =>{
                        c.value=0
                        return c
                      }
                    )
                    this.setState({counters})
                  }
                },
                {
                  label:'No',
                  className:'red adj',
                  onClick: ()=>{return false}
                }
              ]
            });
    }
    handelReset= (counter) =>
    {
        this.confirmReset(counter);
    }
    confirmReset(counter)
    {
      confirmAlert({
              title: "Reset will set the score to 'Zero'",
              message:"Do you want to proceed?",
              buttons:[
                {
                  label:'YES',
                  className:'green adj',
                  onClick: ()=> {
                    const counters=[...this.state.counters]
                    const index= counters.indexOf(counter)
                    counters[index]={...counter}
                    counters[index].value=0;
                    this.setState({counters})
                  }
                },
                {
                  label:'No',
                  className:'red adj',
                  onClick: ()=>{return false}
                }
              ]
            });
    }
    onSearch = (event)=>{ 
      this.setState({name: event.target.value})
    }
    search(){
      if(this.state.counters.length > 0){
        for(let i=0;i<this.state.counters.length;i++){
          if(this.state.name===this.state.counters[i].Name)
            return true;
        }
      }
      return false;
    }
    onEnter = (event) => {
      if(event.key==='Enter')
      {
        if(this.state.name!==''){
          if(!this.search())
            this.insert();
          else
            this.confirmEntery();
        }
        else
          alert("Type a Name before hitting 'ENTER'!!")
        event.target.value=''
      }
    }
    onSearchEnter=(event)=>{
        this.setState({command: event.target.value.toLowerCase()})
    } 
    insert()
    {
      const counters=[...this.state.counters]
      counters[counters.length]={id:this.state.counters.length, Name:this.state.name, value:0}
      this.setState({counters});
    }
    confirmEntery()
    {
      confirmAlert({
              title: "'"+this.state.name+"' already Exist!!",
              message:"Do you want duplicacy? 'NO' Recomended",
              buttons:[
                {
                  label:'YES',
                  className:'green adj',
                  onClick: ()=> {
                    this.insert();
                  }
                },
                {
                  label:'No',
                  className:'red adj',
                  onClick: ()=>{return false}
                }
              ]
            });
    }
  onIncChange=(event)=>{
      this.setState({incrementBy:parseInt(event.target.value)})
  }
  onDecChange=(event)=>{
      this.setState({decrementBy:parseInt(event.target.value)})
  }
  onCommand=(event)=>{
    this.setState({command:event.target.value.toLowerCase()})
  }
  handelSave=()=>{
    axios.post('http://localhost:5000/create-pdf',this.state.counters)
      .then(
        ()=>axios.get('http://localhost:5000/fetch-pdf',{responseType:'blob'})
      )
      .then(
        (res)=>{
          const pdfBlob=new Blob([res.data],{type:'application/pdf'})
          saveAs(pdfBlob,'newPdf.pdf')
        }
      )
  }
  onEnterCommand = (event) => {
    const{command}=this.state
      if(event.key==='Enter')
      {
        if(command!==''){
          if(command==='sort'){
            this.setState({command:''})
            this.sortIt()}
          else if(command==='help'){
            this.setState({command:''})
            this.help()}
        }
        else
          alert("Type a Name before hitting 'ENTER'!!")
        event.target.value=''
      }
    }
  sortIt=()=>{
    this.state.counters.sort((a,b)=>{
      return b.value-a.value
    })
  }
  help(){
    confirmAlert({
              title: 'Help Desk',
              message:["Put in your commands to get the result is your way",
                      <div style={{'text-align':'left', 'margin':'50px'}}>
                        <b>COMMANDS</b><br/><br/>
                        <b>'sort':</b> Sorts the existing data in descending order of Scores<br/><br/>
                        <b>'top n':</b> Sorts the existing data and shows only the top 'n' participants<br/><br/>
                       </div>,<br/>,<br/>
                       ],
              buttons:[
                {
                  label:'OK',
                  className:'green adj',
                  onClick: ()=> {
                    return
                  }
                }
              ]
    })
  }
  filterOut=()=>{
    const{command}=this.state
    if(command.startsWith('top')){
      this.sortIt()
      const l=parseInt(command.split(' ')[1])
      if(l<=this.state.counters.length){
            const stud=this.state.counters.slice(0,l).map(c=>{
            return c
          })
        return stud;
      }
      else
         return this.state.counters;
    }
    else{
      let stud=this.state.counters.filter(c=>
          c.Name.toLowerCase().startsWith(command)
      )
      if(stud.length===0)
        stud=this.state.counters.filter(c=>
          c.Name.toLowerCase().includes(command)
      )
      return stud;
    }
  }
  check(){
        if (this.state.counters.length === 0)
            return 'no-disp';
        else
            return 'disp';
    }
  controler(){
    const elm=document.getElementById('conpnl')
    if(elm.className==='control')
      elm.className='control-on'
    else
      elm.className='control'
  }
  registor(){
    const elm=document.getElementById('rgspnl')
    if(elm.className==='control')
      elm.className='control-rg'
    else
      elm.className='control'
  }
  render(){
      return (
        <React.Fragment>
          <NavBar totalCounters={this.state.counters.length}/>
          <main className="container">
            <br/><br/>
            <button className="controler other" onClick={this.registor}>Register Participants</button>
            <div id="rgspnl" className="control-rg"><br/>
              <label>Type Student Names and hit 'ENTER' to <b>Add</b> Participants:</label><br/><br/>
              <input type='text' className='form-control' 
                  autoFocus={true} 
                  placeholder='Student Name' 
                  onChange={this.onSearch} 
                  onKeyDown={this.onEnter}/>
            </div>
            <div id="store" className={this.check()}>
              <br/><br/>
              <button className="controler other" onClick={this.controler}>Control Panel</button><br/><br/>
              <div id="conpnl" className="control">
                <label>Enter <b>Update</b> Parameters (DEFAULT: 1):</label><br/><br/>
                <input type='Number' placeholder='Increment By'  onChange={this.onIncChange}/><br/><br/>
                <input type='Number' placeholder='Decrement By' onChange={this.onDecChange}/><br/><br/>
                <button className="other" onClick={this.handelSave}>Save</button><br/><br/>
                <label>Enter <b>Commands</b>:</label>
                <br/><br/><input type='text' placeholder='Commands'  
                              onChange={this.onCommand} 
                              onKeyDown={this.onEnterCommand}/>
              </div><br/><br/><br/><br/>
              <label>Type Student Names to <b>Search</b> Participants:</label><br/><br/>
              <input type='text' className='form-control' placeholder='Student Name' onKeyUp={this.onSearchEnter} />
                    <Counters 
                            counters={this.filterOut()}
                            onIncrement={this.handelIncrement} 
                            onDecrement={this.handelDecrement} 
                            onReset={this.handelReset}
                            onDelete={this.handelDelete}
                            onChangeName={this.handelChangeName}>
                    </Counters>
             </div>
          </main>
        </React.Fragment>
      );
    }
}

export default App;
