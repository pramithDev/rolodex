import { Component } from "react";

class CardList extends Component {
    render() {
        console.log("Render from CardList");
        const {monsters} = this.props;
       
        return (
            <div>
               {monsters.map( (monster) => (
                <div key={monster.id} className="card-container">
                    <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={`monster ${monster.name}`} />
                    <h2>{monster.name}</h2>
                    <p>{monster.email}</p>
                </div>
               ))}
            </div>
        )
    }
}

export default CardList;