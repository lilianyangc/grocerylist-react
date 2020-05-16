import React,{Component} from 'react';
import './App.css';
import Item from './components/Item/Item';
import InputField from './components/InputField/InputField';
import Validation from './components/Validation/Validation';
import Jumbotron from 'react-bootstrap/Jumbotron'

class App extends Component {
  state = { items:[{name: "milk", pcs: 1, enabled: false}],
            currentItem: {name: '', pcs: '', enabled: false, valid: false},
          }

  addToListHandler = () => {
    let newItem = {...this.state.currentItem}
    newItem.name = this.state.currentItem.name;
    let newCurr = {...this.state.currentItem}
    newCurr.name = '';
    newCurr.valid = false;
    newCurr.pcs= '';
    newItem.pcs = 1;
    this.setState(
      {items:[...this.state.items, newItem],
        currentItem: newCurr}
    )
  }

  deleteItemHandler = (itemIndex) => {
    const items = [...this.state.items];
    items.splice(itemIndex,1);
    this.setState({
      items: items
    });
    
  }

  itemNameHandler = (event) => {

    if(this.state.currentItem.name.length > 0){
      this.setState({
        currentItem: {
          name: event.target.value,
          valid: true
        }
      })
    }else{
      this.setState({
        currentItem: {
          name: event.target.value,
          valid: false
        }
      })
    }
  }

  onEditClickHandler = (itemIndex) => {
    let editedItem = {...this.state.items[itemIndex]};
    editedItem.enabled =  !editedItem.enabled;

    const items = [...this.state.items];
    items[itemIndex] = editedItem;

    this.setState({
      items: items
    })
  }


  onNameEditModeHandler = (event,itemIndex) => {
    let newItemName = {...this.state.items[itemIndex]}
    newItemName.name = event.target.value;

    const items = [...this.state.items];
    items[itemIndex] = newItemName;

    this.setState({
      items: items
    })

  }

  addBtnHandler = (itemIndex) => {
    let newItemName = {...this.state.items[itemIndex]}
    newItemName.pcs = newItemName.pcs + 1

    const items = [...this.state.items];
    items[itemIndex] = newItemName;

    this.setState({
      items: items
    })
  }

  minusBtnHandler = (itemIndex) => {
    let newItemName = {...this.state.items[itemIndex]}
    if(newItemName.pcs > 0){
    newItemName.pcs = newItemName.pcs - 1
    }

    const items = [...this.state.items];
    items[itemIndex] = newItemName;

    this.setState({
      items: items
    })}

    blurEvent = (e) => {
      this.setState({editing: false});
    };

    _handleKeyPress= (e) => {
      if (e.key === 'Enter') {
        this.addToListHandler();
      }
    }

  render() { 

    let items = null;    
    items=(
      <>
        {this.state.items.map((item, index)=>{
          return <Item 
            name={item.name} 
            pcs={item.pcs}
            key={index}
            index={index} 
            deleteBtn= {()=>this.deleteItemHandler(index)}
            onEditClick= {()=>this.onEditClickHandler(index)}
            onNameChange={(event)=>this.onNameEditModeHandler(event,index)}
            addBtn={()=>this.addBtnHandler(index)}
            minusBtn={()=>this.minusBtnHandler(index)}
            enabled={item.enabled} />
        })}
      </>
    )
    
      // console.log(this.state.items)
    return ( 
      <div className="App">
      <br />
      <Jumbotron fluid><h1>Grocery List</h1></Jumbotron>
      <InputField click={()=>this.addToListHandler()} 
        itemHandler={this.itemNameHandler}
        item={this.state.currentItem}
        itemValidity={this.state.currentItem.valid}
        currentItem={this.state.currentItem.name}
        enterPressed={this._handleKeyPress}
       />
      <Validation nameLength={this.state.currentItem.name.length}/>
      <br /><br />
      <table className="Table">
          <tr>
              <th>No.</th>
              <th>Item Name</th>
              <th>Pcs</th>
              <th> </th>
          </tr>  
          {items}
      </table>
      </div>
    );
  }
}
 
export default App;
