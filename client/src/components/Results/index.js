import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Bar from './bar';

export default class Results extends React.Component {
    constructor(){
        super()
        this.childrefs = [];
    
    this.state = {
        listOfPorgressBars:  [
            { id: "myBar", percentage: 85, name: "AI" },
            { id: "myBar1", percentage: 75, name: "ICT-TEACHING" },
            { id: "myBar2", percentage: 65, name: "Software for Science" },
            { id: "myBar3", percentage: 55, name: "Virtual Reality" },
            { id: "myBar4", percentage: 55, name: "Virtual" }
          ]
        };
    }
    componentDidMount(){
        for(let i = 0; i < this.childrefs.length; i++){
            this.childrefs[i].cycle();
        }
    }
    render() {
        const items = this.state.listOfPorgressBars.map(function(item,index){
            return <Bar key={index}name={item.name} percentage={item.percentage} ref={(ref) => this.childrefs[index] = ref}/>;
          }, this);
          
      return (
        <div className="App">
          <h1 style={styles.headerText}>Minor results</h1>
          {items}
        </div>
      );
    }
  }
  
const styles = {
  headerText: {
      alignSelf:'center',
      textAlign:'center'
  },
  progress_container : {
    margin: '10px',
    borderRadius: '20px',
    borderColor: '#000',
    flexDirection: 'column',
    display: 'flex',
  },
  myProgress  : {
    width: '100%',
    backgroundColor: 'ghostwhite',
    borderRadius: '20px'
  },
  title_minor : {
    selfAlign: 'center',
    textAlign: 'center',
  },
  myBar :{
    width: '10%',
    height: '30px',
    backgroundColor: 'darkturquoise',
    textAlign: 'center',
    lineHeight: '30px',
    color: '#fff',
    borderRadius: '20px'
  },
  container_description : {
    flexDirection: 'row',
    display: 'flex',
  },
  button_share : {
    justifyContent: 'end',
    alignSelf: 'center',
    marginLeft: 'auto',
    borderRadius: '10px',
    border:'none',
    backgroundColor:'darkturquoise',
    color:'white',
    padding: '6px'
  }
}