import { Component } from "react";

class CardList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                hello I am the card list compoenent
            </div>
        )
    }
}

export default CardList;