(this.webpackJsonpscoremanager=this.webpackJsonpscoremanager||[]).push([[0],{21:function(e,t,n){e.exports=n(48)},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),c=n.n(l),o=n(8),s=n(7),u=n(3),i=n(4),m=n(6),h=n(5),d=function(e){var t=e.totalCounters;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("h1",{className:"scrhndl"},"SCORE HANDLER")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"PARTICIPANTS:"," ",r.a.createElement("b",null,t)))},E=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"check",value:function(e){return 0===this.props.counter.value?"disabled":""}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.counter;return r.a.createElement("div",{className:"contain-student"},n,r.a.createElement("h4",null,"SCORE:"," ",this.formatCount()),r.a.createElement("button",{className:"green",onClick:function(){return e.props.onIncrement(a)}},"Increment"),r.a.createElement("button",{className:"apple",onClick:function(){return e.props.onDecrement(a)}},"Decrement"),r.a.createElement("button",{className:"yellow",disabled:this.check(a),onClick:function(){return e.props.onReset(a)}},"Reset"),r.a.createElement("button",{className:"red",onClick:function(){return e.props.onDelete(a.id)}},"Remove"),r.a.createElement("button",{className:"teal",onClick:function(){return e.props.onChangeName(a)}},"Edit Name"))}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),n}(a.Component),b=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"check",value:function(){return 0===this.props.counters.length?"disabled":""}},{key:"render",value:function(){var e=this.props,t=e.counters,n=e.onResetAll,a=e.onReset,l=e.onDelete,c=e.onIncrement,o=e.onDecrement,s=e.onChangeName;return r.a.createElement("div",null,r.a.createElement("button",{className:"red",disabled:this.check(),onClick:n},"Reset All"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",null,"PARTICPANT(S):"),t.map((function(e){return r.a.createElement(E,{key:e.id,counter:e,onIncrement:c,onDecrement:o,onReset:a,onDelete:l,onChangeName:s},r.a.createElement("h2",null,e.Name))})))}}]),n}(a.Component),f=n(2),p=n(10),v=n.n(p),N=n(20),g=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={counters:[],name:"",incrementBy:1,decrementBy:1,command:"",editname:""},e.handelIncrement=function(t){var n=Object(s.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(o.a)({},t),n[a].value+=e.state.incrementBy,e.setState({counters:n})},e.handelDecrement=function(t){var n=Object(s.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(o.a)({},t),n[a].value-=e.state.decrementBy,e.setState({counters:n})},e.handelChangeName=function(t){e.confirmChangeName(t)},e.onNameEdit=function(t){e.setState({editname:t.target.value})},e.handelDelete=function(t){e.confirmDelete(t)},e.handelResetAll=function(){e.confirmResetAll()},e.handelReset=function(t){e.confirmReset(t)},e.onSearch=function(t){e.setState({name:t.target.value})},e.onEnter=function(t){"Enter"===t.key&&(""!==e.state.name?e.search()?e.confirmEntery():e.insert():alert("Type a Name before hitting 'ENTER'!!"),t.target.value="")},e.onSearchEnter=function(t){e.setState({command:t.target.value.toLowerCase()})},e.onIncChange=function(t){e.setState({incrementBy:parseInt(t.target.value)})},e.onDecChange=function(t){e.setState({decrementBy:parseInt(t.target.value)})},e.onCommand=function(t){e.setState({command:t.target.value.toLowerCase()})},e.handelSave=function(){v.a.post("https://soumyanetra.github.io/Score-Handler:5000/create-pdf",e.state.counters).then((function(){return v.a.get("https://soumyanetra.github.io/Score-Handler:5000/fetch-pdf",{responseType:"blob"})})).then((function(e){var t=new Blob([e.data],{type:"application/pdf"});Object(N.saveAs)(t,"newPdf.pdf")}))},e.onEnterCommand=function(t){var n=e.state.command;"Enter"===t.key&&(""!==n?"sort"===n?(e.setState({command:""}),e.sortIt()):"help"===n&&(e.setState({command:""}),e.help()):alert("Type a Name before hitting 'ENTER'!!"),t.target.value="")},e.sortIt=function(){e.state.counters.sort((function(e,t){return t.value-e.value}))},e.filterOut=function(){var t=e.state.command;if(t.startsWith("top")){e.sortIt();var n=parseInt(t.split(" ")[1]);return n<=e.state.counters.length?e.state.counters.slice(0,n).map((function(e){return e})):e.state.counters}var a=e.state.counters.filter((function(e){return e.Name.toLowerCase().startsWith(t)}));return 0===a.length&&(a=e.state.counters.filter((function(e){return e.Name.toLowerCase().includes(t)}))),a},e}return Object(i.a)(n,[{key:"confirmChangeName",value:function(e){var t=this;Object(f.confirmAlert)({title:"Name Editor",message:[r.a.createElement("div",{id:"edt",style:{"text-align":"left",color:"black"}},r.a.createElement("b",null,"Current Name:"," "),e.Name,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Type ",r.a.createElement("b",null,"New Name")," and hit ENTER")," ",r.a.createElement("br",null),r.a.createElement("input",{id:"edtnm",type:"text",className:"form-control",autoFocus:!0,placeholder:"New Name",onChange:this.onNameEdit}))],buttons:[{label:"Proceed",className:"green adj",onClick:function(){if(""!==t.state.editname){var n=Object(s.a)(t.state.counters),a=n.indexOf(e);n[a].Name=t.state.editname,t.setState({counters:n,editname:""})}else alert("Type a Name before Proceeding!!\n\nNo changes made")}},{label:"Cancel",className:"red adj",onClick:function(){return!1}}]})}},{key:"confirmDelete",value:function(e){var t=this;Object(f.confirmAlert)({title:"This will Delete this Record Permanently",message:"Do you want to proceed?",buttons:[{label:"YES",className:"green adj",onClick:function(){var n=t.state.counters.filter((function(t){return t.id!==e}));t.setState({counters:n})}},{label:"No",className:"red adj",onClick:function(){return!1}}]})}},{key:"confirmResetAll",value:function(){var e=this;Object(f.confirmAlert)({title:"Reset All will set all scores to 'Zero'",message:"Do you want to proceed?",buttons:[{label:"YES",className:"green adj",onClick:function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})}},{label:"No",className:"red adj",onClick:function(){return!1}}]})}},{key:"confirmReset",value:function(e){var t=this;Object(f.confirmAlert)({title:"Reset will set the score to 'Zero'",message:"Do you want to proceed?",buttons:[{label:"YES",className:"green adj",onClick:function(){var n=Object(s.a)(t.state.counters),a=n.indexOf(e);n[a]=Object(o.a)({},e),n[a].value=0,t.setState({counters:n})}},{label:"No",className:"red adj",onClick:function(){return!1}}]})}},{key:"search",value:function(){if(this.state.counters.length>0)for(var e=0;e<this.state.counters.length;e++)if(this.state.name===this.state.counters[e].Name)return!0;return!1}},{key:"insert",value:function(){var e=Object(s.a)(this.state.counters);e[e.length]={id:this.state.counters.length,Name:this.state.name,value:0},this.setState({counters:e})}},{key:"confirmEntery",value:function(){var e=this;Object(f.confirmAlert)({title:"'"+this.state.name+"' already Exist!!",message:"Do you want duplicacy? 'NO' Recomended",buttons:[{label:"YES",className:"green adj",onClick:function(){e.insert()}},{label:"No",className:"red adj",onClick:function(){return!1}}]})}},{key:"help",value:function(){Object(f.confirmAlert)({title:"Help Desk",message:["Put in your commands to get the result is your way",r.a.createElement("div",{style:{"text-align":"left",margin:"50px"}},r.a.createElement("b",null,"COMMANDS"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"'sort':")," Sorts the existing data in descending order of Scores",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"'top n':")," Sorts the existing data and shows only the top 'n' participants",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("br",null)],buttons:[{label:"OK",className:"green adj",onClick:function(){}}]})}},{key:"check",value:function(){return 0===this.state.counters.length?"no-disp":"disp"}},{key:"controler",value:function(){var e=document.getElementById("conpnl");"control"===e.className?e.className="control-on":e.className="control"}},{key:"registor",value:function(){var e=document.getElementById("rgspnl");"control"===e.className?e.className="control-rg":e.className="control"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{totalCounters:this.state.counters.length}),r.a.createElement("main",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"controler other",onClick:this.registor},"Register Participants"),r.a.createElement("div",{id:"rgspnl",className:"control-rg"},r.a.createElement("br",null),r.a.createElement("label",null,"Type Student Names and hit 'ENTER' to ",r.a.createElement("b",null,"Add")," Participants:"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"form-control",autoFocus:!0,placeholder:"Student Name",onChange:this.onSearch,onKeyDown:this.onEnter})),r.a.createElement("div",{id:"store",className:this.check()},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"controler other",onClick:this.controler},"Control Panel"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{id:"conpnl",className:"control"},r.a.createElement("label",null,"Enter ",r.a.createElement("b",null,"Update")," Parameters (DEFAULT: 1):"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"Number",placeholder:"Increment By",onChange:this.onIncChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"Number",placeholder:"Decrement By",onChange:this.onDecChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"other",onClick:this.handelSave},"Save"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Enter ",r.a.createElement("b",null,"Commands"),":"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Commands",onChange:this.onCommand,onKeyDown:this.onEnterCommand})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Type Student Names to ",r.a.createElement("b",null,"Search")," Participants:"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Student Name",onKeyUp:this.onSearchEnter}),r.a.createElement(b,{counters:this.filterOut(),onIncrement:this.handelIncrement,onDecrement:this.handelDecrement,onReset:this.handelReset,onDelete:this.handelDelete,onChangeName:this.handelChangeName}))))}}]),n}(a.Component);n(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null),r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,"@Soumyanetra"))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.39dee5e6.chunk.js.map